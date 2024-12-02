<script>
import TheHello from '../components/TheHello.vue'
import TheFooter from '../components/TheFooter.vue'

export default {
  components: {
    TheHello,
    TheFooter
  }
}
</script>

<template>
  <div h-100vh flex="~ col" justify-center items-center>
    <TheHello />
    <TheFooter />
  </div>
</template>
