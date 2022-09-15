import * as React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Waypoint } from 'react-waypoint'
import { isEmpty } from '../utils/utils'

const sendForm = (e, formData, formErrors, setFormErrors) => {
    e.preventDefault()
    console.log(validateForm(formData, formErrors, setFormErrors))
}

const validateForm = (formData, formErrors, setFormErrors) => {
    let formPass = true
    let errorName = '', errorEmail = '', errorMsg = ''

    if(isEmpty(formData.formName)) {
        formPass = false
        errorName = formFeedback[0]
    } else {
        if(!charactersOnly(formData.formName)) {
            formPass = false
            errorName = formFeedback[1]
        }
    }

    if(isEmpty(formData.formEmail)) {
        formPass = false
        errorEmail = formFeedback[2]
    } else {
        if(!validEmailFormat(formData.formEmail)) {
            formPass = false
            errorEmail = formFeedback[3]
        }
    }

    if(isEmpty(formData.formMessage)) {
        formPass = false;
        errorMsg = formFeedback[4]
    }

    setFormErrors({
        nameError: errorName,
        emailError: errorEmail,
        messageError: errorMsg
    })

    console.log(formErrors)
    return formPass
}

const charactersOnly = (formField) => {
    return /^[a-zA-Z\s-'.]+$/.test(formField)
}

const validEmailFormat = (formField) => {
    // Just test the email has the correct structure so as not to exclude obscure email address use cases
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formField)
}

const formFeedback = [
    'Please enter your name.',
    'Please enter valid characters for your name.',
    'Please enter your email address.',
    'Please enter a valid email address.',
    'Please enter a message.'
]

const ContactPage = () => {
    const [isHero, setIsHero] = React.useState(true)
    const [formData, setFormData] = React.useState({
        formName: '',
        formEmail: '',
        formSubject: 'NetMinded Contact Message',
        formMessage: ''
    })
    const [formErrors, setFormErrors] = React.useState({
        nameError: '',
        emailError: '',
        messageError: ''
    })

    const url = `https://docs.google.com/forms/d/e/1FAIpQLSd0-WsHvaofWyFGZeQPVjIioNLygiyKAbmiwmXnLBGvMqn6Ng/viewform?usp=pp_url&entry.893828909=${formData.formName}&entry.2118704329=${formData.formEmail}&entry.1626097844=${formData.formSubject}&entry.1195998304=${formData.formMessage}`
    return (
        <Layout isHero={isHero}>
            <header className="contact-page-header">
                <h1>Contact Us</h1>
                <h3>If you're interested in partnering with us get in touch!</h3>
            </header>
            <Waypoint onEnter={() => setIsHero(true)} onLeave={() => setIsHero(false)} topOffset={100} />
            <div className='contact-container'>
                <div className='container'>
                    <form className='row' novalidate>
                        <div className="offset-3 col-6">
                            <label for="validationCustom01" className="form-label">Name</label>
                            <input type="text" class="form-control" id="validationCustom01" value={formData.formName} onChange={(e) => setFormData({...formData, formName: e.target.value})} required />
                            {formErrors.nameError.length > 0 && <p>{formErrors.nameError}</p>}
                        </div>
                        <div className="offset-3 col-6">
                            <label for="validationCustom02" className="form-label">Email Address</label>
                            <input type="email" class="form-control" id="validationCustom02" value={formData.formEmail} onChange={(e) => setFormData({...formData, formEmail: e.target.value})} required />
                            {formErrors.emailError.length > 0 && <p>{formErrors.emailError}</p>}
                        </div>
                        <div className="offset-3 col-6">
                            <label for="validationCustom03" className="form-label">Message</label>
                            <textarea class="form-control" id="validationCustom03" value={formData.formMessage} onChange={(e) => setFormData({...formData, formMessage: e.target.value})} required />
                            {formErrors.messageError.length > 0 && <p>{formErrors.messageError}</p>}
                        </div>
                        <div className='offset-3 col-6'>
                            <button className='btn' onClick={(e) => sendForm(e, formData, formErrors, setFormErrors)}>
                            Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default ContactPage

export const Head = () => (
    <SEO title="Contact Us" article={false} />
)