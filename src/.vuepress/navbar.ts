import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: "文章",
    icon: "book",
    prefix: "/posts/",
    children: [
      {
        text: "后端",
        icon: "pen-to-square",
        prefix: "backend/",
        children: ["README.md"],
      },
      {
        text: "前端",
        icon: "pen-to-square",
        prefix: "frontend/",
        children: ["README.md"],
      },
      {
        text: "服务器",
        icon: "pen-to-square",
        prefix: "server/",
        children: ["README.md"],
      },
      {
        text: "ubuntu",
        icon: "pen-to-square",
        prefix: "ubuntu/",
        children: ["README.md"],
      },
    ]
  },
  { 
    text: "官网链接", 
    icon: "paperclip", 
    link: "/posts/other/官网链接" 
},
]);
