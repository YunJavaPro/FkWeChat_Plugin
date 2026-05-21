#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sourcePluginsDir = path.join(__dirname, '..', '..', 'main', 'plugins');
const outputPluginsDocsDir = path.join(__dirname, '..', 'plugins');
const BASE_PATH = '';
const DOWNLOAD_PATH = 'https://down.yunpro.club';

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

function slugify(text, fallback = '') {
  // 直接使用原名称，不进行拼音转换
  if (!text) return fallback;
  // 移除可能的非法字符，但保留中文
  const cleaned = text
    .trim()
    .replace(/[\\/:*?"<>|]/g, '') // 移除文件名非法字符
    .replace(/\s+/g, '-'); // 空格替换为连字符
  return cleaned || fallback;
}

function generatePluginPage(pluginName, props, readme) {
  const pageName = slugify(props.name || pluginName, pluginName);
  
  let pageContent = `# ${props.name || pluginName}\n\n`;
  
  pageContent += `## 基本信息

<div class="plugin-meta">
  <div class="meta-item">
    <span class="meta-label">作者</span>
    <span class="meta-value">${props.author || '未知作者'}</span>
  </div>
  <div class="meta-item">
    <span class="meta-label">版本</span>
    <span class="meta-value">${props.version || '1.0.0'}</span>
  </div>
  <div class="meta-item">
    <span class="meta-label">描述</span>
    <span class="meta-value">${props.desc || '暂无描述'}</span>
  </div>
</div>

`;
  
  if (readme) {
    pageContent += `## 功能介绍

<div class="plugin-readme">

${readme}

</div>

`;
  }
  
  pageContent += `## 下载

<div class="download-wrapper">
  <a href="${DOWNLOAD_PATH}/plugins/${encodeURIComponent(pluginName)}.zip" class="download-btn" download>
    <div class="download-icon">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3V15M12 15L7 10M12 15L17 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M21 21H3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </div>
    <div class="download-text">
      <div class="download-title">点击下载</div>
      <div class="download-subtitle">${props.name || pluginName}.zip</div>
    </div>
    <div class="download-arrow">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 18L15 12L9 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  </a>
</div>

<div class="back-link">
  <a href="${BASE_PATH}/">← 返回插件列表</a>
</div>

<style>
.plugin-meta,
.plugin-readme {
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  padding: 20px;
  margin: 16px 0;
}
.plugin-meta .meta-item {
  display: flex;
  gap: 12px;
  align-items: center;
  margin-bottom: 12px;
}
.plugin-meta .meta-item:last-child {
  margin-bottom: 0;
}
.plugin-meta .meta-label {
  font-size: 14px;
  font-weight: 600;
  color: var(--vp-c-text-2);
  min-width: 60px;
}
.plugin-meta .meta-value {
  font-size: 15px;
  color: var(--vp-c-text-1);
}
.plugin-readme {
  line-height: 1.8;
}
.download-wrapper {
  margin: 20px 0;
}
.download-btn {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 24px;
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
}
.download-btn:hover {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-bg-soft-up);
  transform: translateY(-2px);
}
.download-icon {
  width: 48px;
  height: 48px;
  background: var(--vp-c-brand-1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.download-icon svg {
  width: 24px;
  height: 24px;
  color: white;
}
.download-text {
  flex: 1;
}
.download-title {
  font-size: 16px;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin-bottom: 4px;
  text-decoration: none;
}
.download-subtitle {
  font-size: 13px;
  color: var(--vp-c-text-2);
}
.download-arrow {
  width: 40px;
  height: 40px;
  background: var(--vp-c-bg-mute);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  color: var(--vp-c-text-2);
}
.download-btn:hover .download-arrow {
  background: var(--vp-c-brand-1);
  color: white;
  transform: translateX(4px);
}
.download-arrow svg {
  width: 20px;
  height: 20px;
}
.back-link {
  margin-top: 24px;
}
.back-link a {
  color: var(--vp-c-text-2);
  text-decoration: none;
  font-size: 14px;
  transition: color 0.2s ease;
}
.back-link a:hover {
  color: var(--vp-c-brand-1);
}
</style>
`;
  
  return pageContent;
}

function generateIndexPage(plugins) {
  let content = `---
layout: home

hero:
  name: FkWeChat 插件仓库
  tagline: 
  actions:
    - theme: alt
      text: 贡献指南
      link: ${BASE_PATH}/contributing
    - theme: alt
      text: 开发文档
      link: https://decs.yunpro.club
    - theme: alt
      text: 模块地址
      link: https://github.com/Xposed-Modules-Repo/me.yun.fkwechat

features:
`;
  
  for (const plugin of plugins) {
    const pageName = slugify(plugin.name, plugin.name);
    content += `  - title: ${plugin.name}\n`;
    content += `    details: ${plugin.desc || '暂无描述'}\n`;
    content += `    link: ${BASE_PATH}/plugins/${pageName}\n`;
    content += `    linkText: 查看详情\n`;
  }
  
  content += `---
`;
  
  return content;
}

async function generatePluginDocs() {
  try {
    if (!fs.existsSync(sourcePluginsDir)) {
      console.warn(`插件目录不存在: ${sourcePluginsDir}`);
      return;
    }

    if (!fs.existsSync(outputPluginsDocsDir)) {
      fs.mkdirSync(outputPluginsDocsDir, { recursive: true });
    }

    const pluginFolders = fs.readdirSync(sourcePluginsDir).filter(file => {
      return fs.statSync(path.join(sourcePluginsDir, file)).isDirectory();
    });
    
    const plugins = [];
    
    console.log('🔍 扫描插件目录...\n');
    
    for (const folder of pluginFolders) {
      const pluginDir = path.join(sourcePluginsDir, folder);
      const infoPropPath = path.join(pluginDir, 'info.prop');
      
      let props = { name: folder };
      let readme = '';
      
      if (fs.existsSync(infoPropPath)) {
        const content = fs.readFileSync(infoPropPath, 'utf-8');
        props = parseInfoProp(content);
      }
      
      const filesInDir = fs.readdirSync(pluginDir);
      const readmeFile = filesInDir.find(f => f.toLowerCase() === 'readme.md');
      
      if (readmeFile) {
        const readmePath = path.join(pluginDir, readmeFile);
        readme = fs.readFileSync(readmePath, 'utf-8');
      }
      
      const pageName = slugify(props.name || folder, folder);
      const pageContent = generatePluginPage(folder, props, readme);
      const pagePath = path.join(outputPluginsDocsDir, `${pageName}.md`);
      
      fs.writeFileSync(pagePath, pageContent);
      
      console.log(`✅ 已生成: ${props.name || folder} -> /plugins/${pageName}.md`);
      
      plugins.push({
        name: props.name || folder,
        desc: props.desc,
        pageName
      });
    }
    
    const indexContent = generateIndexPage(plugins);
    fs.writeFileSync(path.join(__dirname, '..', '..', 'docs', 'index.md'), indexContent);
    console.log('\n✅ 首页已更新\n');
    
    console.log('🎉 所有插件文档生成完成！\n');
    console.log(`📦 共 ${plugins.length} 个插件\n`);
    
    console.log('生成的插件页面：');
    plugins.forEach((p, i) => {
      console.log(`  ${i + 1}. ${p.name} -> /plugins/${p.pageName}`);
    });
    
  } catch (error) {
    console.error('生成插件文档失败:', error);
    process.exit(1);
  }
}

generatePluginDocs();
