# 基于markdown的开发文档管理解决方案

## 1. Work Flow

### 1.1 配置环境
  - 本地markdown编辑器:例如typora
  - git

### 1.2 日常使用
  1. git clone 下载项目
  2. 使用本地markdown编辑器 编辑文档,并实时查看效果
  3. git commit && git push 自动触发构建项目并发布为静态页

## 2. Road Map

### 2.1 可以使用

- [x] 本地开发调试
- [x] Github actions  自动构建
- [x] GitHub gh-pages 自动部署
- [ ] 从word 粘贴图片绝对路径问题(从绝对路径复制文件到md的相对路径)
- [ ] typora 图片路径识别问题(./ 问题)

### 2.2 模式化可配置

- [ ] 实现全特性,使用特性配置文件

### 2.3 其他功能特性

- git相关特性展示
  - [x] 最后更新时间
  - [x] Git仓库和编辑链接

- 搜索特性
  - [x] 基于h2,h3,tags的搜索
  - [ ] 基于algolia的搜索

- 内容优化
  - [x] 图像缩放插件
  - [x] 自动追踪侧边栏插件
  - [x] [阅读进度](https://github.com/tolking/vuepress-plugin-reading-progress)
  - [x] [平滑滚动](https://github.com/vuepress/vuepress-plugin-smooth-scroll)

- Markdown语法配置
  - [x] Vue.js文档风格[流程图](https://github.com/ulivz/vuepress-plugin-flowchart)
  - [x] Vue代码片段插件[vue-demo-code]()
  - [x] markdown 其他插件配置

- 缓存管理
  - [x] PWA 插件(依赖于github的https)
 
- 评论功能:
  - [ ] 基于GitHub Issue的[vssue](https://vssue.js.org)
  
- 知识管理
  - [ ] \(思维导图\)幕布树形结构,markdown结构切换 
  - [ ] 支持基础markdown之外的知识形式,例如类图

- 工程化
  - [ ] TravisCI/Jenkins(通用CI)+ docker 容器自动化部署
  - [ ] 项目管理,lint && prettier
    > 引入 prettier, lint-staged, husky 等依赖，从而使得写出更合乎‘规范’的 markdown；同时注入至 Git hooks，以确保你的代码库具有一致的风格；即使你正与团队合作编写，也不必为统一风格的问题而感到忧虑!
  - [ ] 隐藏 secretKeys

- 其他特性
  - [ ] i18n 国际化
  - [ ] 文档内容保护(参考:https://yuchengkai.cn/docs/frontend/#typeof) 
  - 

## 3. Reference

1. [vuepress官网](https://vuepress.vuejs.org)
2. [评论插件](https://vssue.js.org)
