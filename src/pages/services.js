import React from 'react'
import { Link, graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import SiteNav from '../components/navbar'
import ArrowLink from '../components/link-with-arrow'
import TeamQuote from '../components/team-quote'

import { Section, Columns, Container, Brand, Hero } from 'react-bulma-components';

const Services = ({ data: { about } }) => (
    <div>
        <SiteNav></SiteNav>
        <div className="tabs is-medium is-centered">
            <ul>
                <li><Link to="/work">Customer Loyalty</Link></li>
                <li><Link to="/workforce-productivity">Work Productivity</Link></li>
                <li className="is-active"><a>Services &amp; Packages</a></li>

            </ul>
        </div>
        <Hero className="is-small">
            <Hero.Body>
                <Container className="content">



                    <div className="columns">
                        <div className="column is-6 is-offset-1">
                            <h1 className="title is-size-1 is-size-2-mobile">
                            Everything you need for <span class="has-text-primary">mobile success.</span> 
                            </h1>
                            <p className="is-size-5">
                            Not every business has digital roots. A little advice and guidance can go a long way toward helping you gain confidence. Our clients hire us to help them build strategies, roadmaps and mobile-first digital products .
                            </p>

                        </div>
                        <div className="column is-4">
                            <img src="https://www.datocms-assets.com/20955/1579120467-speedupillustrationpocketworks.png?fm=jpg&w=450"></img>
                        </div>
                    </div>

                    
                    
                </Container>
            </Hero.Body>
        </Hero>

        <Hero className="">
            <Hero.Body>
                <Container className="content">
                    <Columns>
                    <Columns.Column className="is-offset-1 is-10 has-text-centered">
                        <h2>The <span className="has-text-success">services &amp; packages</span> we offer</h2>
                        <br/><br/>
                    </Columns.Column>
                    </Columns>
                    <Columns className="">
                        <Columns.Column className="is-3 is-offset-2">
                            <h3>Light Discovery</h3>
                            <p className="is-size-6">1-2 weeks, typically £1,500-£4,000</p>
                            <p>Spend half a day with our team and take your app ideas forward in leaps and bounds. Explore your strategy, validate ideas, create roadmaps, service blueprints and understand costs. It's preceded by some preparation calls and preliminary research tasks.</p>
                        </Columns.Column>
                        <Columns.Column className="is-3">
                            <h3>Research Sprints</h3>
                            <p className="is-size-6">2-4 weeks, typically £6,000-£12,000</p>
                            <p>Answer the important questions about competitors, customer pain points and technical feasibility. Find the gaps and test your key assumptions. The goal is to gain insight and tackle the major risks in your business plan. Includes Light Discovery.</p>
                        </Columns.Column>
                        <Columns.Column className="is-3">
                            <h3>App Prototypes</h3>
                            <p className="is-size-6">3-6 weeks, typically £8,000-£20,000</p>
                            <p>Prototype your ideas and test them on real people. We iterate until we're confident we have a product that will work. By the end of this, you're ready to design and develop a working app. Includes Light Discovery and Research sprint.</p>
                        </Columns.Column>
                    </Columns>

                    <Columns className="">
                        <Columns.Column className="is-3 is-offset-2">
                            <h3>Strategic Consultation</h3>
                            <p className="is-size-6">2-8 hours, typically £1,500-£4,000</p>
                            <p>For CxOs looking for a fresh outside perspective. Have a technical roadmap that needs checking over? Or need some advice on a board presentation? We advise on topics such as: getting stakeholder buy-in, specifications, technical strategies and emerging trends.</p>
                        </Columns.Column>
                        <Columns.Column className="is-3">
                            <h3>App Review</h3>
                            <p className="is-size-6">1 week, typically £2,000-£3,000</p>
                            <p>If you suspect your existing app or PWA could be improved, we can look at it with fresh eyes and suggest improvements. This can include: looking at your analytics to discover potential issues, a code review or an evaluation of the user experience.</p>
                        </Columns.Column>
                        <Columns.Column className="is-3">
                            <h3>App Development</h3>
                            <p className="is-size-6">3-12 months, typically £50,000-£1m</p>
                            <p>This builds upon our research and prototyping process. We'll design and develop your app across web, iPhone and Android. We'll conduct user testing along the way to make sure it's well received. Then launch it to your customers or staff.</p>
                        </Columns.Column>
                    </Columns>

                    <Columns>
                    <Columns.Column className="is-offset-2 is-8 has-text-centered">
                    <p><br/><Link to="/" className="button is-primary is-leafy is-medium is-primary">Ready to start? Let's do this!</Link></p>
                    </Columns.Column>
                    </Columns>
                </Container>
            </Hero.Body>
        </Hero>
        
        <TeamQuote
            quote="It's easy to say it, but our true goal is to create long-term win-win partnerships with our clients. We want everyone around the table to be motivated to get the best results possible." 
            imgSrc="https://www.datocms-assets.com/20955/1579120408-lee.jpg?w=300&fit=facearea&facepad=5&mask=ellipse"
            who="Lee, Head of Customer Parterships"
            /> 
        
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

export default Services

export const query = graphql`
  query ServicesPageQuery {
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
