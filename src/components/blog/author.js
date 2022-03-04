import * as React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

const AuthorSection = ({author, posted, reading}) => {
  const { site } = useStaticQuery(query)
  const authorBio = site.siteMetadata.authors
  const authorInfo = authorBio.filter(bio => bio.name === author)
  const { name, social } = authorInfo.length === 1 ? authorInfo[0] : authorBio.at(-1)

    return (
        <div className="post-author">
          {author === authorBio[0].name ? 
            <StaticImage className="post-author-image" src="../../images/blog/NetMinded_Nick_Randall.png" alt={`Author ${name}`} /> 
            : author === authorBio[1].name ? 
            <StaticImage className="post-author-image" src="../../images/blog/NetMinded_Tam_Love.png" alt={`Author ${name}`} /> 
            : author === authorBio[2].name ? 
            <StaticImage className="post-author-image" src="../../images/blog/NetMinded_Ross_Loveridge.png" alt={`Author ${name}`} /> 
            : <StaticImage className="post-author-image" src="../../images/icon.png" alt={`Author ${name}`} />}
            <div>
              <p className="post-author-name"><a href={social}><FontAwesomeIcon className="post-author-social" icon={faLinkedin} /></a> {name}</p>
              <p className="post-author-info">{posted} · {reading}</p>
            </div>
        </div>
    )
}


export default AuthorSection

const query = graphql`
query {
  site {
    siteMetadata {
      authors {
        name
        social
      }
    }
  }
}
`