import React from 'react'

import Navbar from '../components/Navbar'
import Heroimage from '../components/Heroimage'
import PricingCards from '../components/PricingCards'
import Footer from '../components/Footer'

const Pricing = () => {
  return (
    <div>
        <Navbar/>
        <Heroimage heading='PRICING' text='Choose your trip' />
        <PricingCards />
        <Footer/>
    </div>
  )
}

export default Pricing