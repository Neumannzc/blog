---
title: jeecgboot（vue3）
date: 2024-05-09
icon: rocket
category:
  - 前端
tag:
  - 开发平台
order: 403
---

用惯了若依，再用这个jeecgboot，突然感觉自己不会写代码了 :clown_face: :clown_face: :clown_face:

<!-- more -->
## 一、字典的使用

### 1.1、查询

``` vue
<j-dict-select-tag v-model="queryParam.releaseStatus" 
					dict-code="approve_status"
					placeholder="请选择" 
/>
```

### 1.2、显示

在java中类的属性上添加注解

```java
	@Dict(dicCode = "machine_inspection_configuration")
	@Excel(name = "是否显示", width = 15)
	@ApiModelProperty(value = "是否显示")
	private java.lang.String isShow;
```

在前端的字段上添加 `_dictText`

```javascript
{
	title:'是否显示',
	align:"center",
	dataIndex: 'isShow_dictText',
},
```

## 四、js中获取字典

```javascript
let data = getDictItemsFromCache(字典编号)
```

## 三、查询条件

```javascript
isorter:{
	column: 'sort',
	order: 'asc'
}
```

## 五、限制上传文件时，只显示图片

```javascript
props: {
    images: {
      type: String,
      default: '.bmp,.jpeg,.jpg,.png,.tiff,.gif,.pcx,.tga,.exif,.fpx,.svg,.psd,.cdr,.pcd,.dxf,.ufo,.eps,.ai,.raw',
      required: false
    },
},

<j-upload v-model='model.cover' :accept='images' fileType='image' />
```

