require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Creative Portfolio`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-netlify`,
      options:{
        generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
      }},
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
  ],
}
