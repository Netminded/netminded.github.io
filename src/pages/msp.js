import * as React from 'react'
import Layout from '../components/layout'
import NetMindedWhiteLabelAppImg from '../images/NetMinded_White_Label_App.svg'
import MSPCustomerImg from '../images/NetMinded_MSP.svg'
import Cta from '../components/cta'
import { useState } from 'react'
import { Waypoint } from 'react-waypoint'
import SEO from '../components/seo'

const MspPage = () => {
    const [isHero, setIsHero] = useState(true)
    return (
        <Layout isHero={isHero}>
            <header className="isp-msp-page-header">
                <h1>White-Label Support App For MSPs</h1>
                <h3>Provide a superior customer experience by automating fault diagnosis & end-user communications</h3>
            </header>
            <Waypoint onEnter={() => setIsHero(true)} onLeave={() => setIsHero(false)} topOffset={100} />
            <div className="isp-msp-container">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-lg-9">
                            <p><span>We’ve built a brandable app and a variety of support tools for IT partners and MSPs to fully automate fault diagnosis and customer communications — helping them to provide a more professional service and maintain customer trust.</span></p> 
                            <p><span>Once downloaded from the App Store or Google Play, your customers will see a simple dashboard displaying your brand and the status of relevant services via tiles which use red, amber or green to indicate service health.</span></p> 
                            <br />
                        </div>
                        <div className="col-lg-3">
                            <div className="isp-image-container text-center">
                                <div className="isp-msp-image">
                                    <img src={MSPCustomerImg} alt="Services Cog Icon Linking to MSP Customers Using Devices" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 order-lg-2">
                            <h6>Network Connection Testing</h6>
                            <p>Connection Tests (also known as speed tests) are often unreliable as they don’t take the device, router or network capacity into account.</p>
                            <p>So we built one from the ground up. It’s integrated into both the app and dashboard so your support team can remotely run tests, have full visibility of a customers’ connection, network, devices and router — enabling you to accurately test their connection and view historical results.</p>
                            <br />
                            <h6>In-App Messaging</h6>
                            <p>With platforms like Amazon and Deliveroo setting a high standard of communication by keeping their customers updated at every stage of service, regular communications have come to be expected from all sectors.</p>
                            <p>Scheduling planned maintenance? Notify your customers ahead of time.</p> 
                            <p>Has an unplanned outage occurred? Send a message to alert individual customers or groups of customers based on specific criteria, such as location.</p>
                            <br />
                        </div>
                        <div className="col-lg-6 order-lg-1">
                            <div className="isp-msp-app-image text-center">
                                <img src={NetMindedWhiteLabelAppImg} alt="NetMinded White Label App" />
                            </div>
                        </div>
                    </div>
                    <div className="row text-last">
                        <div className="col-lg-6">
                            <h6>Reduce Unwanted Support Calls</h6>
                            <p>When a customer’s service goes down, they want to know why and when it’ll be back up. With visibility of service issues within the app, your customers can self-diagnose and see constant value for money via 24/7 communication.</p>
                            <p>Regular updates through the app will reduce inbound calls from frustrated customers which will save time and operational cost within your support team.</p>
                            <br className='d-block d-sm-block d-md-block d-lg-none d-xl-none' />
                        </div>
                        <div className="col-lg-6">
                            <h6>Custom Monitors</h6>
                            <p>“If it exists, it can be monitored.” Within the dashboard you can create customer monitors for servers, IoT devices, firewalls, switches etc, or import popular services such as PRTG, Meraki, Nagios, MS365, UniFi and more.</p>
                            <p>Monitors can also be grouped together, giving you the scope to build your own unique custom monitoring systems.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Cta ctaText="Contact Us Today, Deploy Tomorrow" ctaBtnText="Contact Us" ctaBtnUrl="https://forms.clickup.com/20532630/f/kjkcp-548/3BQZVT0C3LE05OLX0X"/>
        </Layout>
    )
}

export default MspPage

export const Head = () => (
    <SEO title="White-Label Support App For MSPs" description="The NetMinded app and support tools fully automate fault diagnosis and customer communications to help IT partners and MSPs provide a more professional service." article={false} />
)
