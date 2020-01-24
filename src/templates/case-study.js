import React from 'react'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import { Hero, Section, Container, Columns, Level } from 'react-bulma-components'
import SiteNav from '../components/navbar'

export default ({ data }) => (
  <div className="case-study">
    <HelmetDatoCms seo={data.caseStudy.seoMetaTags}/>
    <Hero className="has-bg-image is-medium is-success blog-hero" style={{ backgroundImage: "url(" + (data.caseStudy.heroBannerImage ? data.caseStudy.heroBannerImage.fluid.src : '' )+ "&fm=jpg&w=1800&blend=http%3A%2F%2Fassets.imgix.net%2Fblog%2Fblog-blends.pdf%3Fpage%3D1%26fm%3Dpng&blend-mode=multiply&blend-w=3600&blend-fit=clamp&blend-align=left,center&blend-crop=bottom,center" }} id="blog-hero">
      <div className="background-overlay">
        <Hero.Head>
          <SiteNav className="is-light" fullLogo></SiteNav>
        </Hero.Head>
        <Container>
          <Hero.Body>
            <Container className="content">
              <Columns>
                <Columns.Column className="is-offset-1 is-7">
                  <Img fixed={data.caseStudy.client.logoLight.fixed}></Img>
                  <h1 className="title is-size-1 is-size-3-mobile is-top-marginless" dangerouslySetInnerHTML={{__html: data.caseStudy.title}}></h1>
                  <p className="has-text-grey">CASE STUDY</p>
                </Columns.Column>
              </Columns>
            </Container>
          </Hero.Body>
        </Container>
      </div>
    </Hero>
    <Section>
      <Container className="content">
        
        
        <Columns>
          <Columns.Column className="is-6 is-offset-3">

            <div dangerouslySetInnerHTML={{ __html: data.caseStudy.contentNode.childMarkdownRemark.html }}></div>
          </Columns.Column>
        </Columns>
      </Container>
    </Section>
  </div>
)

export const query = graphql`
  query CaseStudyQuery($slug: String!) {
    caseStudy: datoCmsCasestudy(slug: { eq: $slug }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title      
      slug    
      contentNode{
        childMarkdownRemark {
            html
            timeToRead
        }
      }  
      heroBannerImage {
        url
        fluid(maxWidth: 1024, imgixParams: {fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      client{
          companyName
          logo {
            url
            fluid(maxWidth: 1024, imgixParams: {fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
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
`
