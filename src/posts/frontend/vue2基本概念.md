---
title: vue2基本概念
date: 2024-05-09
icon: rocket
category:
  - 前端
tag:
  - 基础概念
order: 200
---
vue2中那必须知道的概念 :upside_down_face: :upside_down_face: :upside_down_face:

<!-- more -->

## 一、`:` 是 `v-bind` 的简写

### 1.1、概念

`v-bind:src` 可以简写成  `:src`

`v-bind` 用于动态地绑定元素的属性。它可以将 Vue 实例中的数据绑定到元素的属性上，实现动态更新

### 1.2、属性是否添加 `:`

*   当属性的值是`boolean`、`number`时，需要加 `:`，其余情况不用加，因为不使用属性绑定，而是直接写成 `plain=“true”`，那么 `plain` 属性的值将会被解析为字符串 `“true”`，而不是布尔值 `true`。
*   当值是`boolean`时，`Attributes`的写法（以按钮的`plain`为例）

```vue
方法一（这种写法，表示给plain赋值为 true ）
<el-button plain></el-button>

方法二（这种写法，可以给plain赋值为 false 或 true ）
<el-button :plain="true"></el-button>
```

## 二、`@` 是 `v-on` 的简写

### 2.1、概念
`v-on:click` 可以简写成 `@click`

`v-on` 用于绑定监听事件，例如点击事件、键盘事件等。它可以监听并响应特定事件的触发。

## 三、计算属性的使用

计算属性 `computed` ，作用：封装了一段对于 **数据** 的处理，求得一个 **结果**

js中使用计算属性： `this.计算属性`

模板中使用计算属性：`{{计算属性}}`


## 四、方法的使用

方法 `methods` ，作用：给Vue实例提供一个 **方法** ，调用以 **处理业务逻辑**

js中调用：`this.方法名()`

模板中调用 `{{方法名()}}` 或者 `@事件名="方法名"`

