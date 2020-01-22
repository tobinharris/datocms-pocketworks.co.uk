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
        allDatoCmsCasestudy{
          edges{
            node{
              slug
            }
          }
        }
        allDatoCmsCategory{
          edges{
            node{
              slug
            }
          }
        }
        allDatoCmsCareer{
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
          path: `old/${work.slug}`,
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
      result.data.allDatoCmsCasestudy.edges.map(({ node: casestudy }) => {
        createPage({
          path: `case-studies/${casestudy.slug}`,
          component: path.resolve(`./src/templates/case-study.js`),
          context: {
            slug: casestudy.slug,
          },
        })
      })
      result.data.allDatoCmsCategory.edges.map(({ node: category }) => {
        createPage({
          path: `blog/categories/${category.slug}`,
          component: path.resolve(`./src/templates/blog-category.js`),
          context: {
            slug: category.slug,            
          },
        })
      })
      result.data.allDatoCmsCareer.edges.map(({ node: career }) => {
        createPage({
          path: `/careers/${career.slug}`,
          component: path.resolve(`./src/templates/career.js`),
          context: {
            slug: career.slug,            
          },
        })
      })
      resolve()
    })
  })
}
