<script>
const { isVue2 } = VueDemi
const Welcome = '/src/components/Welcome.vue'
module.exports = {
  components: {
    // 此操作为兼容 Vue 2 和 Vue 3 同时使用，常规开发可以选择对应版本加载组件
    Welcome: isVue2
      ? httpVueLoader(Welcome)
      : Vue.defineAsyncComponent(() => loadModule(Welcome, options))
  }
}
</script>

<template>
  <div>
    <Welcome></Welcome>
  </div>
</template>
