import React from 'react'
import Timer from './Timer'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer__content container'>
            <div>
         <h3 className="timer__title">
            Coming <span>28 Jan 2024</span>
          </h3>
          <Timer />
          </div>
          <button className="hero__button">Get Started</button>
          </div>
    </div>
  )
}

export default Footer