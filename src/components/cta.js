import * as React from 'react'
import { Link } from 'gatsby'

const Cta = ({ctaText, ctaBtnText}) => {
    return (
        <div className="cta-container">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h2 className="text-accent">{ctaText}</h2>
                        <Link className="btn" to="/contact" rel="noreferrer">{ctaBtnText}</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cta