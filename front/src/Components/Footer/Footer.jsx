import './Footer.css'

import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
        <div className='full'>
            <div className="aboutus">
                <h3>Game On</h3>
                <p>Elevate your game through  workout routines and conveniently reserve your spot to play your favorite sports seamlessly through our intuitive booking system</p>

            </div>
            <div className="contact">
                <h3>Contact us:9145678999</h3>
                <div className="forlink">
                <Link style={{backgroundColor:' rgb(215, 215, 215)'}} to={'/home'}>HOME</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer