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
    <a icon-btn href="/" title="Home">
      <iconify-icon icon="carbon-campsite"></iconify-icon>
    </a>

    <button icon-btn @click="toggleDark()" title="Toogle dark mode">
      <iconify-icon v-if="isDark" icon="carbon-sun"></iconify-icon>
      <iconify-icon v-else icon="carbon-moon"></iconify-icon>
    </button>

    <a
      icon-btn
      rel="noreferrer"
      href="https://github.com/ares-chang/cdn-vue-develop-repo"
      target="_blank"
      title="GitHub"
    >
      <iconify-icon icon="carbon-logo-github"></iconify-icon>
    </a>
  </nav>
</template>
