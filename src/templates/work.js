import React from 'react'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import { Section, Container } from 'react-bulma-components'

export default ({ data }) => (
  <Section>
    <Container className="content">
      <h1>{data.datoCmsPage.title}</h1>
      <div dangerouslySetInnerHTML={{__html: data.datoCmsPage.content}}></div>
      
    </Container>
  </Section>
)

export const query = graphql`
  query WorkQuery($slug: String!) {
    datoCmsPage(slug: { eq: $slug }) {
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
