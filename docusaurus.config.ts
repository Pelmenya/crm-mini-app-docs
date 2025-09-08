import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
    title: 'Документация пользователей',
    tagline: 'Telegram Mini App — CRM',
    favicon: 'img/favicon.ico',

    future: {
        v4: true,
    },

    // Продакшн-URL твоего сайта документов
    url: 'https://docs.example.com',
    baseUrl: '/',

    // Репозиторий c конфигом/контентом документации
    organizationName: 'your-org', // ← замени
    projectName: 'your-repo',     // ← замени

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
                    editUrl: 'https://github.com/your-org/your-repo/edit/main/', // ← замени или убери
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
            title: 'Документация',
            logo: {
                alt: 'Логотип',
                src: 'img/logo.svg',
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'tutorialSidebar', // ← должен совпадать с ID в sidebars.ts
                    position: 'left',
                    label: 'Руководство',
                },
                {
                    href: 'https://github.com/your-org/your-repo', // ← замени
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
                        { label: 'Введение', to: '/intro' },
                    ],
                },
                {
                    title: 'Сообщество',
                    items: [
                        { label: 'Вопросы на Stack Overflow', href: 'https://stackoverflow.com/questions/tagged/docusaurus' },
                        { label: 'Discord Docusaurus', href: 'https://discordapp.com/invite/docusaurus' },
                    ],
                },
                {
                    title: 'Ещё',
                    items: [
                        { label: 'Репозиторий', href: 'https://github.com/your-org/your-repo' }, // ← замени
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
