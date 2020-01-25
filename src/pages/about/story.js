import React from 'react'
import { graphql, Link } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import SiteNav from '../../components/navbar'
import { Tabs, Section, Container, Brand, Hero, Columns } from 'react-bulma-components';
import TeamQuote from '../../components/team-quote'
import Layout from '../../components/layout'

const About = ({ data: { about, instagram } }) => (
  <Layout>
    <HelmetDatoCms
      seo={about.seoMetaTags}
    />
    <SiteNav></SiteNav>
    <div className="tabs is-medium is-centered">
      <ul>
        <li className="is-active"><a>Story</a></li>
        <li><Link to="/about/pocketeers">Pocketeers</Link></li>
        <li><Link to="/about/careers">Join Us</Link></li>
      </ul>
    </div>

    <Hero className="is-small">
      <Hero.Body>
        <Container class="container content">
          <Columns className="is-tablet is-vcentered">
            <Columns.Column className="is-6 is-offset-1">
              <h1 class="title is-size-1 is-size-2-mobile"><span class="has-text-primary">People-first mobile</span> since 2012.</h1>
              <p class="is-size-4">We are a software design and development studio committed to helping organisations <span className="">use mobile technology to make life easier for their customers and staff</span>. </p>
            </Columns.Column>
            <Columns.Column className="is-4">
              <img src="https://www.datocms-assets.com/20955/1579120498-culture.png?fm=jpg&compress=auto&w=500"></img>
            </Columns.Column>
          </Columns>
        </Container>
      </Hero.Body>
    </Hero>

    <TeamQuote
      quote="Ultimately, my goal is to create things that are useful, which make us proud and benefit thousands or millions of people every day. That's the real significance of our company."
      imgSrc="https://www.datocms-assets.com/20955/1579120403-tobin.jpg?w=300&fit=facearea&facepad=5&mask=ellipse"
      who="Tobin, Founder and Managing Director"
    />

    <Section>
      <Container className="container content">
        <h2 className="title has-text-centered"><span className="has-text-primary">Life</span> at Pocketworks</h2>
        <p>&nbsp;</p>
        <Columns className="is-mobile">
          <Columns.Column className="is-offset-1 is-10">
            <Columns className="is-mobile">
              {instagram.edges.map(({ node: instaPost }) => (
                <Columns.Column className="is-3">
                  <a href={"https://www.instagram.com/p/" + instaPost.id + "/"} target="_blank">
                    <Img className="instagram-photo" fluid={instaPost.localFile.childImageSharp.fluid} title={instaPost.caption}></Img>
                  </a>
                </Columns.Column>
              ))}
            </Columns>
          </Columns.Column>
        </Columns>
        <hr />
      </Container>
    </Section>

    <Section>
      <div class="content">

        <Columns className="is-centered">
          <Columns.Column className="is-5 is-offset-1">
            <h2 className="">Our <span class="has-text-primary">Story</span></h2>
            <p>Our company was founded by Tobin Harris in 2012 when he noticed that most business apps were failing to reach their true potential. As a mobile expert and advocate, Tobin wanted to give companies a better chance at success.</p>
            <p>Since starting the company 8 years ago, our first three apps are still in use today, one transacting over £90m a year, and all are still under active development at Pocketworks.</p>
            <p>This is what success looks like to us - helping our clients make good choices, invest wisely and ultimately make their customers and staff more productive in some way or another.</p>
            <hr />
            <div className="">
              <Link className="button is-medium is-leafy is-primary" to="/contact">Questions? Get in touch</Link>
            </div>
          </Columns.Column>
          <Columns.Column className="is-offset-1 is-4 is-vertically-centered">
            <img src="https://www.datocms-assets.com/20955/1579120771-dscf7651fotor.jpg?compress=auto&w=700&h=700&fit=crop&mask=ellipse"></img>
          </Columns.Column>
        </Columns>


      </div>
    </Section>
  </Layout>
)

export default About

export const query = graphql`
  query AboutQuery {
    about: datoCmsPage(slug: {eq: "about"}) {      
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title             
      featuredMedia {
        fluid(maxWidth: 600, imgixParams: { fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
    }              
  }
  instagram: allInstaNode(filter: {dimensions: {height:{eq: 1080 }}}, limit: 8, sort: {fields: [timestamp], order: DESC}) {
    edges {
      node {
        id
        likes
        comments
        mediaType
        preview
        original
        timestamp
        caption
        localFile {
          childImageSharp {
            fluid(maxHeight: 250){
              ...GatsbyImageSharpFluid_tracedSVG
            }
            fixed(width: 250, height: 250) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        # Only available with the public api scraper
        thumbnails {
          src
          config_width
          config_height
        }
        dimensions {
          height
          width
        }
      }
    }
  }
}
`
