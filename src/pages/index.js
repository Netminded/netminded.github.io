import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import NetMindedDepsImg from '../images/NetMinded_Dependencies.svg'
import NetMindedAppDashImg from '../images/NetMinded_App_Dashboard.svg'
import { useState, useEffect } from 'react'
import { openPopupWidget } from 'react-calendly'
import { Waypoint } from 'react-waypoint'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowTrendDown,
  faHourglassStart,
  faUserMinus,
  faClockRotateLeft,
  faPiggyBank,
  faStar,
} from '@fortawesome/free-solid-svg-icons'
import TestimonialSwiper from '../components/testimonial-slider'
import Cta from '../components/cta'
import SEO from '../components/seo'

const launchCalendar = (e) => {
  const calURL = 'https://calendly.com/netminded/seethru-demo'
  e.preventDefault()
  openPopupWidget({url: calURL })
}

const scrollToComm = (e) => {
  const commSection = document.getElementById("communicationSection");
  e.preventDefault()
  commSection &&
     commSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

const selectedTest = (swiper, index) => {
    if (swiper?.current?.swiper?.slideTo) {
        swiper.current.swiper.slideTo(index, 500)
    }
}

const useWndowWidth = () => {
    const [windowWidth, setWindowWidth] = useState('undefined')
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener("resize", handleResize)

        handleResize()

        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return (windowWidth !== typeof 'undefined' ? windowWidth : 992)
}

const IndexPage = () => {
  const [isHero, setIsHero] = useState(true)
  const [testimonialSlider, setTestimonialSlider] = useState(null) 
  const [testimonialPosition, setTestimonialPosition] = useState(0) 
testimonialSlider?.current?.swiper?.on('slideChange', () => {
    setTestimonialPosition(testimonialSlider?.current?.swiper?.realIndex)
  })
  const isSmall = useWndowWidth() > 991 ? false : true
  return (
    <Layout isHero={isHero}>
            <Waypoint onEnter={() => setIsHero(true)} onLeave={() => setIsHero(false)} topOffset={100}>
                <div className="hero-container">
                    <div className="hero-container-sub">
                        <div className="container">
                            <div className="row">
                                <div className="offset-lg-2 col-lg-8">
                                    <div className="hero-content text-center">
                                        <svg className="amber-status" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g id="CircleTwo">
                                            <g id="Group 62">
                                            <circle id="CircleTwoWaveTwo" cx="50" cy="50" r="48.5" stroke="#FFB74D" strokeOpacity="0.2" strokeWidth="3"/>
                                            <circle id="CircleTwoWaveOne" cx="50" cy="50" r="41.2536" stroke="#FFB74D" strokeOpacity="0.5" strokeWidth="3"/>
                                            <circle id="CircleTwoCenter" cx="50.3623" cy="49.6377" r="35.1449" fill="#FFB74D"/>
                                            </g>
                                            <g id="&#239;&#150;&#184;" filter="url(#filter0_d_22_2)">
                                            <path d="M34.5 49.75C34.5 41.4883 41.1797 34.75 49.5 34.75C57.7617 34.75 64.5 41.4883 64.5 49.75C64.5 58.0703 57.7617 64.75 49.5 64.75C41.1797 64.75 34.5 58.0703 34.5 49.75ZM44.1094 53.8516C43.7578 53.4414 43.1719 53.4414 42.7617 53.7344C42.3516 54.0859 42.3516 54.6719 42.6445 55.082C43.9922 56.6055 46.2188 58.1875 49.4414 58.1875C52.7227 58.1875 54.9492 56.6055 56.2969 55.082C56.5898 54.6719 56.5898 54.0859 56.1797 53.7344C55.7695 53.4414 55.1836 53.4414 54.832 53.8516C53.7773 55.082 52.0195 56.3125 49.4414 56.3125C46.9219 56.3125 45.1641 55.082 44.1094 53.8516ZM47.7422 48.3438C47.918 48.2852 48.0938 48.1094 48.0938 47.875C48.0938 46.8789 47.6836 45.8242 47.0977 45.0625C46.5117 44.3008 45.6914 43.6562 44.8125 43.6562C43.875 43.6562 43.0547 44.3008 42.4688 45.0625C41.8828 45.8242 41.5312 46.8789 41.5312 47.875C41.5312 48.1094 41.6484 48.2852 41.8242 48.3438C42 48.4023 42.2344 48.3438 42.3516 48.168C42.3516 48.168 42.3516 48.1094 42.4102 48.1094C42.4102 48.0508 42.4688 47.9922 42.5859 47.9336C42.7031 47.7578 42.9375 47.5234 43.1719 47.2891C43.6992 46.8789 44.2852 46.4688 44.8125 46.4688C45.2812 46.4688 45.8672 46.8789 46.3945 47.2891C46.6289 47.5234 46.8633 47.7578 46.9805 47.9336C47.0977 47.9922 47.1562 48.0508 47.1562 48.1094C47.2148 48.1094 47.2148 48.168 47.2148 48.168C47.332 48.3438 47.5664 48.4023 47.7422 48.3438ZM56.5898 48.168C56.707 48.3438 56.9414 48.4023 57.1172 48.3438C57.293 48.2852 57.4688 48.1094 57.4688 47.875C57.4688 46.8789 57.0586 45.8242 56.4727 45.0625C55.8867 44.3008 55.0664 43.6562 54.1875 43.6562C53.25 43.6562 52.4297 44.3008 51.8438 45.0625C51.2578 45.8242 50.9062 46.8789 50.9062 47.875C50.9062 48.1094 51.0234 48.2852 51.1992 48.3438C51.375 48.4023 51.6094 48.3438 51.7266 48.168C51.7266 48.168 51.7266 48.1094 51.7852 48.1094C51.7852 48.0508 51.8438 47.9922 51.9609 47.9336C52.0781 47.7578 52.3125 47.5234 52.5469 47.2891C53.0742 46.8789 53.6602 46.4688 54.1875 46.4688C54.6562 46.4688 55.2422 46.8789 55.7695 47.2891C56.0039 47.5234 56.2383 47.7578 56.3555 47.9336C56.4727 47.9922 56.5312 48.0508 56.5312 48.1094C56.5898 48.1094 56.5898 48.168 56.5898 48.168Z" fill="white"/>
                                            </g>
                                            </g>
                                            <defs>
                                            <filter id="filter0_d_22_2" x="26.5" y="30.75" width="46" height="46" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                            <feOffset dy="4"/>
                                            <feGaussianBlur stdDeviation="4"/>
                                            <feComposite in2="hardAlpha" operator="out"/>
                                            <feColorMatrix type="matrix" values="0 0 0 0 0.181552 0 0 0 0 0.335174 0 0 0 0 0.4625 0 0 0 0.4 0"/>
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_22_2"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_22_2" result="shape"/>
                                            </filter>
                                            </defs>
                                        </svg>
                                        <h1>Automate Diagnostics and Service Information Flows</h1>
                                        <p>Deliver the right info to the right people at the right time. Improve productivity, customer experience and job satisfaction for your employees.</p>
                                        <div className="hero-cta">
                                            <a className="btn" href="javascript:void(0)" onClick={(e) => scrollToComm(e)} rel="nofollow">Discover NetMinded</a>
                                        </div>
                                        <svg className="green-status" viewBox="0 0 138 138" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g id="CircleOne">
                                            <g id="Group 64">
                                            <circle id="CircleOneWaveTwo" cx="69" cy="69" r="67.5" stroke="#77DF81" strokeOpacity="0.2" strokeWidth="3"/>
                                            <circle id="CircleOneWaveOne" cx="69" cy="69" r="57.5" stroke="#77DF81" strokeOpacity="0.5" strokeWidth="3"/>
                                            <circle id="CircleOneCenter" cx="69" cy="69" r="49" fill="#77DF81"/>
                                            </g>
                                            <g id="&#239;&#149;&#132;" filter="url(#filter0_d_22_3)">
                                            <path d="M41.5586 63.7734C41.0195 64.3125 40.75 65.0312 40.75 65.75V77.25C40.75 78.0586 41.0195 78.7773 41.5586 79.3164C42.0977 79.8555 42.8164 80.125 43.625 80.125H46.5V62.875H43.625C42.8164 62.875 42.0977 63.2344 41.5586 63.7734ZM82.4375 51.375H72.375V45.625C72.375 44.0977 71.0273 42.75 69.5 42.75C67.8828 42.75 66.625 44.0977 66.625 45.625V51.375H56.5625C52.5195 51.375 49.375 54.6094 49.375 58.5625V83C49.375 86.2344 51.8906 88.75 55.125 88.75H83.875C87.0195 88.75 89.625 86.2344 89.625 83V58.5625C89.625 54.6094 86.3906 51.375 82.4375 51.375ZM63.75 80.125H58V77.25H63.75V80.125ZM60.875 69.3438C58.8086 69.3438 57.2812 67.8164 57.2812 65.75C57.2812 63.7734 58.8086 62.1562 60.875 62.1562C62.8516 62.1562 64.4688 63.7734 64.4688 65.75C64.4688 67.8164 62.8516 69.3438 60.875 69.3438ZM72.375 80.125H66.625V77.25H72.375V80.125ZM81 80.125H75.25V77.25H81V80.125ZM78.125 69.3438C76.0586 69.3438 74.5312 67.8164 74.5312 65.75C74.5312 63.7734 76.0586 62.1562 78.125 62.1562C80.1016 62.1562 81.7188 63.7734 81.7188 65.75C81.7188 67.8164 80.1016 69.3438 78.125 69.3438ZM97.3516 63.7734C96.8125 63.2344 96.0938 62.875 95.375 62.875H92.5V80.125H95.375C96.0938 80.125 96.8125 79.8555 97.3516 79.3164C97.8906 78.7773 98.25 78.0586 98.25 77.25V65.75C98.25 65.0312 97.8906 64.3125 97.3516 63.7734Z" fill="white"/>
                                            </g>
                                            </g>
                                            <defs>
                                            <filter id="filter0_d_22_3" x="32.75" y="38.75" width="73.5" height="62" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                            <feOffset dy="4"/>
                                            <feGaussianBlur stdDeviation="4"/>
                                            <feComposite in2="hardAlpha" operator="out"/>
                                            <feColorMatrix type="matrix" values="0 0 0 0 0.181552 0 0 0 0 0.335174 0 0 0 0 0.4625 0 0 0 0.4 0"/>
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_22_3"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_22_3" result="shape"/>
                                            </filter>
                                            </defs>
                                        </svg>

                                        <svg className="red-status" viewBox="0 0 123 123" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g id="CircleThree">
                                            <g id="Group 61">
                                            <circle id="CircleThreeWaveTwo" cx="61.5" cy="61.5" r="60" stroke="#F3693D" strokeOpacity="0.2" strokeWidth="3"/>
                                            <circle id="CircleThreeWaveOne" cx="61.5" cy="61.5" r="51.087" stroke="#F3693D" strokeOpacity="0.5" strokeWidth="3"/>
                                            <circle id="CircleThreeCenter" cx="61.5" cy="61.5" r="43.6739" fill="#F3693D"/>
                                            </g>
                                            <g id="&#239;&#147;&#188;" filter="url(#filter0_d_22_4)">
                                            <path d="M63.1335 63.9688H55.712C48.658 63.9688 43 69.6055 43 76.543C43 77.916 44.1022 79 45.4983 79H73.3472C74.7434 79 75.919 77.916 75.919 76.543C75.919 69.6055 70.1876 63.9688 63.1335 63.9688ZM59.4595 60.5C64.6031 60.5 68.865 56.3809 68.865 51.25C68.865 46.1914 64.6031 42 59.4595 42C54.2424 42 50.0541 46.1914 50.0541 51.25C50.0541 56.3809 54.2424 60.5 59.4595 60.5ZM89.4394 51.7559C88.7046 51.1055 87.6024 51.1055 86.941 51.8281L80.5483 58.6211L77.6826 55.875C77.0212 55.1523 75.919 55.1523 75.2577 55.875C74.5229 56.5254 74.5229 57.6094 75.2577 58.2598L79.3726 62.3066C79.6665 62.668 80.1074 62.8125 80.6218 62.8125C81.0626 62.8125 81.577 62.668 81.8709 62.3066L89.5128 54.2129C90.1742 53.4902 90.1742 52.4063 89.4394 51.7559Z" fill="white"/>
                                            </g>
                                            </g>
                                            <defs>
                                            <filter id="filter0_d_22_4" x="35" y="38" width="63" height="53" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                            <feOffset dy="4"/>
                                            <feGaussianBlur stdDeviation="4"/>
                                            <feComposite in2="hardAlpha" operator="out"/>
                                            <feColorMatrix type="matrix" values="0 0 0 0 0.181552 0 0 0 0 0.335174 0 0 0 0 0.4625 0 0 0 0.4 0"/>
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_22_4"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_22_4" result="shape"/>
                                            </filter>
                                            </defs>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ Waypoint>
            <div id="communicationSection" className="communication-container">
                <div className="container">
                    <div className="row">
                        <div className="col-12 communication-header">
                            <h2 className="text-accent">Enhanced Service Assurance</h2>
                            <p><span>No matter what the situation, stay in control. Connect your I.T. and Network monitoring systems to more stakeholders. Share status information when you want and with whoever you want. Keep your customers, teams, suppliers, partners and more updated.</span></p>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <span className="communication-icon"><FontAwesomeIcon icon={faClockRotateLeft}/></span>
                            <h3>Save Time</h3>
                            <p>Reduce reactive inbound/outbound service related contact from your end users and partners.</p>
                        </div>
                        <div className="col-lg-4">
                            <span className="communication-icon communication-icon--middle"><FontAwesomeIcon icon={faPiggyBank}/></span>
                            <h3>Save Money</h3>
                            <p>Reduce the time spent on diagnostics for you, your end users and your partners.</p>
                        </div>
                        <div className="col-lg-4">
                            <span className="communication-icon"><FontAwesomeIcon icon={faStar}/></span>
                            <h3>Build Reputation</h3>
                            <p>Communicate in real time and be transparent. Be a better partner than your competitors!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="dashboard-container">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="text-accent">More Automated Responses, Fewer Unplanned Reactions</h2>
                            <p><span>Use NetMinded to build a responsive Service Assurance environment. Build partnerships between your internal and external stakeholder groups. Reduce unplanned, reactive communication between stakeholders which wastes time and creates friction.</span></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <p>Create custom pictures of your status information for all of your stakeholders. You can also use NetMinded to model your key services to work through common fault scenarios.</p>
                            <p>Identify where a service issue is using our Dependencies view. Automate support input from specialist second-line support teams. Reduce response and resolution times.</p>
                            <p>Diagnose service issues and alert your customers individually or en-masse, in real time. Drive the real-time customer support conversation with your existing network management systems.</p>
                            {/* <Link className="btn" to="/integrations">Integrations</Link>
                            <Link className="btn" to="/test-framework">Test Framework</Link> */}
                        </div>
                        <div className="col-lg-6">
                            <div className="dashboard-image">
                                <div className="dashboard-image-container">
                                    <img src={NetMindedDepsImg} alt="NetMinded Dependencies"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="productSection" className="product-container">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="text-accent">How Do We Do All of This?</h2>
                            <p><span>We do this with our simple to use web Dashboard and mobile App (available on both iOS and Android).</span></p>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="product-image-container">
                                <div className="product-image">
                                    <img src={NetMindedAppDashImg} alt="NetMinded App and Dashboard" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 product-text">
                            <p>Use our platform to supercharge your monitoring data.</p>
                            <br />
                            <p>Translate it so that it has meaning for the different stakeholder groups it needs to serve.</p>
                            <br />
                            <p>Stream it to those stakeholder groups in a controlled manner.</p>      
                            <br />
                            <p>Automate responses to the data such as outbound messaging that help you meet you business objectives.</p>                       
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <p className="product-banner"><span>NetMinded is available for same day setup at a low monthly cost which scales according to requirements. The App and Dashboard can carry your branding, and additional services can be readily developed and integrated to meet your specific needs.</span></p> 
                        </div>
                    </div>
                </div>
            </div>
            <div className="trust-container">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h2 className="text-accent">Be Easier to Work With. Build Reputation. Reduce Costs.</h2>
                            <p><span>The NetMinded platform provides clarity. Your teams, partners and customers are more empowered. This builds your reputation as a reliable partner that is easy to do business with.</span></p>
                            <div className="trust-items">
                                <h3><span className="trust-icon"><FontAwesomeIcon icon={faArrowTrendDown}/></span><span className="trust-item-text">NetMinded reduces diagnostic times for the most common wholesale FTTH faults from days to minutes.</span></h3>
                                <h3><span className="trust-icon trust-icon--middle"><FontAwesomeIcon icon={faHourglassStart}/></span><span className="trust-item-text">In the UK, OFCOM use ISP service desk call waiting time as metric of quality.</span></h3>
                                <h3><span className="trust-icon"><FontAwesomeIcon icon={faUserMinus}/></span><span className="trust-item-text">Connectwise report that 20% of MSPs face staff retention problems, with 30% focusing on deploying productivity tools.</span></h3>
                            </div>
                            <a className="btn" href="javascript:void(0)" onClick={(e) => launchCalendar(e)} rel="nofollow">Request Demo</a>
                        </div>
                        <div className="col-lg-6">
                                <div className="trust-image">
                                    <div className="trust-image-container">
                                        <svg viewBox="0 0 477 617" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="Group 173">
                                        <g id="Group 163">
                                        <rect id="Rectangle 22" width="259.996" height="480" rx="20" transform="matrix(0.980785 0.19509 0 1 122 30)" fill="url(#paint0_linear)"/>
                                        <rect id="Rectangle 23" width="260" height="480" rx="20" transform="matrix(0.980785 0.19509 0 1 149 14)" fill="url(#paint1_linear)" fillOpacity="0.5"/>
                                        <rect id="Rectangle 24" width="260" height="480" rx="20" transform="matrix(0.980785 0.19509 0 1 180 0)" fill="url(#paint2_linear)" fillOpacity="0.25"/>
                                        </g>
                                        <g id="Group 164">
                                        <g id="Rectangle 12" filter="url(#filter0_d)">
                                        <path d="M171 79.3277C171 75.2807 174.218 72.64 178.187 73.4296L439.788 125.465C443.758 126.255 446.975 130.176 446.975 134.223V277.845C446.975 281.892 443.758 284.532 439.788 283.743L178.187 231.707C174.218 230.917 171 226.997 171 222.95V79.3277Z" fill="#E9EFF4"/>
                                        </g>
                                        <path id="Line 3 (Stroke)" fillRule="evenodd" clipRule="evenodd" d="M434.758 251.233L183.218 201.199V199.367L434.758 249.401V251.233Z" fill="#A194EE"/>
                                        <path id="Line 7 (Stroke)" fillRule="evenodd" clipRule="evenodd" d="M434.758 251.233L183.218 201.199V199.367L434.758 249.401V251.233Z" fill="#A194EE"/>
                                        <g id="OVERALL STATUS OF &#226;&#128;&#168;ACME INTERNET">
                                        <path d="M221.789 143.056C220.568 142.813 219.447 142.298 218.425 141.51C217.404 140.723 216.594 139.755 215.996 138.607C215.398 137.447 215.099 136.213 215.099 134.904C215.099 133.609 215.398 132.506 215.996 131.596C216.594 130.674 217.404 130.022 218.425 129.641C219.447 129.26 220.568 129.191 221.789 129.433C223.022 129.679 224.143 130.194 225.152 130.979C226.174 131.766 226.977 132.739 227.563 133.897C228.161 135.045 228.46 136.266 228.46 137.562C228.46 138.87 228.161 139.985 227.563 140.908C226.977 141.82 226.174 142.467 225.152 142.848C224.131 143.229 223.01 143.298 221.789 143.056ZM221.789 140.674C222.574 140.83 223.265 140.79 223.863 140.553C224.461 140.304 224.928 139.876 225.264 139.27C225.601 138.663 225.769 137.916 225.769 137.027C225.769 136.138 225.601 135.329 225.264 134.602C224.928 133.862 224.461 133.255 223.863 132.78C223.265 132.305 222.574 131.99 221.789 131.834C221.004 131.678 220.306 131.717 219.696 131.951C219.098 132.188 218.631 132.609 218.295 133.216C217.958 133.809 217.79 134.55 217.79 135.44C217.79 136.329 217.958 137.143 218.295 137.883C218.631 138.623 219.098 139.237 219.696 139.724C220.306 140.201 221.004 140.518 221.789 140.674Z" fill="#8A8EAC"/>
                                        <path d="M242.122 133.668L237.338 146.015L234.162 145.383L229.378 131.134L232.181 131.691L235.769 142.979L239.338 133.115L242.122 133.668Z" fill="#8A8EAC"/>
                                        <path d="M246.306 136.654V139.988L250.698 140.861V142.976L246.306 142.102V145.627L251.258 146.612V148.784L243.69 147.279V133.961L251.258 135.467V137.639L246.306 136.654Z" fill="#8A8EAC"/>
                                        <path d="M260.362 150.595L257.485 144.84L256.252 144.595V149.777L253.636 149.257V135.959L258.531 136.932C259.54 137.133 260.4 137.488 261.11 137.998C261.82 138.495 262.349 139.089 262.698 139.781C263.059 140.462 263.24 141.184 263.24 141.946C263.24 142.823 262.991 143.567 262.493 144.179C261.994 144.778 261.253 145.114 260.269 145.185L263.39 151.197L260.362 150.595ZM256.252 142.595L258.438 143.03C259.148 143.171 259.677 143.105 260.026 142.831C260.375 142.545 260.549 142.09 260.549 141.468C260.549 140.858 260.375 140.354 260.026 139.954C259.677 139.542 259.148 139.265 258.438 139.124L256.252 138.689V142.595Z" fill="#8A8EAC"/>
                                        <path d="M273.604 150.695L268.409 149.662L267.549 152.025L264.803 151.478L269.493 139.094L272.539 139.7L277.229 153.95L274.463 153.4L273.604 150.695ZM272.894 148.42L271.006 142.481L269.119 147.669L272.894 148.42Z" fill="#8A8EAC"/>
                                        <path d="M281.598 152.704L285.896 153.559V155.674L278.982 154.299V141L281.598 141.521V152.704Z" fill="#8A8EAC"/>
                                        <path d="M290.174 154.41L294.472 155.265V157.38L287.558 156.005V142.706L290.174 143.227V154.41Z" fill="#8A8EAC"/>
                                        <path d="M305.091 159.625C304.181 159.444 303.359 159.122 302.624 158.658C301.902 158.197 301.329 157.626 300.905 156.945C300.481 156.263 300.263 155.515 300.251 154.7L303.054 155.257C303.091 155.811 303.278 156.28 303.614 156.664C303.963 157.051 304.437 157.304 305.035 157.423C305.645 157.545 306.125 157.494 306.473 157.271C306.822 157.036 306.997 156.677 306.997 156.194C306.997 155.8 306.878 155.453 306.642 155.152C306.405 154.851 306.106 154.594 305.745 154.383C305.396 154.161 304.91 153.899 304.287 153.597C303.44 153.175 302.749 152.79 302.213 152.442C301.69 152.084 301.235 151.619 300.849 151.046C300.475 150.464 300.288 149.754 300.288 148.915C300.288 148.128 300.481 147.481 300.868 146.973C301.254 146.466 301.796 146.129 302.493 145.963C303.191 145.784 303.988 145.784 304.885 145.962C306.23 146.23 307.32 146.783 308.155 147.622C309.002 148.451 309.469 149.472 309.557 150.683L306.679 150.11C306.654 149.648 306.461 149.235 306.1 148.871C305.751 148.497 305.284 148.252 304.698 148.135C304.187 148.034 303.776 148.085 303.465 148.29C303.166 148.497 303.016 148.855 303.016 149.363C303.016 149.718 303.129 150.039 303.353 150.325C303.589 150.601 303.876 150.848 304.212 151.068C304.561 151.277 305.047 151.539 305.67 151.853C306.517 152.276 307.208 152.667 307.744 153.028C308.28 153.388 308.741 153.861 309.127 154.446C309.513 155.031 309.706 155.736 309.706 156.561C309.706 157.273 309.525 157.897 309.164 158.435C308.803 158.973 308.273 159.357 307.576 159.586C306.878 159.803 306.05 159.816 305.091 159.625Z" fill="#8A8EAC"/>
                                        <path d="M320.85 149.328V151.481L317.374 150.79V161.935L314.758 161.415V150.27L311.283 149.578V147.425L320.85 149.328Z" fill="#8A8EAC"/>
                                        <path d="M330.756 162.063L325.561 161.03L324.702 163.393L321.955 162.846L326.645 150.462L329.691 151.068L334.381 165.318L331.616 164.768L330.756 162.063ZM330.046 159.788L328.159 153.85L326.271 159.037L330.046 159.788Z" fill="#8A8EAC"/>
                                        <path d="M345.01 154.134V156.287L341.534 155.596V166.741L338.918 166.221V155.075L335.443 154.384V152.231L345.01 154.134Z" fill="#8A8EAC"/>
                                        <path d="M349.497 155.027V163.257C349.497 164.159 349.728 164.897 350.189 165.471C350.65 166.033 351.297 166.397 352.132 166.563C352.979 166.731 353.633 166.626 354.094 166.248C354.555 165.857 354.785 165.211 354.785 164.309V156.079L357.42 156.603V164.814C357.42 165.944 357.177 166.855 356.691 167.546C356.218 168.227 355.576 168.683 354.767 168.916C353.969 169.151 353.079 169.171 352.095 168.975C351.123 168.782 350.239 168.409 349.441 167.857C348.656 167.307 348.034 166.599 347.573 165.732C347.112 164.853 346.881 163.848 346.881 162.718V154.506L349.497 155.027Z" fill="#8A8EAC"/>
                                        <path d="M364.451 171.433C363.542 171.252 362.719 170.93 361.984 170.466C361.262 170.005 360.689 169.433 360.265 168.752C359.842 168.071 359.624 167.323 359.611 166.507L362.414 167.065C362.452 167.618 362.638 168.087 362.975 168.472C363.324 168.859 363.797 169.112 364.395 169.231C365.005 169.352 365.485 169.301 365.834 169.079C366.182 168.843 366.357 168.484 366.357 168.002C366.357 167.608 366.239 167.26 366.002 166.959C365.765 166.658 365.466 166.402 365.105 166.19C364.756 165.968 364.27 165.707 363.647 165.405C362.8 164.982 362.109 164.597 361.573 164.249C361.05 163.891 360.595 163.426 360.209 162.854C359.836 162.272 359.649 161.561 359.649 160.723C359.649 159.935 359.842 159.288 360.228 158.781C360.614 158.273 361.156 157.936 361.854 157.77C362.551 157.592 363.348 157.591 364.245 157.77C365.591 158.037 366.681 158.591 367.515 159.43C368.363 160.259 368.83 161.279 368.917 162.49L366.039 161.918C366.014 161.456 365.821 161.043 365.46 160.679C365.111 160.304 364.644 160.059 364.059 159.943C363.548 159.841 363.137 159.893 362.825 160.097C362.526 160.305 362.377 160.662 362.377 161.17C362.377 161.526 362.489 161.847 362.713 162.133C362.95 162.408 363.236 162.656 363.573 162.875C363.921 163.084 364.407 163.346 365.03 163.661C365.877 164.083 366.569 164.475 367.104 164.835C367.64 165.196 368.101 165.668 368.487 166.253C368.873 166.838 369.066 167.543 369.066 168.369C369.066 169.08 368.886 169.705 368.524 170.243C368.163 170.78 367.634 171.164 366.936 171.394C366.239 171.611 365.41 171.624 364.451 171.433Z" fill="#8A8EAC"/>
                                        <path d="M381.841 174.892C380.62 174.649 379.499 174.134 378.478 173.346C377.456 172.559 376.646 171.591 376.048 170.444C375.45 169.283 375.151 168.049 375.151 166.741C375.151 165.445 375.45 164.342 376.048 163.433C376.646 162.51 377.456 161.858 378.478 161.477C379.499 161.096 380.62 161.027 381.841 161.27C383.074 161.515 384.195 162.03 385.204 162.815C386.226 163.603 387.029 164.575 387.615 165.733C388.213 166.881 388.512 168.103 388.512 169.398C388.512 170.706 388.213 171.822 387.615 172.744C387.029 173.657 386.226 174.303 385.204 174.685C384.183 175.066 383.062 175.135 381.841 174.892ZM381.841 172.51C382.626 172.666 383.317 172.626 383.915 172.389C384.513 172.14 384.98 171.712 385.317 171.106C385.653 170.5 385.821 169.752 385.821 168.863C385.821 167.974 385.653 167.166 385.317 166.438C384.98 165.698 384.513 165.091 383.915 164.616C383.317 164.142 382.626 163.826 381.841 163.67C381.056 163.514 380.359 163.553 379.748 163.787C379.15 164.024 378.683 164.446 378.347 165.052C378.01 165.645 377.842 166.387 377.842 167.276C377.842 168.165 378.01 168.98 378.347 169.72C378.683 170.46 379.15 171.073 379.748 171.561C380.359 172.038 381.056 172.354 381.841 172.51Z" fill="#8A8EAC"/>
                                        <path d="M398.512 164.776V166.929L393.074 165.848V169.258L397.241 170.087V172.201L393.074 171.373V176.993L390.458 176.473V163.174L398.512 164.776Z" fill="#8A8EAC"/>
                                        <path d="M245.757 173.734L240.563 172.7L239.703 175.063L236.956 174.517L241.647 162.133L244.692 162.739L249.382 176.989L246.617 176.439L245.757 173.734ZM245.047 171.459L243.16 165.52L241.273 170.708L245.047 171.459Z" fill="#8A8EAC"/>
                                        <path d="M250.5 170.543C250.5 169.235 250.787 168.123 251.36 167.208C251.945 166.283 252.736 165.634 253.733 165.261C254.742 164.877 255.869 164.809 257.115 165.057C258.573 165.347 259.849 165.982 260.946 166.962C262.042 167.942 262.808 169.149 263.244 170.582L260.236 169.984C259.937 169.289 259.513 168.728 258.965 168.302C258.429 167.878 257.806 167.595 257.096 167.454C256.336 167.303 255.658 167.352 255.06 167.601C254.474 167.84 254.013 168.257 253.677 168.85C253.353 169.446 253.191 170.189 253.191 171.078C253.191 171.955 253.353 172.761 253.677 173.499C254.013 174.226 254.474 174.833 255.06 175.317C255.658 175.792 256.336 176.105 257.096 176.256C257.806 176.397 258.429 176.362 258.965 176.151C259.513 175.93 259.937 175.532 260.236 174.956L263.244 175.555C262.808 176.827 262.042 177.735 260.946 178.279C259.862 178.813 258.585 178.934 257.115 178.641C255.869 178.393 254.742 177.883 253.733 177.111C252.736 176.329 251.945 175.365 251.36 174.219C250.787 173.077 250.5 171.851 250.5 170.543Z" fill="#8A8EAC"/>
                                        <path d="M279.698 169.721V183.019L277.082 182.499V173.849L273.588 181.804L271.607 181.41L268.094 172.061V180.711L265.478 180.19V166.892L268.449 167.483L272.598 178.196L276.746 169.133L279.698 169.721Z" fill="#8A8EAC"/>
                                        <path d="M284.901 172.908V176.242L289.292 177.116V179.231L284.901 178.357V181.882L289.852 182.867V185.039L282.285 183.533V170.216L289.852 171.721V173.893L284.901 172.908Z" fill="#8A8EAC"/>
                                        <path d="M299.298 173.619V186.918L296.682 186.397V173.099L299.298 173.619Z" fill="#8A8EAC"/>
                                        <path d="M313.038 189.651L310.422 189.13L304.499 178.826V187.952L301.883 187.432V174.114L304.499 174.635L310.422 184.958V175.813L313.038 176.333V189.651Z" fill="#8A8EAC"/>
                                        <path d="M324.499 178.632V180.785L321.024 180.094V191.239L318.408 190.719V179.573L314.932 178.882V176.729L324.499 178.632Z" fill="#8A8EAC"/>
                                        <path d="M329.024 181.685V185.019L333.415 185.893V188.007L329.024 187.134V190.659L333.976 191.643V193.815L326.408 192.31V178.993L333.976 180.498V182.67L329.024 181.685Z" fill="#8A8EAC"/>
                                        <path d="M343.08 195.626L340.202 189.872L338.969 189.627V194.809L336.353 194.288V180.99L341.249 181.964C342.258 182.165 343.117 182.52 343.827 183.029C344.538 183.526 345.067 184.12 345.416 184.812C345.777 185.494 345.958 186.216 345.958 186.978C345.958 187.854 345.709 188.598 345.21 189.21C344.712 189.81 343.971 190.145 342.987 190.216L346.107 196.228L343.08 195.626ZM338.969 187.626L341.155 188.061C341.865 188.202 342.395 188.136 342.744 187.862C343.092 187.576 343.267 187.122 343.267 186.5C343.267 185.89 343.092 185.385 342.744 184.986C342.395 184.573 341.865 184.297 341.155 184.155L338.969 183.72V187.626Z" fill="#8A8EAC"/>
                                        <path d="M359.479 198.888L356.863 198.368L350.94 188.064V197.19L348.324 196.669V183.352L350.94 183.872L356.863 194.196V185.051L359.479 185.571V198.888Z" fill="#8A8EAC"/>
                                        <path d="M364.68 188.778V192.112L369.072 192.985V195.1L364.68 194.226V197.751L369.632 198.736V200.908L362.064 199.403V186.085L369.632 187.591V189.763L364.68 188.778Z" fill="#8A8EAC"/>
                                        <path d="M380.885 189.848V192.001L377.41 191.31V202.455L374.794 201.935V190.789L371.318 190.098V187.945L380.885 189.848Z" fill="#8A8EAC"/>
                                        </g>
                                        <path id="Rectangle 16" d="M171 79.3277C171 75.2807 174.218 72.64 178.187 73.4296L439.788 125.465C443.758 126.255 446.975 130.176 446.975 134.223L171 79.3277Z" fill="#7EEA88"/>
                                        </g>
                                        <g id="Group 166">
                                        <g id="Rectangle 12_2" filter="url(#filter1_d)">
                                        <path d="M243 443.337C243 440.389 245.344 438.466 248.234 439.041L438.766 476.94C441.656 477.515 444 480.371 444 483.318V587.922C444 590.869 441.656 592.793 438.766 592.218L248.234 554.319C245.344 553.744 243 550.888 243 547.941V443.337Z" fill="#E9EFF4"/>
                                        </g>
                                        <path id="Line 3 (Stroke)_2" fillRule="evenodd" clipRule="evenodd" d="M435.102 568.54L251.898 532.099V530.765L435.102 567.206V568.54Z" fill="#A194EE"/>
                                        <path id="Line 7 (Stroke)_2" fillRule="evenodd" clipRule="evenodd" d="M435.102 568.54L251.898 532.099V530.765L435.102 567.206V568.54Z" fill="#A194EE"/>
                                        <g id="STATUS OF MY &#226;&#128;&#168;ACME INTERNET">
                                        <path d="M297.694 493.273C297.032 493.141 296.433 492.906 295.897 492.569C295.371 492.233 294.954 491.817 294.645 491.321C294.337 490.824 294.178 490.279 294.169 489.686L296.21 490.092C296.238 490.495 296.374 490.836 296.619 491.116C296.873 491.398 297.218 491.582 297.653 491.669C298.098 491.757 298.447 491.721 298.701 491.558C298.955 491.387 299.082 491.125 299.082 490.774C299.082 490.487 298.996 490.234 298.823 490.015C298.651 489.795 298.433 489.609 298.17 489.455C297.916 489.293 297.562 489.102 297.109 488.883C296.492 488.575 295.988 488.294 295.598 488.041C295.217 487.78 294.886 487.441 294.605 487.025C294.332 486.601 294.196 486.083 294.196 485.473C294.196 484.899 294.337 484.428 294.618 484.058C294.899 483.688 295.294 483.443 295.802 483.322C296.31 483.192 296.891 483.192 297.544 483.322C298.524 483.517 299.318 483.92 299.926 484.531C300.543 485.135 300.883 485.878 300.947 486.76L298.851 486.343C298.833 486.006 298.692 485.705 298.429 485.44C298.175 485.168 297.835 484.989 297.408 484.904C297.036 484.83 296.737 484.868 296.51 485.017C296.292 485.168 296.183 485.428 296.183 485.799C296.183 486.058 296.265 486.291 296.428 486.499C296.601 486.7 296.809 486.88 297.054 487.04C297.308 487.193 297.662 487.383 298.116 487.612C298.733 487.92 299.236 488.205 299.626 488.468C300.017 488.73 300.352 489.075 300.634 489.501C300.915 489.927 301.055 490.44 301.055 491.041C301.055 491.559 300.924 492.014 300.661 492.406C300.398 492.798 300.012 493.077 299.504 493.244C298.996 493.402 298.393 493.412 297.694 493.273Z" fill="#8A8EAC"/>
                                        <path d="M309.172 485.773V487.341L306.64 486.838V494.955L304.735 494.576V486.459L302.204 485.955V484.387L309.172 485.773Z" fill="#8A8EAC"/>
                                        <path d="M316.387 495.048L312.603 494.296L311.977 496.017L309.977 495.619L313.393 486.599L315.611 487.04L319.027 497.419L317.013 497.019L316.387 495.048ZM315.87 493.392L314.495 489.066L313.12 492.845L315.87 493.392Z" fill="#8A8EAC"/>
                                        <path d="M326.768 489.274V490.842L324.237 490.338V498.455L322.332 498.076V489.959L319.8 489.456V487.888L326.768 489.274Z" fill="#8A8EAC"/>
                                        <path d="M330.036 489.924V495.918C330.036 496.575 330.204 497.112 330.54 497.531C330.876 497.94 331.347 498.205 331.955 498.326C332.572 498.448 333.049 498.372 333.384 498.097C333.72 497.812 333.888 497.341 333.888 496.684V490.69L335.807 491.071V497.052C335.807 497.875 335.63 498.539 335.276 499.042C334.931 499.537 334.464 499.87 333.874 500.039C333.294 500.211 332.645 500.225 331.928 500.083C331.22 499.942 330.576 499.67 329.996 499.268C329.424 498.867 328.97 498.352 328.635 497.721C328.299 497.08 328.131 496.349 328.131 495.525V489.545L330.036 489.924Z" fill="#8A8EAC"/>
                                        <path d="M340.928 501.873C340.265 501.741 339.666 501.506 339.131 501.168C338.605 500.832 338.188 500.416 337.879 499.92C337.571 499.424 337.412 498.879 337.403 498.285L339.444 498.691C339.471 499.095 339.607 499.436 339.852 499.716C340.106 499.998 340.451 500.182 340.887 500.269C341.331 500.357 341.681 500.32 341.935 500.158C342.189 499.987 342.316 499.725 342.316 499.374C342.316 499.087 342.23 498.834 342.057 498.614C341.885 498.395 341.667 498.208 341.404 498.054C341.15 497.893 340.796 497.702 340.342 497.482C339.725 497.175 339.222 496.894 338.832 496.641C338.451 496.38 338.12 496.041 337.838 495.624C337.566 495.2 337.43 494.683 337.43 494.072C337.43 493.499 337.571 493.027 337.852 492.658C338.133 492.288 338.528 492.043 339.036 491.922C339.544 491.792 340.125 491.792 340.778 491.921C341.758 492.116 342.552 492.519 343.16 493.131C343.776 493.734 344.117 494.477 344.18 495.36L342.084 494.943C342.066 494.606 341.926 494.305 341.662 494.04C341.408 493.768 341.068 493.589 340.642 493.504C340.27 493.43 339.97 493.468 339.744 493.617C339.526 493.768 339.417 494.028 339.417 494.398C339.417 494.657 339.499 494.891 339.662 495.099C339.834 495.3 340.043 495.48 340.288 495.64C340.542 495.792 340.896 495.983 341.349 496.212C341.966 496.52 342.47 496.805 342.86 497.067C343.25 497.33 343.586 497.674 343.867 498.1C344.148 498.526 344.289 499.04 344.289 499.641C344.289 500.159 344.158 500.614 343.894 501.006C343.631 501.397 343.246 501.677 342.738 501.844C342.23 502.002 341.626 502.012 340.928 501.873Z" fill="#8A8EAC"/>
                                        <path d="M353.593 504.392C352.704 504.215 351.888 503.84 351.144 503.266C350.4 502.693 349.81 501.988 349.374 501.152C348.939 500.307 348.721 499.408 348.721 498.455C348.721 497.512 348.939 496.709 349.374 496.046C349.81 495.374 350.4 494.899 351.144 494.622C351.888 494.344 352.704 494.294 353.593 494.471C354.491 494.649 355.308 495.024 356.043 495.596C356.787 496.17 357.372 496.878 357.799 497.722C358.234 498.557 358.452 499.447 358.452 500.391C358.452 501.344 358.234 502.156 357.799 502.828C357.372 503.492 356.787 503.963 356.043 504.241C355.299 504.518 354.482 504.569 353.593 504.392ZM353.593 502.657C354.165 502.771 354.668 502.742 355.104 502.569C355.539 502.388 355.88 502.076 356.125 501.635C356.37 501.193 356.492 500.649 356.492 500.001C356.492 499.353 356.37 498.765 356.125 498.235C355.88 497.696 355.539 497.254 355.104 496.908C354.668 496.562 354.165 496.333 353.593 496.219C353.022 496.105 352.514 496.134 352.069 496.304C351.633 496.477 351.293 496.784 351.048 497.225C350.803 497.658 350.681 498.197 350.681 498.845C350.681 499.493 350.803 500.086 351.048 500.625C351.293 501.164 351.633 501.611 352.069 501.966C352.514 502.313 353.022 502.544 353.593 502.657Z" fill="#8A8EAC"/>
                                        <path d="M365.735 497.025V498.593L361.775 497.805V500.289L364.809 500.892V502.432L361.775 501.829V505.922L359.869 505.543V495.858L365.735 497.025Z" fill="#8A8EAC"/>
                                        <path d="M380.686 499.998V509.684L378.78 509.305V503.005L376.235 508.799L374.793 508.512L372.234 501.703V508.003L370.329 507.624V497.938L372.493 498.369L375.514 506.171L378.535 499.571L380.686 499.998Z" fill="#8A8EAC"/>
                                        <path d="M390.122 501.876L386.911 507.55V510.922L385.005 510.543V507.171L381.78 500.216L383.93 500.644L385.972 505.476L387.999 501.453L390.122 501.876Z" fill="#8A8EAC"/>
                                        <path d="M297.448 512.095L293.664 511.343L293.038 513.064L291.038 512.666L294.454 503.646L296.672 504.087L300.088 514.466L298.074 514.065L297.448 512.095ZM296.931 510.438L295.556 506.113L294.182 509.892L296.931 510.438Z" fill="#8A8EAC"/>
                                        <path d="M300.902 509.771C300.902 508.819 301.111 508.009 301.528 507.343C301.955 506.669 302.531 506.196 303.257 505.924C303.992 505.645 304.813 505.595 305.72 505.776C306.781 505.987 307.711 506.45 308.51 507.163C309.308 507.877 309.866 508.756 310.184 509.8L307.993 509.364C307.775 508.858 307.466 508.45 307.067 508.139C306.677 507.83 306.223 507.624 305.706 507.522C305.153 507.411 304.658 507.447 304.223 507.629C303.796 507.803 303.461 508.106 303.216 508.539C302.98 508.973 302.862 509.514 302.862 510.161C302.862 510.799 302.98 511.387 303.216 511.924C303.461 512.454 303.796 512.896 304.223 513.249C304.658 513.594 305.153 513.822 305.706 513.932C306.223 514.035 306.677 514.01 307.067 513.856C307.466 513.695 307.775 513.405 307.993 512.986L310.184 513.421C309.866 514.348 309.308 515.01 308.51 515.406C307.72 515.795 306.791 515.882 305.72 515.669C304.813 515.489 303.992 515.118 303.257 514.555C302.531 513.985 301.955 513.283 301.528 512.449C301.111 511.617 300.902 510.724 300.902 509.771Z" fill="#8A8EAC"/>
                                        <path d="M322.168 509.173V518.858L320.263 518.479V512.179L317.718 517.973L316.275 517.686L313.716 510.877V517.177L311.811 516.798V507.112L313.975 507.543L316.996 515.345L320.018 508.745L322.168 509.173Z" fill="#8A8EAC"/>
                                        <path d="M325.957 511.494V513.922L329.155 514.559V516.099L325.957 515.463V518.03L329.563 518.747V520.329L324.052 519.233V509.533L329.563 510.63V512.212L325.957 511.494Z" fill="#8A8EAC"/>
                                        <path d="M336.443 512.012V521.697L334.538 521.318V511.633L336.443 512.012Z" fill="#8A8EAC"/>
                                        <path d="M346.45 523.688L344.545 523.309L340.231 515.804V522.451L338.326 522.072V512.373L340.231 512.752L344.545 520.27V513.61L346.45 513.989V523.688Z" fill="#8A8EAC"/>
                                        <path d="M354.798 515.663V517.231L352.266 516.727V524.845L350.361 524.466V516.348L347.83 515.845V514.277L354.798 515.663Z" fill="#8A8EAC"/>
                                        <path d="M358.093 517.886V520.315L361.291 520.951V522.491L358.093 521.855V524.422L361.7 525.139V526.721L356.188 525.625V515.926L361.7 517.022V518.604L358.093 517.886Z" fill="#8A8EAC"/>
                                        <path d="M368.33 528.04L366.235 523.849L365.336 523.67V527.445L363.431 527.066V517.38L366.997 518.09C367.732 518.236 368.358 518.494 368.875 518.865C369.392 519.227 369.778 519.66 370.032 520.164C370.295 520.66 370.426 521.186 370.426 521.741C370.426 522.379 370.245 522.922 369.882 523.367C369.519 523.804 368.979 524.048 368.262 524.1L370.535 528.479L368.33 528.04ZM365.336 522.213L366.929 522.53C367.446 522.633 367.831 522.585 368.086 522.386C368.34 522.177 368.467 521.846 368.467 521.393C368.467 520.949 368.34 520.581 368.086 520.29C367.831 519.99 367.446 519.788 366.929 519.686L365.336 519.369V522.213Z" fill="#8A8EAC"/>
                                        <path d="M380.274 530.416L378.369 530.037L374.055 522.532V529.179L372.15 528.8V519.101L374.055 519.48L378.369 526.998V520.338L380.274 520.717V530.416Z" fill="#8A8EAC"/>
                                        <path d="M384.063 523.052V525.48L387.261 526.117V527.657L384.063 527.021V529.588L387.669 530.305V531.887L382.157 530.791V521.091L387.669 522.188V523.769L384.063 523.052Z" fill="#8A8EAC"/>
                                        <path d="M395.865 523.832V525.4L393.334 524.896V533.014L391.428 532.635V524.517L388.897 524.014V522.446L395.865 523.832Z" fill="#8A8EAC"/>
                                        </g>
                                        <path id="GreenStatusBar" d="M243 443.337C243 440.389 245.344 438.466 248.234 439.041L438.766 476.94C441.656 477.515 444 480.371 444 483.318L243 443.337Z" fill="#7EEA88"/>
                                        <path id="LastStatusBar" d="M243 443.337C243 440.389 245.344 438.466 248.234 439.041L438.766 476.94C441.657 477.515 444 480.371 444 483.318V483.318L243 443.337V443.337Z" fill="#E9EFF4"/>
                                        </g>
                                        <g id="Group 170">
                                        <g id="Ellipse 13" filter="url(#filter2_d)">
                                        <path d="M261 448.513C261 458.649 252.941 465.263 243 463.286C233.059 461.308 225 451.489 225 441.353C225 431.217 233.059 424.603 243 426.58C252.941 428.558 261 438.378 261 448.513Z" fill="#DBD9E4"/>
                                        </g>
                                        <g id="Group 168">
                                        <g id="Group 167">
                                        <path id="Union" fillRule="evenodd" clipRule="evenodd" d="M251.427 442.205C251.421 442.204 251.415 442.2 251.41 442.196L243.972 435.852C243.38 435.347 242.62 435.195 242.028 435.465L234.59 438.85C234.585 438.853 234.579 438.853 234.573 438.852C234.555 438.849 234.54 438.861 234.54 438.879V451.693C234.54 452.706 235.346 453.688 236.34 453.886L249.66 456.535C250.654 456.733 251.46 456.072 251.46 455.058V442.245C251.46 442.226 251.445 442.208 251.427 442.205Z" fill="#40A0F0"/>
                                        <path id="Rectangle 35" d="M246.6 437.391C246.6 436.884 247.003 436.553 247.5 436.652L247.86 436.724C248.357 436.822 248.76 437.313 248.76 437.82V439.655C248.76 440.162 248.357 440.493 247.86 440.394L247.5 440.322C247.003 440.224 246.6 439.733 246.6 439.226V437.391Z" fill="#40A0F0"/>
                                        </g>
                                        <path id="Rectangle 36" d="M240.66 446.67C240.66 446.264 240.983 446 241.38 446.079L244.62 446.723C245.018 446.803 245.34 447.195 245.34 447.601V453.841C245.34 454.246 245.018 454.511 244.62 454.432L241.38 453.787C240.983 453.708 240.66 453.315 240.66 452.91V446.67Z" fill="#EFE4DD"/>
                                        </g>
                                        </g>
                                        <g id="Group 171">
                                        <g id="Ellipse 14" filter="url(#filter3_d)">
                                        <path d="M204.296 93.693C204.296 112.64 189.231 125.003 170.648 121.307C152.065 117.611 137 99.2543 137 80.307C137 61.3598 152.065 48.9965 170.648 52.693C189.231 56.3894 204.296 74.7457 204.296 93.693Z" fill="#DBD9E4"/>
                                        </g>
                                        <g id="Group 172">
                                        <path id="Ellipse 15" d="M189.154 91.7104C189.154 102.131 180.869 108.931 170.648 106.898C160.427 104.865 152.142 94.7691 152.142 84.3481C152.142 73.9271 160.427 67.1273 170.648 69.1604C180.869 71.1934 189.154 81.2894 189.154 91.7104Z" fill="#40A0F0"/>
                                        <g id="Mask Group">
                                        <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="152" y="68" width="38" height="40">
                                        <path id="Ellipse 17" d="M189.154 91.7104C189.154 102.131 180.869 108.931 170.648 106.898C160.427 104.865 152.142 94.7691 152.142 84.3481C152.142 73.9271 160.427 67.1273 170.648 69.1604C180.869 71.1934 189.154 81.2894 189.154 91.7104Z" fill="#C4C4C4"/>
                                        </mask>
                                        <g mask="url(#mask0)">
                                        <path id="Line 24 (Stroke)" fillRule="evenodd" clipRule="evenodd" d="M191.173 86.2798L150.123 78.1143L150.123 76.0559L191.173 84.2213L191.173 86.2798Z" fill="#EFE4DD"/>
                                        <path id="Line 25 (Stroke)" fillRule="evenodd" clipRule="evenodd" d="M191.173 100.002L150.123 91.837L150.123 89.7786L191.173 97.944L191.173 100.002Z" fill="#EFE4DD"/>
                                        <path id="Ellipse 16 (Stroke)" fillRule="evenodd" clipRule="evenodd" d="M175.917 103.044C177.609 99.9301 178.723 95.2172 178.723 89.6356C178.723 84.0539 177.609 78.8977 175.917 75.1109C174.154 71.1664 172.155 69.4603 170.648 69.1604C169.14 68.8605 167.141 69.7714 165.379 73.0148C163.687 76.1284 162.572 80.8413 162.572 86.4229C162.572 92.0046 163.687 97.1608 165.379 100.948C167.141 104.892 169.14 106.598 170.648 106.898C172.155 107.198 174.154 106.287 175.917 103.044ZM170.648 109.3C176.409 110.446 181.079 101.851 181.079 90.1041C181.079 78.3568 176.409 67.9048 170.648 66.7589C164.887 65.613 160.217 74.2071 160.217 85.9544C160.217 97.7017 164.887 108.154 170.648 109.3Z" fill="#EFE4DD"/>
                                        </g>
                                        </g>
                                        </g>
                                        </g>
                                        <g id="Group 172_2">
                                        <g id="Rectangle 12_3" filter="url(#filter4_d)">
                                        <path d="M35 236.372C35 232.853 37.7982 230.557 41.25 231.243L268.75 276.496C272.202 277.182 275 280.592 275 284.111V409.011C275 412.531 272.202 414.827 268.75 414.141L41.25 368.888C37.7982 368.201 35 364.792 35 361.272V236.372Z" fill="#E9EFF4"/>
                                        </g>
                                        <path id="Line 3 (Stroke)_3" fillRule="evenodd" clipRule="evenodd" d="M264.375 385.869L45.625 342.357V340.764L264.375 384.276V385.869Z" fill="#A194EE"/>
                                        <path id="Line 7 (Stroke)_3" fillRule="evenodd" clipRule="evenodd" d="M264.375 385.869L45.625 342.357V340.764L264.375 384.276V385.869Z" fill="#A194EE"/>
                                        <g id="REGIONAL STATUS OF&#226;&#128;&#168;ACME INTERNET">
                                        <path d="M76.7223 291.19L74.2198 286.186L73.1473 285.973V290.479L70.8723 290.027V278.462L75.1298 279.309C76.0073 279.483 76.7548 279.792 77.3723 280.235C77.9898 280.668 78.4502 281.184 78.7536 281.786C79.0677 282.379 79.2248 283.006 79.2248 283.669C79.2248 284.431 79.0081 285.079 78.5748 285.611C78.1415 286.132 77.4969 286.424 76.6411 286.485L79.3548 291.714L76.7223 291.19ZM73.1473 284.233L75.0486 284.611C75.6661 284.734 76.1265 284.677 76.4298 284.439C76.7331 284.19 76.8848 283.795 76.8848 283.253C76.8848 282.723 76.7331 282.284 76.4298 281.937C76.1265 281.578 75.6661 281.338 75.0486 281.215L73.1473 280.837V284.233Z" fill="#8A8EAC"/>
                                        <path d="M83.5575 282.858V285.757L87.3762 286.517V288.356L83.5575 287.596V290.661L87.8637 291.518V293.407L81.2825 292.097V280.516L87.8637 281.825V283.714L83.5575 282.858Z" fill="#8A8EAC"/>
                                        <path d="M97.8287 287.303C97.5687 286.766 97.2112 286.325 96.7562 285.98C96.3012 285.635 95.7703 285.403 95.1637 285.282C94.492 285.149 93.8962 285.185 93.3762 285.39C92.8562 285.596 92.4499 285.957 92.1574 286.474C91.8649 286.99 91.7187 287.623 91.7187 288.374C91.7187 289.148 91.8649 289.851 92.1574 290.483C92.4607 291.118 92.8778 291.643 93.4087 292.057C93.9395 292.472 94.557 292.75 95.2612 292.89C96.1278 293.062 96.8374 292.971 97.3899 292.617C97.9424 292.252 98.3053 291.667 98.4787 290.862L94.5787 290.087V288.314L100.721 289.536V291.557C100.569 292.333 100.244 293.014 99.7462 293.6C99.2478 294.185 98.6032 294.609 97.8124 294.872C97.0324 295.125 96.1549 295.155 95.1799 294.961C94.0857 294.744 93.0945 294.298 92.2062 293.624C91.3287 292.942 90.6353 292.102 90.1262 291.106C89.6278 290.112 89.3787 289.047 89.3787 287.909C89.3787 286.771 89.6278 285.805 90.1262 285.009C90.6353 284.205 91.3287 283.641 92.2062 283.319C93.0945 282.987 94.0803 282.929 95.1637 283.145C96.442 283.399 97.5524 283.94 98.4949 284.768C99.4374 285.585 100.087 286.604 100.445 287.824L97.8287 287.303Z" fill="#8A8EAC"/>
                                        <path d="M104.679 285.187V296.751L102.404 296.299V284.734L104.679 285.187Z" fill="#8A8EAC"/>
                                        <path d="M112.192 298.362C111.13 298.151 110.155 297.703 109.267 297.018C108.379 296.333 107.675 295.492 107.155 294.493C106.635 293.484 106.375 292.411 106.375 291.273C106.375 290.146 106.635 289.188 107.155 288.396C107.675 287.594 108.379 287.027 109.267 286.696C110.155 286.364 111.13 286.304 112.192 286.515C113.265 286.729 114.24 287.177 115.117 287.859C116.005 288.544 116.704 289.39 117.213 290.397C117.733 291.395 117.993 292.458 117.993 293.584C117.993 294.722 117.733 295.692 117.213 296.494C116.704 297.288 116.005 297.85 115.117 298.181C114.229 298.513 113.254 298.573 112.192 298.362ZM112.192 296.291C112.875 296.426 113.476 296.391 113.996 296.186C114.516 295.969 114.922 295.597 115.215 295.069C115.507 294.542 115.653 293.892 115.653 293.119C115.653 292.346 115.507 291.643 115.215 291.01C114.922 290.367 114.516 289.838 113.996 289.426C113.476 289.013 112.875 288.739 112.192 288.603C111.51 288.467 110.903 288.501 110.372 288.705C109.852 288.911 109.446 289.277 109.153 289.805C108.861 290.321 108.715 290.965 108.715 291.739C108.715 292.512 108.861 293.22 109.153 293.864C109.446 294.507 109.852 295.041 110.372 295.465C110.903 295.88 111.51 296.155 112.192 296.291Z" fill="#8A8EAC"/>
                                        <path d="M129.387 301.666L127.112 301.214L121.961 292.253V300.189L119.686 299.736V288.155L121.961 288.608L127.112 297.585V289.632L129.387 290.085V301.666Z" fill="#8A8EAC"/>
                                        <path d="M138.59 301.293L134.073 300.395L133.325 302.449L130.937 301.974L135.015 291.204L137.664 291.731L141.743 304.124L139.338 303.645L138.59 301.293ZM137.973 299.315L136.332 294.15L134.69 298.662L137.973 299.315Z" fill="#8A8EAC"/>
                                        <path d="M145.542 303.04L149.28 303.784V305.623L143.267 304.427V292.862L145.542 293.315V303.04Z" fill="#8A8EAC"/>
                                        <path d="M158.514 307.576C157.723 307.418 157.008 307.138 156.369 306.735C155.741 306.334 155.242 305.837 154.874 305.245C154.506 304.652 154.316 304.001 154.305 303.292L156.743 303.777C156.775 304.259 156.938 304.667 157.23 305.001C157.534 305.337 157.945 305.557 158.465 305.661C158.996 305.766 159.413 305.722 159.717 305.529C160.02 305.324 160.172 305.012 160.172 304.592C160.172 304.249 160.069 303.947 159.863 303.685C159.657 303.424 159.397 303.201 159.083 303.017C158.78 302.824 158.357 302.596 157.815 302.334C157.079 301.966 156.477 301.631 156.012 301.329C155.557 301.017 155.161 300.613 154.825 300.115C154.5 299.609 154.338 298.991 154.338 298.262C154.338 297.577 154.506 297.014 154.842 296.573C155.177 296.132 155.649 295.839 156.255 295.694C156.862 295.539 157.555 295.539 158.335 295.694C159.505 295.927 160.453 296.408 161.179 297.138C161.916 297.859 162.322 298.746 162.398 299.799L159.895 299.301C159.874 298.899 159.706 298.54 159.392 298.224C159.088 297.898 158.682 297.685 158.173 297.583C157.729 297.495 157.371 297.54 157.1 297.718C156.84 297.898 156.71 298.209 156.71 298.651C156.71 298.96 156.808 299.239 157.003 299.488C157.209 299.728 157.458 299.943 157.75 300.134C158.054 300.316 158.476 300.543 159.018 300.817C159.755 301.184 160.356 301.525 160.822 301.838C161.287 302.152 161.688 302.563 162.024 303.072C162.36 303.58 162.528 304.193 162.528 304.911C162.528 305.53 162.371 306.073 162.057 306.541C161.742 307.008 161.282 307.342 160.675 307.542C160.069 307.73 159.348 307.742 158.514 307.576Z" fill="#8A8EAC"/>
                                        <path d="M172.219 298.621V300.493L169.196 299.892V309.585L166.921 309.132V299.44L163.899 298.838V296.966L172.219 298.621Z" fill="#8A8EAC"/>
                                        <path d="M180.834 309.696L176.316 308.797L175.569 310.852L173.18 310.377L177.259 299.607L179.908 300.134L183.986 312.527L181.581 312.048L180.834 309.696ZM180.216 307.717L178.575 302.553L176.934 307.065L180.216 307.717Z" fill="#8A8EAC"/>
                                        <path d="M193.23 302.8V304.673L190.207 304.071V313.764L187.932 313.311V303.619L184.91 303.018V301.146L193.23 302.8Z" fill="#8A8EAC"/>
                                        <path d="M197.132 303.577V310.734C197.132 311.518 197.333 312.16 197.733 312.66C198.134 313.148 198.698 313.465 199.423 313.609C200.16 313.756 200.729 313.664 201.13 313.335C201.53 312.995 201.731 312.433 201.731 311.649V304.491L204.022 304.947V312.088C204.022 313.071 203.811 313.863 203.388 314.464C202.977 315.056 202.419 315.453 201.715 315.655C201.021 315.86 200.247 315.877 199.391 315.707C198.546 315.539 197.777 315.214 197.083 314.734C196.401 314.256 195.859 313.64 195.458 312.887C195.058 312.122 194.857 311.248 194.857 310.265V303.124L197.132 303.577Z" fill="#8A8EAC"/>
                                        <path d="M210.136 317.844C209.346 317.687 208.631 317.407 207.991 317.003C207.363 316.602 206.865 316.105 206.496 315.513C206.128 314.921 205.939 314.27 205.928 313.561L208.365 314.046C208.398 314.527 208.56 314.935 208.853 315.269C209.156 315.606 209.568 315.826 210.088 315.929C210.619 316.035 211.036 315.991 211.339 315.797C211.642 315.592 211.794 315.28 211.794 314.86C211.794 314.518 211.691 314.216 211.485 313.954C211.279 313.692 211.019 313.469 210.705 313.285C210.402 313.092 209.979 312.864 209.438 312.602C208.701 312.235 208.1 311.9 207.634 311.597C207.179 311.286 206.784 310.881 206.448 310.384C206.123 309.877 205.96 309.259 205.96 308.53C205.96 307.846 206.128 307.283 206.464 306.841C206.8 306.4 207.271 306.107 207.878 305.963C208.484 305.807 209.178 305.807 209.958 305.962C211.128 306.195 212.076 306.676 212.801 307.406C213.538 308.127 213.944 309.014 214.02 310.067L211.518 309.57C211.496 309.168 211.328 308.808 211.014 308.492C210.711 308.166 210.304 307.953 209.795 307.852C209.351 307.763 208.994 307.808 208.723 307.986C208.463 308.167 208.333 308.478 208.333 308.919C208.333 309.229 208.43 309.508 208.625 309.756C208.831 309.996 209.08 310.211 209.373 310.402C209.676 310.584 210.099 310.812 210.64 311.085C211.377 311.452 211.978 311.793 212.444 312.107C212.91 312.42 213.311 312.831 213.646 313.34C213.982 313.848 214.15 314.462 214.15 315.18C214.15 315.798 213.993 316.341 213.679 316.809C213.365 317.277 212.904 317.61 212.298 317.81C211.691 317.999 210.971 318.01 210.136 317.844Z" fill="#8A8EAC"/>
                                        <path d="M225.26 320.852C224.198 320.641 223.223 320.193 222.335 319.508C221.446 318.824 220.742 317.982 220.222 316.984C219.702 315.975 219.442 314.901 219.442 313.764C219.442 312.637 219.702 311.678 220.222 310.887C220.742 310.085 221.446 309.518 222.335 309.186C223.223 308.855 224.198 308.795 225.26 309.006C226.332 309.219 227.307 309.667 228.185 310.35C229.073 311.035 229.772 311.881 230.281 312.888C230.801 313.886 231.061 314.948 231.061 316.075C231.061 317.212 230.801 318.182 230.281 318.985C229.772 319.778 229.073 320.341 228.185 320.672C227.296 321.003 226.321 321.063 225.26 320.852ZM225.26 318.781C225.942 318.917 226.543 318.882 227.063 318.676C227.583 318.459 227.99 318.087 228.282 317.56C228.575 317.033 228.721 316.383 228.721 315.609C228.721 314.836 228.575 314.133 228.282 313.501C227.99 312.857 227.583 312.329 227.063 311.916C226.543 311.504 225.942 311.229 225.26 311.094C224.577 310.958 223.97 310.992 223.44 311.195C222.92 311.401 222.513 311.768 222.221 312.295C221.928 312.811 221.782 313.456 221.782 314.229C221.782 315.002 221.928 315.711 222.221 316.354C222.513 316.998 222.92 317.532 223.44 317.955C223.97 318.37 224.577 318.646 225.26 318.781Z" fill="#8A8EAC"/>
                                        <path d="M239.757 312.055V313.928L235.028 312.987V315.953L238.652 316.674V318.513L235.028 317.792V322.679L232.753 322.227V310.662L239.757 312.055Z" fill="#8A8EAC"/>
                                        <path d="M100.012 318.472L95.4949 317.573L94.7474 319.628L92.3586 319.153L96.4374 308.383L99.0861 308.91L103.165 321.303L100.76 320.824L100.012 318.472ZM99.3949 316.494L97.7536 311.329L96.1124 315.841L99.3949 316.494Z" fill="#8A8EAC"/>
                                        <path d="M104.137 315.697C104.137 314.559 104.386 313.593 104.884 312.797C105.394 311.993 106.082 311.428 106.948 311.104C107.826 310.77 108.806 310.711 109.889 310.926C111.157 311.179 112.267 311.731 113.221 312.583C114.174 313.436 114.84 314.485 115.219 315.731L112.603 315.211C112.343 314.607 111.975 314.119 111.498 313.748C111.032 313.38 110.491 313.134 109.873 313.011C109.212 312.879 108.622 312.922 108.102 313.139C107.593 313.347 107.192 313.709 106.899 314.225C106.618 314.744 106.477 315.389 106.477 316.163C106.477 316.925 106.618 317.627 106.899 318.268C107.192 318.901 107.593 319.428 108.102 319.849C108.622 320.262 109.212 320.534 109.873 320.665C110.491 320.788 111.032 320.758 111.498 320.574C111.975 320.382 112.343 320.036 112.603 319.535L115.219 320.055C114.84 321.162 114.174 321.952 113.221 322.425C112.278 322.889 111.168 322.994 109.889 322.74C108.806 322.524 107.826 322.081 106.948 321.409C106.082 320.729 105.394 319.89 104.884 318.894C104.386 317.901 104.137 316.835 104.137 315.697Z" fill="#8A8EAC"/>
                                        <path d="M129.529 314.982V326.547L127.254 326.094V318.572L124.215 325.49L122.493 325.147L119.438 317.018V324.54L117.163 324.087V312.522L119.746 313.036L123.354 322.353L126.961 314.471L129.529 314.982Z" fill="#8A8EAC"/>
                                        <path d="M134.053 317.754V320.654L137.872 321.413V323.252L134.053 322.493V325.558L138.359 326.415V328.303L131.778 326.994V315.413L138.359 316.722V318.611L134.053 317.754Z" fill="#8A8EAC"/>
                                        <path d="M146.574 318.373V329.937L144.299 329.485V317.92L146.574 318.373Z" fill="#8A8EAC"/>
                                        <path d="M158.523 332.314L156.248 331.862L151.097 322.901V330.837L148.822 330.384V318.803L151.097 319.256L156.248 328.233V320.28L158.523 320.733V332.314Z" fill="#8A8EAC"/>
                                        <path d="M168.49 322.732V324.604L165.467 324.003V333.695L163.192 333.243V323.55L160.17 322.949V321.077L168.49 322.732Z" fill="#8A8EAC"/>
                                        <path d="M172.425 325.387V328.286L176.243 329.046V330.885L172.425 330.125V333.191L176.731 334.047V335.936L170.15 334.627V323.046L176.731 324.355V326.243L172.425 325.387Z" fill="#8A8EAC"/>
                                        <path d="M184.648 337.511L182.146 332.506L181.073 332.293V336.8L178.798 336.347V324.782L183.056 325.629C183.933 325.804 184.681 326.113 185.298 326.556C185.916 326.988 186.376 327.505 186.68 328.106C186.994 328.699 187.151 329.327 187.151 329.989C187.151 330.752 186.934 331.399 186.501 331.931C186.068 332.453 185.423 332.744 184.567 332.806L187.281 338.034L184.648 337.511ZM181.073 330.553L182.975 330.932C183.592 331.054 184.053 330.997 184.356 330.759C184.659 330.51 184.811 330.115 184.811 329.574C184.811 329.044 184.659 328.605 184.356 328.257C184.053 327.899 183.592 327.658 182.975 327.535L181.073 327.157V330.553Z" fill="#8A8EAC"/>
                                        <path d="M198.91 340.348L196.635 339.895L191.484 330.934V338.87L189.209 338.418V326.837L191.484 327.289L196.635 336.267V328.314L198.91 328.766V340.348Z" fill="#8A8EAC"/>
                                        <path d="M203.433 331.555V334.454L207.252 335.214V337.053L203.433 336.293V339.358L207.739 340.215V342.104L201.158 340.795V329.213L207.739 330.523V332.411L203.433 331.555Z" fill="#8A8EAC"/>
                                        <path d="M217.525 332.486V334.358L214.503 333.757V343.449L212.228 342.997V333.304L209.205 332.703V330.831L217.525 332.486Z" fill="#8A8EAC"/>
                                        </g>
                                        <path id="MidStatusBar" d="M35 236.372C35 232.853 37.7982 230.557 41.25 231.243L268.75 276.496C272.202 277.182 275 280.592 275 284.111L35 236.372Z" fill="#7EEA88"/>
                                        </g>
                                        <g id="Group 169">
                                        <g id="Ellipse 12" filter="url(#filter5_d)">
                                        <path d="M61 246.562C61 261.484 49.1355 271.221 34.5 268.31C19.8645 265.398 8 250.941 8 236.019C8 221.097 19.8645 211.36 34.5 214.271C49.1355 217.182 61 231.639 61 246.562Z" fill="#DBD9E4"/>
                                        </g>
                                        <g id="Group 5.5">
                                        <g id="Oval 9" filter="url(#filter6_d)">
                                        <path className="gps-icon" fillRule="evenodd" clipRule="evenodd" d="M30.9344 254.189C32.8528 256.817 36.182 257.479 38.1003 255.614C41.7854 252.031 46.9898 246.168 46.9898 241.631C46.9898 234.608 41.4057 227.803 34.5174 226.433C27.629 225.063 22.0449 229.646 22.0449 236.669C22.0449 241.206 27.2493 249.14 30.9344 254.189Z" fill="#40A0F0"/>
                                        </g>
                                        <path id="Oval 2" fillRule="evenodd" clipRule="evenodd" d="M34.5175 243.518C37.6199 244.136 40.1349 242.072 40.1349 238.908C40.1349 235.745 37.6199 232.681 34.5175 232.064C31.4151 231.447 28.9001 233.511 28.9001 236.674C28.9001 239.837 31.4151 242.901 34.5175 243.518Z" fill="#EFE4DD"/>
                                        </g>
                                        </g>
                                        </g>
                                        <defs>
                                        <filter id="filter0_d" x="161" y="63.29" width="315.975" height="250.592" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                        <feOffset dx="10" dy="10"/>
                                        <feGaussianBlur stdDeviation="10"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.156863 0 0 0 0 0.592157 0 0 0 0 0.952941 0 0 0 0.3 0"/>
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                                        </filter>
                                        <filter id="filter1_d" x="227" y="422.939" width="241" height="193.38" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                        <feOffset dx="4" dy="4"/>
                                        <feGaussianBlur stdDeviation="10"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.788235 0 0 0 0 0.858824 0 0 0 0 0.913725 0 0 0 0.75 0"/>
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                                        </filter>
                                        <filter id="filter2_d" x="217" y="418.231" width="56" height="57.4043" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                        <feOffset dx="2" dy="2"/>
                                        <feGaussianBlur stdDeviation="5"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.156863 0 0 0 0 0.592157 0 0 0 0 0.952941 0 0 0 0.3 0"/>
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                                        </filter>
                                        <filter id="filter3_d" x="129" y="44.0396" width="87.2957" height="89.9207" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                        <feOffset dx="2" dy="2"/>
                                        <feGaussianBlur stdDeviation="5"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.156863 0 0 0 0 0.592157 0 0 0 0 0.952941 0 0 0 0.3 0"/>
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                                        </filter>
                                        <filter id="filter4_d" x="29" y="225.122" width="280" height="223.14" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                        <feOffset dx="14" dy="14"/>
                                        <feGaussianBlur stdDeviation="10"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.156863 0 0 0 0 0.592157 0 0 0 0 0.952941 0 0 0 0.3 0"/>
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                                        </filter>
                                        <filter id="filter5_d" x="0" y="205.757" width="73" height="75.0674" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                        <feOffset dx="2" dy="2"/>
                                        <feGaussianBlur stdDeviation="5"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.156863 0 0 0 0 0.592157 0 0 0 0 0.952941 0 0 0 0.3 0"/>
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                                        </filter>
                                        <filter id="filter6_d" x="12.0449" y="226.191" width="44.9449" height="52.4852" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                                        <feOffset dy="12"/>
                                        <feGaussianBlur stdDeviation="5"/>
                                        <feColorMatrix type="matrix" values="0 0 0 0 0.803922 0 0 0 0 0.803922 0 0 0 0 0.803922 0 0 0 0.2 0"/>
                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                                        </filter>
                                        <linearGradient id="paint0_linear" x1="129.998" y1="0" x2="129.998" y2="480" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#D2E6F6"/>
                                        <stop offset="1" stopColor="#EFE4DD" stopOpacity="0"/>
                                        </linearGradient>
                                        <linearGradient id="paint1_linear" x1="130" y1="0" x2="130" y2="480" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#D2E6F6"/>
                                        <stop offset="1" stopColor="#EFE4DD" stopOpacity="0"/>
                                        </linearGradient>
                                        <linearGradient id="paint2_linear" x1="130" y1="0" x2="130" y2="480" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#D2E6F6"/>
                                        <stop offset="1" stopColor="#EFE4DD" stopOpacity="0"/>
                                        </linearGradient>
                                        </defs>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
            <div className="testimonial-container">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="testimonial-panel-container">
                                <div className="testimonial-panel">
                                    <h2 className="text-accent">What Our Customers Think</h2>
                                    <p>Our customers are implementing improved support strategies with NetMinded.</p>
                                    <div className="testimonial-selector">
                                        <a href="javascript:void(0)" onClick={() => {selectedTest(testimonialSlider, 0)}}aria-label="Testimonial Navigation" role="navigation" rel="nofollow"><span className={`${testimonialPosition === 0 ? `testimonial-selector--active` : ``}`}></span></a>
                                        <a href="javascript:void(0)" onClick={() => {selectedTest(testimonialSlider, 1)}}aria-label="Testimonial Navigation" role="navigation" rel="nofollow"><span className={`${testimonialPosition === 1 ? `testimonial-selector--active` : ``}`}></span></a>
                                        <a href="javascript:void(0)" onClick={() => {selectedTest(testimonialSlider, 2)}}aria-label="Testimonial Navigation" role="navigation" rel="nofollow"><span className={`${testimonialPosition === 2 ? `testimonial-selector--active` : ``}`}></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 testimonial-text">
                            <TestimonialSwiper setTestimonialSlider={setTestimonialSlider} />
                            <ul className="testimonial-logos" role="tablist">
                                <li role="tab"><a href="javascript:void(0)" onClick={() => {selectedTest(testimonialSlider, 0)}} aria-label="Testimonial Logo Tab" rel="nofollow"><StaticImage src='../images/PTI_NetMinded.png' /></a></li>
                                <li role="tab"><a href="javascript:void(0)" onClick={() => {selectedTest(testimonialSlider, 1)}} aria-label="Testimonial Logo Tab" rel="nofollow"><StaticImage src='../images/Grow_Marketing_NetMinded.png' /></a></li>
                                <li role="tab"><a href="javascript:void(0)" onClick={() => {selectedTest(testimonialSlider, 2)}} aria-label="Testimonial Logo Tab" rel="nofollow"><StaticImage src='../images/Triangle_Networks_NetMinded.png' /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Cta ctaText="Contact Us Today, Deploy Tomorrow" ctaBtnText="Contact Us"/>
    </Layout>
  )
}

export default IndexPage

export const Head = () => (
    <SEO article={false} />
)