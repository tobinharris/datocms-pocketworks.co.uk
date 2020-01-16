import React from 'react'
import { Link, graphql } from 'gatsby'
import "../styles/app.sass";
import {Section, Container, Navbar, Brand, Hero, Columns, Level} from 'react-bulma-components';
import Img from 'gatsby-image'
import '@fortawesome/fontawesome-free/css/all.css'
import SiteNav from '../components/navbar'

const WorkPage = ({ data }) => (
<div>
   <SiteNav></SiteNav>
    <Level>
        <Level.Item>
        <Link to="/" className="button">How we help</Link>
        </Level.Item>
        <Level.Item>
        <a className="button">Our services</a>
        </Level.Item>
        <Level.Item>
        <a className="button">Prices</a>
        </Level.Item>
    </Level>
    <Section>
        <Container>       
        <Columns>
            <Columns.Column size="one-third">
                <Img fixed="https://www.datocms-assets.com/20955/1579120484-digital-business.png?w=300&fm=jpg"/>                                
            </Columns.Column>
            <Columns.Column size="two-thirds" className="content">
                <h1>Work life is full of heavy lifting. So we design apps and mobile solutions that help you lighten the load.</h1>
                <Link to="" className="is-size-4">I wan to improve my customer service</Link>
                <br/><Link to="" className="is-size-4">I want to enable people work more efficiently</Link>
                <br/><Link to="" className="is-size-4">I'm starting a new business and need to innovate</Link>
            </Columns.Column>
        </Columns>        
        </Container>
    </Section>
  </div>
)

export default WorkPage