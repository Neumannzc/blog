---
title: 若依(vue2)
date: 2024-05-09
icon: rocket
category:
  - 前端
tag:
  - 开发平台
order: 400
---

都4202年了，不会还有人不知道若依vue2的用法吧 :cold_face: :cold_face: :cold_face:

<!-- more -->

## 一、字典的使用

### 1.1、引入所需要的字典
`dicts: ['ln_content_charge'],`
	
### 1.2、新增、修改的选择
```vue
<el-form-item label="文件类型" prop="publishType">
	<el-select v-model="form.publishType" placeholder="请选择文件类型">
	<el-option
		v-for="dict in dict.type.ln_file_type"
		:key="dict.value"
		:label="dict.label"
		:value="dict.value"
	/>
	</el-select>
</el-form-item>
```

### 1.3、显示

```vue
<el-table-column label="文件类型" align="center" prop="publishType">
	<template slot-scope="scope">
		<dict-tag :options="dict.type.ln_file_type" :value="scope.row.publishType"/>
	</template>
</el-table-column>
```
	  
### 1.4、搜索
```vue
<el-form-item label="状态" prop="status">
	<el-select
		v-model="queryParams.status"
		placeholder="用户状态"
		clearable
		style="width: 240px"
	>
		<el-option
		v-for="dict in dict.type.sys_normal_disable"
		:key="dict.value"
		:label="dict.label"
		:value="dict.value"
		/>
	</el-select>
</el-form-item>
```

## 二、显示富文本内容

```vue
<el-table-column label="内容" align="center" prop="content">
	<template slot-scope="scope">
		<div v-html="scope.row.content"/>
	</template>
</el-table-column>
```

## 三、更多按钮
vue部分代码
```vue
<el-dropdown size="mini" @command="(command) => handleCommand(command, scope.row)">
	<el-button size="mini" type="text" icon="el-icon-d-arrow-right">更多</el-button>
	<el-dropdown-menu slot="dropdown">
		<el-dropdown-item command="handleDefaultMethod" icon="el-icon-key" >默认方法</el-dropdown-item>
	</el-dropdown-menu>
</el-dropdown>
```

javascript部分代码
```javascript
// 更多操作触发
handleCommand(command, row) {
  switch (command) {
	case 'handleResetPwd':
	  this.handleMethodOne(row)
	  break
	case 'handleAuthRole':
	  this.handleMethodTwo(row)
	  break
	case 'handleBalance':
	  this.handleMethodThree(row)
	  break
	default:
	  break
  }
},
```

## 四、输入后回车查询

```vue
@keyup.enter.native="handleQuery"
```