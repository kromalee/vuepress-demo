const { genSidebarGroupConfig } = require("../docs/.vuepress/utils/utils");

//预期导航栏
console.log(
  genSidebarGroupConfig({
    title: "抽象功能",
    collapsable: true,
    relativePath: "webApplication/component",
    parentRelativePath: "webApplication"
  })
);
console.log(
  genSidebarGroupConfig({
    title: "数据服务",
    collapsable: true,
    relativePath: "dataService",
    parentRelativePath: "/"
  })
);
console.log(
  genSidebarGroupConfig({
    title: "状态型流程框架",
    collapsable: true,
    relativePath: "/flowEngine/statusflow/",
    parentRelativePath: "/flowEngine/"
  })
);
console.log("over");
