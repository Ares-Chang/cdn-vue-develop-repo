<template>
  <div h-100vh flex="~ col" justify-center items-center>
    <span text-3xl color-pink>{{ msg }}</span>

    <div flex gap-2 mt-6>
      <button @click="calc('-')">-</button>
      <span>{{ count }}</span>
      <button @click="calc('+')">+</button>
    </div>
  </div>
</template>

<script>
const { ref } = VueDemi
module.exports = {
  setup() {
    const count = ref(0)

    function calc(type) {
      if (type === '+') count.value++
      else if (type === '-') count.value--
    }

    return {
      msg: 'Hello World!',
      count,
      calc
    }
  }
}
</script>
