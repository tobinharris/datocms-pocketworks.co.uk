import React from 'react'
import {Link} from 'gatsby'
import Img from 'gatsby-image'
import {Card} from 'react-bulma-components';
import ArrowLink from '../components/link-with-arrow'

function BlogCard(props){
    return (
    <Card className="is-blog">
        
        <Link to={'blog/' + props.article.slug}>
                {props.article.featuredMedia ? (
                <div class="card-image">
                    
                      <Img fluid={props.article.featuredMedia.fluid}/>
                    
                </div>                    
                ) : (
                        <img src="https://www.datocms-assets.com/20955/1579120467-speedupillustrationpocketworks.png?fm=jpg&w=250" alt="Placeholder" />
                    )
                }
                </Link>
        
        
        
        <Card.Content>
            <p className="is-uppercase is-size-7"><span class="has-text-success">Blog</span> {props.article.author.name}, <time datetime={props.article.date}>{props.article.date}</time></p>
            <h3><Link to={'blog/' + props.article.slug}>{props.article.title}</Link></h3>


        </Card.Content>
        <Card.Footer className="is-hidden">
            <ArrowLink className="card-footer-item" to={'blog/' + props.article.slug}>Read full article</ArrowLink>
        </Card.Footer>
    </Card>
    )
}

export default BlogCard;