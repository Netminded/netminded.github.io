import * as React from 'react'
import CookieConsent from 'react-cookie-consent'
import { Link } from 'gatsby'
import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies'
import { useLocation } from '@reach/router'

const CookieBanner = () => {
    const location = useLocation()
    return (
        <CookieConsent
            location="bottom"
            buttonText="Accept"
            enableDeclineButton
            declineButtonText="Decline"
            cookieName="gatsby-gdpr-google-analytics"
            style={{ background: "#4C4D55", fontFamily: "Karla, sans-serif" }}
            buttonStyle={{ background: "#2897F3", color: "#FFFFFF", textTransform: "uppercase", fontFamily: "Poppins, sans-serif", fontWeight: "700", letterSpacing: 2, fontSize: "13px", borderRadius: "50px", padding: "10px 20px", marginRight: "100px" }}
            declineButtonStyle={{ background: "#2897F3", color: "#FFFFFF", textTransform: "uppercase", fontFamily: "Poppins, sans-serif", fontWeight: "700", letterSpacing: 2, fontSize: "13px", borderRadius: "50px", padding: "10px 20px", marginRight: "0" }}
            expires={90}
            onAccept={() => initializeAndTrack(location)}
            >
            🍪 We use both necessary cookies and optional Google Analytics cookies. To allow optional cookies select 'Accept'. {" "}
            <Link style={{color: "#826EF5"}} to="/privacy">More Information</Link>
        </CookieConsent>
    )
}

export default CookieBanner