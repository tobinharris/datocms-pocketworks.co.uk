import React from 'react'
import { Link, graphql } from 'gatsby'
import "../styles/index.sass";
import "../styles/app.sass";
import Layout from '../components/layout'
import {Section, Container, Media, Card, Hero, Columns} from 'react-bulma-components';
import Img from 'gatsby-image'
import '@fortawesome/fontawesome-free/css/all.css'
import SiteNav from '../components/navbar'

//import Layout from "../components/layout"

const BlogPage = ({ data }) => (
<Layout>
  <SiteNav></SiteNav>
  <Section className="hero">
    <Hero.Body>
      <Container>
      <div className="columns content">
        <div className="column is-6 is-offset-1">
          
          <h2 className="title is-size-3-mobile">
          Our <span class="has-text-primary">blog</span> about recent events at Pocketworks and in the digital tech industry.
          </h2>
            
          
         
        </div>
        <div className="column is-5">
          <img src="https://www.datocms-assets.com/20955/1579120467-speedupillustrationpocketworks.png?fm=jpg&w=250" />          
        </div>
      </div>
      <Columns>
      {data.posts.edges.map(({ node: article }) => (      
      <Columns.Column className="is-3 is-multiline">
      <Card className="is-blog">
          <div className="card-image">
           
                {article.featuredMedia ? (
                <Img fluid={article.featuredMedia.fluid}></Img>
                ) : (
                    <img src="https://www.datocms-assets.com/20955/1579120467-speedupillustrationpocketworks.png?fm=jpg&w=250" />  
                )
            }            
           
          </div>
          <Card.Content>
          <Link to={'blog/' + article.slug}>{article.title}</Link>

          <div className="content is-size-6">
          <div className="excerpt" dangerouslySetInnerHTML={{__html: article.excerpt}}></div>
            <br/>
            <p class="tag"><time datetime={article.date}>{article.date}</time></p>
          </div>
          </Card.Content>
      </Card>
      </Columns.Column>
      ))}
      </Columns>

      
      </Container>
    </Hero.Body>
  </Section>    
</Layout>
)

export default BlogPage

export const query = graphql`
  query BlogQuery {
    posts: allDatoCmsArticle(limit: 16) {
      edges {
        node {
          id
          date
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
