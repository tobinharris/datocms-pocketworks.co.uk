import React from 'react'
import { graphql, Link } from 'gatsby'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Img from 'gatsby-image'
import SiteNav from '../components/navbar'
import { Tabs, Section, Container, Brand, Hero, Columns, Card } from 'react-bulma-components';

const People = ({ data: { people } }) => (
  <div>
    <SiteNav></SiteNav>
    <div className="tabs is-medium is-centered">
      <ul>
      <li><Link to="/about">Story</Link></li>
        <li className="is-active"><a>People</a></li>
        <li><Link to="/careers">Join Us</Link></li>        
      </ul>
    </div>

    
    <Section>
        <Container>
            <Columns className="is-centered">
                <Columns.Column className="is-9">
                    <Columns className="is-multiline">
                        {people.edges.map(({ node: person }) => ( 
                            <Columns.Column className="is-3 has-text-centered content">
                                <Img fluid={person.mainImage.fluid}/>
                            <b>{person.firstName}</b>
                            <br/><span className="has-text-grey">{person.role}</span>
                            </Columns.Column>
                        ))}
                    </Columns>
                 </Columns.Column>
            </Columns>
        </Container>
    </Section>
  </div>
)

export default People

export const query = graphql`
  query PeopleQuery {
    people: allDatoCmsAuthor(limit: 30, sort: {fields: [name], order: ASC}, filter: {role: {ne: ""}}) {
        edges {
          node {
            id
            name
            role
            firstName            
            mainImage{              
              fluid(maxWidth: 400, imgixParams: { fm: "jpg", auto: "compress" }) {
                ...GatsbyDatoCmsSizes
              }
            }            
          }
        }
      }
}
`
