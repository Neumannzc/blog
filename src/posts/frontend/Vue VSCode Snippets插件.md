---
title: Vue VSCode Snippets插件
date: 2024-05-09
icon: rocket
category:
  - 前端
tag:
  - ide插件
order: 500
---

我：:cupid: [VVS](https://github.com/sdras/vue-vscode-snippets)，听我说，谢谢你，因为有你，我的吃灰插件又多了一个
 
VVS：:joy_cat: 是我不好用吗，你说出来，我优化

我：额，那倒不是，主要是 :pleading_face: :pleading_face: :pleading_face: 我不会用

<!-- more -->
## 一、Vue

| 片段                 | 目的                              |
| :----------------- | :------------------------------ |
| `vbase`            | 具有 SCSS 的单文件组件库                 |
| `vbase-3`          | 使用 SCSS 的单个文件组件组合 API           |
| `vbase-3-setup`    | 使用 SCSS 的单个文件组件设置组合 API         |
| `vbase-3-reactive` | 具有 Reactive 和 SCSS 的单文件组件组合 API |
| `vbase-css`        | 带有 CSS 的单个文件组件库                 |
| `vbase-pcss`       | 使用 PostCSS 的单文件组件库              |
| `vbase-styl`       | 带 Stylus 的单个文件组件基础              |
| `vbase-ts`         | 使用 Typescript 的单个文件组件库          |
| `vbase-ts-class`   | 具有 Typescript 类格式的单个文件组件库       |
| `vbase-3-ts`       | 使用 Typescript 的单个文件组件组合 API     |
| `vbase-3-ts-setup` | 单文件组件设置 使用 Typescript 的合成 API   |
| `vbase-ns`         | 没有样式的单个文件组件                     |
| `vbase-sass`       | 使用 SASS 的单文件组件库                 |
| `vbase-less`       | 具有 LESS 的单个文件组件库                |

## 二、模板

| 片段                | 目的                   |
| :---------------- | :------------------- |
| `vfor`            | V-For 指令             |
| `vmodel`          | 语义 v-model 指令        |
| `vmodel-num`      | 语义 V 模型编号指令          |
| `von`             | 带参数的 V-On Click 处理程序 |
| `vslot-named`     | 命名插槽                 |
| `vel-props`       | 带道具的组件元素             |
| `vsrc`            | 图像 src 绑定            |
| `vstyle`          | 内联样式绑定               |
| `vstyle-obj`      | 与对象的内联样式绑定           |
| `vclass`          | 类绑定                  |
| `vclass-obj`      | 与对象的类绑定              |
| `vclass-obj-mult` | 多个条件类绑定              |
| `vanim`           | 带有 JS 钩子的过渡组件        |
| `vnuxtl`          | Nuxt 路由链路            |
| `vroutename`      | router-link 命名路由     |
| `vroutenameparam` | 路由器链接以参数命名           |
| `vroutepath`      | router-link 路径路由链路   |
| `vemit-child`     | 从子组件发出事件             |
| `vemit-parent`    | 向父组件发出事件             |

## 三、脚本

| 片段                | 目的                                  |
| :---------------- | :---------------------------------- |
| `vdata`           | 组件数据即函数                             |
| `vmethod`         | Vue 方法                              |
| `vcomputed`       | Vue 计算属性                            |
| `vwatcher`        | 具有新旧值参数的 Vue 观察器                    |
| `vbeforecreate`   | before创建生命周期方法                      |
| `vcreated`        | 创建的生命周期方法                           |
| `vbeforemount`    | beforeMount 生命周期方法                  |
| `vmounted`        | vmounted 生命周期方法                     |
| `vbeforeupdate`   | beforeUpdate 生命周期方法                 |
| `vupdated`        | 更新的生命周期方法                           |
| `vbeforedestroy`  | before销毁生命周期方法                      |
| `vdestroyed`      | 销毁生命周期方法                            |
| `vprops`          | 具有类型和默认值的道具                         |
| `vimport`         | 将一个组件导入到另一个组件中                      |
| `vimport-dynamic` | 导入一个应该由 webpack 延迟加载的组件             |
| `vcomponents`     | 在 export 语句中将一个组件导入到另一个组件中          |
| `vimport-export`  | 将一个组件导入到另一个组件中，并在 export 语句中使用它     |
| `vmapstate`       | 将 mapState 从 Vuex 导入到 vue 组件组件中     |
| `vmapgetters`     | 将 mapGetters 从 Vuex 导入到 vue 组件组件中   |
| `vmapmutations`   | 将 mapMutations 从 Vuex 导入到 vue 组件组件中 |
| `vmapactions`     | 将 mapActions 从 Vuex 导入到 vue 组件组件中   |
| `vfilter`         | Vue 过滤器                             |
| `vmixin`          | 创建一个 Vue Mixin                      |
| `vmixin-use`      | 将 mixin 引入要使用的组件中                   |
| `vc-direct`       | Vue 创建一个自定义指令                       |
| `vimport-lib`     | 导入库                                 |
| `vimport-gsap`    | 导入 GreenSock                        |
| `vanimhook-js`    | 在方法中使用 Transition 组件 JS 钩子          |
| `vcommit`         | 在 mutation 方法中提交到 Vuex 存储           |
| `vdispatch`       | 在操作方法中调度到 Vuex 存储                   |
| `vtest`           | 一个简单的单元测试组件                         |

## 四、Vue 组合 API

| 片段                  | 目的                                       |
| :------------------ | :--------------------------------------- |
| `v3reactive`        | Vue Composition API - 反应式                |
| `v3reactive-setup`  | Vue Composition API - 与设置样板反应式           |
| `v3computed`        | Vue Composition API - 计算                 |
| `v3watch`           | Vue Composition API - 观察者单源              |
| `v3watch-array`     | Vue Composition API - 以数组形式观看            |
| `v3watcheffect`     | Vue Composition API - watchEffect        |
| `v3ref`             | Vue 参考文献                                 |
| `v3onmounted`       | 生命周期挂钩 - onMounted                       |
| `v3onbeforemount`   | 生命周期挂钩 - onBeforeMount                   |
| `v3onbeforeupdate`  | 生命周期挂钩 - onBeforeUpdate                  |
| `v3onupdated`       | 生命周期挂钩 - onUpdated                       |
| `v3onerrorcaptured` | 生命周期挂钩 - onErrorCaptured                 |
| `v3onunmounted`     | Lifecycle hook - （已销毁） onUnmounted       |
| `v3onbeforeunmount` | 生命周期挂钩 - （beforeDestroy） onBeforeUnmount |
| `v3useinoptions`    | 在选项 API 中使用组合 API                        |

## 五、Vuex

| 片段              | 目的                      |
| :-------------- | :---------------------- |
| `vstore`        | Vuex store.js 的基础       |
| `vgetter`       | Vuex 吸气机                |
| `vmutation`     | Vuex 突变                 |
| `vaction`       | Vuex 操作                 |
| `vmodule`       | Vuex 模块                 |
| `vstore-import` | 将 vuex store 导入 main.js |
| `vstore2`       | 更新了 Vuex 商店的 Base       |

## 六、Vue 路由器

| 片段                   | 目的                                |
| :------------------- | :-------------------------------- |
| `vrouter`            | Vue 路由器底座                         |
| `vscrollbehavior`    | Vue 路由器 scrollBehavior            |
| `vbeforeeach`        | Vue Router 全局守卫之前每个               |
| `vbeforeresolve`     | Vue Router 全局守卫之前解决               |
| `vaftereach`         | Vue Router 全局守卫 afterEach         |
| `vbeforeenter`       | Vue Router 每路由守卫 beforeEnter      |
| `vbeforerouteenter`  | Vue Router 组件在 RouteEnter 之前守卫    |
| `vbeforerouteupdate` | Vue Router 组件在 RouteUpdate 之前进行保护 |
| `vbeforerouteleave`  | Vue Router 组件在 RouteLeave 之前守卫    |

## 七、Vue 配置

| 片段        | 目的                                  |
| :-------- | :---------------------------------- |
| `vplugin` | 将插件导入main.js或插件文件                   |
| `vconfig` | vue.config.js文件，示例将 sass 文件导入到每个组件中 |

## 八、Nuxt 配置

| 片段      | 目的                                |
| :------ | :-------------------------------- |
| `nfont` | 链接到在 nuxt-config 中将字体包含在 nuxt 项目中 |
| `ncss`  | 链接到 CSS 资产，例如 Normalize           |

## 九、Nuxt页面

| 片段                | 目的                           |
| :---------------- | :--------------------------- |
| `nasyncdata`      | Nuxt asyncData               |
| `nasyncdataaxios` | Nuxt asyncData with Axios 模块 |
| `nfetch`          | Nuxt 获取                      |
| `nfetchaxios`     | Nuxt Fetch with Axios 模块     |
| `nhead`           | Nuxt头                        |
| `nparam`          | Nuxt 路由参数                    |

## 十、额外（纯文本）

| 片段          | 目的              |
| :---------- | :-------------- |
| `gitignore` | .gitignore 文件预设 |

