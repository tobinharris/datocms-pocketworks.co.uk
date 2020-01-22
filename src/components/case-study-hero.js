import React from 'react'
import {Columns} from 'react-bulma-components';
import ArrowLink from '../components/link-with-arrow'

function CaseStudyHero(props){
return (               
    <div>
    {props.flipped ? (
    <Columns className="content is-vcentered">
        <Columns.Column className="is-6 is-offset-1 content ">
            { props.logo ? (
            <img src={props.logo} alt="Logo"></img>
            ) : (
            <span></span>
            )}
            <h2 className="is-top-marginless is-size-3-mobile" dangerouslySetInnerHTML={{__html: props.titleHtml}}></h2>
            { props.excerpt ? (
                <p className="is-top-marginless">{props.excerpt}</p>
            ) : (
                <span className="is-hidden"></span>
            )}
            <p><ArrowLink to={props.to} className={props.className + ' is-size-4'}>{ props.toText ? props.toText : 'Read the case study'}</ArrowLink></p>                        
        </Columns.Column>
        <Columns.Column className="is-4">
            <img src={props.mainImage} alt="Main image"></img>
        </Columns.Column>
    </Columns>                       
    ) : (
    <Columns className="content is-vcentered">
        <Columns.Column className="is-4 is-offset-0">
            <img src={props.mainImage} alt="Main Image"></img>
        </Columns.Column>
        <Columns.Column className="is-6">
            { props.logo ? (
            <img src={props.logo} alt="Logo"></img>
            ) : (
            <span></span>
            )}
            <h2 className="is-top-marginless is-size-3-mobile" dangerouslySetInnerHTML={{__html: props.titleHtml}}></h2>
            { props.excerpt ? (
                <p className="is-top-marginless">{props.excerpt}</p>
            ) : (
                <span className="is-hidden"></span>
            )}
            <p><ArrowLink to={props.to} className={props.className + ' is-size-4'}>{ props.toText ? props.toText : 'Read the case study'}</ArrowLink></p>                        
        </Columns.Column>
    </Columns>    
    )}
    </div>
    )
}

export default CaseStudyHero;