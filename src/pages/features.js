import * as React from 'react'
import Layout from '../components/layout'
import NetMindedAppDashImg from '../images/NetMinded_Platform_Features.svg'
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

const FeaturesPage = () => {
    const [isHero, setIsHero] = useState(true)
    return (
        <Layout pTitle="Features" pDescription="A Comprehensive Test Framework, White Label App, Integrations & so much more" isHero={isHero} isArticle={false}>
            <header className="features-page-header">
                <h1>NetMinded Features</h1>
                <h3>A Comprehensive Test Framework, White Label App, Integrations & so much more</h3>
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
                    <div className="row mb-5">
                        <div className="col-md-2">
                            <span className="features-icon"><FontAwesomeIcon icon={faGaugeHigh}/></span>
                        </div>
                        <div className="col-md-10">
                            <h6>Comprehensive Test Framework</h6>
                            <p><span>Take the ambiguity out of connectivity tests.</span></p> 
                            <hr />
                            <p>We’ve built our own test framework putting the control back in your hands. Where third party tests may not take into account factors such as customer device capabilities ours does. With your support team and customers both having access to the same data you can quickly solve any disputes and negate any harm to your reputation by inaccurate connectivity test results.</p>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-md-2">
                            <span className="features-icon features-icon--middle"><FontAwesomeIcon icon={faCloudArrowDown}/></span>
                        </div>
                        <div className="col-md-10">
                            <h6>Custom Integrations</h6>
                            <p><span>Does your business rely on other platforms?</span></p> 
                            <hr />
                            <p>We've designed our platform to be able to integrate many different services. With the NetMinded platform you are easily able to import status information from PRTG, Meraki, HP Aruba, Nagios, UniFi and more. This enables you to get the full picture of your status information.</p>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-md-2">
                            <span className="features-icon"><FontAwesomeIcon icon={faDiagramNext}/></span>
                        </div>
                        <div className="col-md-10">
                            <h6>Dependencies View and Editor</h6>
                            <p><span>Aid your support staff with our dependencies view and editor.</span></p> 
                            <hr />
                            <p>Our platform gives added clarity to any service faults by showing what each monitor is dependant on. Easily identify which part of a service has gone down — your support team will be able to spot the fault immediately, escalate the issue to the right person and help minimise the costs associated with downtime immediately.</p>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-md-2">
                            <span className="features-icon features-icon--middle"><FontAwesomeIcon icon={faListCheck}/></span>
                        </div>
                        <div className="col-md-10">
                            <h6>Simulation Testing</h6>
                            <p><span>Put your support team and process through its paces by modeling your key services.</span></p> 
                            <hr />
                            <p>With our platform you can simulate commonplace problems and more complicated issues so you are able to audit your support processes and mitigate potential issues before they are encountered.</p>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-md-2">
                            <span className="features-icon"><FontAwesomeIcon icon={faTable}/></span>
                        </div>
                        <div className="col-md-10">
                            <h6>Easy to Use Dashboard</h6>
                            <p><span>Our web based Dashboard has been designed to be simple to use and intuitive.</span></p> 
                            <hr />
                            <p>Whether for end users or your support team our platform gives a clear overview of your services displayed as tiles. We use a red, amber and green traffic light system to outline the status of a service within a tile, so any issues can easily be identified.</p>
                        </div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-md-2">
                            <span className="features-icon features-icon--middle"><FontAwesomeIcon icon={faWindowMaximize}/></span>
                        </div>
                        <div className="col-md-10">
                            <h6>Monitor Tiles</h6>
                            <p><span>The core staple of our platform is a monitor tile.</span></p> 
                            <hr />
                            <p>Your services are represented as a tile with a coloured bar at the top linked to the status of a service.
                                There is quite a lot more to these tiles though. You can use them to communicate with your customers and stakeholders about a service, view graphs on service status, view the other services a monitor is dependent on and even force a change of status — notifying your customers and stakeholders with important updates e.g. scheduled downtime.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <span className="features-icon"><FontAwesomeIcon icon={faMobile}/></span>
                        </div>
                        <div className="col-md-10">
                            <h6>Brandable Mobile App</h6>
                            <p><span>Our Dashboard goes hand in hand with our mobile App.</span></p> 
                            <hr />
                            <p>With a white label brandable App available to you on both Android and iOS which connects seamlessly to our web Dashboard, we help you reach a whole new level of customer support. Depending on your needs we can build a custom version of our App for you or we can adapt our existing App to suit your needs. Our mobile App shares much of the functionality found within our web Dashboard, helping your customers and support teams stay connected and empowered.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Cta ctaText="Contact Us Today, Deploy Tomorrow" ctaBtnText="Contact Us" ctaBtnUrl="https://forms.clickup.com/20532630/f/kjkcp-548/3BQZVT0C3LE05OLX0X"/>
        </Layout>
    )
}

export default FeaturesPage
