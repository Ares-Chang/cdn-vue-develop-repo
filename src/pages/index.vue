<script>
import TheWelcome from '~/components/TheWelcome.vue'
import TheFooter from '~/components/TheFooter.vue'

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
