<script>
module.exports = {
  setup() {
    function goBack() {
      window.history.back()
    }

    return {
      isDark,
      toggleDark,
      goBack
    }
  }
}
</script>

<template>
  <nav un-clock text-xl mt-6 inline-flex gap-2>
    <iconify-icon
      icon-btn
      icon="carbon-campsite"
      @click="goBack"
    ></iconify-icon>

    <button icon-btn @click="toggleDark()">
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
