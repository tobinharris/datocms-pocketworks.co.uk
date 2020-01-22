import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layout'
import SiteNav from '../../components/navbar'
import { Section, Container, Hero, Columns } from 'react-bulma-components';

const Careers = ({ data: { about, careers } }) => (
  <Layout>
    <SiteNav></SiteNav>
    <div className="tabs is-medium is-centered">
      <ul>
      <li><Link to="/about/story">Story</Link></li>        
        <li><Link to="/about/pocketeers">Pocketeers</Link></li> 
        <li className="is-active"><a href="#">Join Us</a></li>       
      </ul>
    </div>

    <Hero className="is-small">
      <Hero.Body>
        <Container class="container content">
          <Columns>
            <Columns.Column className="is-offset-1 is-6">
              <h1 class="title is-size-1 is-size-3-mobile">Join the <span className="has-text-success">rebellion.</span> </h1>
              <p class="is-size-4">
                Pocketworks tries to do things a little differently; to gain long term clients with meaningful work where the outcomes are the most important thing.                 
              </p>
              <p>You won't be dragged into long hours, rushing stuff out the door and taking every project that comes our way. </p>
              
            </Columns.Column>
            <Columns.Column className="is-offset-1 is-4">
                <img src="https://www.datocms-assets.com/20955/1579511546-akbar.jpg?fm=jpg&compress=auto&w=300"></img>
            </Columns.Column>
          </Columns>
        </Container>
      </Hero.Body>
    </Hero>
    <hr/>
    <Section>
      <Container>
        <Columns>
        <Columns.Column className="content is-5 is-offset-1">
        <h2>We're hiring...</h2>
              {careers.edges.map(({ node: career }) => (
                <span>
                <span className="tag is-large is-success">
                <Link className="has-text-light" to={"/careers/" + career.slug}>
                  <span className="icon has-text-light is-large"><i className={career.fontawesomeIconName}></i></span>
                  &nbsp;{career.title}
                  </Link>                
                </span>&nbsp;&nbsp; 
                </span>
              ))}              
              
        </Columns.Column>
        </Columns>
      </Container>
    </Section>
  </Layout>
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
  careers: allDatoCmsCareer(filter: {isLive: {eq: true}}){
    edges{
      node{
        slug
        title
        fontawesomeIconName
      }
    }
  } 
}
`
