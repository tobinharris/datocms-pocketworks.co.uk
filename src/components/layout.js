import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Footer from 'react-bulma-components/lib/components/footer';
import Container from 'react-bulma-components/lib/components/container';

import "../styles/app.sass";
import { Section, Columns } from "react-bulma-components";

const TemplateWrapper = ({ children }) => {  
  const [showMenu, setShowMenu] = useState(false);
    return (
      <StaticQuery
        query={graphql`
          query LayoutQuery {
            datoCmsSite {
              globalSeo {
                siteName
              }
              faviconMetaTags {
                ...GatsbyDatoCmsFaviconMetaTags
              }
            }
          }         
        `}
        render={data => (
          <div>
            <HelmetDatoCms
            favicon={data.datoCmsSite.faviconMetaTags}            
            />

            {children}
            <Footer>
              <Container>
                <Columns className="content is-size-6">
                    <Columns.Column className="is-5 is-offset-1">
                        
                        <h4>Contact</h4>                        
                        <p>Pocketworks Mobile Ltd<br/>Ground Floor, Monarch House<br/>Queen Street, Leeds, LS1 2TW</p>                        
                        <p>
                        <a href="tel:0113 466 0302">0113 466 0302</a>
                        <br/><a href="mailto:hello@pocketworks.co.uk">hello@pocketworks.co.uk</a>                        
                        </p>                        
                        <p>
                          <a href="https://twitter.com/thepocketworks"><span className="icon is-medium has-text-dark"><i class="fab fa-twitter"></i></span></a>
                          <a href="https://www.linkedin.com/company/pocketworks-mobile-ltd"><span className="icon is-medium has-text-dark"><i class="fab fa-linkedin-in"></i></span></a>
                          <a href="https://dribbble.com/pocketworks"><span className="icon is-medium has-text-dark"><i class="fab fa-dribbble"></i></span></a>
                          <a href="https://github.com/pocketworks"><span className="icon is-medium has-text-dark"><i class="fab fa-github"></i></span></a>                          
                        </p>
                        <p><span className="icon has-text-dark"><i class="fas fa-copyright"></i></span> 2020 Pocketworks Mobile Ltd</p>
                        
                        <p>
                        Pocketworks is a UK registered company no. <a href="https://beta.companieshouse.gov.uk/company/08041956">08041956</a>. VAT registration 136641417. 
                        </p>
                    </Columns.Column>
                    <Columns.Column className="is-3">
                        <h4>Work</h4>
                        <ul>
                            <li><Link to="/work">Customer Loyalty Apps</Link></li>
                            <li><Link to="/work/workforce-productivity">Work Productivity Apps</Link></li>                            
                        </ul>
                        <h4>Services</h4>
                        <ul>
                        <li><Link to="/work/services">User Research</Link></li>
                        <li><Link to="/work/services">User Experience Design</Link></li>
                        <li><Link to="/work/services">Service Design</Link></li>
                        <li><Link to="/work/services">App Design</Link></li>
                        <li><Link to="/work/services">Native App Development</Link></li>
                        <li><Link to="/work/services">Progressive Web Apps (PWAs)</Link></li>
                        <li><Link to="/work/services">Data and Cloud Solutions</Link></li>
                        <li><Link to="/work/services">Analytics</Link></li>
                        </ul>
                    </Columns.Column>
                    <Columns.Column className="is-3">
                    <h4>Company</h4>                        
                        <ul>
                            <li><Link to="/about/story">About</Link></li>
                            <li><Link to="/about/careers">Careers</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                        </ul>
                        <h4>Packages</h4>
                        <ul>
                        <li><Link to="/work/services">Light Discovery</Link></li>
                        <li><Link to="/work/services">Research Sprint</Link></li>
                        <li><Link to="/work/services">App Prototyping</Link></li>
                        <li><Link to="/work/services">App Development</Link></li>
                        <li><Link to="/work/services">Mobile Consultancy</Link></li>
                        <li><Link to="/work/services">Audits and Reviews</Link></li>
                        
                        </ul>
                    </Columns.Column>
                </Columns>
                </Container>
            </Footer>            
         </div>         
        )}
      />
    );
  };
  
  TemplateWrapper.propTypes = {
    children: PropTypes.object
  };
  
  export default TemplateWrapper;