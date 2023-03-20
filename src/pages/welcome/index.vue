<template>
  <div h-100vh flex="~ col" justify-center items-center>
    <span text-3xl color-pink>{{ msg }}</span>

    <div>{{ x }}, {{ y }}</div>
    <div flex gap-2 mt-6>
      <button @click="calc('-')">-</button>
      <span>{{ count }}</span>
      <button @click="calc('+')">+</button>
    </div>
  </div>
</template>

<script>
const { toRefs } = VueDemi
const { useMouse } = VueUse
module.exports = {
  setup() {
    const counter = useCounterStore()

    // tracks mouse position
    const { x, y } = useMouse()

    return {
      msg: 'Hello World!',
      x,
      y,
      ...toRefs(counter)
    }
  }
}
</script>
