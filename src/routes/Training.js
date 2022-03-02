import React from 'react'
import Footer from '../components/Footer'
import Heroimage from '../components/Heroimage'
import Navbar from '../components/Navbar'
import TrainingText from '../components/TrainingText'

function Training() {
  return (
    <div>
        <Navbar/>
        <Heroimage heading='Training' text='Pre-Flight & In-Flight Training' />
        <TrainingText />
        <Footer/>
    </div>
  )
}

export default Training