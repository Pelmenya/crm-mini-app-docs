import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: 'Телеграм мини апп — CRM',
    tagline: 'Документация',
    favicon: 'img/aquaphor.png',

    future: {
        v4: true,
    },

    // Продакшн-URL твоего сайта документов
    url: 'https://docs.crm-tg-mini-app.tw1.ru',
    baseUrl: '/',

    // Репозиторий c конфигом/контентом документации
    organizationName: 'aquaphor-pro.store', // ← замени
    projectName: 'aquaphor-pro.store',     // ← замени

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    i18n: {
        defaultLocale: 'ru',
        locales: ['ru'],
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    routeBasePath: '/',            // Документация доступна на корне сайта
                    sidebarPath: './sidebars.ts',
                    editUrl: 'https://github.com/pelmenya/crm-mini-app-docs/edit/main/', // ← замени или убери
                },
                blog: false, // Блог отключен
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        image: 'img/docusaurus-social-card.jpg',
        navbar: {
            logo: {
                alt: 'Логотип',
                src: 'img/logo.svg',
            },
            title: 'Главная',
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'tutorialSidebar', // ← должен совпадать с ID в sidebars.ts
                    position: 'left',
                    label: 'Руководство',
                },
                {
                    href: 'https://github.com/pelmenya/crm-mini-app-docs', // ← замени
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Разделы',
                    items: [
                        { label: 'О приложении', to: '/about' },
                        { label: 'Быстрый старт', to: '/start' },
                        
                    ],
                },
                {
                    title: 'Ещё',
                    items: [
                        { label: 'Репозиторий', href: 'https://github.com/pelmenya/crm-mini-app-docs' }, // ← замени
                    ],
                },
            ],
            copyright: `© ${new Date().getFullYear()} Telegram Mini App Docs.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
