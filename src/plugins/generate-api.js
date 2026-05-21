#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourcePluginsDir = path.join(__dirname, '..', '..', 'main', 'plugins');
const outputApiDir = path.join(__dirname, '..', '..', 'docs', '.vitepress', 'dist', 'api');
const outputFile = path.join(outputApiDir, 'plugins.json');

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

function generateApi() {
  try {
    if (!fs.existsSync(sourcePluginsDir)) {
      console.warn(`插件目录不存在: ${sourcePluginsDir}`);
      return;
    }

    if (!fs.existsSync(outputApiDir)) {
      fs.mkdirSync(outputApiDir, { recursive: true });
    }

    const pluginFolders = fs.readdirSync(sourcePluginsDir).filter(file => {
      return fs.statSync(path.join(sourcePluginsDir, file)).isDirectory();
    });

    console.log('📋 开始生成 API JSON...\n');

    const plugins = [];

    for (const folder of pluginFolders) {
      const pluginDir = path.join(sourcePluginsDir, folder);
      const infoPropPath = path.join(pluginDir, 'info.prop');
      
      let props = { name: folder, author: '未知', version: '1.0.0', desc: '' };
      let readme = '';
      
      if (fs.existsSync(infoPropPath)) {
        const content = fs.readFileSync(infoPropPath, 'utf-8');
        props = { ...props, ...parseInfoProp(content) };
      }
      
      const filesInDir = fs.readdirSync(pluginDir);
      const readmeFile = filesInDir.find(f => f.toLowerCase() === 'readme.md');
      
      if (readmeFile) {
        const readmePath = path.join(pluginDir, readmeFile);
        readme = fs.readFileSync(readmePath, 'utf-8');
      }

      plugins.push({
        author: props.author || '未知',
        name: props.name || folder,
        description: props.desc || '',
        downloadUrl: `https://down.yunpro.club/plugins/${encodeURIComponent(folder)}.zip`,
        version: props.version || '1.0.0',
        readme: readme
      });
    }

    fs.writeFileSync(outputFile, JSON.stringify(plugins, null, 2));
    
    console.log(`✅ 已生成: plugins.json`);
    console.log(`📊 共 ${plugins.length} 个插件\n`);
    console.log('🎉 API JSON 生成完成！');
  } catch (error) {
    console.error('生成 API JSON 失败:', error);
    process.exit(1);
  }
}

generateApi();
