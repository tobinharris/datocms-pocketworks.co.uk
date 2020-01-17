import React from 'react'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import { Section, Container } from 'react-bulma-components'
import SiteNav from '../components/navbar'

export default ({ data }) => (
  <div>
  <SiteNav></SiteNav>
  <Section>
    <Container className="content">
      <h1>{data.datoCmsArticle.title}</h1>
      <div dangerouslySetInnerHTML={{__html: data.datoCmsArticle.content}}></div>
      
    </Container>
  </Section>
  </div>
)

export const query = graphql`
  query ArticleQuery($slug: String!) {
    datoCmsArticle(slug: { eq: $slug }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title
      slug
      excerpt      
      content 
      featuredMedia {
        url
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
    }
  }
`
