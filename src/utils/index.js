/**
 * 加载 Vue 文件
 * 此操作为兼容 Vue 2 和 Vue 3 同时使用，常规开发可以选择对应版本加载组件
 * @param {string} url 文件地址
 * @param {object | null} options vue3-sfc-loader 配置项
 */
function loadVueFile(url, options = {}) {
  const { isVue2 } = VueDemi

  if (isVue2) return getVueFile(url, options)

  return Vue.defineAsyncComponent(() => getVueFile(url, options))
}

/**
 * 获取 Vue 文件
 * @param {string} url 文件地址
 * @param {object | null} options vue3-sfc-loader 配置项
 */
async function getVueFile(url, options) {
  const { isVue2 } = VueDemi

  let loadModule
  if (isVue2) loadModule = window['vue2-sfc-loader']?.loadModule
  else loadModule = window['vue3-sfc-loader']?.loadModule

  const { module, reload = true, importmap = {}, ...arg } = options || {}

  return await loadModule(url, {
    moduleCache: {
      // 不同时使用 Vue 2 和 Vue 3 时不需要使用 VueDemi, 引入对应 Vue 版本即可
      vue: window?.VueDemi,
      '@vueuse/core': window?.VueUse,
      pinia: window?.Pinia,
      ...module
    },
    getFile(url) {
      url = replaceImportMap(url, importmap)

      url = `${url}${!/.*?\.js|.mjs|.css|.less|.vue$/.test(url) ? '.js' : ''}`

      const type = /.*?\.js|.mjs$/.test(url)
        ? '.mjs'
        : /.*?\.vue$/.test(url)
        ? '.vue'
        : /.*?\.css$/.test(url)
        ? '.css'
        : '.mjs'

      if (reload) url = `${url}?v=${new Date().getTime()}`

      const getContentData = asBinary =>
        fetch(url).then(res =>
          !res.ok
            ? Promise.reject(url)
            : asBinary
            ? res.arrayBuffer()
            : res.text()
        )
      return { getContentData, type }
    },
    addStyle(textContent) {
      const style = Object.assign(document.createElement('style'), {
        textContent
      })
      const ref = document.head.getElementsByTagName('style')[0] || null
      document.head.insertBefore(style, ref)
    },
    ...arg
  })
}

/**
 * 替换 importmap 中的 key
 * @param {string} url 文件地址
 * @param {object} importmap importmap 配置
 */
function replaceImportMap(url, importmap) {
  const keys = Object.keys(importmap)
  if (!keys.length) return url

  const key = keys.find(key => url.startsWith(key))
  if (!key) return url

  return url.replace(key, importmap[key])
}
