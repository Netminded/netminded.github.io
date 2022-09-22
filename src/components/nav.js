import * as React from 'react'
import { Link } from 'gatsby'
import NetMindedLogo from '../images/NetMinded_Logo.svg'
import { useState } from 'react'

const toggleNav = (e, setShowCollapsedNav, showCollapsedNav) => {
    e.preventDefault()
    setShowCollapsedNav(!showCollapsedNav)
}

const toggleNavDropdown = (e, setShowDropdownNav, showDropdownNav) => {
    e.preventDefault()
    setShowDropdownNav(!showDropdownNav)
}

const Nav = ({simpleNav, isHero}) => {
    const [showCollapsedNav, setShowCollapsedNav] = useState(false)
    const [showDropdownNav, setShowDropdownNav] = useState(false)
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
                    <li className="nav-item dropdown" onMouseEnter={(e) => toggleNavDropdown(e, setShowDropdownNav, showDropdownNav)} onMouseLeave={(e) => toggleNavDropdown(e, setShowDropdownNav, showDropdownNav)}>
                        <a className="nav-link text-accent dropdown-toggle" href="#" onClick={(e) => toggleNavDropdown(e, setShowDropdownNav, showDropdownNav)} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Solutions
                        </a>
                        <div className={`dropdown-menu ${showDropdownNav ? "show" : ""}`} aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item" to="/isp">We Are an ISP</Link>
                            <Link className="dropdown-item" to="/msp">We Are an MSP</Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-accent" to="/blog">Blog</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-accent" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-accent" to="/contact" target="_blank" rel="noreferrer">Contact</Link>
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