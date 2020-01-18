import React from 'react'
import { Link, graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import SiteNav from '../components/navbar'
import ArrowLink from '../components/link-with-arrow'

import { Section, Columns, Container, Brand, Hero } from 'react-bulma-components';

const Work = ({ data: { about } }) => (
    <div>
        <SiteNav></SiteNav>
        <div className="tabs is-medium is-centered">
            <ul>
                <li className="is-active"><a>Customer Loyalty</a></li>
                <li><a>Work Productivity</a></li>
                <li><a>Services &amp; Packages</a></li>

            </ul>
        </div>
        <Section className="hero">
            <Hero.Body>
                <Container className="content">



                    <div className="columns">
                        <div className="column is-6 is-offset-1">
                            <h1 className="title is-size-1 is-size-2-mobile">
                            Creating loyal <span class="has-text-primary">mobile customers.</span> 
                            </h1>
                            <p className="is-size-5">
                                We understand the challenges in giving your mobile customers a simple and convenient experience.
                                Working with us, you'll be guided through a process that gets your mobile ideas implemented whilst keeping your customer center stage.
                            </p>

                        </div>
                        <div className="column is-4">
                        <img src="https://www.datocms-assets.com/20955/1579120489-customerexperienceillustrationpocketworks.png?fm=jpg&w=450"></img>
                        </div>
                    </div>
                    <hr />
                </Container>
            </Hero.Body>
        </Section>
        <Section>
            <Container>
                <Columns className="content">
                    <Columns.Column className="is-4">
                        <img src="https://www.datocms-assets.com/20955/1579120572-veezu-mockup.png?w=450&fm=jpg"></img>
                    </Columns.Column>
                    <Columns.Column className="is-6 is-offset-1">
                        <img src="https://www.datocms-assets.com/20955/1579120597-veezu-logo.png"></img>
                        <h2 className="is-top-marginless">Supporting growth from zero to <span className="has-text-info">6 million mobile bookings</span> a year.</h2>
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

export default Work

export const query = graphql`
  query WorkPageQuery {
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
