import * as React from 'react'
import Layout from '../components/layout'
import NetMindedWhiteLabelAppImg from '../images/NetMinded_White_Label_App.svg'
import ISPCustomerImg from '../images/NetMinded_ISP.svg'
import Cta from '../components/cta'
import { useState } from 'react'
import { Waypoint } from 'react-waypoint'

const IspPage = () => {
    const [isHero, setIsHero] = useState(true)
    return (
        <Layout pTitle="White-Label Support App For ISPs" pDescription="The NetMinded app automates fault diagnosis and end-user communications to help ISPs provide a superior customer experience" isHero={isHero} isArticle={false}>
            <header className="isp-msp-page-header">
                <h1>White-Label Support App For ISPs</h1>
                <h3>Provide a superior customer experience by automating fault diagnosis & end-user communications</h3>
            </header>
            <Waypoint onEnter={() => setIsHero(true)} onLeave={() => setIsHero(false)} topOffset={100} />
            <div className="isp-msp-container">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-lg-3">
                            <div className="isp-image-container text-center">
                                <div className="isp-msp-image">
                                    <img src={ISPCustomerImg} alt="WiFi Linking to ISP Customers" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <p><span>We’ve built an ISP-brandable customer support app to help you better assist your customers and stakeholders. Following your brand guidelines and working with your Marketing Team, we’ll ensure your brand colours, fonts, logos and tone of voice are consistent across all touch points in the app.</span></p> 
                            <p><span>Once downloaded from the App Store or Google Play, your customers will see a simple dashboard displaying your brand and their network status via tiles which use red, amber or green to indicate service health.</span></p> 
                            <br />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <h6>Reduce Floods of Support Phone Calls</h6>
                            <p>When a customer’s internet service goes down, they want to know why and when it’ll be back up. Reputation is important so you’ll want to take the conversation offline, away from social media and deliver a personal response to each end user. With visibility of service issues within the app your customers can self-diagnose.</p>
                            <p>By sending useful and timely updates through the app you’ll also prevent floods of inbound calls and support requests from frustrated customers.</p>
                            <br />
                            <h6>Better Customer Communications</h6>
                            <p>With platforms like Amazon and Deliveroo setting a high standard of communication by keeping their customers updated at every stage of service, regular communications have come to be expected from all sectors.</p>
                            <p>Scheduling planned maintenance? Notify your customers ahead of time.</p> 
                            <p>Has an unplanned outage occurred? Send a message to alert individual customers, groups of customers based on geo-location, position in the network, or any customer criteria.</p>
                            <br />
                        </div>
                        <div className="col-lg-6">
                            <div className="isp-msp-app-image text-center">
                                <img src={NetMindedWhiteLabelAppImg} alt="NetMinded White Label App" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                        <h6>Network Connection Testing</h6>
                            <p>The first thing a new customer typically does is run a speed test. However, speed tests are often unreliable as they don’t take the device, router or network capacity into account.</p>
                            <p>So we built one from the ground up. It’s integrated into both the app and dashboard so your support team can remotely run tests, have full visibility of a customers’ connection, network, devices and router — enabling you to accurately test their connection.</p>
                        </div>
                        <div className="col-lg-6">
                            <p className="text-last">Communicating speed test results in the context of the device, router type or network capacity is vital to reduce support resources, so we include contextual results explaining how many HD streams the customer could watch at once, how good their results are for their model of phone or how the results have been impacted by network capacity. Giving context sensitive advice to end users vastly reduces support calls.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Cta ctaText="Contact Us Today, Deploy Tomorrow" ctaBtnText="Contact Us" ctaBtnUrl="https://forms.clickup.com/20532630/f/kjkcp-548/3BQZVT0C3LE05OLX0X"/>
        </Layout>
    )
}

export default IspPage
