import React from 'react'
import LandingPage from './landing/LandingPage'
import AboutPage from './about/AboutPage'
import ServiceSection from './services/ServiceSection'
import WhySection from './why/WhySection'
import BlogSection from './blog/BlogSection'
import FooterPage from './footer/FooterPage'

const HomePage = () => {
  return (
    <>
        <LandingPage/>
        <ServiceSection/>
        <AboutPage/>
        <WhySection/>
        <BlogSection/>
        <FooterPage/>

    </>
  )
}

export default HomePage