import React from 'react'
import { ServiceDiv } from './styleSheet'
import botImg from '../../images/bot-img.png'
import screenImg from '../../images/screen-img.png'

const ServiceSection = () => {
  return (
    <ServiceDiv id='shift-service-page'>
        <h1>What our bot do. </h1>

        <div className="service-1">
            <img src={botImg} alt="bot-image" />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit fugiat molestiae eos. Modi mollitia architecto ipsum, distinctio eius aut nihil blanditiis odit culpa a suscipit quibusdam deleniti. Sed, voluptates rem?
                 <i href="">learn more</i>
            </p>
        </div>
        <h3 className="section-name">Service Section</h3>
        <div className="service-2">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit fugiat molestiae eos. Modi mollitia architecto ipsum, distinctio eius aut nihil blanditiis odit culpa a suscipit quibusdam deleniti. Sed, voluptates rem?
                 <i href="">learn more</i>
            </p>
            <img src={screenImg} alt="screen-image" />
        </div>
    </ServiceDiv>
  )
}

export default ServiceSection