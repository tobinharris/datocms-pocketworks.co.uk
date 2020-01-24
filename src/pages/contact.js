import React from 'react'
import { graphql, Link } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import SiteNav from '../components/navbar'
import Layout from '../components/layout'
import TeamQuote from '../components/team-quote'
import { Tabs, Section, Container, Brand, Hero, Columns } from 'react-bulma-components';

const Contact = ({ data: { about } }) => (
  <Layout>
    <SiteNav></SiteNav>
    <div className="tabs is-medium is-centered">
      <ul>
        <li className="is-active"><a>Details</a></li>
        <li><Link to="/contact/enquiry">Enquiry Form</Link></li>
        <li><Link to="/contact/nda">NDA</Link></li>
      </ul>
    </div>
    <Hero className="is-small">
      <Hero.Body>
        <Container class="container content">
          <Columns className="is-tablet is-vcentered">
            <Columns.Column className="is-6 is-offset-1">
              <h1 class="title is-size-1 is-size-3-mobile">
                Let's <span className="has-text-success">talk.</span>
              </h1>
              <p className="is-size-4">
                <a href="tel:0113 466 0302">0113 466 0302</a>
                <br /><a href="mailto:hello@pocketworks.co.uk">hello@pocketworks.co.uk</a>
              </p>
              <p>
                Pocketworks, Ground Floor, Monarch House<br />Queen Street, Leeds, LS1 2TW
              </p>
              <p>
                <span class="icon has-text-danger"><i class="fab fa-galactic-republic"></i></span>
                &nbsp; Looking to <b>join the team?</b> Check out our <Link to="/about/careers">careers page</Link>.
                        </p>

            </Columns.Column>
            <Columns.Column className="is-4">
              <img src="https://www.datocms-assets.com/20955/1579120498-culture.png?fm=jpg&compress=auto&w=500"></img>
            </Columns.Column>
          </Columns>
          <hr />
        </Container>
      </Hero.Body>
    </Hero>
    <Section>
      <Container class="content">
        <Columns className="">
          <Columns.Column className="is-offset-1 is-5 has-google-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2356.5770919196543!2d-1.557038584144514!3d53.79701418007602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48795ea129e684b1%3A0xeae2d6d8f48ffa8b!2sPocketworks%20Mobile%20Ltd!5e0!3m2!1sen!2suk!4v1579870920006!5m2!1sen!2suk" width="600" height="600" frameborder="0" allowfullscreen=""></iframe>
          </Columns.Column>

          <Columns.Column className="is-5">
            <h2>Visiting?</h2>
            <p>
              <span class="icon"><i class="fas fa-car"></i></span><a className="" target="_blank" href="https://goo.gl/maps/RMW3cCNdmCACSMKdA"> See directions on Google Maps</a>
            </p>

            <p>
              <span class="icon"><i class="fas fa-parking"></i></span> Paid parking on the street directly outside.
                        </p>
            <p>
              <span class="icon"><i class="fas fa-subway"></i></span> 5 minute walk from Leeds train station.
              </p>
          </Columns.Column>

        </Columns>
      </Container>
    </Section>
  </Layout>
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
