<script>
module.exports = {
  components: {
    'the-hello': getVueFile('/src/components/TheHello.vue'),
    'the-footer': getVueFile('/src/components/TheFooter.vue')
  }
}
</script>

<template>
  <div h-100vh flex="~ col" justify-center items-center>
    <the-hello></the-hello>
    <the-footer></the-footer>
  </div>
</template>
