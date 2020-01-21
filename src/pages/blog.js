import React from 'react'
import { Link, graphql } from 'gatsby'
import "../styles/index.sass";
import "../styles/app.sass";
import Layout from '../components/layout'
import BlogCard from '../components/blog-card'
import { Section, Container, Media, Card, Hero, Columns } from 'react-bulma-components';
import Img from 'gatsby-image'
import '@fortawesome/fontawesome-free/css/all.css'
import SiteNav from '../components/navbar'

//import Layout from "../components/layout"

const BlogPage = ({ data }) => (
  <Layout>
    <SiteNav></SiteNav>
    <div className="tabs is-medium is-centered">
      <ul>
        <li className="is-active"><a>Latest</a></li>
        {/* <li><Link to="#">Strategy</Link></li>
        <li><Link to="#">Design</Link></li>
        <li><Link to="#">Technology</Link></li>
        <li><Link to="#">Us</Link></li> */}
      </ul>
    </div>
    <Hero className=" is-small">
      <Hero.Body>
        <Container>
          <div className="columns content">
            <div className="column is-6 is-offset-1">

              <h1 className="title is-size-1 is-size-3-mobile">
                Recent <span class="has-text-primary">news &amp; thoughts</span> about mobile.
          </h1>



            </div>
            <div className="column is-5">
              <img src="https://www.datocms-assets.com/20955/1579120516-blog.png?fm=jpg&w=350" />
            </div>
          </div>
        </Container>
      </Hero.Body>
    </Hero>
    <Section>
      <Container>
        <Columns>
          <Columns.Column className="is-offset-1 is-10">
            <Columns className="is-centered">
              {data.posts.edges.map(({ node: article }) => (
                <Columns.Column className="is-4 is-multiline">
                  <BlogCard article={article}></BlogCard>
                </Columns.Column>
              ))}
            </Columns>
          </Columns.Column>
        </Columns>
      </Container>
    </Section>
  </Layout>


)

export default BlogPage

export const query = graphql`
  query BlogQuery {
    posts: allDatoCmsArticle(limit: 18, sort: {fields: [date], order: DESC}) {
      edges {
        node {
          id
          date
          title
          slug
          excerpt
          featuredMedia {
            fixed(width: 350, imgixParams: {h: "300",fit: "clip", fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFixed
            }
            fluid(maxWidth: 800, imgixParams: {w: "1280", h: "960", fit: "crop", fm: "jpg", auto: "compress" }) {
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
