/**
 * 获取文件
 * 此操作为兼容 Vue 2 和 Vue 3 同时使用，常规开发可以选择对应版本加载组件
 * @param {string} url 文件地址
 * @param {object | null} arg vue*-sfc-loader 配置项
 */
export async function getVueFile(url, { Vue, module, ...arg }) {
  const isVue2 = Vue.version.split('.')[0] === '2'
  const { loadModule } = await import(`vue${isVue2 ? '2' : '3'}-sfc-loader`)

  const options = {
    moduleCache: {
      vue: Vue,
      ...module
    },
    getFile(url) {
      url = /.*?\.js|.mjs|.css|.less|.vue$/.test(url) ? url : `${url}.vue`
      const type = /.*?\.js|.mjs$/.test(url)
        ? '.mjs'
        : /.*?\.vue$/.test(url)
        ? '.vue'
        : /.*?\.css$/.test(url)
        ? '.css'
        : '.vue'
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
  }

  if (isVue2) return () => loadModule(url, options)
  return Vue.defineAsyncComponent(() => loadModule(url, options))
}
