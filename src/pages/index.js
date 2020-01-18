import React from 'react'
import { Link, graphql } from 'gatsby'
import "../styles/index.sass";
import "../styles/app.sass";
import {Section, Container, Brand, Hero, Columns} from 'react-bulma-components';
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
      <div className="columns ">
        <div className="column is-5 is-offset-1">
          
          <h1 className="title is-size-1 is-size-3-mobile">
          <span class="has-text-primary">Work life is full of heavy lifting.</span> So we design apps and mobile solutions that help you lighten the load.
            </h1>
            
          <p>            
            <Link to="/work" className="button is-primary is-leafy is-large is-flex-mobile">What we do</Link>&nbsp;&nbsp;
            <Link to="/about" className="button is-link is-leafy is-outlined is-large is-flex-mobile">Get in touch</Link>
          </p>
          <br/><br/>
          <div className="level is-size-3 is-mobile">
            <div class="level-item">
              <span className="icon has-text-success">
              <i class="fas fa-smile-beam"></i>
              </span> 
            </div>
          
            <div className="level-item" className="is-size-6">
              In 2019, we proudly helped Veezu achieve over <Link to="/">14 million mobile taxi bookings</Link>.             
            </div>
          </div>
        </div>
        <div className="column is-6">
          <img src="https://www.datocms-assets.com/20955/1579120467-speedupillustrationpocketworks.png?fm=jpg&w=500" />          
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
