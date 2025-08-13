import * as React from 'react'
import Layout from '../components/layout'
import { useState } from 'react'
import { Waypoint } from 'react-waypoint'
import { isEmpty, charactersOnly, validEmailFormat, ValidDomainFormat } from '../utils/utils'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFaceSmile,
  faStarHalfStroke,
  faCogs
} from '@fortawesome/free-solid-svg-icons'
import SEO from '../components/seo'

const sendForm = (e, formData, setFormData, setFormErrors, setFormStatus) => {
    e.preventDefault()

    if(validateForm(formData, setFormErrors)) {
        axios
            .post(`https://formspree.io/f/${process.env.GATSBY_FORMSPREE_ID_MNOC_TRUSTPILOT}`, formData, {
                headers: {
                    Accept: "application/json",
                }
            })
            .then(({data}) => {
                console.log(data)
                if(data.ok) {
                    setFormStatus({
                        statusMessage: formFeedback[7],
                        statusState: 'good',
                    })
                    setFormData({
                        name: '',
                        email: '',
                        subject: 'NetMinded: M-NOC Trustpilot Interest Registered',
                        domain: '',
                        _gotcha: ''
                    })
                } else {
                    if (Object.hasOwn(data, 'errors')) {
                        setFormStatus({
                            statusMessage: data["errors"].map(error => error["message"]).join(", "),
                            statusState: 'bad',
                        })
                    } else {
                        setFormStatus({
                            statusMessage: formFeedback[6],
                            statusState: 'bad',
                        })
                    }
                }
                setTimeout(() => setFormStatus({
                    statusMessage: '',
                    statusState: 'default',
                }) , 8000)
            })
            .catch((error) => {
                setFormStatus({
                    statusMessage: formFeedback[6],
                    statusState: 'bad',
                })
                setTimeout(() => setFormStatus({
                    statusMessage: '',
                    statusState: 'default',
                }) , 8000)
            })
    }
}

const validateForm = (formData, setFormErrors) => {
    let formPass = true
    let errorName = '', errorEmail = '', errorDomain = ''

    if(isEmpty(formData.name)) {
        formPass = false
        errorName = formFeedback[0]
    } else {
        if(!charactersOnly(formData.name)) {
            formPass = false
            errorName = formFeedback[1]
        }
    }

    if(isEmpty(formData.email)) {
        formPass = false
        errorEmail = formFeedback[2]
    } else {
        if(!validEmailFormat(formData.email)) {
            formPass = false
            errorEmail = formFeedback[3]
        }
    }

    if(isEmpty(formData.domain)) {
        formPass = false
        errorDomain = formFeedback[4]
    } else {
        if(!ValidDomainFormat(formData.domain)) {
            formPass = false
            errorDomain = formFeedback[5]
        }
    }

    if(!isEmpty(formData._gotcha)) {
        formPass = false;
    }

    setFormErrors({
        nameError: errorName,
        emailError: errorEmail,
        domainError: errorDomain
    })

    return formPass
}

const formFeedback = [
    'Please enter your name.',
    'Please enter valid characters for your name.',
    'Please enter your email address.',
    'Please enter a valid email address.',
    'Please enter your website domain.',
    'Please enter a valid website domain.',
    'Sorry, there was an issue sending your registration. Please try again later!',
    'Thank you for registering your interest, we\'ll be in touch soon!'
]

const MnocTrustpilot = () => {
const [isHero, setIsHero] = useState(true)
const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: 'NetMinded: M-NOC Trustpilot Interest Registered',
    domain: '',
    _gotcha: ''
})
const [formErrors, setFormErrors] = React.useState({
    nameError: '',
    emailError: '',
    domainError: ''
})
const [formStatus, setFormStatus] = React.useState({
    statusMessage: '',
    statusState: 'default',
})
return (
    <Layout isHero={isHero} simpleNav={true}>
            <Waypoint onEnter={() => setIsHero(true)} onLeave={() => setIsHero(false)} topOffset={100}>
                <div id="mnocTrustpilot" className="hero-container landing-page">
                    <div className="hero-container-sub">
                        <div className="container">
                            <div className="row d-flex align-items-center">
                                <div className="col-lg-6">
                                    <div className="hero-content">
                                        <h1>Keep a Close Watch on Your Trustpilot Score</h1>
                                        <p>We’re excited to introduce our no-code alert function for Trustpilot. With our M-NOC tool, you’ll receive real-time alerts about changes to your Trustpilot rating directly within your existing network or IT monitoring solution.</p>
                                        <h2>Empower Your Customer Success Team</h2>
                                        <div className="benefit-items">
                                            <h3><span className="benefit-icon"><FontAwesomeIcon icon={faFaceSmile}/></span><span className="rf-item-text">Maintain reputation — never miss a rating change again</span></h3>
                                            <h3><span className="benefit-icon benefit-icon--middle"><FontAwesomeIcon icon={faStarHalfStroke}/></span><span className="rf-item-text">24/7 tracking — we convert rating changes into Red, Amber, or Green status messages</span></h3>
                                            <h3><span className="benefit-icon"><FontAwesomeIcon icon={faCogs}/></span><span className="rf-item-text">Simple setup — no coding or API skills required</span></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className='offset-lg-1 col-lg-5'>
                                    <div className='contact-container'>
                                        <h2>Stay ahead of the curve with updates to your Trustpilot rating and upcoming features for IT monitoring</h2>
                                        <form>
                                            <div>
                                                <label htmlFor="formName" className="form-label">Name</label>
                                                <input placeholder="d'Artagnan" type="text" name="name" className="form-control" id="formName" value={formData.name} onChange={(e) => {setFormData({...formData, name: e.target.value}); setFormErrors({...formErrors, nameError: ''})}} required />
                                                {formErrors.nameError.length > 0 && <p className='form-error-text'>{formErrors.nameError}</p>}
                                            </div>
                                            <div className="mt-5">
                                                <label htmlFor="formEmail" className="form-label">Email Address</label>
                                                <input placeholder="d.artagnan@musketeer.com" type="email" name="email" className="form-control" id="formEmail" value={formData.email} onChange={(e) => {setFormData({...formData, email: e.target.value}); setFormErrors({...formErrors, emailError: ''})}} required />
                                                {formErrors.emailError.length > 0 && <p className='form-error-text'>{formErrors.emailError}</p>}
                                            </div>
                                            <div>
                                                <input type="text" name="subject" className="form-control" id="formSubject" value={formData.subject} required disabled/>
                                            </div>
                                            <div className="mt-5">
                                                <label htmlFor="formDomain" className="form-label">Website Address</label>
                                                <input placeholder="musketeer.com" type="text" name="domain" className="form-control" id="formDomain" value={formData.domain} onChange={(e) => {setFormData({...formData, domain: e.target.value}); setFormErrors({...formErrors, domainError: ''})}} required />
                                                {formErrors.domainError.length > 0 && <p className='form-error-text'>{formErrors.domainError}</p>}
                                            </div>
                                            <div>
                                                <input type="text" name="_gotcha" className="form-control" id="formContact" value={formData._gotcha} onChange={(e) => setFormData({...formData, _gotcha: e.target.value})} />
                                            </div>
                                            <div className="mt-5">
                                                <button className='btn' formNoValidate onClick={(e) => sendForm(e, formData, setFormData, setFormErrors, setFormStatus)}>
                                                    Register Interest
                                                </button>
                                                {formStatus.statusMessage.length > 0 && <p className="text-center form-status">{formStatus.statusMessage}</p>}
                                            </div>
                                                
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ Waypoint>
    </Layout>
  )
}

export default MnocTrustpilot

export const Head = () => (
    <SEO title="M-NOC Trustpilot" description="Keep a Close Watch on Your Trustpilot Score — We’re excited to introduce our no-code alert function for Trustpilot." article={false} />
)