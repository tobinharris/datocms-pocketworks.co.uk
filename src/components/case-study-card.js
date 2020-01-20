import React from 'react'
import {Link} from 'gatsby'
import Img from 'gatsby-image'
import {Card} from 'react-bulma-components';
import ArrowLink from '../components/link-with-arrow'

function CaseStudyCard(props){
    return (
    <Card className="is-case-study">
        
        <Link to={'case-studies/' + props.caseStudy.slug}>
                {props.caseStudy.heroBannerImage ? (
                <div class="card-image">
                    
                      <Img fluid={props.caseStudy.heroBannerImage.fluid}/>
                    
                </div>                    
                ) : (
                        <img src="https://www.datocms-assets.com/20955/1579120467-speedupillustrationpocketworks.png?fm=jpg&w=250" />
                    )
                }
                </Link>
        
        
        
        <Card.Content>
            <p className="is-uppercase is-size-7"><span class="has-text-purple">Case Study</span> {props.caseStudy.client.companyName}</p>
            <h3><Link to={'/case-studies/' + props.caseStudy.slug} dangerouslySetInnerHTML={{__html: props.caseStudy.title}}></Link></h3>


        </Card.Content>
        <Card.Footer className="is-hidden">
            <ArrowLink className="card-footer-item" to={'case-studies/' + props.caseStudy.slug}>Read Case Study</ArrowLink>
        </Card.Footer>
    </Card>
    )
}

export default CaseStudyCard;