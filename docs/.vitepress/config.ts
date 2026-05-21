import { defineConfig } from 'vitepress';

export default defineConfig({
  base: '/',
  title: 'FkWeChat 插件仓库',
  description: 'FkWeChat 插件仓库',
  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/FkWeChat_Plugin/icon.svg',
      },
    ],
  ],
  lastUpdated: true,
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'FkWeChat',
    lastUpdatedText: '最后更新于',
    outlineTitle: '页面导航',
    returnToTopLabel: '回到顶部',
    darkModeSwitchLabel: '深色主题',
    sidebarMenuLabel: '菜单',
    docFooter: {
      prev: '上一页',
      next: '下一页',
    },
    outline: [2, 3],
    nav: [
      { text: '插件列表', link: '/', activeMatch: '/' },
      { text: '贡献指南', link: '/contributing' },
      { text: '开发文档', link: 'https://decs.yunpro.club' },
      { text: '模块地址', link: 'https://github.com/Xposed-Modules-Repo/me.yun.fkwechat' },
    ],
    sidebar: [
      {
        text: '快速链接',
        items: [
          { text: '首页', link: '/' },
          { text: '贡献指南', link: '/contributing' },
        ],
      },
      {
        text: '插件列表',
        items: [
          { text: 'Cdn捕捉', link: '/plugins/Cdn捕捉' },
          { text: 'Logo生成器', link: '/plugins/Logo生成器' },
          { text: 'QQ点歌', link: '/plugins/QQ点歌' },
          { text: '快捷操作', link: '/plugins/快捷操作' },
          { text: '视频解析', link: '/plugins/视频解析' },
        ],
      },
    ],
    footer: {
      message: 'FkWeChat 插件仓库',
      copyright: `Copyright © ${new Date().getFullYear()} FkWeChat. All rights reserved`,
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索插件',
            buttonAriaLabel: '搜索插件'
          },
          modal: {
            noResultsText: '未找到相关结果',
            resetButtonTitle: '重置搜索',
            footer: {
              selectText: '选择',
              navigateText: '导航',
              closeText: '关闭'
            }
          }
        }
      }
    }
  },
  cleanUrls: true,
});
