/**
 * 获取文件
 * 此操作为兼容 Vue 2 和 Vue 3 同时使用，常规开发可以选择对应版本加载组件
 * @param {string} url 文件地址
 * @param {object | null} options vue3-sfc-loader 配置项
 */
function getVueFile(url, options) {
  const { isVue2 } = VueDemi

  if (isVue2) return httpVueLoader(url)

  return Vue.defineAsyncComponent(() =>
    loadModule(url, {
      moduleCache: {
        vue: Vue
      },
      async getFile(url) {
        const res = await fetch(url)
        if (!res.ok)
          throw Object.assign(new Error(res.statusText + ' ' + url), {
            res
          })
        return {
          getContentData: asBinary =>
            asBinary ? res.arrayBuffer() : res.text()
        }
      },
      addStyle(textContent) {
        const style = Object.assign(document.createElement('style'), {
          textContent
        })
        const ref = document.head.getElementsByTagName('style')[0] || null
        document.head.insertBefore(style, ref)
      },
      ...options
    })
  )
}
