<script>
import TheHello from '../components/TheHello.vue'
import TheFooter from '../components/TheFooter.vue'
import TheSetup from '../components/TheSetup.vue'

export default {
  components: {
    TheHello,
    TheFooter,
    TheSetup
  }
}
</script>

<template>
  <div
    h-100vh
    flex="~ col"
    justify-center
    items-center
    font-sans
    p="x-4 y-10"
    text="center gray-700 dark:gray-200"
  >
    <TheSetup />
    <TheHello />
    <TheFooter />
  </div>
</template>
