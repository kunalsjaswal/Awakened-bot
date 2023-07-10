import React from 'react'
import { WhyDiv } from './stylesheet'
import WhyCard from './WhyCard'

const WhySection = () => {
  return (
    <WhyDiv>
        <h1>WHY SHOULD YOU</h1>
        <h3> use our bot?</h3>

        <section className="cards">
            <WhyCard/>
            <WhyCard/>
            <WhyCard/>
        </section>
        <h3 className="section-name">Why Section</h3>

        <button><h2>Try Now</h2></button>
    </WhyDiv>
  )
}

export default WhySection