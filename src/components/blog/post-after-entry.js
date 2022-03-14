import * as React from 'react'
import { Link } from 'gatsby'
import NetMindedDashboardImg from '../../images/NetMinded_Dashboard.svg'
import SocialShare from './social-share'

const AfterPostEntry = ({slug, title}) => {
    return (
        <>
            <SocialShare slug={slug} title={title} />
            <div className="blog-post-after-entry">
                <img src={NetMindedDashboardImg} alt="NetMinded Dashboard" />
                <div className="blog-post-after-entry-info">
                    <h4>More about NetMinded</h4>
                    <p>NetMinded helps innovative technology providers automate support to enhance their customers experience.</p>
                    <Link className="btn" to="/">Learn More</Link>
                </div>
            </div>
        </>
    )
}

export default AfterPostEntry