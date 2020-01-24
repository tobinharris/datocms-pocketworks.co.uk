import React from 'react'
import { graphql, Link } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import SiteNav from '../../components/navbar'
import Layout from '../../components/layout'
import { Tabs, Section, Container, Brand, Hero, Columns, Card } from 'react-bulma-components';

const People = ({ data: { people, page } }) => (
  <Layout>
    <HelmetDatoCms                        
          seo={page.seoMetaTags}
      />
    <SiteNav></SiteNav>
    <div className="tabs is-medium is-centered">
      <ul>
      <li><Link to="/about/story">Story</Link></li>
        <li className="is-active"><a>Pocketeers</a></li>
        <li><Link to="/about/careers">Join Us</Link></li>        
      </ul>
    </div>
    <Section>
        <Container>
            <Columns className="is-centered">
                <Columns.Column className="is-9">
                    <Columns className="is-multiline">
                        {people.edges.map(({ node: person }) => ( 
                            <Columns.Column className="is-3 has-text-centered content">
                                <Link to={"/about/pocketeers/" + person.slug}>
                                  <Img fluid={person.mainImage.fluid}/>
                                </Link>
                            <b>{person.firstName}</b>
                            <br/><span className="has-text-grey">{person.role}</span>
                            </Columns.Column>
                        ))}
                    </Columns>
                 </Columns.Column>
            </Columns>
        </Container>
    </Section>
    <Section>
      <Container>
        <Columns className="is-centered">
          <Columns.Column className="is-6 has-text-centered">
          <p className=""><i>Psssssst!</i> See what we've been up to <Link to="/blog/categories/get-to-know-pocketworks">behind the scenes.</Link></p>
          </Columns.Column>
        </Columns>
      </Container>
    </Section>
  </Layout>
)

export default People

export const query = graphql`
  query PeopleQuery {
    page: datoCmsPage(slug: {eq: "pocketeers"}){
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
    people: allDatoCmsAuthor(limit: 30, sort: {fields: [name], order: ASC}, filter: {role: {ne: ""}}) {
        edges {
          node {
            id
            name
            slug
            role
            firstName            
            mainImage{              
              fluid(maxWidth: 400, imgixParams: { fm: "jpg", auto: "compress" }) {
                ...GatsbyDatoCmsFluid_tracedSVG
              }
            }            
          }
        }
      }
}
`
