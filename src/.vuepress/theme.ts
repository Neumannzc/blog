import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";
import { MR_HOPE_AVATAR } from "./logo.js";

export default hopeTheme({
  // 是否在导航栏内显示仓库链接，默认为 `true`
  hostname: "https://github.com/Neumannzc/blog/",

  // 默认为 GitHub. 同时也可以是一个完整的 URL
  repo: "Neumannzc/blog",

  author: {
    name: "Cafe Babe",
    url: "https://www.baidu.com",
  },

  iconAssets: "fontawesome-with-brands",

  logo: "/assets/site/body.png",

  // 导航栏
  navbar,

  // 侧边栏
  sidebar,

  // 页脚
  footer: "世界很残酷，你要活得有温度",
  displayFooter: true,

  // 博客相关
  blog: {
    description: "知之 - 行之 - 得之",
    intro: "/intro.html",
    avatar: "/assets/site/Squirrel.jpg",
    medias: {
      Gitee: "https://gitee.com/z517890027",
      GitHub: "https://github.com/Neumannzc",
    },
  },

  // 深色主题和浅色主题切换
  darkmode: "toggle",

  // 全屏按钮
  fullscreen: true,

  // 是否显示打印按钮
  print: false,

  docsDir: "src",

  // 多语言配置
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  plugins: {
    blog: true,

    components: {
      components: ["Badge", "VPCard"],
    },
  },
});
