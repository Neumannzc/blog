---
title: json-server
date: 2024-05-10
icon: rocket
category:
  - 前端
tag:
  - 开发示例
order: 105
---

JSON-Server 是一个 Node 模块，运行 Express 服务器，你可以指定一个 json 文件作为 api 的数据源。 :open_mouth: :open_mouth: :open_mouth:

<!-- more -->

## 一、安装json-server

`npm install -g json-server`

## 二、启动 json-server

json-server可以直接把一个json文件托管成一个具备全RESTful风格的API，并支持跨域、jsonp、路由订制、数据快照保存等功能的 web 服务器

db.json文件的内容：
```
{
    "news": [
        {
            "id": 1,
            "title": "新闻1一"
        },
        {
            "id": 3,
            "title": "新闻1一"
        },
        {
            "id": 2,
            "title": "新闻2一"
        }
    ]
}
```

把db.json文件托管成一个 web 服务

```
json-server --watch --port 3000 db.json
```

输出类似以下内容，说明启动成功

```
PS E:\L02_vuejs\giteeCodeHtml51908> json-server --watch --port 3000 .\news.json

\{^_^}/ hi!

Loading .\news.json
Done

Resources
http://localhost:3000/news

Home
http://localhost:3000

Type s + enter at any time to create a snapshot of the database
Watching...
```

此时，你可以打开你的浏览器，然后输入 [http://localhost:3000](http://localhost:3000)进行访问

## 三、过滤查询

### 3.1、基础查询
```
GET /posts?title=json-server&author=typicode
GET /posts?id=1&id=2
```

### 3.2、根据对象的属性查询

用 `.` 访问更深层的属性

```
GET /comments?author.name=typicode
```

### 3.3、条件查询

可以用的拼接条件为：
参数 | 作用 
-- | -- 
_gte | 大于等于
_lte | 小于等于
_ne | 不等于
_like | 包含

```
GET /posts?id_ne=1
GET /posts?id_lte=100
GET /posts?title_like=server
```

## 四、分页查询

参数 | 作用 
-- | -- 
 _page | 第几页
 _limit | 一页多少条

```
GET /posts?_page=1
GET /posts?_page=1&_limit=20
```

- 默认一页10条
- 后台会返回总条数，总条数的数据在响应头:X-Total-Count中

## 五、排序

参数 | 作用 
-- | -- 
 _sort | 设定排序的字段
 _order | 设定排序的方式（默认升序）

### 5.1、单个字段排序
```
GET /posts?_sort=views&_order=asc
GET /posts/1/comments?_sort=votes&_order=asc
```

### 5.2、多个字段排序

```
GET /posts?_sort=user,views&_order=desc,asc
```

## 六、任意切片数据

```
GET /posts?_start=20&_end=30
GET /posts/1/comments?_start=20&_end=30
GET /posts/1/comments?_start=20&_limit=10
```

## 七、全文检索

参数 | 作用 
-- | -- 
q | 进行全文检索

```
GET /posts?q=internet
```