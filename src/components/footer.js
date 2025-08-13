import * as React from 'react'
import { Link } from 'gatsby'
import GooglePlayLogo from '../images/Google_Play_Store_badge.svg'
import AppleStoreLogo from '../images/apple-store-badge.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faYoutube,
  faTwitter,
  faFacebook,
} from '@fortawesome/free-brands-svg-icons'


function Footer() {
    return (
        <footer className="footer-container">
            <div className="container-fluid">
                <div className="row">
                    <div className='offset-md-1 col-md-4'>
                        <h2>Download NetMinded</h2>
                        <ul className="app-badges">
                            <li>
                                <a href="https://apps.apple.com/gb/app/netminded/id1562004480" target="_blank" rel="noreferrer"><img src={AppleStoreLogo} alt="Download on the App Store"/></a>
                            </li>
                            <li>
                                <a href="https://play.google.com/store/apps/details?id=com.seethrunetworks.seethrusays" target="_blank" rel="noreferrer"><img src={GooglePlayLogo} alt="Get it on Google Play" className='google-play-button'/></a>
                            </li>
                        </ul>
                        <ul className="social-icons">
                        {/* <li><a href="https://facebook.com/SeeThruNetworks" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a></li>  */}
                            <li>
                                <a href="https://twitter.com/netmindeduk" target="_blank" rel="noreferrer" aria-label="Twitter Social Link" role="link">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                            </li>
                            <li>
                                <a href="https://linkedin.com/company/getnetminded" target="_blank" rel="noreferrer" aria-label="LinkedIn Social Link" role="link">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/channel/UCMye-tTUwQfWAEJ2FQR1ofQ" target="_blank" rel="noreferrer" aria-label="YouTube Social Link" role="link">
                                    <FontAwesomeIcon icon={faYoutube} />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className='col-md-2'>
                        <h2>Support</h2>
                        <ul>
                            <li><a href="https://forms.clickup.com/20532630/f/kjkcp-548/3BQZVT0C3LE05OLX0X" target="_blank" rel="noreferrer">Contact</a></li>
                            <li><a href="https://netminded.freshdesk.com/support/home" target="_blank" rel="noreferrer">FAQs</a></li>
                            {/* <li><a href="#">Guides</a></li> */}
                            <li><a href="https://netminded.freshdesk.com/support/tickets/new" target="_blank" rel="noreferrer">Open Ticket</a></li>
                            {/* <li><a href="#">Status</a></li> */}
                        </ul>
                    </div>

                    <div className='col-md-2'>
                        <h2>Resources</h2>
                        <ul>
                            {/* <li><a href="#">About</a></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><a href="#">Investors</a></li>
                            <li><a href="#">Press</a></li>
                            <li><a href="#">Brand Guidelines</a></li> */}
                            <li><Link to="/privacy">Privacy Policy</Link></li>
                            <li><Link to="/terms">Terms</Link></li>
                            <li><Link to="/web-terms">Web Terms</Link></li>
                        </ul>
                    </div>

                    <div className='col-md-2'>
                        <h2></h2>
                        <ul className="footer-last-list">
                            {/* <li><Link to="/privacy">Privacy Policy</Link></li>
                            <li><Link to="/terms">Terms</Link></li>
                            <li><Link to="/web-terms">Web Terms</Link></li> */}
                            <li><Link to="/licences">Web Licences</Link></li>
                            <li><a href="/sitemap/sitemap-0.xml" target="_blank" rel="noreferrer">Sitemap</a></li>
                        </ul>
                    </div>

                    <div className='col-md-1'>
                        
                    </div>
                </div>
                <div className="row">
                    <div className='offset-md-1 col-md-11 footer-credit'>
                        <p>Copyright © <Link to="/">NetMinded</Link>, a trading name of SeeThru Networks.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer