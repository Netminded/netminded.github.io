import * as React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookSquare,
  faTwitterSquare,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'


function Footer() {
    return (
        <footer className="footer-container">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-5">
                        <p className="footer-text">Copyright &copy; <Link className="footer-link" to="/">NetMinded</Link>, a trading name of SeeThru Networks.</p>
                    </div>
                    <div className="col-lg-2 text-center footer-social">
                        <a href="https://facebook.com/SeeThruNetworks" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faFacebookSquare} />
                        </a> 
                        <a href="https://twitter.com/seethrunetworks" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faTwitterSquare} />
                        </a>
                        <a href="https://linkedin.com/company/seethrunetworks" target="_blank" rel="noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                    </div>
                    <div className="col-lg-5">
                        <ul>
                            <li><Link to="/privacy" className="footer-link" >Privacy</Link></li>
                            <li><Link to="/terms" className="footer-link" >Terms & Conditions</Link></li>
                            <li><Link to="/web-terms" className="footer-link" >Web Terms</Link></li>
                            <li><Link to="/licences" className="footer-link" >Licences</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer