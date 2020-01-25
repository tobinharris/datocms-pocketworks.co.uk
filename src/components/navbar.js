import React, { Component } from 'react'
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
class SiteNav extends React.Component {
  componentDidMount() {
    //<i class="fas fa-bars"></i>
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {

          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');

        });
      });
    }
  }
  render() {
    return (
      <Navbar className={"is-spaced"}>
        <Navbar.Brand>
          <Navbar.Item renderAs="span">
            <Link to="/">
              {this.props.className === 'is-light' ? (
                <img src={this.props.fullLogo || true ? "https://www.datocms-assets.com/20955/1579120308-secondary-logo-white-v3.png" : "https://www.datocms-assets.com/20955/1579431602-secondary-logo-small-square-white-v3a.png"} alt="Pocketworks Logo" />
              ) : (
                  <img src={this.props.fullLogo || true ? "https://www.datocms-assets.com/20955/1579120310-secondary-logo-small-v3.png" : "https://www.datocms-assets.com/20955/1579431570-secondary-logo-small-square-v3a.png"} alt="Pocketworks Logo" />
                )}
            </Link>
          </Navbar.Item>
          <Navbar.Burger className="navbar-burner" data-target="site-menu">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>            
          </Navbar.Burger>
        </Navbar.Brand>

        <div id="site-menu" className="navbar-menu navbar-end">

          <Navbar.Item className={this.props.className} renderAs="span"><Link to="/work" activeClassName="is-active" partiallyActive={true}>Work</Link></Navbar.Item>
          <Navbar.Item className={this.props.className} renderAs="span"><Link to="/about/story" activeClassName="is-active" partiallyActive={true}>About</Link></Navbar.Item>
          <Navbar.Item className={this.props.className} renderAs="span"><Link to="/blog" activeClassName="is-active" partiallyActive={true}>Blog</Link></Navbar.Item>
          <Navbar.Item className={this.props.className} renderAs="span"><Link to="/contact" activeClassName="is-active" partiallyActive={true}>Contact</Link></Navbar.Item>

        </div>
      </Navbar>
    )
  }
}

export default SiteNav;