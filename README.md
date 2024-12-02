# cdn-vue-develop-repo [![Netlify Status](https://api.netlify.com/api/v1/badges/ee9cb145-2b8c-4644-a36d-c33887c4922c/deploy-status)](https://app.netlify.com/sites/stalwart-mooncake-2040cd/deploys)

因个人需求，部分业务开发需要使用 CDN 形式引入 `Vue` 进行开发。但是业务逻辑一多，放到一个文件中就很不好维护，所以本项目诞生了。

本项目收集了 `Vue` 各版本直接引用 `.vue` 文件作为组件使用的方法。以及提供了一些个人觉得好用的 package config.

**🔴 本项目并不能做为一个起手模板直接使用，可以参考自己业务进入对应版本，copy page 进行自定义开发**

> 因业务开发不涉及 SPA 页面跳转，此 Demo 内未包含 [Vue Router](https://router.vuejs.org/) ，如需要可参考 [Vue Router 入门示例](https://router.vuejs.org/zh/guide/)

## 关键 package

- [vue3-sfc-loader](https://github.com/FranckFreiburger/vue3-sfc-loader) - http-vue-loader 升级版，支持 Vue 2 and Vue 3

## 可选 package

- [UnoCSS](https://github.com/unocss/unocss) - 高性能且极具灵活性的即时原子化 CSS 引擎

- [vue-demi](https://github.com/vueuse/vue-demi) - 允许同时为 Vue 2 与 Vue 3 编写通用库, `Pinia` 需要

- [@vue/composition-api](https://github.com/vuejs/composition-api) - 用于提供 [`Composition API`](https://cn.vuejs.org/guide/extras/composition-api-faq.html) 的 Vue 2 插件

  > `vue` >= v2.7，将不再需要主动引入此插件，已内置了 `Composition API`

- [VueUse](https://vueuse.org/) - 实用的 [`Composition API`](https://cn.vuejs.org/guide/extras/composition-api-faq.html) 工具合集

  > 从 v6.0 开始，VueUse 要求 `vue` >= v3.2 或 `@vue/composition-api` >= v1.1

- [Pinia](https://pinia.vuejs.org/zh/) - 符合直觉的 Vue.js 状态管理库

- [iconify](https://github.com/iconify/iconify) - 通用 iconify Web 组件

  - 图标查找地址 [icones](https://icones.js.org/) [iconify](https://icon-sets.iconify.design/)

  > CDN 模式暂未找到 [`@unocss/preset-icons`](https://github.com/unocss/unocss/tree/main/packages/preset-icons/) 解决方案，暂未接入 `UnoCSS` 环境

#### 示例

```vue
<script>
import TheWelcome from '../components/TheWelcome.vue'
import TheFooter from '../components/TheFooter.vue'

export default {
  components: {
    TheWelcome,
    TheFooter
  }
}
</script>

<template>
  <div un-cloak h-100vh flex="~ col" justify-center items-center>
    <TheWelcome />
    <TheFooter />
  </div>
</template>
```

## **注意❗️❗️❗️**

此 Demo 因需兼容多版本 `Vue`，需加载自不同 `Runtime package`，所以 `Demo` 中在 `utils/index.js` 文件中自定义了一个 `getVueFile` 加载方法。

正常开发按对应版本，使用对应加载方法即 ok.
