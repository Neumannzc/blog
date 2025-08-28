---
title: 安装JAVA开发环境
date: 2024-05-07
icon: leaf
category:
  - 软件安装
tag:
  - java软件安装
star: true
order: 105
---

- 该篇讲解了安装java开发环境，包括 `git`、`redis`、`mysql 5.7`、`maven`

- 关于 `jdk` 的安装，是单独的一篇

<!-- more -->

## 一、安装git

```
# 安装git
sudo apt install gedit
sudo apt install git

# 配置全局变量
git config --global user.name "hello"
git config --global user.email hello@126.com
git config --list
```

## 二、安装redis

```
sudo apt install redis
```

## 三、安装mysql

```
# 安装
sudo apt install mysql-server

# 查看是否启动
systemctl status mysql

# 修改密码
sudo mysql -uroot
alter user 'root'@'localhost' identified with mysql_native_password by '这里是密码';
flush privileges;
```
