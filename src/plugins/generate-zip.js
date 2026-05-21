#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import JSZip from 'jszip';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourcePluginsDir = path.join(__dirname, '..', '..', 'main', 'plugins');
const outputPluginsDir = path.join(__dirname, '..', '..', 'docs', '.vitepress', 'dist', 'plugins');

function decodeUnicode(str) {
  return str.replace(/\\u([0-9a-fA-F]{4})/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)));
}

function parseInfoProp(content) {
  const props = {};
  const lines = content.split('\n');
  
  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed && !trimmed.startsWith('#')) {
      const equalsIndex = trimmed.indexOf('=');
      if (equalsIndex !== -1) {
        const key = trimmed.substring(0, equalsIndex).trim();
        const value = decodeUnicode(trimmed.substring(equalsIndex + 1).trim());
        props[key] = value;
      }
    }
  }
  
  return props;
}

async function generateZipFiles() {
  try {
    if (!fs.existsSync(sourcePluginsDir)) {
      console.warn(`插件目录不存在: ${sourcePluginsDir}`);
      return;
    }

    if (!fs.existsSync(outputPluginsDir)) {
      fs.mkdirSync(outputPluginsDir, { recursive: true });
    }

    const pluginFolders = fs.readdirSync(sourcePluginsDir).filter(file => {
      return fs.statSync(path.join(sourcePluginsDir, file)).isDirectory();
    });

    console.log('📦 开始生成插件 ZIP 文件...\n');

    for (const folder of pluginFolders) {
      const pluginDir = path.join(sourcePluginsDir, folder);
      const infoPropPath = path.join(pluginDir, 'info.prop');
      
      let pluginName = folder;
      if (fs.existsSync(infoPropPath)) {
        const content = fs.readFileSync(infoPropPath, 'utf-8');
        const props = parseInfoProp(content);
        pluginName = props.name || folder;
      }

      const zip = new JSZip();
      
      function addFolderToZip(folderPath, zipFolder) {
        const items = fs.readdirSync(folderPath);
        for (const item of items) {
          const itemPath = path.join(folderPath, item);
          const stat = fs.statSync(itemPath);
          if (stat.isDirectory()) {
            const subFolder = zipFolder.folder(item);
            addFolderToZip(itemPath, subFolder);
          } else {
            const content = fs.readFileSync(itemPath);
            zipFolder.file(item, content);
          }
        }
      }
      
      addFolderToZip(pluginDir, zip);
      
      const zipPath = path.join(outputPluginsDir, `${folder}.zip`);
      const content = await zip.generateAsync({ type: 'nodebuffer' });
      fs.writeFileSync(zipPath, content);
      
      console.log(`✅ 已生成: ${pluginName}.zip`);
    }

    console.log('\n🎉 所有 ZIP 文件生成完成！');
  } catch (error) {
    console.error('生成 ZIP 文件失败:', error);
    process.exit(1);
  }
}

generateZipFiles();
