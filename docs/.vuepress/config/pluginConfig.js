module.exports = [
    //代码片段插件
    ['demo-code', {
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
    }]
    // 评论插件
]