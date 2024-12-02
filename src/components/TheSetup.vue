<script setup>
import { ref } from 'vue'

const msg = ref('这里是顶层 Setup 组件, Vue3.2+ 后支持')
</script>

<template>
  <div un-cloak>{{ msg }}</div>
</template>
