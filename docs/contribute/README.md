# 想要贡献文档?
> 仅描述大致方案, [具体规则](./doc-rulses.md)

## 方案1. 使用本地markdown编辑器typora

> 基本功能,预览受限于typora支持的markdown语法

### 使用步骤
1. 拉取项目并进入文档目录 
    ```bash
    git clone https://github.com/kromaLee/vuepress-demo
    cd vuepress-demo/docs
    ```

2. 使用本地编辑软件[typora](https://typora.io/)撰写[markdown](http://note.youdao.com/iyoudao/?p=2411)

3. 修改完成使用git 推送到远程仓库
    ```bash
    git add *
    git commit -m '提交说明示例'
    git push
    ```

4. 稍等即可看到网页推送变化


## 方案2. 直接使用GitHub编辑
> 基本功能,预览受限于GitHub支持的markdown语法


## 方案3. 使用 vuepress及其工具链

> 提供最完整的支持,能调试文档系统支持的所有功能,支持vuepress扩展语法


### 使用步骤

1. 构建本地开发环境

   ```bash
   # 需要已有node.js 和 npm 环境
   npm install -g vuepress
   ```

2. 拉取项目 `git clone https://github.com/kromaLee/vuepress-demo`

3. 启动dev服务

   ```bash
   cd vuepress-demo
   npm install 
   npm run docs:dev
   ```

4. 修改完成使用git 推送到远程仓库
    ```bash
    git add *
    git commit -m '提交说明示例'
    git push
    ```

5. 稍等即可看到网页推送变化


## 方案4. 专用 工具/在线编辑器(研发中)
