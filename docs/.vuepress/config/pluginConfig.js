const secretKeyConfig = require('./secretKeyConfig.js')
const gitConfig = require('./gitConfig')
module.exports = {
    //代码片段插件
    'demo-code': {
        jsLibs: [
        ],
        cssLibs: [
        ],
        showText: 'show code',
        hideText: 'hide',
        styleStr: 'text-decoration: underline;',
        minHeight: 200,
        onlineBtns: {
            codepen: true,
            jsfiddle: true,
            codesandbox: true,
        },
        codesandbox: {
            deps: { 'lodash': 'latest' },
            json: '',
            query: '',
            embed: '',
        },
        demoCodeMark: 'demo-code',
    },
    // back to top 插件
    '@vuepress/back-to-top': true,
    // 评论插件
    '@vssue/vuepress-plugin-vssue': {
        // 设置 `platform` 而不是 `api`
        platform: 'github',
        // 其他的 Vssue 配置
        owner: gitConfig.repo.split('/')[0],
        repo: gitConfig.repo,
        clientId: secretKeyConfig.githubClientId,
        clientSecret: secretKeyConfig.githubClientSecret,
    },
}

