import React from 'react'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import { Hero, Section, Container, Columns, Level } from 'react-bulma-components'
import SiteNav from '../components/navbar'

export default ({ data }) => (
  <div className="case-study">
    <HelmetDatoCms seo={data.caseStudy.seoMetaTags}/>
    <Hero className="has-bg-image is-medium blog-hero" style={{ backgroundImage: "url(" + (data.caseStudy.heroBannerImage ? data.caseStudy.heroBannerImage.fluid.src : '' )+ "&fm=jpg&w=1800&blend=http%3A%2F%2Fassets.imgix.net%2Fblog%2Fblog-blends.pdf%3Fpage%3D1%26fm%3Dpng&blend-mode=multiply&blend-w=3600&blend-fit=clamp&blend-align=left,center&blend-crop=bottom,center)" }} id="blog-hero">
      
        <Hero.Head>
          <SiteNav className="is-light" fullLogo></SiteNav>
        </Hero.Head>
        <Container>
          <Hero.Body>
            <Container className="content">
              <Columns>
                <Columns.Column className="is-offset-1 is-7 ">
                  <Img fluid={data.caseStudy.client.logoLight.fluid} style={{width: "150px"}}></Img>
                  <h1 className="title is-size-1 is-size-3-mobile is-top-marginless has-text-light " dangerouslySetInnerHTML={{__html: data.caseStudy.title}}></h1>
                  <p className="has-text-light">CASE STUDY</p>
                </Columns.Column>
              </Columns>
            </Container>
          </Hero.Body>
        </Container>
      
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
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
      client{
          companyName
          logo {
            url
            fluid(maxWidth: 1024, imgixParams: {fm: "png", auto: "compress" }) {
              ...GatsbyDatoCmsFluid_noBase64
            }
          }
          logoLight {
            url
            fluid(maxWidth: 150, imgixParams: {fm: "png", auto: "compress" }) {
              ...GatsbyDatoCmsFluid_noBase64
            }
            fixed(width: 150, imgixParams: {fm: "png", auto: "compress" }) {
                ...GatsbyDatoCmsFixed
              }
          }
      }      
    }
  }
`
