#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

git config --global user.email "h694251068k@163.com"
git config --global user.name "kromalee"

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
echo \'$C_NAME\' > CNAME

git init
git add -A
git commit -m 'deploy'

# 提供gitpush的环境
# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f https://Kromalee:$GITHUB_TOKEN@github.com/$PAGE_REPO master:$PAGE_BRAN

cd -