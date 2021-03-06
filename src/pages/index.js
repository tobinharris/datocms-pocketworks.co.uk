import React from 'react'
import { Link, graphql } from 'gatsby'
import "../styles/app.sass";
import Layout from '../components/layout'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import BlogCard from '../components/blog-card'
import CaseStudyCard from '../components/case-study-card'
import CaseStudyHero from '../components/case-study-hero'
import { Section, Container, Hero, Columns } from 'react-bulma-components'
import Img from 'gatsby-image'
import '@fortawesome/fontawesome-free/css/all.css'
import SiteNav from '../components/navbar'

const IndexPage = ({ data }) => (
  <Layout>    
    <HelmetDatoCms                        
        seo={data.page.seoMetaTags} />
    
    <Hero className="is-fullheight-with-navbar">
      <Hero.Head>
        <SiteNav fullLogo="true"></SiteNav>
      </Hero.Head>
      <Hero.Body>
        <Container>
          <div className="columns content is-vcentered">
            <div className="column is-6 is-offset-1">
              <h1 className="is-size-1 is-size-2-mobile">
                Make <span className="has-text-primary">light work</span> of business.
              </h1>
              <p className="is-size-4">
              Work life is full of heavy lifting. So we design apps and mobile solutions that help you lighten the load.
              </p>
              <h2 className="title is-size-3-mobile is-hidden">
                <span class="has-text-primary">Work life is full of heavy lifting.</span> So we design apps and mobile solutions that help you lighten the load.
              </h2>

              <p>
                <Link to="/work" className="button is-primary is-leafy is-medium">How we help</Link>&nbsp;&nbsp;
                <Link to="/contact" className="button is-link is-leafy is-outlined is-medium is-hidden-mobile">Get in touch</Link>
              </p>

              <div className="level is-size-3 is-mobile is-hidden">
                <div class="level-item">
                  <span className="icon has-text-success">
                    <i class="fas fa-smile-beam"></i>
                  </span>
                </div>
                <div className="level-item" className="is-size-6">
                  In 2019, we proudly helped Veezu achieve over <Link to="/">14 million mobile taxi bookings</Link>.
            </div>
              </div>
            </div>
            <div className="column is-4">
              <Img fluid={data.page.featuredMedia.fluid} />
            </div>
          </div>
          <div className="columns">
            <div className="column is-offset-1 is-10">
              <img src="https://www.datocms-assets.com/20955/1579120367-clients.png?fm=jpg"></img>
              <hr/>
            </div>
          
          </div>
          
        </Container>
      </Hero.Body>
    </Hero>
    

    <Section className="is-hidden">
      <Container>
        <Columns>
          <Columns.Column className="is-offset-3 is-6 has-text-centered">
            <h2 className="title is-size-3-mobile">
              <span class="has-text-primary">Work life is full of heavy lifting.</span> So we design apps and mobile solutions that help you lighten the load.
            </h2>
          </Columns.Column>
        </Columns>
      </Container>
    </Section>

    <Section>
      <Container>
        <CaseStudyHero
          className="has-text-info"
          mainImage="https://www.datocms-assets.com/20955/1579120572-veezu-mockup.png?w=400&fm=jpg"
          titleHtml="Earn <span class='has-text-info'>customer loyalty.</span>"
          excerpt="These days, customers expect speed and convenience. We help you earn loyalty by giving customers engaging tools that simplify their lives."
          to="/work"
          toText="Examples and more info" />
        <img src="https://www.datocms-assets.com/20955/1579120592-link.png?w=1800"></img>
        <CaseStudyHero
          className="has-text-success"
          flipped
          mainImage="https://www.datocms-assets.com/20955/1579449491-pgmo-mockup.jpeg?w=400&fm=jpg"
          titleHtml="Accellerate <span class='has-text-success'>mobile working.</span>"
          excerpt="Professionals get frustrated when software slows them down. We help you develop apps to maximise work giving your mobile teams the tools they deserve."
          to="/work/workforce-productivity"
          toText="Examples and more info" />
      </Container>
    </Section>
    <hr />
    <img className="side-plant is-hidden-mobile" src="https://www.datocms-assets.com/20955/1579120450-plant-motif-left.png"></img>
    <Section className="is-small">
      <Container className="content">
        <Columns className="is-centered">
          <Columns.Column className="is-6 ">
            <h2 className="has-text-centered title is-size-3-mobile">Recent <span className="has-text-success">insights and case studies</span> by our team</h2>
          </Columns.Column>
        </Columns>
        <Columns className="is-centered">
          <Columns.Column className="is-10">
            <Columns className="is-multiline is-centered">
              {data.caseStudies.edges.map(({ node: caseStudy }) => (
                <Columns.Column className="is-4" key="col1">
                  <CaseStudyCard caseStudy={caseStudy}></CaseStudyCard>
                </Columns.Column>
              ))}
              {data.posts.edges.map(({ node: article }) => (
                <Columns.Column className="is-4" key="col2">
                  <BlogCard article={article}></BlogCard>
                </Columns.Column>
              ))}
            </Columns>
          </Columns.Column>
        </Columns>
        <Columns className="is-centered is-vcentered">
          <Columns.Column className="is-6 has-text-centered">
            <br /><Link to="/blog" className="button is-leafy is-medium is-primary">More news from Pocketworks</Link>
          </Columns.Column>
        </Columns>
      </Container>
    </Section>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query IndexQuery {
    page: datoCmsPage(slug: {eq: "index"}) {      
          id
          title
          slug
          excerpt
          featuredMedia {
            fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid_tracedSVG
            }
          }
          seoMetaTags {
            ...GatsbyDatoCmsSeoMetaTags
          }
        
    }   
    posts: allDatoCmsArticle(limit: 1, sort: {fields: [date], order: DESC}){
      edges {
        node {
          id
          title
          date
          slug
          excerpt
          featuredMedia {
            fixed(width: 350, imgixParams: {h: "300",fit: "clip", fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFixed
            }
            fluid(maxWidth: 800, imgixParams: {w: "1280", h: "960", fit: "crop", fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsFluid_tracedSVG
            }
          }
          author{
            name
            slug
          }
        }
      }
    }
    caseStudies: allDatoCmsCasestudy(limit: 2, filter: {isFeatured: {eq: true}}){
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
              ...GatsbyDatoCmsFluid_tracedSVG
            }
          }
          client{
            companyName
            logoLight {
              url
              fluid(maxWidth: 300, imgixParams: {fm: "jpg", auto: "compress" }) {
                ...GatsbyDatoCmsFluid_tracedSVG
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
