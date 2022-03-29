import * as React from 'react'
import { Link } from 'gatsby'
import NetMindedLogo from '../images/NetMinded_Logo.svg'
import { useState } from 'react'

const toggleNav = (e, setShowCollapsedNav, showCollapsedNav) => {
    e.preventDefault()
    setShowCollapsedNav(!showCollapsedNav)
}

const Nav = ({simpleNav, isHero}) => {
    const [showCollapsedNav, setShowCollapsedNav] = useState(false)
    return (
        <nav className={`navbar fixed-top navbar-expand-xl navbar-dark ${isHero ? "menu-scrolling-hero" : "menu-scrolling-content"}`}>
            <div className="me-auto tog-container">
                <Link className="navbar-brand" to="/">
                    <img src={NetMindedLogo} alt="NetMinded Logo"/>
                </Link>
                <button className="navbar-toggler" type="button" onClick={(e) => toggleNav(e, setShowCollapsedNav, showCollapsedNav )} data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </div>
            <div className={`collapse navbar-collapse nav-collapse ${showCollapsedNav ? "show" : ""}`} id="navbarCollapse">
                {!simpleNav ? <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link className="nav-link text-accent" to="/features">Features</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-accent" to="/blog">Blog</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-accent" href="https://forms.clickup.com/20532630/f/kjkcp-548/3BQZVT0C3LE05OLX0X" target="_blank" rel="noreferrer">Contact</a>
                    </li>
                    <li>
                        <span className="nav-auth"></span>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link btn nav-btn" href="https://dashboard.seethrunetworks.com/login" rel="noreferrer">Login</a>
                    </li>
                </ul> : 
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link className="nav-link text-accent" to="/">
                            Home
                        </Link>
                    </li>
                </ul>}
            </div>  
        </nav>
    )
}

export default Nav