import * as React from 'react'
import CookieConsent from "react-cookie-consent"
import Nav from './nav'
import Footer from './footer'
import SEO from './seo'
import { Link } from 'gatsby'

const Layout = ({ pTitle, pDescription, pKeywords, pImage, isArticle, simpleNav, isHero, scrollToProducts, children }) => {
  return (
    <>
      <SEO title={pTitle} description={pDescription} image={pImage} article={isArticle} keywords={pKeywords} />
      <Nav simpleNav={simpleNav} isHero={isHero} scrollToProducts={scrollToProducts} />
      <main>
        {children}
        <Footer />
      </main>
      <CookieConsent
            location="bottom"
            buttonText="Accept"
            enableDeclineButton
            declineButtonText="Decline"
            cookieName="netmindedCookieConsent"
            style={{ background: "#4C4D55", fontFamily: "Karla, sans-serif" }}
            buttonStyle={{ background: "#2897F3", color: "#FFFFFF", textTransform: "uppercase", fontFamily: "Poppins, sans-serif", fontWeight: "700", letterSpacing: 2, fontSize: "13px", borderRadius: "50px", padding: "10px 20px", marginRight: "100px" }}
            declineButtonStyle={{ background: "#2897F3", color: "#FFFFFF", textTransform: "uppercase", fontFamily: "Poppins, sans-serif", fontWeight: "700", letterSpacing: 2, fontSize: "13px", borderRadius: "50px", padding: "10px 20px", marginRight: "0" }}
            expires={150}
            >
            To improve your experience, our website uses just a few cookies 🍪. {"  "}
            <Link style={{color: "#826EF5"}} to="/privacy">More Information</Link>
      </CookieConsent>
    </>
  )
}
export default Layout