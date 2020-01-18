import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { StaticQuery, graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";
import Footer from 'react-bulma-components/lib/components/footer';

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
            {children}
            <Footer>
                <Columns className="content is-size-6">
                    <Columns.Column className="is-3 is-offset-2">
                        
                        <h4>Contact</h4>                        
                        <p>Pocketworks<br/>Ground Floor, Monarch House<br/>Queen Street, Leeds, LS1 2TW</p>                        
                        <p>
                        <Link to="tel:0113 466 0302">0113 466 0302</Link>
                        <br/><Link to="mailto:hello@pocketworks.co.uk">hello@pocketworks.co.uk</Link>                        
                        </p>
                        <h4>Company</h4>                        
                        <ul>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/about">Approach</Link></li>
                            <li><Link to="/blog">Blog &amp; News</Link></li>
                        </ul>
                    </Columns.Column>
                    <Columns.Column className="is-3">
                        <h4>Work</h4>
                        <ul>
                            <li><Link to="/work">Customer Loyalty Apps</Link></li>
                            <li><Link to="/workforce-productivity">Work Productivity Apps</Link></li>                            
                        </ul>
                        <h4>Services</h4>
                        <ul>
                        <li><Link to="/services">User Research</Link></li>
                        <li><Link to="/services">User Experience Design</Link></li>
                        <li><Link to="/services">Service Design</Link></li>
                        <li><Link to="/services">App Design</Link></li>
                        <li><Link to="/services">Native App Development</Link></li>
                        <li><Link to="/services">Progressive Web Apps (PWAs)</Link></li>
                        <li><Link to="/services">Data and Cloud Solutions</Link></li>
                        <li><Link to="/services">Analytics</Link></li>
                        </ul>
                    </Columns.Column>
                    <Columns.Column className="is-3">
                        <h4>Packages</h4>
                        <ul>
                        <li><Link to="/services">Light Discovery</Link></li>
                        <li><Link to="/services">Research Sprint</Link></li>
                        <li><Link to="/services">App Prototyping</Link></li>
                        <li><Link to="/services">App Development</Link></li>
                        <li><Link to="/services">Mobile Consultancy</Link></li>
                        <li><Link to="/services">Audits and Reviews</Link></li>
                        
                        </ul>
                    </Columns.Column>
                </Columns>
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