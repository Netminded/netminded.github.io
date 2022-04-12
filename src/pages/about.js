import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Cta from '../components/cta'
import { useState } from 'react'
import { Waypoint } from 'react-waypoint'
import TeamSection from '../components/team-profile'

const AboutPage = () => {
    const [isHero, setIsHero] = useState(true)
    return (
        <Layout pTitle="About" pDescription="We pride ourselves on giving businesses the ability to share status information with the people who matter." isHero={isHero} isArticle={false}>
            <header className="about-page-header">
                <h1>About NetMinded</h1>
                <h3>Learn more about us & our team</h3>
            </header>
            <Waypoint onEnter={() => setIsHero(true)} onLeave={() => setIsHero(false)} topOffset={100} />
            <div className="about-container">
                <div className="container">
                    <div className="row about-content mb-5">
                        <div className="col-lg-6">
                            <p><span>NetMinded was founded in 2018 when we established there was a lack of transparency around status information within customer support and between stakeholders. We found that status information is often only accessible to just a couple of individuals leaving many others in the dark. Partnering with small ISP's and MSP's we devised a goal and a solution to make status information more accessible and transparent.</span></p>
                            <p>Fast forward to today and our initial goal has been realised resulting in a web Dashboard with multiple features and integrations, companion Apps on iOS and Android along with a full pipeline of future developments.</p>
                        </div>
                        <div className="offset-lg-1 col-lg-5">
                            <div className="about-img-container">
                                <StaticImage src='../images/NetMinded_Launch_Team.png' />
                            </div>
                        </div>
                    </div>
                    <div className="row about-content pt-5 mb-5">
                        <div className="offset-lg-1 col-lg-6 order-lg-2">
                            <p>We couldn’t have taken these strides forward without our brilliant team behind us. Our Bristol based office provides a basecamp for our core team and we have other team members working remotely around the world. We are guided by our leadership team who have over 30 years of experience within the telecommunications and networking industry, so we’re in safe and experienced hands.</p>
                            <p>There are many ways to provide customer support but we pride ourselves on giving businesses the ability to share status information with the people who matter. With our platform you can empower your support teams and customers, which leads to faster resolution of issues, a reduction in operational costs and happier stakeholders.</p>
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
                    <div className="row team-container">
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
