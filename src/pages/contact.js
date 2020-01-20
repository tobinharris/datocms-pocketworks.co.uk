import React from 'react'
import { graphql, Link } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import SiteNav from '../components/navbar'
import { Tabs, Section, Container, Brand, Hero, Columns } from 'react-bulma-components';

const Contact = ({ data: { about } }) => (
  <div>
    <SiteNav></SiteNav>
    

    <Hero className="is-small">
      <Hero.Body>
        <Container class="content">
          <Columns>
            <Columns.Column className="is-offset-1 is-5">
              <h1 class="title is-size-1 is-size-3-mobile">Let's <span className="has-text-success">talk</span>. </h1>              
                        <p className="is-size-4">
                        <a href="tel:0113 466 0302">0113 466 0302</a>
                        <br/><a href="mailto:hello@pocketworks.co.uk">hello@pocketworks.co.uk</a>
                        </p>
                        <p>Pocketworks<br/>Ground Floor, Monarch House<br/>Queen Street, Leeds, LS1 2TW
                        </p>
                        <p>
                          <span class="icon"><i class="fas fa-car"></i></span><a className="" href="https://goo.gl/maps/RMW3cCNdmCACSMKdA"> Find us on the map</a>
                        </p>                            
                        <p>
                            <span class="icon"><i class="fas fa-parking"></i></span> Paid parking on the street directly outside. 
                        </p>
                        <p>
                          <span class="icon"><i class="fas fa-subway"></i></span> 5 minute walk from Leeds train station.
                        </p>
                        <p>
                          <span class="icon has-text-danger"><i class="fab fa-galactic-republic"></i></span> Looking to join the team? Check out our <Link to="/careers">careers page</Link>.
                        </p>
                        
            </Columns.Column>
            <Columns.Column className="is-5">
                <img src="https://www.datocms-assets.com/20955/1579120475-jump.png?fm=jpg&compress=auto&w=500"></img>
            </Columns.Column>
          </Columns>
        </Container>
      </Hero.Body>
    </Hero>
  </div>
)

export default Contact

export const query = graphql`
  query ContactQuery {
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
