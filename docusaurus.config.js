module.exports = {
  title: 'Docusaurus Project For Docker',
  tagline: 'Documentation for Docker',
  url: 'http://localhost:3000',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'AugustinSeguin', 
  projectName: 'docu-docker', 
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/your-github-username/docusaurus-project/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/your-github-username/docusaurus-project/edit/main/',
        },
      },
    ],
  ],
  plugins: [],
};