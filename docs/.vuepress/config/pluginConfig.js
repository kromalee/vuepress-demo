const secretKeyConfig = require("./secretKeyConfig.js");
const gitConfig = require("./gitConfig.js");
const searchConfig = require("./searchConfig.js");
const pwaConfig = require("./pwaConfig.js");
module.exports = {
  //代码片段插件
  "demo-code": {
    jsLibs: [],
    cssLibs: [],
    showText: "show code",
    hideText: "hide",
    styleStr: "text-decoration: underline;",
    minHeight: 200,
    onlineBtns: {
      codepen: true,
      jsfiddle: true,
      codesandbox: true
    },
    codesandbox: {
      deps: { lodash: "latest" },
      json: "",
      query: "",
      embed: ""
    },
    demoCodeMark: "demo-code"
  },
  //google 分析插件
  "@vuepress/google-analytics": {
    ga: secretKeyConfig.ga
  },
  //图像缩放插件
  "@vuepress/medium-zoom": {
    selector: "img"
    // medium-zoom options here
    // See: https://github.com/francoischalifour/medium-zoom#options
    // options: {
    //     margin: 16
    // }
  },
  //自动追踪侧边栏插件
  "@vuepress/active-header-links": true,
  // back to top 插件
  "@vuepress/back-to-top": true,
  // 评论插件
  "@vssue/vuepress-plugin-vssue": {
    // 设置 `platform` 而不是 `api`
    platform: "github",
    // 其他的 Vssue 配置
    owner: gitConfig.repo.split("/")[0],
    repo: gitConfig.repo.split("/")[1],
    locale: "en",
    clientId: secretKeyConfig.githubClientId,
    clientSecret: secretKeyConfig.githubClientSecret
  },
  //PWA插件
  "@vuepress/pwa": pwaConfig,
  "@vuepress/search": searchConfig,
  flowchart: true,
  "vuepress-plugin-smooth-scroll": true,
  "reading-progress": true,
  pangu: {}
};
