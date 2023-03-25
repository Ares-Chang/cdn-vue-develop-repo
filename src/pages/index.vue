<script>
/**
 * 获取文件
 * 此操作为兼容 Vue 2 和 Vue 3 同时使用，常规开发可以选择对应版本加载组件
 * @param {string} url 文件地址
 */
function getVueFile(url) {
  const { isVue2 } = VueDemi
  return isVue2
    ? httpVueLoader(url)
    : Vue.defineAsyncComponent(() => loadModule(url, options))
}
module.exports = {
  components: {
    TheWelcome: getVueFile('/src/components/TheWelcome.vue')
  }
}
</script>

<template>
  <div>
    <TheWelcome></TheWelcome>
  </div>
</template>
