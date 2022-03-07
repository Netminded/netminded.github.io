import * as React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,  
  faLinkedinIn,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const SocialShare = ({slug, title}) => {
    const { site } = useStaticQuery(query)
    const url = `${site.siteMetadata.siteUrl}/blog${slug}`
    return (
        <div className="social-sharing">
            <h4>Share This Article</h4>
            <ul>
                <li><a className="facebook-share" href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`} target="_blank"><FontAwesomeIcon className="social-share-icon" icon={faFacebookF} />Facebook</a></li>
                <li><a className="linkedin-share" href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}`} target="_blank"><FontAwesomeIcon className="social-share-icon" icon={faLinkedinIn} />LinkedIn</a></li>
                <li><a className="twitter-share" href={`https://twitter.com/intent/tweet?text=Check%20out%20this%20article%20on%20NetMinded&url=${encodeURIComponent(url)}`} target="_blank"><FontAwesomeIcon className="social-share-icon" icon={faTwitter} />Twitter</a></li>
                <li><a className="email-share" href={`mailto:?subject=Check%20out%20this%20article%20on%20NetMinded&body=${title}%20${encodeURIComponent(url)}`} target="_blank"><FontAwesomeIcon className="social-share-icon" icon={faEnvelope} />Email</a></li>
            </ul>
        </div>
    )
}
export default SocialShare

const query = graphql`
query {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`

