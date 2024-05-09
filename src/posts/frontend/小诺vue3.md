---
title: 小诺（vue3）
date: 2024-05-09
icon: rocket
category:
  - 前端
tag:
  - 开发平台
order: 401
---
基于vue3的小诺，值得一逝 :ghost: :ghost: :ghost:

<!-- more -->

## 一、字典的使用

### 1.1、字典的下拉选择

```vue
<a-form-item label="职位分类：" name="category">
	<a-select
		v-model:value="formData.category"
		:options="positionCategoryOptions"
		style="width: 100%"
		placeholder="请选择职位分类"
	>
	</a-select>
</a-form-item>

import tool from '@/utils/tool'

const positionCategoryOptions = tool.dictTypeList('POSITION_CATEGORY').map((item) => {
		return {
			value: item['dictValue'],
			label: item['name']
		}
})
```

### 1.2、列表翻译

```vue
<template #bodyCell="{ column, record }">
	<template v-if="column.dataIndex === 'category'">
		{{ $TOOL.dictTypeData('JOB_CATEGORY', record.category) }}
	</template>
</template>
```

