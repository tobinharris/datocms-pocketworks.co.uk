import React from 'react'
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import SiteNav from '../components/navbar'
import {Section, Container, Brand, Hero} from 'react-bulma-components';

const About = ({ data: { about } }) => (
  <div>
    <SiteNav></SiteNav>
    <Section>
      <Container className="content">
        <h1 className="title">{about.title}</h1>        
        <div dangerouslySetInnerHTML={{__html: about.content}}></div>
      </Container>
    </Section>
    
  </div>
)

export default About

export const query = graphql`
  query AboutQuery {
    about: datoCmsPage(slug: {eq: "why-pocketworks"}) {
      
          seoMetaTags {
            ...GatsbyDatoCmsSeoMetaTags
          }
          title   
          content   
          featuredMedia {
            fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
        }      
      
  }
}
`
