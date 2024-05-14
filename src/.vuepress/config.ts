import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({

  // base: "/",
  base: "/blog/",

  lang: "zh-CN",
  title: "Cafe Babe",
  description: "Cafe Babe的博客",

  theme,
});
