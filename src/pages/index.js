import React from 'react'
import { Link, graphql } from 'gatsby'
import "../styles/index.sass";
import "../styles/app.sass";
import Layout from '../components/layout'
import BlogCard from '../components/blog-card'
import { Section, Card, Container, Brand, Hero, Columns } from 'react-bulma-components';
import Img from 'gatsby-image'
import '@fortawesome/fontawesome-free/css/all.css'
import SiteNav from '../components/navbar'
import ArrowLink from '../components/link-with-arrow';

//import Layout from "../components/layout"

const IndexPage = ({ data }) => (
  <Layout>
    <SiteNav></SiteNav>
    <Hero className="is-medium">
      <Hero.Body>
        <Container>
          <div className="columns content">
            <div className="column is-6 is-offset-1">

              <h2 className="title is-size-3-mobile">
                <span class="has-text-primary">Work life is full of heavy lifting.</span> So we design apps and mobile solutions that help you lighten the load.
          </h2>

              <p>
                <Link to="/work" className="button is-primary is-leafy is-large is-flex-mobile">View Work</Link>&nbsp;&nbsp;
            <Link to="/about" className="button is-link is-leafy is-outlined is-large is-flex-mobile">Get in touch</Link>
              </p>

              <div className="level is-size-3 is-mobile is-hidden">
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
            <div className="column is-4">
              <img src="https://www.datocms-assets.com/20955/1579120467-speedupillustrationpocketworks.png?fm=jpg&w=450" />
            </div>
          </div>
          <div className="columns is-hidden">
            <div class="column is-offset-1 is-10">
              <img src="https://www.datocms-assets.com/20955/1579120367-clients.png?fm=jpg"></img>
            </div>
          </div>

        </Container>
      </Hero.Body>
      
    </Hero>
    <Section className="is-small">
      <Container className="content">
        <div className="has-text-centered">
          <h3>Some recent posts from the blog.</h3>
          <br />
        </div>
        <Columns className="is-multiline is-centered">
          
          {data.posts.edges.map(({ node: article }) => (
            <Columns.Column className="is-3">
              <BlogCard article={article}></BlogCard>
            </Columns.Column>
          ))}
        </Columns>
      </Container>
    </Section>
  </Layout>
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
    posts: allDatoCmsArticle(limit: 3, sort: {fields: [date], order: DESC}){
      edges {
        node {
          id
          title
          date
          slug
          excerpt
          featuredMedia {
            fluid(maxWidth: 450, imgixParams: {h:"200px", w:"340px", fit: "clip", fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
          author{
            name
            slug
          }
        }
      }
    }
  }
`
