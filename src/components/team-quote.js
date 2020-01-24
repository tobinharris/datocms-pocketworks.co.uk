import React from 'react'
import {Hero,Columns,Container} from 'react-bulma-components';

function TeamQuote(props){
return (
<Hero className="is-small">
    <Hero.Body>
        <Container className="content">
        <hr/>
            <Columns className="is-inline-flex">
                <Columns.Column className="is-3 is-offset-1">
                    <img src={props.imgSrc}></img>
                </Columns.Column>
                <Columns.Column className="is-6 ">
                    <br /><br /><br />
                    <p className="is-size-4">
                    "{props.quote}"
                    </p>
                    <p class="tag is-medium">{props.who}</p>

                </Columns.Column>
            </Columns>
            <hr/>
        </Container>
    </Hero.Body>
</Hero>
)
};

export default TeamQuote;