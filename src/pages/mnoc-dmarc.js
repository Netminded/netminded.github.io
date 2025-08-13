import * as React from 'react'
import Layout from '../components/layout'
import { useState } from 'react'
import { Waypoint } from 'react-waypoint'
import { isEmpty, charactersOnly, validEmailFormat, ValidDomainFormat } from '../utils/utils'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelopeCircleCheck,
  faSliders,
  faCode
} from '@fortawesome/free-solid-svg-icons'
import SEO from '../components/seo'

const sendForm = (e, formData, setFormData, setFormErrors, setFormStatus) => {
    e.preventDefault()

    if(validateForm(formData, setFormErrors)) {
        axios
            .post(`https://formspree.io/f/${process.env.GATSBY_FORMSPREE_ID_MNOC_DMARC}`, formData, {
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
                        subject: 'NetMinded: M-NOC DMARC Interest Registered',
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

const MnocDmarc = () => {
const [isHero, setIsHero] = useState(true)
const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: 'NetMinded: M-NOC DMARC Interest Registered',
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
                <div id="mnocDmarc" className="hero-container landing-page">
                    <div className="hero-container-sub">
                        <div className="container">
                            <div className="row d-flex align-items-center">
                                <div className="col-lg-6">
                                    <div className="hero-content">
                                        <h1>Be the first to get our M-NOC DMARC alerts</h1>
                                        <p>Due to positive feedback, we are launching our no-code function for DMARC reporting. Get alerts about email delivery issues directly into your network or IT monitoring solution.</p>
                                        <h2>Never miss an email delivery issue again</h2>
                                        <div className="benefit-items">
                                            <h3><span className="benefit-icon"><FontAwesomeIcon icon={faEnvelopeCircleCheck}/></span><span className="rf-item-text">We check your DMARC emails and turn them into Red, Amber or Green status messages</span></h3>
                                            <h3><span className="benefit-icon benefit-icon--middle"><FontAwesomeIcon icon={faSliders}/></span><span className="rf-item-text">You configure a monitor on your I.T. monitoring solution</span></h3>
                                            <h3><span className="benefit-icon"><FontAwesomeIcon icon={faCode}/></span><span className="rf-item-text">No coding or API skills required</span></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className='offset-lg-1 col-lg-5'>
                                    <div className='contact-container'>
                                        <h2>Sign up to DMARC alerts and be the first to know about upcoming micro-MNOC features for your I.T. monitoring</h2>
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

export default MnocDmarc

export const Head = () => (
    <SEO title="M-NOC DMARC" description="Be the first to get our M-NOC DMARC alerts — Due to positive feedback, we are launching our no-code function for DMARC reporting." article={false} />
)