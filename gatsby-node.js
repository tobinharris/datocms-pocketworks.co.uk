const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsPage {
          edges {
            node {
              slug
            }
          }
        }
        allDatoCmsArticle{
          edges{
            node{
              slug
            }
          }
        }
      }
    `).then(result => {
      result.data.allDatoCmsPage.edges.map(({ node: work }) => {
        createPage({
          path: `works/${work.slug}`,
          component: path.resolve(`./src/templates/work.js`),
          context: {
            slug: work.slug,
          },
        })
      })
      result.data.allDatoCmsArticle.edges.map(({ node: article }) => {
        createPage({
          path: `blog/${article.slug}`,
          component: path.resolve(`./src/templates/article.js`),
          context: {
            slug: article.slug,
          },
        })
      })
      resolve()
    })
  })
}
