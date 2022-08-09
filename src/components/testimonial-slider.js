import * as React from 'react'
import { useRef } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import NetMindedPTIImg from '../images/NetMinded_Mike_Bohndiek.svg'
import NetMindedTriangleImg from '../images/NetMinded_Paul_Anslow.svg'
import NetMindedGrowImg from '../images/NetMinded_Llew_Nicholls.svg'

const TestimonialSwiper = ({setTestimonialSlider}) => {
    const swiper = useRef(null)
    setTestimonialSlider(swiper)
    return(
        <>
            <Swiper ref={swiper}
                    autoplay={{
                            delay: 7500,
                            disableOnInteraction: true,
                        }} 
                    modules={[Autoplay]} 
                    className="services-swiper">
                <SwiperSlide>
                <div>
                    <div className="testimonial-image">
                                    <img src={NetMindedPTIImg} alt="Mike Bohndiek - PTI Digital" />
                                </div>
                                <p>Leveraging the NetMinded platforms, PTI are able to deliver impactful, relevant and clear communication. NetMinded really enables complex IT messages to be translated into understandable – and usable – communications. This enables a focus on the most important tasks and keenly reduces speed of resolution in business-critical moments.</p>
                                <hr />
                                <p className="text-large-accent">Mike Bohndiek, PTI Digital</p>
                            </div>
                </SwiperSlide>
                <SwiperSlide>
                <div>
                                <div className="testimonial-image">
                                    <img src={NetMindedGrowImg} alt="Llew Nicholls - Grow Marketing / Grow Coffee House" />
                                </div>
                                <p>As with most businesses, we rely on robust internet connectivity and with 3 businesses on one site that adds to the intricacy. With NetMinded we resolved a complex service issue affecting our network. Having a view of the service status across many providers was key in the speedy resolution of this issue.</p>
                                <hr />
                                <p className="text-large-accent">Llew Nicholls, Grow Marketing / Grow Coffee House</p>
                            </div>
                </SwiperSlide>
                <SwiperSlide>
                <div>
                                <div className="testimonial-image">
                                    <img src={NetMindedTriangleImg} alt="Paul Anslow - Triangle Networks" />
                                </div>
                                <p>We’re offering this platform to our customers to help them provide the very best service to their end-users, giving end users control of their services for the first time ever. The NetMinded app allows users to know exactly which service is causing an issue through a simple notification, allowing the problem to be resolved in a fraction of the time.</p>
                                <hr />
                                <p className="text-large-accent">Paul Anslow, Triangle Networks</p>
                            </div>
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default TestimonialSwiper