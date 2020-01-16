import React from 'react'
import { graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'

const About = ({ data: { about } }) => (
  <h1>{about.title}</h1>
)

export default About

export const query = graphql`
  query AboutQuery {
    about: allDatoCmsPage(filter:{slug: {eq: "why-pocketworks"}}) {
      edges{
        node{      
          seoMetaTags {
            ...GatsbyDatoCmsSeoMetaTags
          }
          title      
          featuredMedia {
            fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
        }      
      }
    }
  }
}
`
