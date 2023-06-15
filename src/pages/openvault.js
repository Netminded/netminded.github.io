import * as React from 'react'
import Layout from '../components/layout'
import { useState } from 'react'
import { Waypoint } from 'react-waypoint'
import { isEmpty, charactersOnly, validEmailFormat } from '../utils/utils'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGauge,
  faArrowRightArrowLeft,
  faCommentDots
} from '@fortawesome/free-solid-svg-icons'
import SEO from '../components/seo'

const sendForm = (e, formData, setFormData, setFormErrors, setFormStatus) => {
    e.preventDefault()

    if(validateForm(formData, setFormErrors)) {
        axios
            .post(`https://formspree.io/f/${process.env.GATSBY_FORMSPREE_ID_OPENVAULT}`, formData, {
                headers: {
                    Accept: "application/json",
                }
            })
            .then(({data}) => {
                console.log(data)
                if(data.ok) {
                    setFormStatus({
                        statusMessage: formFeedback[6],
                        statusState: 'good',
                    })
                    setFormData({
                        name: '',
                        email: '',
                        subject: 'NetMinded: OpenVault Interest Registered',
                        company: '',
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
                            statusMessage: formFeedback[5],
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
                    statusMessage: formFeedback[5],
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
    let errorName = '', errorEmail = '', errorOrg = ''

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

    if(isEmpty(formData.company)) {
        formPass = false
        errorOrg = formFeedback[4]
    }

    if(!isEmpty(formData._gotcha)) {
        formPass = false;
    }

    setFormErrors({
        nameError: errorName,
        emailError: errorEmail,
        orgError: errorOrg
    })

    return formPass
}

const formFeedback = [
    'Please enter your name.',
    'Please enter valid characters for your name.',
    'Please enter your email address.',
    'Please enter a valid email address.',
    'Please enter your company name.',
    'Sorry, there was an issue sending your registration. Please try again later!',
    'Thank you for registering your interest, we\'ll be in touch soon!'
]

const OpenVault = () => {
const [isHero, setIsHero] = useState(true)
const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: 'NetMinded: OpenVault Interest Registered',
    company: '',
    _gotcha: ''
})
const [formErrors, setFormErrors] = React.useState({
    nameError: '',
    emailError: '',
    orgError: ''
})
const [formStatus, setFormStatus] = React.useState({
    statusMessage: '',
    statusState: 'default',
})
return (
    <Layout isHero={isHero} simpleNav={true}>
            <Waypoint onEnter={() => setIsHero(true)} onLeave={() => setIsHero(false)} topOffset={100}>
                <div id="openvault" className="hero-container landing-page">
                    <div className="hero-container-sub">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="hero-content">
                                        <h1>Let OpenVault Turbo Charge Your Playbook for Handling Subscriber Speed Tests and Other QoE Issues</h1>
                                        <p>OpenVault is trusted by Internet providers to help manage over 100 million customers worldwide. OpenVault’s easy-to-deploy, probeless Traffic Analyser is a vital tool for ISPs who want to get ahead of customer QoE issues.</p>
                                        <div className="benefit-items">
                                            <h3><span className="benefit-icon"><FontAwesomeIcon icon={faGauge}/></span><span className="rf-item-text">Alerts when customers run speed tests and proactively manage incoming calls.</span></h3>
                                            <h3><span className="benefit-icon benefit-icon--middle"><FontAwesomeIcon icon={faArrowRightArrowLeft}/></span><span className="rf-item-text">Understand traffic flows across your infrastructure - manage application usage issues.</span></h3>
                                            <h3><span className="benefit-icon"><FontAwesomeIcon icon={faCommentDots}/></span><span className="rf-item-text">Respond proactively to customer QoE issues - visualise the traffic across your network.</span></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className='offset-lg-1 col-lg-5'>
                                    <div className='contact-container'>
                                        <h2>Register Your Interest in Resilient WiFi</h2>
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
                                                <label htmlFor="formCompany" className="form-label">Company Name</label>
                                                <input placeholder="Three Musketeers Ltd" type="text" name="company" className="form-control" id="formCompany" value={formData.company} onChange={(e) => {setFormData({...formData, company: e.target.value}); setFormErrors({...formErrors, orgError: ''})}} required />
                                                {formErrors.orgError.length > 0 && <p className='form-error-text'>{formErrors.orgError}</p>}
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

export default OpenVault

export const Head = () => (
    <SEO title="OpenVault" description="Let OpenVault Turbo Charge Your Playbook for Handling Subscriber Speed Tests and Other QoE Issues" article={false} />
)