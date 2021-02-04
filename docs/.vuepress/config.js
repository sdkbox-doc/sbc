
module.exports = {
    title: 'SBC',
    locales: {
        '/en/': {
            lang: 'en-US',
            description: 'Plug-in sharing platform'
        },
        '/zh/': {
            lang: 'zh-CN',
            description: '游戏插件分享平台'
        },
    },
    themeConfig: {
        // logo: '/assets/img/logo.png',
        locales: {
            '/en/': {
                label: 'English',
                selectText: 'Languages',
                ariaLabel: 'Select language',
                lastUpdated: 'Last Updated',
                nav: [
                    { text: 'Info', link: '/en/desc/' },
                    { text: 'Useage', link: '/en/useage/' },
                    { text: 'Plugin', link: '/en/plugin/' },
                    { text: 'FAQ', link: '/en/faq/' }
                ]
            },
            '/zh/': {
                label: '简体中文',
                selectText: '选择语言',
                ariaLabel: '选择语言',
                lastUpdated: '上次更新',
                nav: [
                    { text: '简介', link: '/zh/desc/' },
                    { text: '使用', link: '/zh/useage/' },
                    { text: '插件', link: '/zh/plugin/' },
                    { text: 'FAQ', link: '/zh/faq/' }
                ],
                sidebar: {
                    '/zh/desc/': [''],
                    '/zh/useage/': ['']
                }
            }
        }
    },
    plugins: [
        [
          '@vuepress/last-updated', {
              transformer: (timestamp, lang) => {
                const dt = new Date(timestamp);
                const y = dt.getFullYear();
                const m = dt.getMonth() + 1;
                const d = dt.getDate();

                return y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d) + " " + dt.toTimeString().substr(0, 8);
            }
          }
        ]
      ]
}
