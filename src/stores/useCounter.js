export const useCounterStore = Pinia.defineStore('counter', () => {
  const { ref } = VueDemi

  const count = ref(0)

  /**
   * 使用计算符号修改 count
   * @param {string} type +: 增加; -: 减少
   */
  function calc(type) {
    if (type === '+') count.value++
    else if (type === '-') count.value--
  }

  return {
    count,
    calc
  }
})
