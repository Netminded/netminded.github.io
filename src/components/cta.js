import * as React from 'react'

const Cta = ({ctaText, ctaBtnText, ctaBtnUrl}) => {
    return (
        <div className="cta-container">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center">
                        <h5 className="text-accent">{ctaText}</h5>
                        <a className="btn" href={ctaBtnUrl} rel="noreferrer">{ctaBtnText}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cta