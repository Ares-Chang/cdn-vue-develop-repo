<script>
module.exports = {
  setup() {
    return {}
  }
}
</script>

<template>
  <div un-cloak flex="~ col" justify-center items-center>
    <div class="colorful" text-4xl font-bold>{{ msg }}</div>
    <div class="colorful" text-3xl font-bold>
      Welcome to
      <span text-6xl>Vue</span>
    </div>
    <div flex gap-20 mt-20 text-xl>
      <a
        href="./vue@2.6.x.html"
        color-blue
        decoration-none
        p-2
        cursor-pointer
        op-60
        w-140px
        h-50px
        text-center
        hover="text-2xl op-100"
        >Vue@2.6.x</a
      >
      <a
        href="./vue@2.7.x.html"
        color-blue
        decoration-none
        p-2
        cursor-pointer
        op-60
        w-140px
        h-50px
        text-center
        hover="text-2xl op-100"
        >Vue@2.7.x</a
      >
      <a
        href="./vue@3.2.x.html"
        color-blue
        decoration-none
        p-2
        cursor-pointer
        op-60
        w-140px
        h-50px
        text-center
        hover="text-2xl op-100"
        >Vue@3.2.x</a
      >
    </div>
  </div>
</template>

<style scoped>
.colorful {
  color: transparent;
  background: linear-gradient(315deg, #42d392 25%, #647eff);
  background-clip: text;
  -webkit-background-clip: text;
}
</style>
