// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'NeuralAgent™',
    tagline:
        "Framework d'agents IA autonomes pour résoudre des tâches complexes",
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://students-ai.com',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'StudentsAI', // Usually your GitHub org/user name.
    projectName: 'neural-agent', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'fr',
        locales: ['fr', 'en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: './sidebars.js',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/students-ai/neural-agent/tree/main/',
                },
                // Suppression du blog comme demandé
                blog: false,
                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Remplacer avec une image pour NeuralAgent
            image: 'img/neural-agent-social-card.jpg',
            navbar: {
                title: 'NeuralAgent™',
                logo: {
                    alt: 'NeuralAgent Logo',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        type: 'docSidebar',
                        sidebarId: 'tutorialSidebar',
                        position: 'left',
                        label: 'Documentation',
                    },
                    {
                        href: 'https://github.com/students-ai/neural-agent',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: 'Introduction',
                                to: '/docs/intro',
                            },
                            {
                                label: 'Architecture',
                                to: '/docs/architecture/overview',
                            },
                            {
                                label: 'Guide de démarrage',
                                to: '/docs/guides/getting-started',
                            },
                        ],
                    },
                    {
                        title: 'Communauté',
                        items: [
                            {
                                label: 'GitHub',
                                href: 'https://github.com/students-ai/neural-agent',
                            },
                        ],
                    },
                    {
                        title: 'Plus',
                        items: [
                            {
                                label: 'Students.AI',
                                href: 'https://students-ai.com',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Students.AI. Développé par Yann Coudrah.`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
        }),
};

export default config;
