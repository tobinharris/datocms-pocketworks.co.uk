import React from 'react'
import { Link, graphql } from 'gatsby'
import Masonry from 'react-masonry-component'
import "../styles/index.sass";
import "../styles/app.sass";
import {Section, Container, Brand, Hero} from 'react-bulma-components';
import Img from 'gatsby-image'
import '@fortawesome/fontawesome-free/css/all.css'
import SiteNav from '../components/navbar'

//import Layout from "../components/layout"

const IndexPage = ({ data }) => (
<div>
  <SiteNav></SiteNav>
  <Section className="hero">
    <Hero.Body>
      <Container>
      <div className="columns">
        <div className="column is-6 is-offset-0">
          <br/><br/>
          <h1 className="title is-size-1">We develop mobile apps to make light work of business.</h1>
          <p>            
            <Link to="/work" className="button is-primary is-rounded is-large is-flex-mobile">Learn more</Link>&nbsp;&nbsp;
            <Link to="/about" className="button is-info is-rounded is-outlined is-large is-flex-mobile">Get in touch</Link>
          </p>
          <br/>
          <p className="is-size-5">
            <span className="icon has-text-danger"><i className="fas fa-heart"></i></span> Helping Veezu achieve 14,000,000 taxi bookings
          </p>
        </div>
        <div className="column is-4 is-offset-1">
          <img src="https://www.datocms-assets.com/20955/1579120467-speedupillustrationpocketworks.png?fm=jpg&w=400" />
          
        </div>
      </div>
      </Container>
    </Hero.Body>
  </Section>    
</div>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allDatoCmsPage(filter: {slug: {eq: "index"}}) {
      edges {
        node {
          id
          title
          slug
          excerpt
          featuredMedia {
            fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
  }
`
