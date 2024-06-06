---
title: git
date: 2024-06-06
icon: seedling
category:
  - 其他
tag:
  - git
order: 115
---

最近迁移git，记录下几个实用的git命令

<!-- more -->

## 一、查看当前远程地址

```
git remote -v
```

## 二、更改远程地址为新的地址

```
git remote set-url origin 新的远程地址
```

这里的 `origin` 是之前设置的远程仓库的名字，你可以根据实际情况替换成其他名字

## 三、删除某名称的仓库地址

```
git remote rm 仓库名称
```