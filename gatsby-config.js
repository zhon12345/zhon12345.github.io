module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ng Zhun Onn's Personal Portfolio`,
        short_name: `zhon12345's Portfolio`,
        start_url: `/`,
        background_color: `#333333`,
        theme_color: `#3498DB`,
        display: `standalone`,
        icon: 'src/images/favicon.png',
      },
    },
  ],
};
