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
        prefix: "backend/",
        children: ["README.md"],
      },
      {
        text: "前端",
        prefix: "frontend/",
        children: ["README.md"],
      },
      {
        text: "服务器",
        prefix: "server/",
        children: ["README.md"],
      },
      {
        text: "ubuntu",
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
