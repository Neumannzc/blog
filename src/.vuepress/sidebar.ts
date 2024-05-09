import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "后端",
      icon: "book",
      prefix: "posts/backend",
      collapsible: true,
      children: "structure"
    },
    {
      text: "前端",
      icon: "book",
      collapsible: true,
      prefix: "posts/frontend",
      children: "structure"
    },
    {
      text: "服务器",
      icon: "book",
      collapsible: true,
      prefix: "posts/server",
      children: "structure"
    },
    {
      text: "ubuntu使用",
      icon: "book",
      prefix: "posts/ubuntu",
      collapsible: true,
      children: "structure"
    },
    
    "intro",
  ],
});
