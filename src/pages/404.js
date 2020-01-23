import React, {Component} from 'react'
import PropTypes from 'prop-types'
import "../styles/app.sass";
import Layout from '../components/layout'
import Link from 'gatsby'
import SiteNav from '../components/navbar'
import { Columns, Hero, Container } from 'react-bulma-components'



class NotFoundPage extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     width: window.innerWidth,
  //   };
  // }
  componentDidMount() {
    var el = document.getElementById('lnk')
    el.setAttribute('href', '/blog' + (window ? window.location.pathname : ''))
    //el.innerHTML = '/blog' + (window ? window.location.pathname : '')    
  }
  render() {
    return (
      <Layout>
        <SiteNav fullLogo="true"></SiteNav>
        <Hero>
          <Hero.Body>
            <Container className="content">
              <Columns>
                <Columns.Column className="is-offset-1 is-8">
                  <h1 className="is-size-1 has-text-danger">Oh no!<sup><code className="is-size-6">404</code></sup></h1>
                  <h2>Your page has moved :(</h2>                  
                  <p><a className="button is-leafy is-primary" id="lnk" href="/blog">Try this one?</a></p>
                  <p><br />Or have a <a href="/">quick browse around.</a></p>
                </Columns.Column>
              </Columns>
            </Container>
          </Hero.Body>
        </Hero>
      </Layout>
    )
  }
}

export default NotFoundPage
