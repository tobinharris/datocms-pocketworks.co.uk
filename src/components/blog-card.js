import React from 'react'
import {Link} from 'gatsby'
import Img from 'gatsby-image'
import {Card} from 'react-bulma-components';
import ArrowLink from '../components/link-with-arrow'

function BlogCard(props){
    return (
    <Card className="is-blog">
        <div class="card-image">
            <Link to={'blog/' + props.article.slug}>
            {props.article.featuredMedia ? (
                <Img fluid={props.article.featuredMedia.fluid} className=""></Img>
            ) : (
                    <img src="https://www.datocms-assets.com/20955/1579120467-speedupillustrationpocketworks.png?fm=jpg&w=250" />
                )
            }
            </Link>

        </div>
        <Card.Content>
            <p className="is-size-7"><time datetime={props.article.date}>{props.article.date}</time></p>
            <h3><Link to={'blog/' + props.article.slug}>{props.article.title}</Link></h3>


        </Card.Content>
        <Card.Footer className="is-hidden">
            <ArrowLink className="card-footer-item" to={'blog/' + props.article.slug}>Read full article</ArrowLink>
        </Card.Footer>
    </Card>
    )
}

export default BlogCard;