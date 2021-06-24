const { description } = require("../../package");

module.exports = {
    title: "Guia de estudos",
    description: description,
    head: [
        ["meta", { name: "theme-color", content: "#3eaf7c" }],
        ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
        [
            "meta",
            { name: "apple-mobile-web-app-status-bar-style", content: "black" },
        ],
    ],
    themeConfig: {
        repo: "",
        editLinks: false,
        docsDir: "",
        editLinkText: "",
        lastUpdated: false,
        nav: [
            {
                text: "Inicio",
                link: "/",
            },
            {
                text: "Tecnologias",
                link: "/tecnologias/",
            },
        ],
        sidebar: {
            "/tecnologias/": [
                {
                    title: "Introdução",
                    collapsable: false,
                    children: [""],
                },
            ],
            "/vue3/": [
                {
                    title: "Vue 3",
                    collapsable: true,
                    children: ["", "composition-api"],
                },
            ],
        },
    },
    plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],
};
