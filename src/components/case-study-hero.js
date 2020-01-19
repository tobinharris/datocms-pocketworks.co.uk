import React from 'react'
import { Link } from 'gatsby'
import {Hero,Columns,Container} from 'react-bulma-components';
import ArrowLink from '../components/link-with-arrow'

function CaseStudyHero(props){
return (               
    <div>
    {props.flipped ? (
    <Columns className="content">
        <Columns.Column className="is-6 is-offset-1 content">
            <img src={props.logo}></img>
            <h2 className="is-top-marginless" dangerouslySetInnerHTML={{__html: props.titleHtml}}></h2>
            <p><ArrowLink to={props.to} className="is-size-4 has-text-success">Read the case study</ArrowLink></p>                        
        </Columns.Column>
        <Columns.Column className="is-5">
            <img src={props.mainImage}></img>
        </Columns.Column>
    </Columns>                       
    ) : (
    <Columns className="content">
        <Columns.Column className="is-4">
        <img src={props.mainImage}></img>
        </Columns.Column>
        <Columns.Column className="is-6 is-offset-0">
        <img src={props.logo}></img>
            <h2 className="is-top-marginless" dangerouslySetInnerHTML={{__html: props.titleHtml}}></h2>
            <p><ArrowLink to={props.to} className="is-size-4 has-text-success">Read the case study</ArrowLink></p>                        
        </Columns.Column>
    </Columns>    
    )}
    </div>
    )
}

export default CaseStudyHero;