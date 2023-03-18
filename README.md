# cdn-vue-develop-start

因个人需求，部分业务开发需要使用 CDN 形式引入 `Vue` 进行开发。

但是业务逻辑一多，放到一个文件中就很不好维护，所以本项目诞生了，

本项目收集了 `Vue` 各版本直接引用 `.vue` 文件作为组件使用的方法。

## 关键 package

- [~~http-vue-loader~~](https://github.com/FranckFreiburger/http-vue-loader) - 仓库现已不维护，但 Vue 3 之前版本依旧可用。(~~ps: 相对情况下推荐，无需配置。~~)

- [vue3-sfc-loader](https://github.com/FranckFreiburger/vue3-sfc-loader) - http-vue-loader 升级版，支持 Vue 2 and Vue 3
