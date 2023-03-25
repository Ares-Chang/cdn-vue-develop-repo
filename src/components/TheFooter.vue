<script>
module.exports = {
  setup() {
    return {
      isDark,
      toggleDark
    }
  }
}
</script>

<template>
  <nav un-clock text-xl mt-6 inline-flex gap-2>
    <button @click="toggleDark()">
      {{ isDark ? 'dark' : 'light' }}
    </button>

    <a
      rel="noreferrer"
      href="https://github.com/ares-chang/cdn-vue-develop-start"
      target="_blank"
      title="GitHub"
      >GitHub</a
    >
  </nav>
</template>
