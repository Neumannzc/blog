---
title: PageHelper
date: 2024-05-07
icon: dragon
category:
  - 后端
tag:
  - 框架
order: 310
---

PageHelper是一个查询列表时的自动分页工具

<!-- more -->

## 一、引入依赖

```java
<dependency>
    <groupId>com.github.pagehelper</groupId>
    <artifactId>pagehelper-spring-boot-starter</artifactId>
</dependency>
```

## 二、持久层准备

```java
// 分页查询全部订单
// PageHelper框架是自动在sql语句后添加limit关键字实现分页的
// 因为这个特性,我们编写的查询语句,和不分页时是一样的
@Select("select id,user_id,commodity_code,count,money from order_tbl")
List<Order> findAllOrders();
```

## 三、业务层使用

```java
// 分页查询所有订单的方法
// page 是页码
// pageSize 是每页条数
public PageInfo<Order> getAllOrdersByPage(Integer page,Integer pageSize){
    // PageHepler框架实现分页最核心的代码就是在运行要分页的查询语句之前
    // 通过框架给定的方法设置要分页查询的要求(第几页,每页多少条)
    // 参数page和SpringData框架的设计不同,page为1就是第一页,page为2就是第二页
    PageHelper.startPage(page,pageSize);
    // 当上面设置完分页要求后,下面紧随的下一次查询,
    // 就会自动在sql语句末尾添加limit关键字,limit后面的值就是按page,pageSize得出的
    List<Order> list= orderMapper.findAllOrders();
    // list并不是全部的订单的集合,而是按上面分页条件查询出的分页数据
    // 在返回时不直接返回list对象,而是返回PageHelper框架提供的PageInfo类型对象
    // 这个对象可以保存list集合的同时,还能自动计算分页信息

    return new PageInfo<>(list);
}
```

