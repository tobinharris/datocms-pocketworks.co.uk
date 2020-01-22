import React from 'react'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import { Link, graphql } from 'gatsby'
import { Hero, Section, Container, Columns, Level } from 'react-bulma-components'
import SiteNav from '../components/navbar'
import Layout from '../components/layout'

export default ({ data }) => (
  <Layout>
    <HelmetDatoCms
      seo={data.datoCmsArticle.seoMetaTags}
    />
    <div className="article">

      <Hero className="has-bg-image is-large is-success blog-hero" style={{ backgroundImage: "url(" + (data.datoCmsArticle.featuredMedia ? data.datoCmsArticle.featuredMedia.fluid.src : '') + "&bri=-10&blend=http%3A%2F%2Fassets.imgix.net%2Fblog%2Fblog-blends.pdf%3Fpage%3D1%26fm%3Dpng&blend-mode=multiply&blend-w=1500&blend-h=1000&blend-fit=crop&blend-align=left,center&blend-crop=left,center&fit=facearea&w=1000&h=500&facepad=7.0)" }} id="blog-hero">
        <div className="background-overlay">
          <Hero.Head>
            <SiteNav className="is-light"></SiteNav>
          </Hero.Head>
          <Container>
            <Hero.Body>
              <Container className="content">
                <Columns>
                  <Columns.Column className="is-offset-2 is-8 has-text-centered">
                    <h1 className="title is-size-1 is-size-3-mobile">
                      {data.datoCmsArticle.title}
                    </h1>

                  </Columns.Column>
                </Columns>
              </Container>
            </Hero.Body>
          </Container>
        </div>
      </Hero>
      <Section>
        <Container className="content">
          <Columns className="is-flex-mobile">
            <Columns.Column className="is-offset-2 is-1">
              {data.datoCmsArticle.author.mainImage ? (
                <Img fluid={data.datoCmsArticle.author.mainImage.fluid}></Img>
              ) : (
                  <br />
                )}

            </Columns.Column>
            <Columns.Column className="is-6 is-size-6">
              <h4>By {data.datoCmsArticle.author.name}, {data.datoCmsArticle.date}</h4>
              <p><i>{data.datoCmsArticle.author.role} at Pocketworks, app development specialists.</i></p>
              <p>
                {data.datoCmsArticle.categories.map(category => (
                  <span>
                    <Link className="button is-small is-rounded is-outlined" to={"/blog/categories/" + category.slug}>{category.name}</Link>
                    &nbsp;
                    </span>
                ))}
              </p>
            </Columns.Column>
          </Columns>
          <hr />
          <Columns>
            <Columns.Column className="is-6 is-offset-3">

              <div dangerouslySetInnerHTML={{ __html: data.datoCmsArticle.content }}></div>
            </Columns.Column>
          </Columns>
        </Container>
      </Section>
    </div>
  </Layout>
)

export const query = graphql`
  query ArticleQuery($slug: String!) {
    datoCmsArticle(slug: { eq: $slug }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title      
      slug
      date
      excerpt      
      content 
      featuredMedia {
        url
        fluid(maxWidth: 1024, imgixParams: {fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      author{
        name
        role
        mainImage{          
          url
          fluid(maxWidth: 200, imgixParams: { mask: "ellipse", fm: "jpg", auto: "compress", fit: "facearea", facepad: 3.0 }) {
            ...GatsbyDatoCmsSizes
          }
        }
      }
      categories{              
        name
        slug
      }
    }
  }
`
