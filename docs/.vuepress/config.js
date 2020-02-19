const navConfig = require("./config/navConfig.js");
const sideBarConfig = require("./config/sideBarConfig.js");
const headConfig = require("./config/headConfig.js");
const pluginConfig = require("./config/pluginConfig.js");
const markdownConfig = require("./config/markdownConfig.js");
const searchConfig = require("./config/searchConfig.js");
const gitConfig = require("./config/gitConfig.js");

module.exports = {
  //基本配置
  base: "/vuepress-demo/",
  title: "vuepress example",
  description: "vuepress example",
  head: headConfig,
  host: "0.0.0.0",
  port: 8091,
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
    ...sideBarConfig
  },
  plugins: pluginConfig,
  //webpack配置
  configureWebpack: (config, isServer) => {
    if (!isServer) {
      // 修改客户端的 webpack 配置
    }
  },
  chainWebpack: (config, isServer) => {},

  //浏览器兼容性
  evergreen: true
};
