import React from 'react'
import { graphql, Link } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import SiteNav from '../../components/navbar'
import Layout from '../../components/layout'
import { Level, Section, Container, Brand, Hero, Columns } from 'react-bulma-components';

const Resources = ({ data: { about } }) => (
  <Layout>
    <SiteNav></SiteNav>
    <div className="tabs is-medium is-centered">
      <ul>
        <li><Link to="/contact/">Details</Link></li>
        <li><Link to="/contact/enquiry">Enquiry Form</Link></li>
        <li className="is-active"><a>NDA</a></li>

      </ul>
    </div>
    <Hero className="is-small">
      <Hero.Body>
        <Container class="content">
          <Columns className="is-vcentered">
            <Columns.Column className="is-offset-1 is-6">
              <h1 className="title is-size-1 is-size-2-mobile"><span className="has-text-primary">Mutual</span> Non Disclosure Agreement</h1>
              <p>Even without an NDA, we always protect the interests of our clients. This means not sharing their industry secrets with competitors. </p>

<p>If possible, we suggest working without an NDA. The reason is that we have worked with many clients, and talk to dozens of potential clients each year. It is inevitable that we hear similar ideas. </p>

<p>If the NDA is important to you, please tell us enough about your project or business so we can evaluate if there's a conflict with our existing or past clients.</p>

<p>If we determine there's no conflict, and the project is a good fit, and the NDA is mutual, we'll be happy to sign it. </p>
              
                  
            </Columns.Column>
            <Columns.Column className="is-4 has-text-centered">
            <img src="https://www.datocms-assets.com/20955/1579121126-nda.jpg?w=350" alt="NDA"  />
            <a href="https://www.datocms-assets.com/20955/1579121129-mutualnda.pdf" className="button is-leafy is-primary is-medium">Download NDA (PDF)</a>
            </Columns.Column>
          </Columns>
          
        </Container>
      </Hero.Body>
    </Hero>
    
  </Layout>
)

export default Resources

export const query = graphql`
  query ResourcesQuery {
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
