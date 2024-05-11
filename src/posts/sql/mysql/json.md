---
title: json
date: 2024-05-10
icon: snowman
category:
  - mysql
tag:
  - 数据库语法
order: 102
---

json存储，可以减少程序猿的开发时的工作量

至于后期维护嘛，都删库跑路了，爱谁谁

<!-- more -->

:hourglass: 先来段吐槽吧

刚开始后端开发的时候，看到数据库中存json，就想说这个哪个 :pig: 的 :shit: 设计，自己设计的数据库 & 自己定义的数据格式，还存在json中

后来开发时间长了，见到的这种情况多了，也就懒得吐槽了 :upside_down_face:

直到有一次，客户改需求后，产生了大量的数据，要是在数据库中加字段的话，改动特别大，要不逝逝json存数据

再后来，json用多了，哎妈呀，我也是 :pig: ， :shit: 真香

## 一、对json中的某字段模糊查询

```sql
# 字段address存储的值是json串
# 如 {"orderId":"75981f2a46564bc9b743ad0e55b0990e","name":"旺仔","phone":"13295488888","area":"北京市/北京市/东城区","address":"11"}
# 需要 根据手机号进行模糊查询
# 方式一
SELECT * FROM your_table WHERE JSON_EXTRACT(address, '$.phone') LIKE '%15065%';

# 方式二
SELECT * FROM your_table WHERE JSON_SEARCH(address, 'one', '%15065%') IS NOT NULL;
```

注：`JSON_SEARCH、JSON_CONTAINS、JSON_EXTRACT`


### 1.1、`JSON_SEARCH`
函数用于在 JSON 文档中搜索指定的值，并返回该值的 JSON 路径。

语法如下：

```sql
JSON_SEARCH(json_doc, one_or_all, search_str[, escape_char[, path_mode]])
```
参数 | 说明
-- | --
`json_doc` |要搜索的 JSON 文档
`one_or_all` |指定搜索的模式，可以是 “one”（默认）或 “all”。“one” 表示找到第一个匹配的值，“all” 表示找到所有匹配的值
`search_str` |要搜索的值
`escape_char` |（可选）用于转义搜索字符串中的特殊字符的转义字符
`path_mode` |（可选）指定搜索模式，可以是 “literal”（默认） 或 “recursive”

### 1.2、`JSON_CONTAINS` 

函数用于判断 JSON 文档是否包含指定的值或键。

语法如下：

```sql
JSON_CONTAINS(json_doc, val[, path])
```

参数 | 说明
-- | --
`json_doc`| 要检查的 JSON 文档
`val`| 要检查是否存在的值或键
`path`| （可选）指定路径，用于限定搜索的范围

### 1.3、`JSON_EXTRACT`

函数用于从 JSON 文档中提取指定路径的值。

语法如下：

```sql
JSON_EXTRACT(json_doc, path[, path]...)
```

参数 | 说明
-- | --
`json_doc` | 要提取值的 JSON 文档
`path` | 一个或多个指定路径的参数，用逗号分隔

