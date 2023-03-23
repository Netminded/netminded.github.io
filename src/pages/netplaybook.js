import * as React from 'react'
import Layout from '../components/layout'
import { useState } from 'react'
import { Waypoint } from 'react-waypoint'
import { isEmpty, charactersOnly, validEmailFormat } from '../utils/utils'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowTrendDown,
  faHourglassStart,
  faUserMinus
} from '@fortawesome/free-solid-svg-icons'
import SEO from '../components/seo'

const sendForm = (e, formData, setFormData, setFormErrors, setFormStatus) => {
    e.preventDefault()

    if(validateForm(formData, setFormErrors)) {
        axios
            .post(`https://formspree.io/f/${process.env.GATSBY_FORMSPREE_ID_NETPLAYBOOK}`, formData, {
                headers: {
                    Accept: "application/json",
                }
            })
            .then(({data}) => {
                console.log(data)
                if(data.ok) {
                    setFormStatus({
                        statusMessage: formFeedback[5],
                        statusState: 'good',
                    })
                    setFormData({
                        name: '',
                        email: '',
                        subject: 'NetMinded: NetPlaybook Interest Registered',
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
                            statusMessage: formFeedback[4],
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
                    statusMessage: formFeedback[4],
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
    let errorName = '', errorEmail = ''

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

    if(!isEmpty(formData._gotcha)) {
        formPass = false;
    }

    setFormErrors({
        nameError: errorName,
        emailError: errorEmail
    })

    return formPass
}

const formFeedback = [
    'Please enter your name.',
    'Please enter valid characters for your name.',
    'Please enter your email address.',
    'Please enter a valid email address.',
    'Sorry, there was an issue sending your registration. Please try again later!',
    'Thank you for registering your interest, we\'ll be in touch soon!'
]

const NetPlaybookPage = () => {
const [isHero, setIsHero] = useState(true)
const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: 'NetMinded: NetPlaybook Interest Registered',
    company: '',
    _gotcha: ''
})
const [formErrors, setFormErrors] = React.useState({
    nameError: '',
    emailError: ''
})
const [formStatus, setFormStatus] = React.useState({
    statusMessage: '',
    statusState: 'default',
})
return (
    <Layout isHero={isHero} simpleNav={true}>
            <Waypoint onEnter={() => setIsHero(true)} onLeave={() => setIsHero(false)} topOffset={100}>
                <div className="hero-container landing-page">
                    <div className="hero-container-sub">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="hero-content">
                                        <h1>Automate Diagnostics and Service Information Flows</h1>
                                        <p>Deliver the right info to the right people at the right time. Improve productivity, customer experience and job satisfaction for your employees.</p>
                                        <div className="benefit-items">
                                            <h3><span className="benefit-icon"><FontAwesomeIcon icon={faArrowTrendDown}/></span><span className="trust-item-text">Benefit/Stat 1</span></h3>
                                            <h3><span className="benefit-icon benefit-icon--middle"><FontAwesomeIcon icon={faHourglassStart}/></span><span className="trust-item-text">Benefit/Stat 2</span></h3>
                                            <h3><span className="benefit-icon"><FontAwesomeIcon icon={faUserMinus}/></span><span className="trust-item-text">Benefit/Stat 3</span></h3>
                                        </div>
                                    </div>
                                </div>
                                <div className='offset-lg-1 col-lg-5'>
                                    <div className='contact-container'>
                                        <h2>Register Your Interest in NetPlaybook</h2>
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
                                                <label htmlFor="formCompany" className="form-label">Company Name (Optional)</label>
                                                <input placeholder="All for one and one for all!" type="text" name="company" className="form-control" id="formCompany" value={formData.company} onChange={(e) => {setFormData({...formData, company: e.target.value})}} />
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

export default NetPlaybookPage

export const Head = () => (
    <SEO article={false} />
)