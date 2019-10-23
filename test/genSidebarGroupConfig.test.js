const { genSidebarGroupConfig } = require("../docs/.vuepress/utils/utils");

//预期导航栏
console.log(
  utils.genSidebarGroupConfig({
    title: "抽象功能",
    collapsable: true,
    relativePath: "component"
  })
);
