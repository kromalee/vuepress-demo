// 约定: .vuePress同级目录每个文件夹为一个nav
// 
const nav = {
    nav: [
        {
            text: "指南",
            link: "/guide/"
        },
        {
            text: "前端",
            link: "/webApplication/"
        },
        {
            text: "后端",
            link: "/dataService/"
        },
        {
            text: "流程",
            link: "/flowEngine/"
        },
        {
            text: "其他",
            items: [
                {
                    text: "贡献指南",
                    link: "/contribute/"
                }
            ]
        }
    ]
};
module.exports = nav.nav 
