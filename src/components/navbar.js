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
      <Navbar.Item>          
        <Link to="/">
          <img src="https://www.datocms-assets.com/20955/1579120310-secondary-logo-small-v3.png"/>
        </Link>
      </Navbar.Item>      
    </Navbar.Brand>
  </Navbar>
)

export default SiteNav;