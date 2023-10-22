import { defineConfig } from 'vitepress'
// import { pagefindPlugin, chineseSearchOptimize } from 'vitepress-plugin-pagefind'
import implicitFigures from 'markdown-it-implicit-figures'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Magic for Zotero",
  description: "一个神奇的Zotero插件",
  srcDir: "./src",
  outDir: "../build",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/icon.png",
    siteTitle: "Magic for Zotero",
    nav: [
      { text: '首页', link: '/' },
      { text: '使用文档', link: 'https://wiki.magiczotero.top/article/magic' }
    ],

    sidebar: [
      {
        text: '简介', link: '/wiki/introduction'
      },
      {
        text: "基础使用",
        items: [
            { text: "准备事项", link: '/wiki/quickStart/preparations' },
            { text: "购买与激活", link: '/wiki/quickStart/buy_active' },
            { text: "全文翻译", link: '/wiki/quickStart/fulltext_translate' },
            { text: "文献总结", link: '/wiki/quickStart/chatpdf' }
        ]
      },
      {
        text: "高级使用",
        items: [
            
        ]
      },
      {
        text: "其他资源",
        items: [
            { text: "付费GPT接口", link: "/wiki/resources/paid_gpt" }
        ]
      },
      {
        text: "常见问题",
        items: [
            { text: "插件激活", link: '/wiki/faq/activate' },
            { text: "全文翻译", link: '/wiki/faq/fulltext_translate_faq' },
            { text: "文献总结", link: '/wiki/faq/chatpdf' }
        ]
      }
    ],

    socialLinks: [
      { icon: {svg: '<svg fill="#000000" width="800px" height="800px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><path d="M11.984 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.016 0zm6.09 5.333c.328 0 .593.266.592.593v1.482a.594.594 0 0 1-.593.592H9.777c-.982 0-1.778.796-1.778 1.778v5.63c0 .327.266.592.593.592h5.63c.982 0 1.778-.796 1.778-1.778v-.296a.593.593 0 0 0-.592-.593h-4.15a.592.592 0 0 1-.592-.592v-1.482a.593.593 0 0 1 .593-.592h6.815c.327 0 .593.265.593.592v3.408a4 4 0 0 1-4 4H5.926a.593.593 0 0 1-.593-.593V9.778a4.444 4.444 0 0 1 4.445-4.444h8.296z"/></svg>'}, 
      link: 'https://gitee.com/zotero-chinese/zotero-magic-for-user' }
    ],

    footer: {
        message: '<a href="https://beian.miit.gov.cn/" target="_blank">浙ICP备2023027515号</a>',
        copyright: "Copyright © 2023 Magic for Zotero"
    }

  },
  lastUpdated: {
    text: 'Updated at',
    formatOptions: {
      dateStyle: 'full',
      timeStyle: 'medium'
    }
  },
//   vite:{
//     plugins:[pagefindPlugin({
//         btnPlaceholder: '搜索',
//         placeholder: '暂未开放',
//         emptyText: '空空如也',
//          heading: '共: {{searchResult}} 条结果',
//         customSearchQuery: chineseSearchOptimize,
//         indexingCommand: "npx pagefind --site build --exclude-selectors \"div.aside, a.header-anchor\""
//       })],
//   },
  markdown: {
    config: (md) => {
      md.use(implicitFigures, {
        figcaption: true,
        copyAttrs: '^class$'
      })
    }
  }
})
