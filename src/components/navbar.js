import React from 'react'
import "../styles/app.sass";

import { Link, graphql } from 'gatsby'
import Element from 'react-bulma-components/lib/components/element';
import Footer from 'react-bulma-components/lib/components/footer';
import Hero from 'react-bulma-components/lib/components/hero';
import Icon from 'react-bulma-components/lib/components/icon';
import Level from 'react-bulma-components/lib/components/level';
import Box from 'react-bulma-components/lib/components/box';
import Button from 'react-bulma-components/lib/components/button';
import Section from 'react-bulma-components/lib/components/section';
import Navbar from 'react-bulma-components/lib/components/navbar';
import Tag from 'react-bulma-components/lib/components/tag';
import Tile from 'react-bulma-components/lib/components/tile';
import Tabs from 'react-bulma-components/lib/components/tabs';
import Container from 'react-bulma-components/lib/components/container';
import Columns from 'react-bulma-components/lib/components/columns';
import Img from 'gatsby-image'


import '@fortawesome/fontawesome-free/css/all.css'

//import Layout from "../components/layout"

const SiteNav = ({ data }) => (
<Navbar className="is-spaced">
    <Navbar.Brand>      
      <Navbar.Item renderAs="span">
      <Link to="/">
        <img src="https://www.datocms-assets.com/20955/1579120310-secondary-logo-small-v3.png"/>       
      </Link>           
      </Navbar.Item>      
    </Navbar.Brand>

    <Navbar.Menu className="is-hidden">
      <Navbar.Container>
        <Navbar.Item renderAs="span"><Link to="/">Home</Link></Navbar.Item>
        <Navbar.Item renderAs="span"><Link to="/about">About</Link></Navbar.Item>
        <Navbar.Item dropdown hoverable>
          <Navbar.Link>Work</Navbar.Link>
          <Navbar.Dropdown boxed>
            
            <Navbar.Item><Link to="/work">Customer Loyalty</Link></Navbar.Item>
            <Navbar.Item to="/work">Work Productivity</Navbar.Item>            
            <Navbar.Divider></Navbar.Divider>
            <Navbar.Item><Link to="/blog/heneghans-selects-pocketworks-to-support-its-growth">Services &amp; Packages</Link></Navbar.Item>
            <Navbar.Item><Link to="/blog/heneghans-selects-pocketworks-to-support-its-growth">Technology</Link></Navbar.Item>            
          </Navbar.Dropdown>
        </Navbar.Item>
        <Navbar.Item><Link to="/">Contact</Link></Navbar.Item>
        <Navbar.Item><Link to="/">Careers</Link></Navbar.Item>
      </Navbar.Container>
    </Navbar.Menu>

    

  </Navbar>
)

export default SiteNav;