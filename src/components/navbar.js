import React from 'react'
import "../styles/app.sass";
import { Link, graphql } from 'gatsby'
import {Navbar} from 'react-bulma-components';
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

    <Navbar.Menu>
      <Navbar.Container>
        <Navbar.Item renderAs="span"><Link to="/">Home</Link></Navbar.Item>
        <Navbar.Item renderAs="span"><Link to="/about">About</Link></Navbar.Item>
        <Navbar.Item dropdown hoverable>
          <Navbar.Link>Work</Navbar.Link>
          <Navbar.Dropdown boxed>
            <Navbar.Item><Link to="/blog/heneghans-selects-pocketworks-to-support-its-growth">Services</Link></Navbar.Item>            
            <Navbar.Item href="/about">Packages</Navbar.Item>
            <Navbar.Item href="/about">Clients</Navbar.Item>            
          </Navbar.Dropdown>
        </Navbar.Item>
        <Navbar.Item><Link to="/">Contact</Link></Navbar.Item>
        <Navbar.Item><Link to="/">Careers</Link></Navbar.Item>
      </Navbar.Container>
    </Navbar.Menu>

    

  </Navbar>
)

export default SiteNav;