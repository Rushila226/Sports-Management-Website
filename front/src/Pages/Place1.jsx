import React, { useEffect, useState } from 'react'
import './Place.css'
import { useParams, Link } from 'react-router-dom'

import data_place from '../Components/Assests/placedata'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck,faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

const Place1 = () => {
  const { id } = useParams();
  console.log("id:", id);
  const [place, setPlace] = useState(null);
  useEffect(() => {
    const matchedPlace = data_place.find(place => place.id === parseInt(id));
    setPlace(matchedPlace);

  }, [id]);

  return (

    <div>
      <Navbar/>

      {place ? (

        <>
          <div className="containers">
            <h2> {place.name}</h2>
            <h4>{place.location}</h4>
          </div>

          <div className="idk">
            <div className="slide">
              <div className="swiper">
                <dip className="swipper-wrapper">
                  <div className="swiper-slide"><img src={place.image1} alt="" /></div>
                  <div className="swiper-slide"><img src={place.image2} alt="" /></div>
                </dip>
                {/* <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div> */}
                <div class="swiper-scrollbar"></div>
              </div>
            </div>


            <div className="rights">
              <div className="b">
              <button><Link  style={{ textDecoration: 'none', background: '#9D0B28'}} to={`/bookvenue/${place.id}`} >BOOK </Link></button>
              </div>

              <div className="time">
                <h2>Timing</h2>
                <h4>{place.time}</h4>
              </div>

              <div className="maps">
                <h4>Location</h4>
                <iframe
                  src={place.locationadd}
                  width="500" height="290" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>

              </div>
            </div>
          </div>
          {/* <img src={place.image1} alt="" /> */}

          <div className="extra">
            <div className="sport">
              <h5>Sports available</h5>
              <div className="subsport">
                <img src={place.sport} alt="" />
                <h6>{place.sportname}</h6>
              </div>
            </div>

            <div className="aminities">
              <h5>Aminities</h5>
              <div>
                <ul className="amin">
                  {place.aminities && place.aminities.washroom && (
                    <li><FontAwesomeIcon icon={faCircleCheck} className="icon"  />
                      Washroom </li>
                  )}
                  {place.aminities && place.aminities.changeroom && (
                    <li><FontAwesomeIcon icon={faCircleCheck} className='icon' />
                      Change room </li>
                  )}
                  {place.aminities && place.aminities.parking && (
                    <li><FontAwesomeIcon icon={faCircleCheck}className='icon' />
                      Parking </li>
                  )}
                  {place.aminities && place.aminities.drinkingwater && (
                    <li><FontAwesomeIcon icon={faCircleCheck} className='icon' />
                      Drinking water </li>
                  )}
                  {place.aminities && place.aminities.shower && (
                    <li><FontAwesomeIcon icon={faCheck} className='icon'/>
                      Shower </li>
                  )}
                </ul>
              </div>
            </div>
            <div className="about">
              <h5>About Venue</h5>
              <div className='aboutinfo'>
                {place.about.split('\n').map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>

            </div>
            
          </div>
          <Footer/>
        {/* </div> */}

    </>
  )
        : (
  // If data is still loading or empty, display a loading message or fallback content
  <div>Loading...</div>
)}

    </div >
  );
}
export default Place1;