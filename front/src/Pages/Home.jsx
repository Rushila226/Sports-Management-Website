import React from 'react'
import cric from '../Components/Assests/cric.jpeg'
import basket from '../Components/Assests/basket.jpeg'
import badm from '../Components/Assests/badm.jpg'
import foot from '../Components/Assests/foot.jpeg'
import '../Pagestyle/Home.css'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
const Home = () => {
  return (
    <>
    <Navbar/>
      <header>
        <div className="header-content">
          <h2 className="transform-text">Elevate Your Game</h2>
          <div className="line"></div>
          <h1 className="transform-texts">Dominate The Field</h1>
        </div>
      </header>
      <section className="sports">
        <h1>WORKOUT ROUTINES</h1>
        <div className="row">
          <Link to='/routines/3'><div className="sport">
            <img src={foot} alt="Football" />
            <div className="layer" data-hover="FOOTBALL"></div>
          </div></Link>
          <Link to={'/routines/2'}> <div className="sport">
          <img src={badm} alt="Badminton" />
            <div className="layer" data-hover="BADMINTON"></div>
          </div></Link>
          <Link to={'/routines/1'}> <div className="sport">
            <img src={basket} alt="Basketball" />
            <div className="layer" data-hover="BASKETBALL"></div>
          </div></Link>
          <Link to={'/routines/4'}> <div className="sport">
            <img src={cric} alt="Cricket" />
            <div className="layer" data-hover="CRICKET"></div>
          </div></Link>
        </div>
      </section>
      <section className="extra">
        <h1 className="head">BOOK</h1>
        <section className="bookss">
          <div className="deatils">
            <h3>"Game On: Reserve Your Spot, Play Your Way!"</h3>
            <p>Browse through our extensive database of sports facilities, fields, courts, and more, to find the
              ideal location for your next game or training session. With detailed descriptions, photos, and user
              reviews, you can easily compare options and make an informed decision.</p>
            <p>Booking your spot has never been easier. Simply select your desired date, time, and location, and
              complete your reservation with just a few clicks. Say goodbye to endless phone calls and emails,
              it's all taken care of online.</p>
          </div>
          <Link style={{textDecoration:'none'}}to={'/booking'} ><div className="btn">
            <div className="red">
              BOOK
            </div>
          </div></Link>
        </section>
      </section>
      <Footer/>
    </>
  )
}

export default Home