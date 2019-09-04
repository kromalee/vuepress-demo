const secretKeyConfig = require('./secretKeyConfig.js')
const gitConfig = require('./gitConfig.js')
const searchConfig = require('./searchConfig.js')
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
    //google 分析插件
    '@vuepress/google-analytics':
    {
        'ga': secretKeyConfig.ga
    },
    //图像缩放插件
    '@vuepress/medium-zoom': {
        // selector: 'img.zoom-custom-imgs',
        // medium-zoom options here
        // See: https://github.com/francoischalifour/medium-zoom#options
        options: {
            margin: 16
        }
    },
    //自动追踪侧边栏插件
    '@vuepress/active-header-links': true,
    // back to top 插件
    '@vuepress/back-to-top': true,
    // 评论插件
    '@vssue/vuepress-plugin-vssue': {
        // 设置 `platform` 而不是 `api`
        platform: 'github',
        // 其他的 Vssue 配置
        owner: gitConfig.repo.split('/')[0],
        repo: gitConfig.repo.split('/')[1],
        locale: 'en',
        clientId: secretKeyConfig.githubClientId,
        clientSecret: secretKeyConfig.githubClientSecret,
    },
    //PWA插件
    '@vuepress/pwa': {
        serviceWorker: true,
        updatePopup: {
            message: "发现新内容可用.",
            buttonText: "刷新",
            // 自定义弹窗
            // popupComponent: 'MySWUpdatePopup',
        }
    },
    '@vuepress/search': searchConfig,
    'flowchart': true,
    'vuepress-plugin-export': true,
    'seo': {
        siteTitle: (_, $site) => $site.title,
        title: $page => $page.title,
        description: $page => $page.frontmatter.description,
        author: (_, $site) => $site.themeConfig.author,
        tags: $page => $page.frontmatter.tags,
        twitterCard: _ => 'summary_large_image',
        type: $page => ['articles', 'posts', 'blog'].some(folder => $page.regularPath.startsWith('/' + folder)) ? 'article' : 'website',
        url: (_, $site, path) => ($site.themeConfig.domain || '') + path,
        image: ($page, $site) => $page.frontmatter.image && (($site.themeConfig.domain || '') + $page.frontmatter.image),
        publishedAt: $page => $page.frontmatter.date && new Date($page.frontmatter.date),
        modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated),
    },
    'sitemap': {
        hostname: 'https://vuepress-demo.kromalee.com'
    },
    'permalink-pinyin': {
        lowercase: true,//转换为小写，默认值：true 
        separator: '-'  // slug的分隔符，默认值：' - '
    },
    'vuepress-plugin-smooth-scroll': true,
    'pangu': {},
    'vuepress-plugin-baidu-autopush': {},
    'reading-progress': true,
    'social-share': {
        networks: ['twitter', 'facebook', 'reddit', 'telegram'],
        twitterUser: 'ntnyq',
        weiboAppKey: 'your_app_key',
        fallbackImage: '/hero.png',
        autoQuote: true,
        isPlain: false
    }

}