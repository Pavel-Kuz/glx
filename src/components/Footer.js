import React from 'react'
import './FooterStyles.css'
import { FaFacebook, FaTelegram, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaSearchLocation size={20} style={{color: '#fff', marginRight: '2rem'}}/>
                    <div>
                        <p>123 Ache St.</p>
                        <h4>Houston, TX</h4>
                    </div>
                </div>
                <div className='phone'>
                    <h4><FaPhone size={20} style={{color: '#fff', marginRight: '2rem'}} /> 8 800-123-456-87</h4>
                </div>
                <div className='email'>
                    <h4> <FaMailBulk size={20} style={{color: '#fff', marginRight: '2rem'}} /> trips@mail.test</h4>
                </div>
            </div>
        <div className='right'>
            <h4>About the company</h4>
            <p>
            Lorem Ipsum je jednostavno probni tekst koji se koristi u tiskarskoj i slovoslagarskoj industriji. Lorem Ipsum postoji kao industrijski standard još od 16-og stoljeća, kada je nepoznati tiskar uzeo tiskarsku galiju slova i posložio
            </p>
            <div className='socials'>
                <FaFacebook size={30} style={{color: '#fff', marginRight: '1rem'}} />
                <FaTelegram size={30} style={{color: '#fff', marginRight: '1rem'}} />
                <FaTwitter size={30} style={{color: '#fff', marginRight: '1rem'}} />
            </div>
        </div>

        </div>
    </div>
  )
}

export default Footer