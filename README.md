# 开箱即用的文档解决方案@vuepress

## Ⅰ. 文档工作流

### 1. 配置环境

    - markdown editor:typora
    - git

### 2. 日常使用

    1. git clone 下载项目
    2. 使用typora编辑文档,并实时查看效果
    3. git commit && git push 自动触发构建项目并发布为静态页
    4. 修改文档元数据,需要 修改 .vuepress/config下的js文件即可

## Ⅱ.todo

### 可以使用

- [x] 本地开发调试
- [x] gh-pages 部署

### 模式化,可配置

- [ ] 使用特性配置文件
- [ ] 文档库模板/cli

### 工作流优化

- [ ] 从 word 粘贴图片绝对路径问题(在 git commit hook 处理)
- [ ] typora 图片路径识别问题(webpack 处理)

### 功能特性

- [x] git 相关特性展示
- [x] 代码片段插件 vue-demo-code
- [x] google 分析插件
- [x] 图像缩放插件
- [x] 自动追踪侧边栏插件
- [x] 评论功能:全局评论 [vssue](https://vssue.js.org)
- [ ] 评论功能:每篇文章单独一个评论
- [x] PWA 插件(依赖于 github 的 https)
- [x] 搜索插件(搜索文档 h 标题)
- [x] [vue 文档风格流程图](https://github.com/ulivz/vuepress-plugin-flowchart)
- [x] [平滑滚动](https://github.com/vuepress/vuepress-plugin-smooth-scroll)
- [x] [阅读进度](https://github.com/tolking/vuepress-plugin-reading-progress)
- [x] [插入空格](https://github.com/Shigma/vuepress-plugin-spacing)
- [ ] [导出为 pdf](https://github.com/ulivz/vuepress-plugin-export)

- [x] markdown 其他插件配置

  <!-- - [ ] algolia search(需要真正有内容后去建立索引) -->

- [ ] 自动生成侧边栏子目录
- [ ] 完全基于目录和文件标题内容的自动侧边栏,自动导航栏
- [ ] 幕布模式,markdown与树形图切换 
- [ ] 支持markdown之外的知识形式

- [ ] i18n 国际化
- [ ] 文档内容保护(参考:https://yuchengkai.cn/docs/frontend/#typeof) 

### 工程化

- [x] github Actions (依赖于 GitHub)
- [ ] TravisCI /Jenkins (通用 CI)
- [ ] docker 部署与自动化
- [ ] 项目管理,lint && prettier
- [ ] 隐藏 secretKeys

> 引入 prettier, lint-staged, husky 等依赖，从而使得写出更合乎‘规范’的 markdown；同时注入至 Git hooks，以确保你的代码库具有一致的风格；即使你正与团队合作编写，也不必为统一风格的问题而感到忧虑!

## Ⅲ.reference

1. [vuepress 官网](https://vuepress.vuejs.org)
2. [别人的实践记录](https://segmentfault.com/a/1190000018711587)
3. [评论插件 valine :](https://valine.js.org/quickstart.html)
4. [faas,valine](https://leancloud.cn)
5. [评论插件](https://vssue.js.org)
6. [博客实例:静晴轩别苑](https://github.com/nicejade/vuepress-web-app)
