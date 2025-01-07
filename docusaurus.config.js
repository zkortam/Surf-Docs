// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Surf Docs',
  favicon: 'https://static.wixstatic.com/media/a0b059_acd597ecbbd34b4d8190d5c95035e5d5~mv2.png/v1/fill/w_120,h_120,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/image%20(2).png',

  // Set the production url of your site here
  url: 'https://docs.surfsocial.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'zkortam', // Your GitHub org/user name
  projectName: 'Surf-Docs', // Your repo name

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/zkortam/Surf-Docs/edit/main/', // Your repo's edit link
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/zkortam/Surf-Docs/edit/main/', // Your repo's edit link
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg', // Replace with your social card image if available
      navbar: {
        title: 'Surf',
        logo: {
          alt: 'Surf Logo',
          src: 'https://static.wixstatic.com/media/a0b059_acd597ecbbd34b4d8190d5c95035e5d5~mv2.png/v1/fill/w_120,h_120,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/image%20(2).png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar', // Ensure this matches the sidebars.js configuration
            position: 'left',
            label: 'Docs',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://surfsocial.org',
            label: 'To Surf',
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
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/fHWKx8bx78',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/surfmain/?hl=en',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/SurfMain',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Main Website',
                href: 'https://surfsocial.org',
              },
              {
                label: 'Surf App',
                href: 'https://github.com/zkortam/Surf-App', // Replace with your Surf App repo
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Surf LLC.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  stylesheets: [
    {
      href: '/css/background.css', // Ensure this matches the actual file path
      type: 'text/css',
    },
  ],
};

module.exports = config;
