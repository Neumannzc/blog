import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    {
      text: "项目",
      icon: "mug-hot",
      prefix: "posts/project",
      collapsible: true,
      children: "structure"
    },
    {
      text: "后端",
      icon: "mug-hot",
      prefix: "posts/backend",
      collapsible: true,
      children: "structure"
    },
    {
      text: "数据库",
      icon: "database",
      prefix: "posts/sql",
      collapsible: true,
      children: "structure"
    },
    {
      text: "前端",
      icon: "desktop",
      collapsible: true,
      prefix: "posts/frontend",
      children: "structure"
    },
    {
      text: "服务器",
      icon: "earth-americas",
      collapsible: true,
      prefix: "posts/server",
      children: "structure"
    },
    {
      text: "更多",
      icon: "infinity",
      prefix: "posts/other",
      collapsible: true,
      children: "structure"
    },    
    "intro",
  ],
});
