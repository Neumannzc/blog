---
title: MybatisPlus的使用
date: 2024-05-07
author: Cafe Babe
category:
  - 后端
tag:
  - MP
---

[MyBatis-Plus](https://mybatis.plus/)（简称 MP）是一个 MyBatis 的增强工具，在 MyBatis 的基础上只做增强不做改变，为简化开发、提高效率而生。

<!-- more -->

## 一、引入依赖

```java
<dependency>
    <groupId>com.baomidou</groupId>
    <artifactId>mybatis-plus</artifactId>
    <version>3.5.3.1</version>
</dependency>

```

## 二、改造service mapper

mapper层：继承`BaseMapper<Entity>`

IService层：继承`IService<Entity>`

ServiceImpl层：继承`ServiceImpl<EntityMapper , Entity >`，实现`IEntityService`
