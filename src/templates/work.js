import React from 'react'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import { Section, Container, Columns } from 'react-bulma-components'
import SiteNav from '../components/navbar'

export default ({ data }) => (
  <Section>
    <SiteNav></SiteNav>
    <Container className="content">
      <Columns>        
        <Columns.Column className="is-offset-1 is-10">    
        <div dangerouslySetInnerHTML={{__html: data.datoCmsPage.content}}></div>  
        </Columns.Column>
      </Columns>
      
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
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
    }
  }
`
