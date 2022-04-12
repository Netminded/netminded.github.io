import * as React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

const TeamSection = ({teamName, role}) => {
  const { site } = useStaticQuery(query)
  const teamBio = site.siteMetadata.authors
  const teamInfo = teamBio.filter(bio => bio.name === teamName)
  const { name, social } = teamInfo.length === 1 ? teamInfo[0] : teamBio.at(-1)

    return (
        <div className="team-profile">
          {teamName === teamBio[0].name ? 
            <div className="team-profile-img-container"><StaticImage className="team-profile-image" src="../images/blog/NetMinded_Nick_Randall.png" alt={`NetMinded Team - ${name}`} /> </div>
            : teamName === teamBio[1].name ? 
            <div className="team-profile-img-container"><StaticImage className="team-profile-image" src="../images/blog/NetMinded_Tam_Love.png" alt={`NetMinded Team - ${name}`} /> </div>
            : teamName === teamBio[2].name ? 
            <div className="team-profile-img-container"><StaticImage className="team-profile-image" src="../images/blog/NetMinded_Ross_Loveridge.png" alt={`NetMinded Team - ${name}`} /> </div>
            : teamName === teamBio[3].name ? 
            <div className="team-profile-img-container"><StaticImage className="team-profile-image" src="../images/blog/NetMinded_Placeholder.png" alt={`NetMinded Team - ${name}`} /> </div>
            : <div className="team-profile-img-container"><StaticImage className="team-profile-image" src="../images/icon.png" alt={name} /></div>}
            <div className="team-profile-content">
              <p className="team-profile-name"><a href={social} target="_blank"><FontAwesomeIcon className="team-profile-social" icon={faLinkedin} /></a> {name}</p>
              <p className="team-profile-role">{role}</p>
            </div>
        </div>
    )
}


export default TeamSection

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