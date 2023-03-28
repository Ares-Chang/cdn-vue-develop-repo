<script>
module.exports = {
  components: {
    'the-welcome': getVueFile('/src/components/TheWelcome.vue'),
    'the-footer': getVueFile('/src/components/TheFooter.vue')
  }
}
</script>

<template>
  <div un-cloak h-100vh flex="~ col" justify-center items-center>
    <the-welcome></the-welcome>
    <the-footer></the-footer>
  </div>
</template>
