import * as React from 'react'
import Layout from '../components/layout'
import NetMindedLaunchTeamImg from '../images/NetMinded_Launch_Team.png'
import NetMindedTeamImg from '../images/NetMinded_Team.png'
import { StaticImage } from 'gatsby-plugin-image'
import Cta from '../components/cta'
import { useState } from 'react'
import { Waypoint } from 'react-waypoint'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
        faGaugeHigh,
        faCloudArrowDown,
        faDiagramNext,
        faListCheck,
        faTable,
        faWindowMaximize, 
        faMobile } from '@fortawesome/free-solid-svg-icons'
import TeamSection from '../components/team-profile'

const AboutPage = () => {
    const [isHero, setIsHero] = useState(true)
    return (
        <Layout pTitle="About" pDescription="A Comprehensive Test Framework, White Label App, Integrations & so much more" isHero={isHero} isArticle={false}>
            <header className="about-page-header">
                <h1>About NetMinded</h1>
                <h3>Learn more about us and our team</h3>
            </header>
            <Waypoint onEnter={() => setIsHero(true)} onLeave={() => setIsHero(false)} topOffset={100} />
            <div className="about-container">
                <div className="container">
                    <div className="row about-content mb-5">
                        <div className="col-lg-6">
                            <p><span>Back in 2018 we became fascinated with delivering better customer support service options. Looking through the eyes of our small ISP customers (and having regular conversations with them) we quickly discovered a gap in the market for the monitoring services we looked to provide.</span></p>
                            <p>Fast forward to 2022 and our platform has dramatically evolved. Our initial goals for a better customer service solution have been realized. We now have a full web-dashboard with multiple features and integrations, apps with the same functionality on the app store/playstore and a full pipeline of future developments.</p>
                        </div>
                        <div className="offset-lg-1 col-lg-5">
                            <div className="about-img-container">
                                <StaticImage src='../images/NetMinded_Launch_Team.png' />
                            </div>
                        </div>
                    </div>
                    <div className="row about-content pt-5 mb-5">
                        <div className="offset-lg-1 col-lg-6 order-lg-2">
                            <p>We couldn’t do any of this though without our brilliant team behind us. Our office based in Bristol, England houses our core team though we have other staff members remotely based all over the world. We are headed up here by our leadership team who have over 30 years of experience within the telecommunications and networking industry so we’re in safe hands.</p>
                            <p>There are many ways to provide customer support but we pride ourselves on giving support staff and customers the full story. With our platform you can empower both of them, which leads to faster resolutions of issues and happier stakeholders.</p>
                        </div>
                        <div className="col-lg-5 order-lg-1">
                            <div className="about-img-container">
                                <StaticImage src='../images/NetMinded_Team.png' />
                            </div>
                        </div>
                    </div>
                    <div className="row pt-5">
                        <div className="col-12 about-team-header">
                            <h5 className="text-accent">Meet Our Team</h5>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 col-lg-3">
                            <TeamSection teamName="Nick Randall" role="Managing Director" />
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <TeamSection teamName="Tam Love" role="Head of UX & Digital" />
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <TeamSection teamName="Ross Loveridge" role="Marketing Lead" />
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <TeamSection teamName="Tom Collins" role="Developer" />
                        </div>
                    </div>
                </div>
            </div>
            <Cta ctaText="Contact Us Today, Deploy Tomorrow" ctaBtnText="Contact Us" ctaBtnUrl="https://forms.clickup.com/20532630/f/kjkcp-548/3BQZVT0C3LE05OLX0X"/>
        </Layout>
    )
}

export default AboutPage
