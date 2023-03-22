# cdn-vue-develop-start

因个人需求，部分业务开发需要使用 CDN 形式引入 `Vue` 进行开发。

但是业务逻辑一多，放到一个文件中就很不好维护，所以本项目诞生了，

本项目收集了 `Vue` 各版本直接引用 `.vue` 文件作为组件使用的方法。

## 关键 package

- [~~http-vue-loader~~](https://github.com/FranckFreiburger/http-vue-loader) - 仓库现已不维护，但 Vue 3 之前版本依旧可用。(~~ps: 相对情况下推荐，无需配置。~~)

- [vue3-sfc-loader](https://github.com/FranckFreiburger/vue3-sfc-loader) - http-vue-loader 升级版，支持 Vue 2 and Vue 3

## 可选 package

- [UnoCSS](https://github.com/unocss/unocss) - 高性能且极具灵活性的即时原子化 CSS 引擎

- [vue-demi](https://github.com/vueuse/vue-demi) - 允许同时为 Vue 2 与 Vue 3 编写通用库

- [@vue/composition-api](https://github.com/vuejs/composition-api) - 用于提供 [`Composition API`](https://cn.vuejs.org/guide/extras/composition-api-faq.html) 的 Vue 2 插件

- [VueUse](https://vueuse.org/) - 实用的 [`Composition API`](https://cn.vuejs.org/guide/extras/composition-api-faq.html) 工具合集

- [Pinia](https://pinia.vuejs.org/zh/) - 符合直觉的 Vue.js 状态管理库
