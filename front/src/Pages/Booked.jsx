import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import '../Pagestyle/Booked.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
const Booked = () => {
  return (
    
    <div>
        <Navbar/>
        <div className="booked">
        <FontAwesomeIcon icon={faCircleCheck} className='icon'/>
            <p>Place is Booked</p>
        </div>
    </div>
  )
}

export default Booked