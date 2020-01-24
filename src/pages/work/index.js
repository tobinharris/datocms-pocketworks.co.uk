import React from 'react'
import { Link, graphql } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import SiteNav from '../../components/navbar'
import ArrowLink from '../../components/link-with-arrow'
import TeamQuote from '../../components/team-quote'
import CaseStudyHero from '../../components/case-study-hero'
import CaseStudyCard from '../../components/case-study-card'
import { Section, Columns, Container, Brand, Hero } from 'react-bulma-components';
import Layout from '../../components/layout'

const Work = ({ data: { about, caseStudies, page } }) => (
    <Layout>
        <SiteNav></SiteNav>
        <div className="tabs is-medium is-centered">
            <ul>
                <li className="is-active"><a>Customer Loyalty</a></li>
                <li><Link to="/work/workforce-productivity">Work Productivity</Link></li>
                <li><Link to="/work/services">Services &amp; Packages</Link></li>
                <li><Link to="/work/technologies">The Tech</Link></li>
            </ul>
        </div>
        <Hero className="is-small">
            <Hero.Body>
                <Container className="content">
                    <div className="columns is-tablet is-vcentered">
                        <div className="column is-6 is-offset-1">
                            <h1 className="title is-size-1 is-size-2-mobile">
                                Putting <span class="has-text-primary">mobile customers</span> first. 
                            </h1>
                            <p className="is-size-4">
                                These days, customers expect convenience. One-tap purchasing, speedy bookings and effortless checkout. If you get this right, you'll woo customers in and then earn their loyalty. That's the best mobile strategy.
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
                    logo="https://www.datocms-assets.com/20955/1579120597-veezu-logo.png"
                    mainImage="https://www.datocms-assets.com/20955/1579120572-veezu-mockup.png?w=400&fm=jpg"
                    titleHtml="Supporting growth from zero to <span class='has-text-info'>6 million mobile bookings</span> a year."
                    to="/case-studies/veezu-taxi-booking-mobile-apps" />
                <img src="https://www.datocms-assets.com/20955/1579120592-link.png?w=1800"></img>
                <CaseStudyHero
                    className="has-text-success"
                    flipped
                    logo="https://www.datocms-assets.com/20955/1579120601-travelodge-logo.png"
                    mainImage="https://www.datocms-assets.com/20955/1579120579-travelodge-mockup.png?w=400&fm=jpg"
                    titleHtml="Prototyping <span class='has-text-success'>new customer experiences</span> in hotel booking."
                    to="/case-studies/travelodge-prototypes" />
            </Container>
        </Section>
        <TeamQuote
            quote="One of the biggest challenges our clients face is discovering customer pain points. Once you understand those, it's much easier to design a solution that meets their needs."
            imgSrc="https://www.datocms-assets.com/20955/1579120437-anna.jpg?w=300&fit=facearea&facepad=5&mask=ellipse"
            who="Anna, Digital Product Designer"
        />
        <Hero className="">
            <Hero.Body>
                <Container className="content">
                    <Columns className="is-centered">
                        <Columns.Column className="is-10 has-text-centered">
                            <h2 className="is-size-3-mobile">Our <span className="has-text-success">approach</span> to creating customer-centric apps</h2>
                            <br /><br />
                        </Columns.Column>
                    </Columns>
                    <Columns className="is-centered">
                        <Columns.Column className="is-3">
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
                            <p><br /><Link to="/work/services" className="button is-primary is-leafy is-medium is-primary">View all our services</Link></p>
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
        <hr/>
        <Section className="is-small">
            <Container className="content">
                <Columns className="is-centered">
                    <Columns.Column className="is-6">
                        <h2 className="has-text-centered title is-size-3-mobile">More <span className="has-text-purple">case studies</span> for consumer apps</h2>
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
                <ArrowLink to="/work/workforce-productivity" className="is-info">Next: Workforce Productivity</ArrowLink>
            </Container>
        </Section>


    </Layout>
)

export default Work

export const query = graphql`
  query WorkPageQuery {
    page: datoCmsPage(slug: {eq: "work"}) {
      
          seoMetaTags {
            ...GatsbyDatoCmsSeoMetaTags
          }
          title   
          content   
          featuredMedia {
            fluid(maxWidth: 450, imgixParams: { w: "450", fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
        }      
      
  }
  caseStudies: allDatoCmsCasestudy(limit: 3, filter: {isFeatured: {eq: false}}){
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
