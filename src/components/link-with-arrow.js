import React from 'react'
import { Link } from 'gatsby'

function ArrowLink(props){
return (
<Link to={props.to} className={props.className}>{props.children} <span class="icon"><i class="fas fa-long-arrow-alt-right"></i></span></Link>
)
}
export default ArrowLink;