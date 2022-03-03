import * as React from 'react'
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
                    <div className='col-1'> 
                            </div>

                    <div className='col-md-4'>
                        <h5>Download NetMinded</h5>
                        <ul>
                            <a href="#"><img src={AppleStoreLogo} alt="Download on the app store"/></a>
                            <a href="#"><img src={GooglePlayLogo} alt="Get it on google play" className='google-play-button'/></a>
                        </ul>
                        <ul>
                        <a href="https://facebook.com/SeeThruNetworks" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a> 
                        <a href="https://twitter.com/seethrunetworks" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="https://linkedin.com/company/seethrunetworks" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a href="https://www.youtube.com/channel/UCMye-tTUwQfWAEJ2FQR1ofQ/featured" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>
                        </ul>
                    </div>

                    <div className='col-md-2'>
                        <h5>Support</h5>
                        <ul>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">FAQs</a></li>
                            <li><a href="#">Guides</a></li>
                            <li><a href="#">Open Ticket</a></li>
                            <li><a href="#">Status</a></li>
                        </ul>
                    </div>

                    <div className='col-md-2'>
                        <h5>Company</h5>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Investors</a></li>
                            <li><a href="#">Press</a></li>
                            <li><a href="#">Brand Guidelines</a></li>
                        </ul>
                    </div>

                    <div className='col-md-2'>
                        <h5>Resources</h5>
                        <ul>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms</a></li>
                            <li><a href="#">Web Terms</a></li>
                            <li><a href="#">Web Licences</a></li>
                            <li><a href="#">Sitemap</a></li>
                        </ul>
                    </div>

                    <div className='col-md-1'>
                        
                    </div>
                </div>
                {/* <div className="row">
                    <div className='col-12'>
                        <p>Copyright©2022•SeeThru Networks•All Rights Reserved</p>
                    </div>
                </div> */}
            </div>
        </footer>
    )
}

export default Footer