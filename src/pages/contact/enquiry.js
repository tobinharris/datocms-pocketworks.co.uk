import React from 'react'
import { graphql, Link } from 'gatsby'
import {Helmet} from 'react-helmet'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import SiteNav from '../../components/navbar'
import { Tabs, Section, Container, Brand, Hero, Columns } from 'react-bulma-components';

const Enquiry = ({ data: { about } }) => (
  <div>
    <SiteNav></SiteNav>
    <div className="tabs is-medium is-centered">
      <ul>
        <li><Link to="/contact">Details</Link></li>
        <li className="is-active"><a>Enquiry Form</a></li>
        <li><Link to="/contact/nda">NDA</Link></li>
      </ul>
    </div>
    <Section>
      <Container className="content has-text-centered">
        <h2>Tell us about <span className="has-text-success">your project</span></h2>
      <iframe src="https://pipedrivewebforms.com/form/c7883e4880ae451054fdb15e9f07dd5c1730301" style={{width: "100%", height: "1000px"}}>

      </iframe>
      </Container>
      
        
      
    </Section>


  </div>
)

export default Enquiry

export const query = graphql`
  query EnquiryQuery {
    about: datoCmsPage(slug: {eq: "why-pocketworks"}) {
      
          seoMetaTags {
            ...GatsbyDatoCmsSeoMetaTags
          }
          title   
          content   
          featuredMedia {
            fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid_tracedSVG
            }
        }      
      
  }
}
`
