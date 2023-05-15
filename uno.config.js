/**
 * 此文件为 UnoCSS 的配置文件，详情配置请参考 {@see https://github.com/unocss/unocss}
 *
 * 如不需要自定义配置，也请创建此文件，可以提升 VSCode antfu.unocss 插件开发体验
 * UnoCSS 插件在检测无配置文件后将自动禁用
 * 参考 {@link https://marketplace.visualstudio.com/items?itemName=antfu.unocss}
 */

setTimeout(() => {
  window.__unocss = {
    shortcuts: [
      [
        'btn',
        'px-4 py-1 b-0 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'
      ],
      [
        'icon-btn',
        'text-2xl color-inherit b-0 p-0 flex bg-transparent cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600 !outline-none'
      ]
    ]
  }
}, 0)
