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

## 二、选择框之树状列表

具体效果如下

![Snipaste_2024-05-29_17-16-50](/assets/images/Snipaste_2024-05-29_17-16-50.png)

### 2.1、接口返回的数据格式

``` json :no-line-numbers
{
    "code": 200,
    "msg": "操作成功",
    "data": [
        {
            "id": "1795694445836898305",
            "parentId": "0",
            "weight": 0,
            "name": "宪法"
        },
        {
            "id": "1795694508952784897",
            "parentId": "0",
            "weight": 0,
            "name": "刑法",
            "children": [
                {
                    "id": "1795694811106250754",
                    "parentId": "1795694508952784897",
                    "weight": 0,
                    "name": "中华人民共和国反间谍法"
                },
                {
                    "id": "1795694859537879042",
                    "parentId": "1795694508952784897",
                    "weight": 0,
                    "name": "中华人民共和国反有组织犯罪法"
                }
            ]
        }
    ]
}
```

### 2.2、接口的实现

controller层

```java
@GetMapping("/biz/xxx/tree")
public CommonResult<List<Tree<String>>> tree(PageParam param){
    return CommonResult.data(xxxService.tree(param));
}
```

serviceImpl层（使用hutool构建树）

``` java
@Override
public List<Tree<String>> tree(PageParam param) {
	List<Entity> list = this.list();

	List<TreeNode<String>> nodeList = CollUtil.newArrayList();

	list.forEach(item -> {
		TreeNode<String> node = new TreeNode<>(item.getId(), item.getParentId(), item.getLawName(), 0)
                    .setExtra(JSONUtil.parseObj(item));
		nodeList.add(node);
	});

	return TreeUtil.build(nodeList, "0");
}
```

### 2.3、页面实现

调用接口获取数据

``` js
// 定义树元素
const treeData = ref([])
// 默认展开的节点(顶级)
const defaultExpandedKeys = ref([0])
const getTree = () => {
    xxxApi.getTree()
    .then((data) => {
        treeData.value = [
            {
                id: 0,
                parentId: '0',
                name: '顶级',
                children: data
            }
        ]
    })
}
```

打开抽屉时，调用接口

```js
// 打开抽屉
const onOpen = (record) => {
    
    visible.value = true
    if (record) {
        let recordData = cloneDeep(record)
        formData.value = Object.assign({}, recordData)
    }
    getTree()
}
```

在form中显示

``` vue
<a-form ref="formRef" :model="formData" :rules="formRules" layout="vertical">
    <a-form-item label="父级：" name="parentId">
        <a-tree-select
            v-model:value="formData.parentId"
            v-model:treeExpandedKeys="defaultExpandedKeys"
            style="width: 100%"
            :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
            placeholder="请选择父级"
            allow-clear
            :tree-data="treeData"
            :field-names="{
                children: 'children',
                label: 'name',
                value: 'id'
            }"
            selectable="false"
            treeLine
        />
    </a-form-item>
    ...
</a-form>
```
## 三、列表之树形列表

效果如下

![Snipaste_2024-05-29_17-19-59](/assets/images/Snipaste_2024-05-29_17-19-59.png)

[官网Table](https://antdv.com/components/table-cn#components-table-demo-colspan-rowspan) 在官网中描述如下：

表格支持树形数据的展示，当数据中有 `children` 字段时会自动展示为树形表格，如果不需要或配置为其他字段可以用 `childrenColumnName` 进行配置。 可以通过设置 `indentSize` 以控制每一层的缩进宽度。

[小诺](https://xiaonuo.vip/doc?catalogueId=1574674577108783105&menuId=1577382349650898945&lineIndex=1) 对其进行了二次封装的属性，其描述如下：

属性 | 说明 | 类型 | 默认值
-- | -- | -- | --
showPagination |	显示分页选择器，可传 ‘auto’ | Boolean	| [String, Boolean]	|‘auto’

简单来说，只需要
- 数据 `data` 中包含 `children`
- 把分页选择器的值设置为 `false`

其中页面端的代码如下

``` vue{8}
<s-table
    ref="tableRef"
    :columns="columns"
    :data="loadData"
    :alert="options.alert.show"
    bordered
    :row-key="(record) => record.id"
    :show-pagination="false"
    :tool-config="toolConfig"
    :row-selection="options.rowSelection"
>
```

## 四、按创建日期排序

``` js
parameter.sortField = 'createTime'
parameter.sortOrder = 'descend'
```
## 五、文字折叠

![Snipaste_2024-05-29_19-50-22](/assets/images/Snipaste_2024-05-29_19-50-22.png)

方法一：根据列宽，自动填充满，并且鼠标悬浮时，不显示提示

```js {5}
const columns = [
    {
        title: '交流内容',
        dataIndex: 'commContent',
        ellipsis: true
    },
    ...
]
```

方法二：可以自定义显示的字符数，鼠标悬浮时是否显示

```vue {13-19}
<template>
	<a-card :bordered="false">
		<s-table
			ref="tableRef"
			:columns="columns"
			:data="loadData"
			:alert="options.alert.show"
			bordered
			:row-key="(record) => record.id"
			:tool-config="toolConfig"
			:row-selection="options.rowSelection"
		>
			<template #bodyCell="{ column, record }">
				<template v-if="column.dataIndex === 'commContent'">
					<ellipsis :length="10" tooltip>
						{{ record.commContent }}
					</ellipsis>
				</template>
			</template>
		</s-table>
	</a-card>
	<Form ref="formRef" @successful="tableRef.refresh()" />
</template>
```

`ellipsis` 的内置属性有

参数 | 说明 | 类型 | 默认值
-- | -- | -- | --
tooltip	| 移动到文本展示完整内容的提示	| boolean	| -
length	| 在按照长度截取下的文本最大字符数，超过则截取省略	| number	| -