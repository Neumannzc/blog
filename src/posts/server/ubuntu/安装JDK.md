---
title: 安装JDK
date: 2024-05-14
icon: leaf
category:
  - 软件安装
tag:
  - java软件安装
star: true
order: 100
---

之前对node的管理使用了nvm，jdk一直使用的是1.8，也没想过管理jdk

现在需要安装多个jdk了，想要找一个管理jdk版本的工具

结果。。。

系统有自带的版本管理工具

<!-- more -->

## 一、下载并安装JDK

```
#更新库
apt update

#查看jdk版本
apt search openjdk

#安装jdk
apt install openjdk-8-jdk
apt install openjdk-17-jdk
```

## 二、查看已经安装的JDK版本

```
#查看已存在安装版本的jdk
update-alternatives --list java

```

## 三、选择已经安装的JDK版本

```
#选择要使用的版本
update-alternatives --config java
```

## 四、查看当前java版本

```
java -version
```