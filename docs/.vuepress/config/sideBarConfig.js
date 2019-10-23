//侧边栏配置

const { genSidebarGroupConfig } = require("../utils/utils");

/**
 特性:只需关注目录无需关注具体文件
 国际化目录?
 约定:一个顶级目录一个侧边栏
 目录约定:
 |------.vuepress
 |------README.md 首页  
 |------模块1
        |--------模块1首页README.md
        |--------分组1
                  |---------文件1.md
                  |---------文件2.md
        |--------分组2
 |------模块2
        |---------模块2首页README.md
        |---------无分组文件3.md
        |---------无分组文件4.md
 */
const sidebar = {
  "/guide/": [],
  "/webApplication/": [
    genSidebarGroupConfig({
      title: "抽象功能",
      collapsable: true,
      relativePath: "webApplication/component",
      parentRelativePath: "webApplication"
    }),
    genSidebarGroupConfig({
      title: "基础业务",
      collapsable: true,
      relativePath: "webApplication/base",
      parentRelativePath: "webApplication"
    }),
    genSidebarGroupConfig({
      title: "具体业务",
      collapsable: true,
      relativePath: "webApplication/business",
      parentRelativePath: "webApplication"
    }),
    genSidebarGroupConfig({
      title: "工程工具",
      collapsable: true,
      relativePath: "webApplication/tools",
      parentRelativePath: "webApplication"
    })
  ],
  "/dataService/": [
    genSidebarGroupConfig({
      title: "数据服务",
      collapsable: true,
      relativePath: "/dataService/",
      parentRelativePath: "/dataService/"
    })
  ],

  "/flowEngine/": [
    genSidebarGroupConfig({
      title: "状态型流程框架",
      collapsable: true,
      relativePath: "/flowEngine/statusflow/",
      parentRelativePath: "/flowEngine/"
    })
  ],
  "/contribute/": ["con1", "con2"]
};
console.log(sidebar);
module.exports = {
  sidebar: sidebar
};
