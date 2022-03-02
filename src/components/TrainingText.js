import React from 'react'
import './TrainingTextStyles.css'

import { Link } from 'react-router-dom'

import Pod from '../assets/pod.jpg'
import Moon from '../assets/moon.jpg'

const TrainingText = () => {
  return (
    <div className='training'>
        <div className='left'>
            <h1>Training</h1>
            <p>Lorem Ipsum je jednostavno probni tekst koji se koristi u tiskarskoj i slovoslagarskoj industriji. Lorem Ipsum postoji kao industrijski standard još od 16-og stoljeća, kada je nepoznati tiskar uzeo tiskarsku galiju</p>
            <Link to='/contact'><button className='btn'>Contact</button></Link>
        </div>
        <div className='right'>
            <div className='img-container'>
                <div className='image-stack top'>
                    <img src={Moon} className='img' alt='' />
                </div>
                <div className='image-stack bottom'>
                    <img src={Pod} className='img' alt='' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default TrainingText