import * as React from 'react'
import Layout from '../components/layout'
import NetMindedAppDashImg from '../images/NetMinded_Platform_Features.svg'
import Cta from '../components/cta'
import { useState } from 'react'
import { Waypoint } from 'react-waypoint'

const MspPage = () => {
    const [isHero, setIsHero] = useState(true)
    return (
        <Layout pTitle="White-Label Support App For ISPs" pDescription="The NetMinded app automates fault diagnosis and end-user communications to help ISPs provide a superior customer experience" isHero={isHero} isArticle={false}>
            <header className="features-page-header">
                <h1>White-Label Support App For ISPs</h1>
                <h3>Provide a superior customer experience</h3>
            </header>
            <Waypoint onEnter={() => setIsHero(true)} onLeave={() => setIsHero(false)} topOffset={100} />
            <div className="features-container">
                <div className="container">
                    {/* <div className="row">
                        <div className="col-12">
                            <div className="features-image">
                                <img src={NetMindedAppDashImg} alt="NetMinded App and Dashboard" />
                            </div>
                        </div>
                    </div> */}
                    
                    <div className="row">
                        <div className="col-md-6">
                            
                        </div>
                    </div>
                </div>
            </div>
            <Cta ctaText="Contact Us Today, Deploy Tomorrow" ctaBtnText="Contact Us" ctaBtnUrl="https://forms.clickup.com/20532630/f/kjkcp-548/3BQZVT0C3LE05OLX0X"/>
        </Layout>
    )
}

export default MspPage
