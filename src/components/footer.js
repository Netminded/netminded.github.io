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
                        <h5>Download NetMinded</h5>
                        <ul className="app-badges">
                            <a href="https://apps.apple.com/gb/app/netminded/id1562004480" target="_blank" rel="noreferrer"><img src={AppleStoreLogo} alt="Download on the App Store"/></a>
                            <a href="https://play.google.com/store/apps/details?id=com.seethrunetworks.seethrusays" target="_blank" rel="noreferrer"><img src={GooglePlayLogo} alt="Get it on Google Play" className='google-play-button'/></a>
                        </ul>
                        <ul className="social-icons">
                        {/* <a href="https://facebook.com/SeeThruNetworks" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>  */}
                        <a href="https://twitter.com/netmindeduk" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="https://linkedin.com/company/seethrunetworks" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="https://www.youtube.com/channel/UCMye-tTUwQfWAEJ2FQR1ofQ" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>
                        </ul>
                    </div>

                    <div className='col-md-2'>
                        <h5>Support</h5>
                        <ul>
                            <li><a href="#">Contact</a></li>
                            <li><a href="https://netminded.freshdesk.com/support/home" target="_blank" rel="noreferrer">FAQs</a></li>
                            {/* <li><a href="#">Guides</a></li> */}
                            <li><a href="#">Open Ticket</a></li>
                            {/* <li><a href="#">Status</a></li> */}
                        </ul>
                    </div>

                    <div className='col-md-2'>
                        <h5>Resources</h5>
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
                        <h5></h5>
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