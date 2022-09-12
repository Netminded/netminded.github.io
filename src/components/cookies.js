import * as React from 'react'
import CookieConsent from 'react-cookie-consent'
import { Link } from 'gatsby'
import { initializeAndTrack } from 'gatsby-plugin-gdpr-cookies'
import { useLocation } from '@reach/router'

const CookieBanner = () => {
    const location = useLocation()
    return (
        <CookieConsent
            disableButtonStyles={true}
            buttonClasses='cookie-button cookie-button-right'
            declineButtonClasses='cookie-button'
            containerClasses='cookie-banner'
            location="bottom"
            buttonText="Accept"
            enableDeclineButton
            declineButtonText="Decline"
            cookieName="gatsby-gdpr-google-analytics"
            expires={90}
            onAccept={() => initializeAndTrack(location)}
            >
            🍪 We use both necessary cookies and optional Google Analytics cookies. To allow optional cookies select 'Accept'. {" "}
            <Link style={{color: "#826EF5"}} to="/privacy">More Info in Privacy Policy</Link>
        </CookieConsent>
    )
}

export default CookieBanner