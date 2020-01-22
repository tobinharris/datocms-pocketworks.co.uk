import React from 'react'
import "../styles/app.sass";
import Layout from '../components/layout'
import Link from 'gatsby'
import SiteNav from '../components/navbar'
import { Columns, Hero, Container } from 'react-bulma-components'
const NotFoundPage = () => (
  <Layout>
    <SiteNav fullLogo="true"></SiteNav>
    <Hero>      
        <Hero.Body>
        <Container className="content">
          <Columns>
          <Columns.Column className="is-offset-1 is-8">
          <h1 className="is-size-1 has-text-danger">Oh no!<sup><code className="is-size-6">404</code></sup></h1>
          <h2>Drat, we seem to have lost that page you wanted :(</h2>          
          <p><a className="button is-leafy is-primary" id="lnk" href={'/blog' + window.location.pathname}>Please try this one</a></p>  
          <p><br/>Or have a <a href="/">quick browse around.</a></p>        
          </Columns.Column>
          </Columns>
          </Container>
        </Hero.Body>
        
    </Hero>
    <script>
    {/* alert('/blog/' + window.location.pathname)
    document.getElementById('lnk').innerHtml = "/blog/"" + window.location.pathname; */}
    </script>
  </Layout>
  
)

export default NotFoundPage
