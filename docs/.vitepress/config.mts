import { defineConfig } from 'vitepress'
import { pagefindPlugin, chineseSearchOptimize } from 'vitepress-plugin-pagefind'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Magic for Zotero",
  description: "一个神奇的Zotero插件",
  srcDir: "./src",
  outDir: "../public",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "../../assets/icon.png",
    siteTitle: "Magic for Zotero",
    nav: [
      { text: '首页', link: '/' },
      { text: '使用文档', link: '/wiki/' }
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
            { text: ""}
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
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
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
  vite:{
    plugins:[pagefindPlugin({
        customSearchQuery: chineseSearchOptimize,
        indexingCommand: "npx pagefind --site public --exclude-selectors \"div.aside, a.header-anchor\""
      })],
  }
})
