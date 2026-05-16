#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import JSZip from 'jszip';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourcePluginsDir = path.join(__dirname, '..', '..', 'main', 'plugins');
const outputPluginsDir = path.join(__dirname, '..', '..', 'dist', 'plugins');

// 解码 Unicode 转义字符串
function decodeUnicode(str) {
  return str.replace(/\\u([0-9a-fA-F]{4})/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)));
}

// 递归添加文件夹内容到 zip
function addFolderToZip(zip, folderPath, zipPath = '') {
  const items = fs.readdirSync(folderPath);
  
  for (const item of items) {
    const fullPath = path.join(folderPath, item);
    const relativePath = zipPath ? `${zipPath}/${item}` : item;
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // 递归处理子文件夹
      addFolderToZip(zip, fullPath, relativePath);
    } else {
      // 读取文件内容
      let fileContent = fs.readFileSync(fullPath);
      
      // 如果是 info.prop 文件，解码 Unicode 转义字符串
      if (item === 'info.prop') {
        let text = fileContent.toString('utf-8');
        text = decodeUnicode(text);
        fileContent = Buffer.from(text, 'utf-8');
      }
      
      zip.file(relativePath, fileContent);
    }
  }
}

async function generatePluginsZip() {
  try {
    if (!fs.existsSync(outputPluginsDir)) {
      fs.mkdirSync(outputPluginsDir, { recursive: true });
    }

    if (!fs.existsSync(sourcePluginsDir)) {
      console.warn(`插件目录不存在: ${sourcePluginsDir}`);
      return;
    }

    // 动态获取插件文件夹列表
    const pluginFolders = fs.readdirSync(sourcePluginsDir).filter(file => {
      return fs.statSync(path.join(sourcePluginsDir, file)).isDirectory();
    });
    
    if (!fs.existsSync(outputPluginsDir)) {
      fs.mkdirSync(outputPluginsDir, { recursive: true });
    }
    
    for (const folder of pluginFolders) {
      const pluginDir = path.join(sourcePluginsDir, folder);
      // 直接存放在 dist/plugins/ 目录下
      const zipPath = path.join(outputPluginsDir, `${folder}.zip`);
      
      const mainJavaPath = path.join(pluginDir, 'main.java');
      const infoPropPath = path.join(pluginDir, 'info.prop');
      
      if (fs.existsSync(mainJavaPath) && fs.existsSync(infoPropPath)) {
        const zip = new JSZip();
        
        // 递归添加插件文件夹内的所有内容
        addFolderToZip(zip, pluginDir);
        
        const content = await zip.generateAsync({ type: 'nodebuffer' });
        fs.writeFileSync(zipPath, content);
        
        console.log(`已生成: ${folder}.zip`);
      } else {
        console.warn(`插件 ${folder} 缺少必要文件 (main.java 或 info.prop)`);
      }
    }
    
    console.log(`\n所有插件 zip 已生成`);
  } catch (error) {
    console.error('生成 zip 失败:', error);
    process.exit(1);
  }
}

generatePluginsZip();