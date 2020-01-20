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
        <li className="is-active"><a>Join Us</a></li>       
      </ul>
    </div>

    <Hero className="is-small">
      <Hero.Body>
        <Container class="container content">
          <Columns>
            <Columns.Column className="is-offset-1 is-5">
              <h1 class="title is-size-1 is-size-3-mobile">Join the <span className="has-text-success">rebellion</span>. </h1>
              <p class="is-size-4">You won't be dragged into long hours, rushing stuff out the door and taking every project that comes are way. Pocketworks tries to do things a little differently<sup className="has-text-primary">1</sup>; to gain long term clients with meaningful work where the outcomes are the most important thing. </p>
              <small><sup className="has-text-primary">1</sup> For the sake of transparency, we don't get it right every time. It's the trying that counts :)</small>
              <br/><br/><small><sup className="has-text-primary">2</sup> If Akbar idea isn't sucky, wonder if Emanuelle could rustle up a drawing in same style as others?</small>
            </Columns.Column>
            <Columns.Column className="is-offset-1 is-5">
                <img src="https://www.datocms-assets.com/20955/1579511546-akbar.jpg?fm=jpg&compress=auto&w=300"></img>
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
