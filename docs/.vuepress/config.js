module.exports = {
    title: 'Bridge',
    locales: {
        '/en/': {
            lang: 'en-US',
            title: 'Bridge',
            description: 'Bridge connect developer and native platform'
        },
        '/zh/': {
            lang: 'zh-CN',
            title: 'Bridge',
            description: '联接开发者与移动平台'
        },
    },
    themeConfig: {
        // logo: '/assets/img/logo.png',
        lastUpdated: 'Last Updated',
        locales: {
            '/en/': {
                nav: [
                    { text: 'Home', link: '/en/' },
                    { text: 'Guide', link: '/guide/' },
                    { text: 'External', link: 'https://google.com' },
                ]
            },
            '/zh/': {
                nav: [
                    { text: '主页', link: '/zh/' },
                    { text: '教程', link: '/guide/' },
                    { text: '外部', link: 'https://github.com' },
                ]
            }
        },
    }
}
