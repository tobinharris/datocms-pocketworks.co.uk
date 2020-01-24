import React from 'react'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import { Link, graphql } from 'gatsby'
import { Hero, Section, Container, Columns, Level } from 'react-bulma-components'
import SiteNav from '../components/navbar'
import Layout from '../components/layout'

export default ({ data }) => (
  <Layout>
    <HelmetDatoCms
      seo={data.datoCmsCareer.seoMetaTags}
    />
    <div className="article">

      <Hero className="has-bg-image is-medium is-success blog-hero" style={{ backgroundImage: "url(" + (data.datoCmsCareer.featuredMedia ? data.datoCmsCareer.featuredMedia.fluid.src : '') + "&bri=-10&blend=http%3A%2F%2Fassets.imgix.net%2Fblog%2Fblog-blends.pdf%3Fpage%3D1%26fm%3Dpng&blend-mode=multiply&blend-w=1500&blend-h=1000&blend-fit=crop&blend-align=left,center&blend-crop=left,center&fit=facearea&w=1000&h=500&facepad=7.0)" }} id="blog-hero">
        <div className="background-overlay">
          <Hero.Head>
            <SiteNav className="is-light"></SiteNav>
          </Hero.Head>
          <Container>
            <Hero.Body>
              <Container className="content">
                <Columns className="is-tablet is-vcentered">
                  <Columns.Column className="is-offset-2 is-7 has-text-centered">
                    <h1 className="title is-size-1 is-size-3-mobile">
                      Join Pocketworks<br />{data.datoCmsCareer.title}
                    </h1>

                  </Columns.Column>
                </Columns>
              </Container>
            </Hero.Body>
          </Container>
        </div>
      </Hero>

      <Section>
        <Container className="content">

          <Columns className="is-flex-mobile is-vcentered">
            <Columns.Column className="is-1 is-offset-3 has-centered-text">
              <span className="has-text-success icon is-large">
                <i className={data.datoCmsCareer.fontawesomeIconName + " fa-2x"}></i>
              </span>
            </Columns.Column>
            <Columns.Column className="is-6 is-size-6 is-vcentered">
              <b>{data.datoCmsCareer.title}</b>
              <br/><b>On-site position</b> in Leeds City Center
              <br/>Full time
            </Columns.Column>
          </Columns>
          <hr />

          <Columns>
            <Columns.Column className="is-6 is-offset-3">

              <div dangerouslySetInnerHTML={{ __html: data.datoCmsCareer.contentNode.childMarkdownRemark.html }}></div>
            </Columns.Column>
          </Columns>
          <hr />
          <Columns className="is-flex-mobile is-vcentered">
            <Columns.Column className="is-offset-3 is-1">
              {(data.datoCmsCareer.author && data.datoCmsCareer.author.mainImage) ? (
                <Img fluid={data.datoCmsCareer.author.mainImage.fluid}></Img>
              ) : (
                  <br />
                )}

            </Columns.Column>
            <Columns.Column className="is-6 is-size-6 ">
              <h4>Interested? Please <a href="mailto:careers@pocketworks.co.uk">email {data.datoCmsCareer.author.name}</a> to setup a chat. {data.datoCmsCareer.date}</h4>


            </Columns.Column>
          </Columns>
        </Container>
      </Section>
    </div>
  </Layout>
)

export const query = graphql`
  query CareerQuery($slug: String!) {
    datoCmsCareer(slug: { eq: $slug }) {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      title      
      slug
      dateCreated
      closeDate  
      fontawesomeIconName      
      contentNode{
        childMarkdownRemark {
            html            
        }
      }  
      featuredMedia {
        url
        fluid(maxWidth: 1024, imgixParams: {fm: "jpg", auto: "compress" }) {
          ...GatsbyDatoCmsSizes
        }
      }
      author{
        name
        role
        mainImage{          
          url
          fluid(maxWidth: 200, imgixParams: { mask: "ellipse", fm: "jpg", auto: "compress", fit: "facearea", facepad: 3.0 }) {
            ...GatsbyDatoCmsSizes
          }
        }
      }      
    }
  }
`
