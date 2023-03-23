import * as React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Waypoint } from 'react-waypoint'
import { isEmpty, charactersOnly, validEmailFormat } from '../utils/utils'
import axios from 'axios'

const sendForm = (e, formData, setFormData, setFormErrors, setFormStatus) => {
    e.preventDefault()

    if(validateForm(formData, setFormErrors)) {
        axios
            .post(`https://formspree.io/f/${process.env.GATSBY_FORMSPREE_ID}`, formData, {
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
                        subject: 'NetMinded Contact Message',
                        message: '',
                        _gotcha: ''
                    })
                    setTimeout(() => setFormStatus({
                        statusMessage: '',
                        statusState: 'default',
                    }) , 8000)
                } else {
                    if (Object.hasOwn(data, 'errors')) {
                        setFormStatus({
                            statusMessage: data["errors"].map(error => error["message"]).join(", "),
                            statusState: 'bad',
                        })
                        setTimeout(() => setFormStatus({
                            statusMessage: '',
                            statusState: 'default',
                        }) , 8000)
                    } else {
                        setFormStatus({
                            statusMessage: formFeedback[5],
                            statusState: 'bad',
                        })
                        setTimeout(() => setFormStatus({
                            statusMessage: '',
                            statusState: 'default',
                        }) , 8000)
                    }
                }
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
    let errorName = '', errorEmail = '', errorMsg = ''

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

    if(isEmpty(formData.message)) {
        formPass = false;
        errorMsg = formFeedback[4]
    }

    if(!isEmpty(formData._gotcha)) {
        formPass = false;
    }

    setFormErrors({
        nameError: errorName,
        emailError: errorEmail,
        messageError: errorMsg
    })

    return formPass
}

const formFeedback = [
    'Please enter your name.',
    'Please enter valid characters for your name.',
    'Please enter your email address.',
    'Please enter a valid email address.',
    'Please enter a message.',
    'Sorry, there was an issue sending your form request. Please try again later!',
    'Thank you for your message, we\'ll be in touch soon!'
]

const ContactPage = () => {
    const [isHero, setIsHero] = React.useState(false)
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        subject: 'NetMinded Contact Message',
        message: '',
        _gotcha: ''
    })
    const [formErrors, setFormErrors] = React.useState({
        nameError: '',
        emailError: '',
        messageError: ''
    })
    const [formStatus, setFormStatus] = React.useState({
        statusMessage: '',
        statusState: 'default',
    })
    return (
        <Layout isHero={isHero}>
            <Waypoint onEnter={() => setIsHero(true)} onLeave={() => setIsHero(false)} topOffset={100}>
                <header className="contact-page-header">
                    <h1>Contact Us</h1>
                    <h3>Whether you're interested in partnering with us, adopting our eco-system or you just have a general enquiry get in touch!</h3>
                </header>
            </Waypoint>
            <div className='contact-container'>
                <div className='container'>
                    <form className='row'>
                        <div className="offset-3 col-6">
                            <label for="formName" className="form-label">Name</label>
                            <input placeholder="d'Artagnan" type="text" name="name" class="form-control" id="formName" value={formData.name} onChange={(e) => {setFormData({...formData, name: e.target.value}); setFormErrors({...formErrors, nameError: ''})}} required />
                            {formErrors.nameError.length > 0 && <p className='form-error-text'>{formErrors.nameError}</p>}
                        </div>
                        <div className="offset-3 col-6 mt-5">
                            <label for="formEmail" className="form-label">Email Address</label>
                            <input placeholder="d.artagnan@musketeer.com" type="email" name="email" class="form-control" id="formEmail" value={formData.email} onChange={(e) => {setFormData({...formData, email: e.target.value}); setFormErrors({...formErrors, emailError: ''})}} required />
                            {formErrors.emailError.length > 0 && <p className='form-error-text'>{formErrors.emailError}</p>}
                        </div>
                        <div className="offset-3 col-6">
                            <input type="text" name="subject" class="form-control" id="formSubject" value={formData.subject} required disabled/>
                        </div>
                        <div className="offset-3 col-6 mt-5">
                            <label for="formMessage" className="form-label">Message</label>
                            <textarea placeholder="All for one and one for all!" name="message" class="form-control" id="formMessage" value={formData.message} onChange={(e) => {setFormData({...formData, message: e.target.value}); setFormErrors({...formErrors, messageError: ''})}} required />
                            {formErrors.messageError.length > 0 && <p className='form-error-text'>{formErrors.messageError}</p>}
                        </div>
                        <div className='offset-3 col-6'>
                            <input type="text" name="_gotcha" class="form-control" id="formContact" value={formData._gotcha} onChange={(e) => setFormData({...formData, _gotcha: e.target.value})} />
                        </div>
                        <div className='offset-3 col-6 mt-5'>
                            <button className='btn' formnovalidate onClick={(e) => sendForm(e, formData, setFormData, setFormErrors, setFormStatus)}>
                                Send Message
                            </button>
                            {formStatus.statusMessage.length > 0 && <p className={`text-center form-status ${formStatus.statusState === 'good' ? 'form-status-good' : 'form-status-bad'}`}>{formStatus.statusMessage}</p>}
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