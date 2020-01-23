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

function SiteNav(props){
  return (<Navbar className="is-spaced">
    <Navbar.Brand>      
      <Navbar.Item renderAs="span">
      <Link to="/">
        {props.className === 'is-light' ? (
        <img src={props.fullLogo || true ? "https://www.datocms-assets.com/20955/1579120308-secondary-logo-white-v3.png": "https://www.datocms-assets.com/20955/1579431602-secondary-logo-small-square-white-v3a.png"} alt="Pocketworks Logo"/>       
        ) : (
        <img src={props.fullLogo || true ? "https://www.datocms-assets.com/20955/1579120310-secondary-logo-small-v3.png" : "https://www.datocms-assets.com/20955/1579431570-secondary-logo-small-square-v3a.png"} alt="Pocketworks Logo"/>       
        )}
      </Link>           
      </Navbar.Item>   
      <Navbar.Burger data-target="site-menu">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </Navbar.Burger>      
    </Navbar.Brand>
    
    <div id="site-menu" className="navbar-menu navbar-end">
      
        <Navbar.Item className={props.className} renderAs="span"><Link to="/work" activeClassName="is-active" partiallyActive={true}>Work</Link></Navbar.Item>
        <Navbar.Item className={props.className} renderAs="span"><Link to="/about/story" activeClassName="is-active" partiallyActive={true}>About</Link></Navbar.Item>
        <Navbar.Item className={props.className} renderAs="span"><Link to="/blog" activeClassName="is-active" partiallyActive={true}>Blog</Link></Navbar.Item>
        <Navbar.Item className={props.className} renderAs="span"><Link to="/contact" activeClassName="is-active" partiallyActive={true}>Contact</Link></Navbar.Item>        
      
    </div>
  </Navbar>
  )
}

export default SiteNav;