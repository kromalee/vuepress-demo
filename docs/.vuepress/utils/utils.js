// document automatic utils

const fs = require("fs");
const { join, relative } = require("path");

const findSyncFolderName = startPath => {
  let result = [];
  function finder(path) {
    const files = fs.readdirSync(path);
    files.forEach((fileName, index) => {
      console.log(fileName, index);
      const fPath = join(path, fileName);
      const stats = fs.statSync(fPath);
      if (stats.isDirectory()) finder(fPath);
      if (stats.isFile()) result.push(fileName);
    });
  }
  finder(startPath);
  return result;
};
const findSyncAllFileAsRelativePathList = startPath => {
  let result = [];
  function finder(path) {
    const files = fs.readdirSync(path);
    files.forEach((fileName, index) => {
      console.log(fileName, index);
      const fPath = join(path, fileName);
      const stats = fs.statSync(fPath);
      if (stats.isDirectory()) finder(fPath);
      if (stats.isFile()) result.push(relative(startPath, fPath));
    });
  }
  finder(startPath);
  return result;
};

/**
 *
 * @param {Object} groupConfig 需要传入的配置
 */
const genSidebarGroupConfig = groupConfig => {
  // 先解构必填参数
  const { title, relativePath } = groupConfig;
  // 补全非必填参数
  collapsable = groupConfig.collapsable === false ? false : true;
  sidebarDepth = groupConfig.sidebarDepth || 1;
  //生成children
  // 工作区目录
  const workspace = join(__dirname, "../../");
  const absolutePath = join(workspace, relativePath);
  const fileNameList = findSyncAllFileAsRelativePathList(absolutePath);
  // const fileNameList = findSyncFolderName(absolutePath);
  let children = fileNameList
    .filter(item => {
      return item !== "README.md";
    })
    .map(item => {
      return item.replace(".md", "");
    });
  //生成path

  //由项目中的相对路径生成vuepress概念中的绝对路径文本

  //生成其他选项
  return {
    title,
    // path: relativePath,
    collapsable,
    children
  };
};

/**
  @desc: 根据文档中的 datetime 字段，为“侧边栏链接”重新排序；
  @param: {object} siteData - 站点元数据
  @date: 2018-10-04
*/
const rearrangeTheSidebars = siteData => {
  let gSiteData = siteData;

  const _RearrangeTheSidebars = config => {
    if (!config.sidebar) return;

    Object.keys(config.sidebar).forEach(sidebarKey => {
      const sidebarItem = config.sidebar[sidebarKey];
      const pageMetaArr = _FindMetaBySidebarKey(sidebarKey);
      const newSidebarConf = _GenNewSidebarItemList(pageMetaArr);
      if (sidebarItem && Array.isArray(sidebarItem)) {
        sidebarItem.forEach(item => {
          const children = item.children;
          const newChildren = [];
          newSidebarConf.forEach(item => {
            const pureArticleName = item.path
              .replace(sidebarKey, "")
              .replace(".html", "");
            const isInChildren = children.includes(pureArticleName);
            isInChildren ? newChildren.push(pureArticleName) : "";
          });
          item.children = newChildren;
        });
      }
    });
  };

  const _FindMetaBySidebarKey = sidebarKey => {
    return gSiteData.pages.filter(item => {
      return item.path.startsWith(sidebarKey);
    });
  };

  const _GenNewSidebarItemList = (pageMeta = []) => {
    const tempItemArray = pageMeta.map(item => {
      return {
        path: item.path,
        datetime: item.frontmatter.datetime || item.lastUpdated
      };
    });
    tempItemArray.sort((a, b) => {
      const aDatetime = new Date(a.datetime).getTime();
      const bDatetime = new Date(b.datetime).getTime();
      return bDatetime - aDatetime;
    });
    return tempItemArray;
  };

  const locales = siteData.themeConfig.locales;
  Object.values(locales).forEach(item => {
    _RearrangeTheSidebars(item);
  });
};

module.exports = {
  findSyncFolderName,
  rearrangeTheSidebars,
  genSidebarGroupConfig,
  findSyncAllFileAsRelativePathList
};
