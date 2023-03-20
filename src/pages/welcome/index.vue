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
const { useMouse } = VueUse
const { storeToRefs } = Pinia
module.exports = {
  setup() {
    const store = useCounterStore()
    const { count } = storeToRefs(store)

    // tracks mouse position
    const { x, y } = useMouse()

    return {
      msg: 'Hello World!',
      x,
      y,
      count,
      calc: store.calc
    }
  }
}
</script>
