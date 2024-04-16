
import React, { useContext, useState } from 'react';

import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom';

import { authContext } from '../../Context/AuthContext';


const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [sports] = useState(['Basketball', 'Badminton', 'Football', 'Cricket']);
  const [showRoutineDropdown, setShowRoutineDropdown] = useState(false);
  // const sports = sport_place.map(sport => sport.name);
  // const sports = sport_place.map(sport => ({ name: sport.name, id: sport.id }));
  const { dispatch } = useContext(authContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    try {
      navigate('/login');
    }
    catch (error) {
      console.log(error)
    }
  };
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <p>GAME ON</p>

      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("home")}><Link style={{ textDecoration: 'none' }} to='/home'>HOME{menu === "home" ? <hr /> : <></>}</Link></li>

        <li className='menu' onClick={() => { setShowRoutineDropdown(!showRoutineDropdown); setMenu("routine") }}>
          <span>ROUTINES <i className='fa-solid fa-caret-down'></i></span>
          {menu === "routine" ? <hr /> : <></>}
          {showRoutineDropdown && (
            <ul className="drop">
              {sports.map((sport, index) => (
                <li key={index}>
                  <Link style={{ textDecoration: 'none' }} to={`/routines/${index + 1}`}>
                    {sport}

                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>


        <li onClick={() => setMenu("book")}><Link style={{ textDecoration: 'none' }} to='/booking'>BOOK{menu === "book" ? <hr /> : <></>}</Link></li>


      </ul>
      <div className="nav-login">
        <button onClick={handleLogout}>Logout</button>
      </div>
      <div className="dash">
       <Link to='/user' style ={{textDecoration:'none'}}> <button > User</button> /</Link>
      </div>
      {/* <div className="nav-login">
          <button>Logout</button>
        </div> */}
      {/* <div className="nav-login">
          <button><Link style={{textDecoration:'none'}}to='/register'>signin</Link></button>
        </div> */}
      {/* {sports.map((sport, index) => (
          <li key={index}>
           
            <Link
              style={{ textDecoration: 'none' }}
              to={`/routines/${sport.id}/${dayId}`}
            >
              {sport.name}
            </Link>
          </li>
        ))}
               */}
               
        {/* <li className='menu'onClick={()=>setMenu("routine")}><Link style={{textDecoration:'none'}}to='/routines'>ROUTINES <i className='fa-solid fa-caret-down'></i></Link>{menu==="routine"?<hr/>:<></>}
          <ul className="drop">
             
              {sports.map((sport, index) => (
                <li key={index}>
                  <Link style={{ textDecoration: 'none' }} to={`/routines/${index+1}`}>
                    {sport}
                  </Link>
                </li>
              ))} 
            </ul>
          </li> */}


        {/* <li className='menu' onClick={() => {setShowRoutineDropdown(!showRoutineDropdown)};{setMenu("routine")}}> */}
    </div>

  )
}

export default Navbar