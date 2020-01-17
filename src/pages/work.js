import React from 'react'
import { Link, graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import SiteNav from '../components/navbar'
import {Section, Columns, Container, Brand, Hero} from 'react-bulma-components';

const Work = ({ data: { about } }) => (
  <div>
    <SiteNav></SiteNav>
    <Section className="hero">
    <Hero.Body>
      <Container className="content">
      <div className="columns">
        <div className="column is-5 is-offset-1">
          
          <h1 className="title is-size-1 is-size-3-mobile">
          <span class="has-text-primary">We'll guide you to working smarter and being more customer-centric with mobile.</span> 
          
            </h1>
            
          
          <br/>
          <div className="level is-size-3 is-mobile">
            <div class="level-item">
              <span className="icon has-text-danger">
              <i class="fas fa-smile-beam"></i>
              </span> 
            </div>

          
            <div className="level-item" className="is-size-5">
              Quick fact - in 2019, we helped Veezu achieve over <Link to="/">14 million mobile taxi bookings</Link>.             
            </div>
            </div>
        </div>
        <div className="column is-5 is-offset-1 is-hidden-mobile">
          <h2>Packages, starting at £4,000</h2>          
          <h3>Consultation</h3>
          <p></p>
        </div>
      </div>
      </Container>
    </Hero.Body>
  </Section>  
    <Section>
    <Container>
      <Columns>
        <Columns.Column size="half">
          <img src="https://www.datocms-assets.com/20955/1579120572-veezu-mockup.png?w=400&fm=jpg"></img>
        </Columns.Column>
      </Columns>
    </Container>  
  </Section>
    <Section>
      <Container className="content">
        <h1 className="title">{about.title}</h1>        
        <div dangerouslySetInnerHTML={{__html: about.content}}></div>
      </Container>
    </Section>
    
  </div>
)

export default Work

export const query = graphql`
  query WorkPageQuery {
    about: datoCmsPage(slug: {eq: "work"}) {
      
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
