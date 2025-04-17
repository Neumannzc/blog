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

## 一 .gitignore 文件更新
### 1 删除.ignore文件
```shell
git rm -r --cached .
```
- 注意最后一个点，这个是清除git的缓存，不会删除源文件

### 2 添加更新.ignore文件
```shell
git add .
```
- 注意最后一个点，重新加入git

### 3 提交更新.ignore文件
```shell
git commit -m "update gitignore"
``` 

## 二、查看当前远程地址

```
git remote -v
```

## 三、更改远程地址为新的地址

```
git remote set-url origin 新的远程地址
```

这里的 `origin` 是之前设置的远程仓库的名字，你可以根据实际情况替换成其他名字

## 四、删除某名称的仓库地址

```
git remote rm 仓库名称
```