//侧边栏配置

const utils = require("../utils/utils");

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
      utils.genSidebarGroupConfig({
        groupPath: "/webApplication/",
        title: "抽象功能",
        collapsable: true,
        relativePath: "webApplication/component"
      }),
      // utils.genSidebarConfig('test', './docs/webApplication/', true, true),
      {
        title: "基础业务",
        collapsable: true,
        children: ["base/tg-el-save", "base/tg-el-search", "base/utils"]
      },
      {
        title: "具体业务",
        collapsable: true,
        children: []
      },
      {
        title: "工程工具",
        collapsable: true,
        children: ["tools/code-maker", "tools/docs"]
      }
    ],
    "/dataService/": ["be1", "be2"],
    "/flowEngine/": [
      {
        title: "状态型流程框架",
        collapsable: true,
        children: [
          "/flowEngine/statusflow/statusflow-guide",
          "/flowEngine/statusflow/statusflow-apis",
          "/flowEngine/statusflow/statusflow-config",
          "/flowEngine/statusflow/statusflow-best-practice",
          "/flowEngine/statusflow/statusflow-spec"
        ]
      }
    ],
    "/contribute/": ["con1", "con2"]
  }
};
module.exports = {
  sidebar: sidebar
};
