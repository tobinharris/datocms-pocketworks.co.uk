import React from 'react'
import { Link, graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import SiteNav from '../components/navbar'
import ArrowLink from '../components/link-with-arrow'
import TeamQuote from '../components/team-quote'
import CaseStudyHero from '../components/case-study-hero'
import CaseStudyCard from '../components/case-study-card'
import Layout from '../components/layout'
import { Section, Columns, Container, Brand, Hero } from 'react-bulma-components';

const WorkforceProductivity = ({ data: { page, caseStudies } }) => (
    <Layout>
        <SiteNav></SiteNav>
        <div className="tabs is-medium is-centered">
            <ul>
                <li><Link to="/work">Customer Loyalty</Link></li>
                <li className="is-active"><a>Work Productivity</a></li>
                <li><Link to="/services">Services &amp; Packages</Link></li>
                <li><Link to="/technologies">The Tech</Link></li>
            </ul>
        </div>
        <Hero className="is-small">
            <Hero.Body>
                <Container className="content">



                    <div className="columns is-tablet is-vcentered">
                        <div className="column is-6 is-offset-1">
                            <h1 className="title is-size-1 is-size-2-mobile">
                            Superpowers for <span class="has-text-primary">mobile workers.</span>
                            </h1>
                            <p className="is-size-4">                                
                            Mobile is a great way to improve how employees work. Whether it be on-site, in-store or on-the-road. We help organisations design and launch mobile solutions that speed up work. The upshot is reduced operating costs and happier staff.
                            </p>

                        </div>
                        <div className="column is-4">
                        <Img fluid={page.featuredMedia.fluid}/>
                        </div>
                    </div>
                    <hr />
                </Container>
            </Hero.Body>
        </Hero>
        <Section>
            <Container>
            <CaseStudyHero 
                    className="has-text-info"
                    logo="https://www.datocms-assets.com/20955/1579120361-pgmol-logo-white.png" 
                    mainImage="https://www.datocms-assets.com/20955/1579449491-pgmo-mockup.jpeg?w=400&fm=jpg" 
                    titleHtml="Raising the game for <span class='has-text-info'>Premier League</span> referees." 
                    to="/case-studies/pgmol" />
                <img src="https://www.datocms-assets.com/20955/1579120592-link.png?w=1800"></img>
                <CaseStudyHero 
                    className="has-text-success"
                    flipped
                    logo="https://www.datocms-assets.com/20955/1579120601-travelodge-logo.png" 
                    mainImage="https://www.datocms-assets.com/20955/1579120579-travelodge-mockup.png?w=400&fm=jpg" 
                    titleHtml="Prototyping <span class='has-text-success'>new customer experiences</span> in hotel booking." 
                    to="/case-studies/pgmol" />
            </Container>
        </Section>

        <TeamQuote
            quote="Our clients often ask: Do I build or buy? I help them look at the 5-year picture so they can make an informed decision." 
            imgSrc="https://www.datocms-assets.com/20955/1579120440-tom.jpg?w=300&fit=facearea&facepad=5&mask=ellipse"
            who="Tom, Mobile Strategy Specialist"
            /> 
       
        <Hero className="">
            <Hero.Body>
                <Container className="content">
                    <Columns className="is-centered">
                    <Columns.Column className="is-10 has-text-centered">
                        <h2 className="is-size-3-mobile">Our <span className="has-text-info">approach</span> to improving efficiency with apps</h2>
                        <br/><br/>
                    </Columns.Column>
                    </Columns>
                    <Columns className="is-centered">
                        <Columns.Column className="is-3">
                            <h3>Design</h3>
                            <p>Your service offering starts before your app is downloaded, and continues after employees use your app. We look at the big picture so we can be sure everything fits together nicely and staff get the tools they really need. We'll take a good look at what your doing and design an app or platform that puts people at the centre..</p>
                        </Columns.Column>
                        <Columns.Column className="is-3">
                            <h3>Development</h3>
                            <p>From native mobile apps on iOS and Android, to PWAs and beyond. There can be a lot of pieces to put in place; web portals, databases, APIs and integrations. Your organisation needs to be agile and ready for the future, which is where software architecture comes into play. Microservices? API-first? React? No-code? We'll architect and deliver all the building blocks needed to launch a successful app..</p>
                        </Columns.Column>
                        <Columns.Column className="is-3">
                            <h3>Rollout</h3>
                            <p>Getting a well design and engeineered digital tool into peoples hands is often just the the beginning. To get the real value from any IT investment you need to monitor and improve. We can help. User feedback, measuring against KPIs, or making sure it's live 24x7? We'll help you do all that so you can keep it secure, healthy and moving in the right direction.</p>
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
        <hr/>
        <Section className="is-small">
            <Container className="content">
                <Columns className="is-centered">
                    <Columns.Column className="is-6 ">
                        <h2 className="has-text-centered title is-size-3-mobile">More <span className="has-text-purple">case studies</span> for workforce apps</h2>
                    </Columns.Column>
                </Columns>
                <Columns className="is-centered">
                    <Columns.Column className="is-10">
                        <Columns className="is-multiline is-centered">
                            {caseStudies.edges.map(({ node: caseStudy }) => (
                                <Columns.Column className="is-4">
                                    <CaseStudyCard caseStudy={caseStudy}></CaseStudyCard>
                                </Columns.Column>
                            ))}
                        </Columns>
                    </Columns.Column>
                </Columns>
            </Container>
        </Section>
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
                <ArrowLink to="/services" className="is-info">Next: Services &amp; Packages</ArrowLink>
            </Container>
        </Section>

    </Layout>
)

export default WorkforceProductivity

export const query = graphql`
  query WorkforcePageQuery {
    page: datoCmsPage(slug: {eq: "workforce-productivity"}) {
      
          seoMetaTags {
            ...GatsbyDatoCmsSeoMetaTags
          }
          title   
          content   
          featuredMedia {
            fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
        }      
      
    }
    caseStudies: allDatoCmsCasestudy(limit: 3, filter: {isFeatured: {eq: true}}){
        edges {
          node {
            id
            title          
            slug          
            heroBannerImage {
              fixed(width: 350, imgixParams: {h: "300",fit: "clip", fm: "jpg", auto: "compress" }) {
                ...GatsbyDatoCmsFixed
              }
              fluid(maxWidth: 800, imgixParams: {w: "1280", h: "960", fit: "crop", fm: "jpg", auto: "compress" }) {
                ...GatsbyDatoCmsSizes
              }
            }
            client{
              companyName
              logoLight {
                url
                fluid(maxWidth: 300, imgixParams: {fm: "jpg", auto: "compress" }) {
                  ...GatsbyDatoCmsSizes
                }
                fixed(width: 150, imgixParams: {fm: "jpg", auto: "compress" }) {
                    ...GatsbyDatoCmsFixed
                }
              }
            }
          }
        }
      }
}
`
