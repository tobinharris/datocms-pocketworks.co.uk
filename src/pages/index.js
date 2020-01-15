import React from 'react'
import { Link, graphql } from 'gatsby'
import Masonry from 'react-masonry-component'
import "../styles/index.sass";
import "../styles/app.sass";
import {Section, Container, Navbar, Brand} from 'react-bulma-components';
import Img from 'gatsby-image'


//import Layout from "../components/layout"

const IndexPage = ({ data }) => (
<div>
  <Navbar>
    <Navbar.Brand>
      <Navbar.Item renderAs="a" href="/">
          <img src="https://www.datocms-assets.com/20955/1579120310-secondary-logo-small-v3.png"></img>
      </Navbar.Item>      
    </Navbar.Brand>
  </Navbar>
  <Section size="medium" className="hero">
    <Container>
    <div class="columns">
      <div class="column is-5 is-offset-1">
        <h1 class="title is-size-1">We develop mobile apps to make light work of business.</h1>
        <p>
          <a class="button is-primary is-rounded is-large">Tell me more</a>&nbsp;&nbsp;
          <Link to="/about" className="button is-info is-rounded is-outlined is-large">Contact us</Link>
        </p>
        <p><br/>Or learn more <a href="/about">about us</a>.</p>
      </div>
      <div class="column is-4 is-offset-1">
        <img src="https://pocketworks.co.uk/wp-content/uploads/2019/08/Hero-Image-Padding-e1566211830226.png" style={{position: 'relative',top: '-4rem'}} />
        
      </div>
    </div>
    </Container>
  </Section>
    <Masonry className="showcase">
      {data.allDatoCmsWork.edges.map(({ node: work }) => (
        <div key={work.id} className="showcase__item">
          <figure className="card">
            <Link to={`/works/${work.slug}`} className="card__image">
              <Img fluid={work.coverImage.fluid} />
            </Link>
            <figcaption className="card__caption">
              <h6 className="card__title">
                <Link to={`/works/${work.slug}`}>{work.title}</Link>
              </h6>
              <div className="card__description">
                <p>{work.excerpt}</p>
              </div>
            </figcaption>
          </figure>
        </div>
      ))}
    </Masonry>
</div>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allDatoCmsWork(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          id
          title
          slug
          excerpt
          coverImage {
            fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
  }
`
