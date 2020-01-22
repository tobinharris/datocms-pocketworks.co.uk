import React from 'react'
import { Link, graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import SiteNav from '../components/navbar'
import ArrowLink from '../components/link-with-arrow'
import TeamQuote from '../components/team-quote'
import Layout from '../components/layout'
import { Section, Columns, Container, Brand, Hero } from 'react-bulma-components';

const Technologies = ({ data: { about } }) => (
    <Layout>
        <div className="page is-dark">
            <Hero className="is-small is-dark">
                <SiteNav className="is-light"></SiteNav>
                <div className="tabs is-medium is-centered">
                    <ul>
                        <li><Link to="/work">Customer Loyalty</Link></li>
                        <li><Link to="/workforce-productivity">Work Productivity</Link></li>
                        <li><Link to="/services">Services &amp; Packages</Link></li>
                        <li className="is-active"><a>The Tech</a></li>
                    </ul>
                </div>
                <Hero.Body>
                    <Container className="content">



                        <div className="columns is-tablet is-vcentered">
                            <div className="column is-6 is-offset-1">
                                <h1 className="title is-size-1 is-size-2-mobile">
                                    The <span class="has-text-info">tech</span> we use to deliver awesome apps and web platforms
                            </h1>
                                <p className="is-size-4">
                                    For all you CTO's, CDO's and technical folks... We're a full-stack digital team who focus mostly on software platforms where mobile is hugely important to the success of the business.
                            </p>

                            </div>
                            <div className="column is-offset-0 is-4">
                                <img src="https://www.datocms-assets.com/20955/1579512858-bb8.png?w=350"></img>
                            </div>
                        </div>



                    </Container>
                </Hero.Body>
            </Hero>

            <Hero className="">
                <Hero.Body>
                    <Container className="content has-text-light">
                        <Columns className="is-centered">
                            <Columns.Column className="is-10 has-text-centered">
                                <h2 className="is-size-3-mobile">Our <span className="has-text-info">appraoch</span></h2>
                                <br /><br />
                            </Columns.Column>
                        </Columns>
                        <Columns className="is-centered">
                            <Columns.Column className="is-3">
                                <h3>Design Thinking</h3>
                                <p>When creating any digital product, we use a combination of design-thinking and agile delivery. This is because we believe these globally accepted best practices give you the best shot of creating a product that actually gets results.</p>
                            </Columns.Column>
                            <Columns.Column className="is-3">
                                <h3>Agile</h3>
                                <p>Unlike many software houses, we strive for the core principles of agile set out in the agile manifesto, which encourages collaboration, flexible project planning and doing the simplest thing that works.</p>
                            </Columns.Column>
                            <Columns.Column className="is-3">
                                <h3>Mobile Development</h3>
                                <p>We recommend native apps because they're the gold standard for a slick user experience. This means we use Java and Swift. We're also using Google Flutter for cross platform apps, but the jury is still out on this.</p>

                            </Columns.Column>
                        </Columns>

                        <Columns className="is-centered">
                            <Columns.Column className="is-3">
                                <h3>Unit Testing</h3>
                                <p>We underpin our apps with just enough unit tests to give us confidence we don't break things when we refactor. We use Git Flow for managing branches and releases in different environments.</p>
                            </Columns.Column>
                            <Columns.Column className="is-3">
                                <h3>Web Apps &amp; PWAs</h3>
                                <p>We prefer ReactJS for any non-trivial front-end web sites, admin portals and data dashboards. Underpinned by Elixir + Phoenix on the server side. We also have a lot of Ruby on Rails experience. We plan for scalability and security as appropriate, not being fans of premature optimisation.</p>
                            </Columns.Column>
                            <Columns.Column className="is-3">
                                <h3>Databases &amp; API's</h3>
                                <p>We have data expertise in-house, working on some high-scale solutions capturing millions or records a day. Postgres is our current favourite SQL DB, scaled vertically with a replica for read-heavy use cases. We have experience with CouchDB for distributed databases. For integrating web sites to apps, we like RESTful API's with appropriate caching mechanisms, and are also exploring GraphQL.</p>
                            </Columns.Column>
                        </Columns>

                        <Columns>
                            <Columns.Column className="is-offset-2 is-8 has-text-centered">
                                <p><br /><Link to="/" className="button is-info is-outlined is-leafy is-medium">Want to talk tech?</Link></p>
                            </Columns.Column>
                        </Columns>
                    </Container>
                </Hero.Body>
            </Hero>

            <TeamQuote
                quote="Thre's a lot of cool tech out there, it's easy to get sucked in. The important thing is keeping it simple and picking the right tools for the job."
                imgSrc="https://www.datocms-assets.com/20955/1579120423-matt.jpg?fm=png&w=300&fit=facearea&facepad=2.5&mask=ellipse&duotone=0000C5,72B9FA&duotone-alpha=100"
                who="Matej, Full Stack Developer"
            />

            <Hero className="">
                <Hero.Body>
                    <Container className="content">
                        <Columns>
                            <Columns.Column className="is-offset-1 is-10 has-text-centered">
                                <h2 className="is-size-3-mobile">Our <span className="has-text-success">approach</span> to creating customer-centric apps</h2>
                                <br /><br />
                            </Columns.Column>
                        </Columns>
                        <Columns className="">
                            <Columns.Column className="is-3 is-offset-2">
                                <h3>User Research</h3>
                                <p>Ever wondered how your customers think? User research helps you find the answers. It enables you to understand the pain points and desires of your customers. Our UX team carry out user interviews, focus groups, surveys and other research activities. All this awesome insight improves the design of your product.</p>
                            </Columns.Column>
                            <Columns.Column className="is-3">
                                <h3>Service Design</h3>
                                <p>Your service offering starts before your app is downloaded, and continues after customers use your app. We look at the big picture so we can be sure everything fits together nicely and customers have an easy time interacting with your business. We'll take a good look at what your doing and design a service that puts customers at the centre.</p>
                            </Columns.Column>
                            <Columns.Column className="is-3">
                                <h3>App Design</h3>
                                <p>You know when you're using a well-designed app. It feels simple. Delightful, even. It anticipates your next move and still works even when you have flakey phone reception. Our UX and UI team care about these things. And because we're mobile specialists, we know how to design an app that feels like an app should.</p>
                            </Columns.Column>
                        </Columns>
                        <Columns>
                            <Columns.Column className="is-offset-2 is-8 has-text-centered">
                                <p><br /><Link to="/about" className="button is-primary is-outlined is-leafy is-medium">About Pocketworks</Link></p>
                            </Columns.Column>
                        </Columns>
                    </Container>
                </Hero.Body>
            </Hero>
        </div>
    </Layout>
)

export default Technologies

export const query = graphql`
  query TechnologiesPageQuery {
    about: datoCmsPage(slug: {eq: "work"}) {
      
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
