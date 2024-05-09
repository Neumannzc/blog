---
title: js遍历数组
date: 2024-05-09
icon: rocket
category:
  - 前端
tag:
  - 开发示例
order: 101
---
原来在js中遍历数组的方式有这么多种啊 :rofl: :rofl: :rofl:

<!-- more -->
## 一、`for`

```javascript
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```

## 二、`for...of`

```javascript
let arr = [1, 2, 3, 4, 5];
for (let element of arr) {
  console.log(element);
}
```

## 三、`forEach`

```javascript
let arr = [1, 2, 3, 4, 5];
arr.forEach(function(element) {
  console.log(element);
});
```

## 四、`map`

```javascript
let arr = [1, 2, 3, 4, 5];
let mappedArr = arr.map(function(element) {
  return element * 2;
});
console.log(mappedArr);
```

## 五、`for...in`

```javascript
let arr = [1, 2, 3, 4, 5];
for (let index in arr) {
  console.log(arr[index]);
}
```

