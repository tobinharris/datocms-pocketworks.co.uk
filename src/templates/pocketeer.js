import React from 'react'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import { graphql, Link } from 'gatsby'
import { Section, Container, Columns, Hero } from 'react-bulma-components'
import SiteNav from '../components/navbar'
import Layout from '../components/layout'

export default ({ data }) => (
    <Layout>
        <SiteNav></SiteNav>
        <div className="tabs is-medium is-centered">
            <ul>
                <li><Link to="/about/story">Story</Link></li>
                <li className="is-active"><Link to="/about/pocketeers">Pocketeers</Link></li>
                <li><Link to="/about/careers">Join Us</Link></li>
            </ul>
        </div>
        <Hero className="is-small">
            <Hero.Body>
                <Container className="container content">
                    <Columns>
                        <Columns.Column className="is-offset-1 is-6 is-vcentered">                            
                            <h1 className="title is-size-1">{data.pocketeer.firstName} <span className="has-text-primary">{data.pocketeer.lastName}</span></h1>
                            <h3 className="subtitle">{data.pocketeer.role}</h3>
                            <div className="is-size-4" dangerouslySetInnerHTML={{ __html: data.pocketeer.description ? data.pocketeer.description : "Bear with us please, we're just preparing a bio for " + data.pocketeer.firstName + "."  }}></div>
                        </Columns.Column>
                        <Columns.Column className="is-4 is-vcentered">
                            <Img fluid={data.pocketeer.mainImage.fluid}></Img>
                        </Columns.Column>
                    </Columns>
                </Container>
            </Hero.Body>
        </Hero>
        

    </Layout>
)

export const query = graphql`
  query PocketeerQuery($slug: String!) {
    pocketeer: datoCmsAuthor(slug: { eq: $slug }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      name
      firstName
      lastName
      nickname
      description
      slug
      role      
      mainImage {
        url
        fluid(maxWidth: 600, imgixParams: { fit: "crop", crop: "bottom", w: "1080", h: "900", fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
    }
  }
`
