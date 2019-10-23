//此目录配置开源项目一些不能公布出去的密钥配置,使用.gitIgnore控制
//此文件在CI由 ci的环境变量临时生成
// touch docs/.vuepress/config/secretKeyConfig.js < "module.export={ga:$GA}"

module.exports = {
  ga: "UA-146856588-1",
  algoliaApiKey: "",
  algoliaIndexName: "",
  algoliaAppId: "",
  githubClientId: "3b268d2d64f97a653d67",
  githubClientSecret: "11ec67684c58e0bc06bea918bc89508d421b0910"
};
