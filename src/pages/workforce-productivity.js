import React from 'react'
import { Link, graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import SiteNav from '../components/navbar'
import ArrowLink from '../components/link-with-arrow'

import { Section, Columns, Container, Brand, Hero } from 'react-bulma-components';

const WorkforceProductivity = ({ data: { about } }) => (
    <div>
        <SiteNav></SiteNav>
        <div className="tabs is-medium is-centered">
            <ul>
                <li><Link to="/work">Customer Loyalty</Link></li>
                <li className="is-active"><a>Work Productivity</a></li>
                <li><Link to="/services">Services &amp; Packages</Link></li>

            </ul>
        </div>
        <Section className="hero">
            <Hero.Body>
                <Container className="content">



                    <div className="columns">
                        <div className="column is-6 is-offset-1">
                            <h1 className="title is-size-1 is-size-2-mobile">
                            Helping <span class="has-text-primary">mobile teams</span> get more done. 
                            </h1>
                            <p className="is-size-5">
                                Digital transformation initiatives need buy-in from leadership, management and the workforce. 
                                Be it on site, on the road or in the game, our process ensures you consider the needs of you the whole organisation whilst raising the bar with modern mobile and cloud technologies.
                            </p>

                        </div>
                        <div className="column is-4">
                        <img src="https://www.datocms-assets.com/20955/1579120484-digital-business.png?fm=jpg&w=350"></img>
                        </div>
                    </div>
                    <hr />
                </Container>
            </Hero.Body>
        </Section>
        <Section>
            <Container>
                <Columns className="content">
                    <Columns.Column className="is-4 has-text-right">
                        <img src="https://www.datocms-assets.com/20955/1579120585-premier-league-mockup.png?w=330&fm=jpg"></img>
                    </Columns.Column>
                    <Columns.Column className="is-6 is-offset-1">
                        <img src="https://www.datocms-assets.com/20955/1579120361-pgmol-logo-white.png"></img>
                        <h2 className="is-top-marginless">Raising the game for <span className="has-text-info">Premier League</span> referees.</h2>
                        <p><ArrowLink to="/#test" className="is-size-4 has-text-info">Read the case study</ArrowLink></p>
                    </Columns.Column>
                </Columns>
                <img src="https://www.datocms-assets.com/20955/1579120592-link.png?w=1800"></img>
                <Columns className="content">
                    <Columns.Column className="is-6 is-offset-1 content">
                        <img src="https://www.datocms-assets.com/20955/1579120601-travelodge-logo.png"></img>
                        <h2 className="is-top-marginless">Prototyping <span className="has-text-success">new customer experiences</span> in hotel booking.</h2>
                        <p><ArrowLink to="/#test" className="is-size-4 has-text-success">Read the case study</ArrowLink></p>                        
                    </Columns.Column>
                    <Columns.Column className="is-5">
                        <img src="https://www.datocms-assets.com/20955/1579120579-travelodge-mockup.png?w=450&fm=jpg"></img>
                    </Columns.Column>
                </Columns>                
            </Container>
        </Section>
        <Hero className="">
            <Hero.Body>
                <Container className="content">
                <hr/>
                    <Columns className="">
                        <Columns.Column className="is-3 is-offset-1">
                            <img src="https://www.datocms-assets.com/20955/1579120437-anna.jpg?w=300&fit=facearea&facepad=5&mask=ellipse"></img>
                        </Columns.Column>
                        <Columns.Column className="is-6 ">
                            <br /><br /><br />
                            <p className="is-size-4">
                                "One of the biggest challenges our clients face is discovering customer pain points. Once you understand those, it's much easier to design a solution that meets their needs."

                            </p>
                            <p class="tag is-medium is-success">Anna, Digital Product Designer</p>

                        </Columns.Column>
                    </Columns>
                    <hr/>
                </Container>
            </Hero.Body>
        </Hero>
        <Hero className="">
            <Hero.Body>
                <Container className="content">
                    <Columns>
                    <Columns.Column className="is-offset-1 is-10 has-text-centered">
                        <h2>Our <span className="has-text-success">approach</span> to creating customer-centric apps</h2>
                        <br/><br/>
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
                    <p><br/><Link to="/" className="button is-primary is-outlined is-leafy is-medium is-primary">View all our services</Link></p>
                    </Columns.Column>
                    </Columns>
                </Container>
            </Hero.Body>
        </Hero>
        <Section>
            <Container className="has-text-centered">
                <Columns>
                    <Columns.Column className="is-10 is-offset-1">
                    <img src="https://www.datocms-assets.com/20955/1579120367-clients.png?fm=jpg"></img>
                    </Columns.Column>
                </Columns>
                
            </Container>
        </Section>
        <Section>
            <Container className="has-text-centered">
                <ArrowLink to="/" className="is-info">Next: Workforce Productivity</ArrowLink>
            </Container>
        </Section>

    </div>
)

export default WorkforceProductivity

export const query = graphql`
  query WorkforcePageQuery {
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