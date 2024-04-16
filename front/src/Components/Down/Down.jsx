import React, { useState } from 'react'
import './Down.css'
import { Link } from 'react-router-dom';

import data from "./data.json"

const Down = () => {

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <div className='info'>

        <h3>BOOK SPORTS COMPLEXES IN BANGLORE</h3>
        <section className="search">
          <form>
            <i className="fas fa-search"></i>
            <input type="text" id="searchvenue" placeholder="search by venue name" onChange={(event) => setSearchTerm(event.target.value)} />
          </form>
        </section>
        {/* <select className="sel" >
       
        <option value="" disabled selected hidden>sports</option>
        <option>basketball</option>
        <option>football</option>
        <option>cricket</option>
        <option>badminton</option>
      </select> */}
      </div>
      <div className="container">
        {
          data
            .filter((val) => {
              if (searchTerm === "") {
                return val;
              }
              else if (val.name.toUpperCase().includes(searchTerm.toUpperCase())) {
                return val;
              }

            })
            .map((val) => {
              return (
                <Link style={{ textDecoration: 'none' }} to={'/booking/places/' + val.id} className="place1">

                  <div className="place">
                    <img src={val.image} alt="" />
                  </div>
                  <div className="desc">
                    <p>{val.name}</p>
                    <h6>{val.location}</h6>
                    <div className="other">
                      <div className="extra">
                        <img src={val.sport} class="shuttle" alt="" /></div>
                      {val.sport1 && <div className="extra"><img src={val.sport1} class="shuttle" alt="" /></div>}

                      {val.sport2 && <div className="extra"><img src={val.sport2} class="shuttle" alt="" /></div>}
                    </div>
                    <a class="book" href='/booking/places'><button>BOOK</button></a>



                  </div>
                </Link>
              )
            })
        }
        <div className="notfound">
          {data.filter(val => val.name.toUpperCase().includes(searchTerm.toUpperCase())).length === 0 && searchTerm && (
            <p>No results found</p>
          )}
        </div>
      </div>


    </>


  )
}

export default Down