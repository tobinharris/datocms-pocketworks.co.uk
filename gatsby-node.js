const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
//const { createRedirect} = require(`gatsby-plugin-netlify/create-redirects`)

exports.createPages = ({ graphql, actions }) => {
  const { createRedirect, createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      query GenQuery
      {
        pages: allDatoCmsPage {
          edges {
            node {
              slug
            }
          }
        }
        articles: allDatoCmsArticle{
          edges{
            node{
              slug
            }
          }
        }
        oldArticles: allDatoCmsArticle(filter: {date: {gt: "2020-01-20"}}){
          edges{
            node{
              slug
            }
          }
        }
        caseStudies: allDatoCmsCasestudy{
          edges{
            node{
              slug
            }
          }
        }
        blogCategories: allDatoCmsCategory{
          edges{
            node{
              slug
            }
          }
        }
        careers: allDatoCmsCareer{
          edges{
            node{
              slug
            }
          }
        }        
      }
    `).then(result => {
      result.data.pages.edges.map(({ node: work }) => {
        createPage({
          path: `old/${work.slug}`,
          component: path.resolve(`./src/templates/work.js`),
          context: {
            slug: work.slug,
          },
        })
      })
      result.data.articles.edges.map(({ node: article }) => {
        createPage({
          path: `blog/${article.slug}`,
          component: path.resolve(`./src/templates/article.js`),
          context: {
            slug: article.slug,
          },
        })
      })
      result.data.caseStudies.edges.map(({ node: casestudy }) => {
        createPage({
          path: `case-studies/${casestudy.slug}`,
          component: path.resolve(`./src/templates/case-study.js`),
          context: {
            slug: casestudy.slug,
          },
        })
      })
      result.data.blogCategories.edges.map(({ node: category }) => {
        createPage({
          path: `blog/categories/${category.slug}`,
          component: path.resolve(`./src/templates/blog-category.js`),
          context: {
            slug: category.slug,            
          },
        })
      })
      result.data.careers.edges.map(({ node: career }) => {
        createPage({
          path: `/careers/${career.slug}`,
          component: path.resolve(`./src/templates/career.js`),
          context: {
            slug: career.slug,            
          },
        })
      })
      // Old wordpress site had blogs at "/", but want them to be tucked under 
      // /blog path 
      result.data.oldArticles.edges.map(({node: article}) => {
        createRedirect({ fromPath: "/" + article.slug, toPath: "/blog/" + article.slug, isPermanent: true })
      })
      createRedirect({ fromPath: "/clients", toPath: "/work", isPermanent: true })
      createRedirect({ fromPath: "/case-studies/*", toPath: "/work/case-studies/*", isPermanent: true })
      createRedirect({ fromPath: "/perspectives/*", toPath: "/blog/*", isPermanent: true })
      createRedirect({ fromPath: "/services", toPath: "/work/services", isPermanent: true })
      
      resolve()
    })
  })
}
