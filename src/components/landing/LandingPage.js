import React from 'react'
import owlBgImg from '../../images/owl-bg-img-1.png'
import { LandingDiv } from './styleSheet'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

const  LandingPage = () => {
  return (
    <LandingDiv id='shift-landing-page'>

      <section className="left-sec">
        <div className="intro-1">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, magnam?
        </div>
        <div className="intro-2">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam ducimus soluta eos illo perspiciatis corrupti earum sint ex quas beatae.
        </div>
        <button><h3>Call To Action</h3></button>
        <h3 className="section-name">Home Section</h3>
      </section>


      <section className="right-sec">
        <img src={owlBgImg} alt="bg-image" />
        <h2 className="social-handles">
          <TwitterIcon  className='icons'  fontSize='large'/>
          <FacebookIcon  className='icons' fontSize='large'/>
          <EmailIcon className='icons'  fontSize='large'/>
          <GitHubIcon className='icons'  fontSize='large'/> 
        </h2>


      </section>
    </LandingDiv>
  )
}

export default  LandingPage