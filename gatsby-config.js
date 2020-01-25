require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Pocketworks`,
    sieUrl: 'https://pocketworks.co.uk'
  },
  plugins: [
    `gatsby-plugin-netlify`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ["./src"],
      }
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN,
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `pocketworks`,
      },
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: 966695,
        sv: 6
      },
    },
    {
      resolve: 'gatsby-plugin-google-marketing-platform',
      options: {
        dataLayer: {
          gaPropertyId: 'UA-48635439-2',
        },
        tagmanager: {
          id: 'GTM-WVVXLVG'
        },
        analytics: {
          id: 'UA-48635439-2'
        }
      },
    },
    //`gatsby-plugin-advanced-sitemap`
  ],
}
