import React from 'react'
import { Link, graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import SiteNav from '../components/navbar'
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
                                <span class="has-text-primary">
                                    Helping you lighten the load for customers.
                                </span>
                            </h1>
                            <p className="is-size-5">
                                We understand that your mobile customers want a simple and convenient experience. 
                                Working with us, you'll be guided through a process that gets your ambitious mobile ideas out there without sacrificing customer needs.</p>
                                <p><Link to="/" className="has-text-success is-size-4">View our Services &amp; Packages <span class="icon"><i class="fas fa-long-arrow-alt-right"></i></span></Link></p>
                                
                        </div>
                        <div className="column is-5 is-offset-1">
                        </div>
                    </div>
                    <hr/>
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
                        <p><Link to="/" className="has-text-info is-size-4">Read the case study <span class="icon"><i class="fas fa-long-arrow-alt-right"></i></span></Link></p>
                    </Columns.Column>
                </Columns>
                <img src="https://www.datocms-assets.com/20955/1579120592-link.png?w=1800"></img>
                <Columns className="content">
                    <Columns.Column className="is-6 is-offset-1 content">
                        <img src="https://www.datocms-assets.com/20955/1579120601-travelodge-logo.png"></img>
                        <h2 className="is-top-marginless">Prototyping <span className="has-text-success">new customer experiences</span> in hotel booking.</h2>
                        <p><Link to="/" className="has-text-success is-size-4">Read the case study <span class="icon"><i class="fas fa-long-arrow-alt-right"></i></span></Link></p>
                    </Columns.Column>
                    <Columns.Column className="is-5">
                        <img src="https://www.datocms-assets.com/20955/1579120579-travelodge-mockup.png?w=450&fm=jpg"></img>
                    </Columns.Column>
                </Columns>
            </Container>
        </Section>
        <Hero className="is-medium">
            <Hero.Body>
                <Container className="content">
                    <Columns className="">
                        <Columns.Column className="is-3 is-offset-1">
                            <img src="https://www.datocms-assets.com/20955/1579120437-anna.jpg?w=300"></img>
                        </Columns.Column>
                        <Columns.Column className="is-6 ">
                            <br/><br/><br/>
                            <p className="is-size-4">
                                "One of the biggest challenges our clients face is discovering customer pain points. Once you understand those, it's much easier to design a solution that meets their needs."
                                
                            </p>
                            <p class="tag is-medium is-success">Anna, Digital Product Designer</p>

                        </Columns.Column>
                    </Columns>
                </Container>
            </Hero.Body>
        </Hero>
        <Section>
            <Container className="has-text-centered">
                <Link to="/" className=" is-medium is-info is-pulled-right">Next: Workforce Productivity</Link>
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
