import * as React from 'react'
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
                    <p>NetMinded is a low code/no-code platform helping innovative technology providers automate support to enhance their customers experience.</p>
                </div>
            </div>
        </>
    )
}

export default AfterPostEntry