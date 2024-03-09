<script setup>
import { useMouse } from '@vueuse/core'
// import { storeToRefs } from 'pinia'
// import { useCounterStore } from '../store/useCounter.js'

// const store = useCounterStore()
// const { count } = storeToRefs(store)
const { x, y } = useMouse()
const msg = 'Hello World!'
</script>

<template>
  <div un-cloak flex="~ col" justify-center items-center>
    <span text-3xl color-pink>{{ msg }}</span>

    <div>{{ x }}, {{ y }}</div>
    <!-- <div flex items-center gap-4 mt-6>
      <button btn text-xl @click="store.calc('-')">-</button>
      <span font-bold>{{ count }}</span>
      <button btn text-xl @click="store.calc('+')">+</button>
    </div> -->
  </div>
</template>
