<script>
const { useMouse } = VueUse
const { storeToRefs } = Pinia
module.exports = {
  setup() {
    const store = useCounterStore()
    const { count } = storeToRefs(store)

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

<template>
  <div un-cloak flex="~ col" justify-center items-center>
    <span text-3xl color-pink>{{ msg }}</span>

    <div>{{ x }}, {{ y }}</div>
    <div flex items-center gap-4 mt-6>
      <button btn text-xl @click="calc('-')">-</button>
      <span font-bold>{{ count }}</span>
      <button btn text-xl @click="calc('+')">+</button>
    </div>
  </div>
</template>
