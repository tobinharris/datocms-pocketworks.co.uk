import React from 'react'
import { graphql, Link } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import SiteNav from '../components/navbar'
import { Tabs, Section, Container, Brand, Hero, Columns } from 'react-bulma-components';

const Careers = ({ data: { about } }) => (
  <div>
    <SiteNav></SiteNav>
    <div className="tabs is-medium is-centered">
      <ul>
      <li><Link to="/about">About</Link></li>        
        <li><Link to="/people">People</Link></li> 
        <li className="is-active"><a>Careers</a></li>       
      </ul>
    </div>

    <Hero className="is-small">
      <Hero.Body>
        <Container class="content">
          <Columns>
            <Columns.Column className="is-offset-1 is-5">
              <h1 class="title is-size-1 is-size-3-mobile">Helping organisations with their <span className="has-text-success">heavy lifting</span> since 2012. </h1>
            </Columns.Column>
            <Columns.Column className="is-5">
                <img src="https://www.datocms-assets.com/20955/1579120498-culture.png?fm=jpg&compress=auto&w=500"></img>
            </Columns.Column>
          </Columns>
        </Container>
      </Hero.Body>
    </Hero>
  </div>
)

export default Careers

export const query = graphql`
  query CareersQuery {
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
