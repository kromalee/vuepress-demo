const navConfig = require('./config/navConfig.js')
const sideBarConfig = require('./config/sideBarConfig.js')
const headConfig = require('./config/headConfig.js')
const pluginConfig = require('./config/pluginConfig.js')
const markdownConfig = require('./config/markdownConfig.js')
const secretKeyConfig = require('./config/secretKeyConfig.js')
const searchConfig = require('./config/searchConfig.js')
const gitConfig = require('./config/gitConfig.js')

module.exports = {


    //基本配置
    base: '/vuepressDemo/',
    title: 'vuepress example',
    description: 'vuepress example',
    head: headConfig,
    host: '0.0.0.0',
    port: 8091,
    serviceWorker: false,
    locales: undefined,
    shouldPrefetch: () => true,


    // markdown配置
    markdown: markdownConfig,


    // 主题配置
    // theme:'',
    themeConfig: {
        ...gitConfig,
        ...searchConfig,
        displayAllHeaders: true,
        nav: navConfig,
        ...sideBarConfig,
        serviceWorker: {
            updatePopup: true // Boolean | Object, 默认值是 undefined.
            // 如果设置为 true, 默认的文本配置将是: 
            // updatePopup: { 
            //    message: "New content is available.", 
            //    buttonText: "Refresh" 
            // }
        }
    },
    plugins: pluginConfig,
    //webpack配置
    configureWebpack: (config, isServer) => {
        if (!isServer) {
            // 修改客户端的 webpack 配置
        }
    },
    chainWebpack: (config, isServer) => {
    },


    //浏览器兼容性
    evergreen: true

}