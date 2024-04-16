import React, { useEffect, useState } from 'react'
import './Days.css'
import { useParams } from 'react-router-dom'
import sport_place from './sport'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faDumbbell } from '@fortawesome/free-solid-svg-icons'


const Days = () => {

  const { id, dayId } = useParams();
  console.log("id:", id);
  const [sport, setSport] = useState(null);
  const [currentDayId, setCurrentDayId] = useState(dayId || 1);
  useEffect(() => {
    const matchedSport = sport_place.find(sport => sport.id === parseInt(id));
    setSport(matchedSport);

  }, [id]);
  const handleCheckboxChange = (dayId, exerciseId) => {
    setSport(prevSport => {
      const updatedSport = { ...prevSport };
      const updatedExc = updatedSport.days[dayId].exc.map(exercise => {
        if (exercise.id === exerciseId) {
          return { ...exercise, checked: !exercise.checked };
        }
        return exercise;
      });
      updatedSport.days[dayId].exc = updatedExc;
      return updatedSport;
    });
  };

  const handleDayChange = (newDayId) => {
    setCurrentDayId(newDayId);
  };



  return (
    <div>
      {sport ? (
        <div className="cont">

          <div className="page">

            <div className="left">

              <div className="left1">

                <div className="pic">
                  <img src={sport.sportimg} alt="" />
                </div>
                <div className="equipments">
                  <ul>
                    <div className='forabout'>
                      <li><FontAwesomeIcon icon={faEnvelope} /> {sport.about}</li>
                    </div>
                    <div className='forabout'>
                      <li><FontAwesomeIcon icon={faDumbbell} />{sport.req}</li>
                    </div>
                  </ul>
                </div>
                <div className="aboveline"></div>
                <div className="infor">
                  <h4><b>Details:</b></h4>
                  <p> {sport.details}</p>

                </div>
              </div>

            </div>
            <div className="right">
              <div className="heading">
                <h2 class="aa">{sport.name} </h2>

              </div>
              <div className="right1">


                {Object.entries(sport.days).map(([dayId, dayValue]) => (
                  <button key={dayId} onClick={() => handleDayChange(dayId)} style={{ border: dayId === currentDayId ? '1px solid red' : 'none' }}>
                    <h4 style={{ color: dayId === currentDayId ? 'red' : 'black' }}>{dayValue.dayname}</h4>
                    {dayId === currentDayId && <hr />}
                  </button>
                ))}
              </div>

              <div className="right2">
                <div className="about">
                  <div className="name">
                    <h3>{sport.days[currentDayId].dayname}: {sport.days[currentDayId].goal}</h3>


                  </div>
                  <div className="timing">{sport.days[currentDayId].duration}</div>

                </div>
                <div className="box">

                  {sport.days[currentDayId].exc.map(exercise => (
                    <div key={exercise.id} className='use'>



                      <div className="rectangle">
                        <div className="imgUtube">
                          <a href={exercise.utube} target='_blank'>
                            <img src={exercise.wimg} alt={exercise.name} /></a>
                        </div>
                        <div className="moreinfo">
                          <h3>Exercise:{exercise.name}</h3>
                          <h3>Equipment:{exercise.equipment}</h3>
                          <h3>Set:{exercise.set}</h3>
                          <h3>Reps:{exercise.reps}</h3>
                        </div>
                      </div>


                    </div>
                  ))}

                </div>

              </div>

            </div>
          </div>
        </div>



      ) : (
        <div>No sport information available.</div>
      )}
    </div>
  );


  <div className='deatils'>
    <div className="page">

      <div className="left">

        <div className="left1">

          <div className="pic">
            <img src="" alt="" />
          </div>
          <div className="equipments">
            <ul>
              <div>
                <li><FontAwesomeIcon icon={faEnvelope} /> ipsum dolor.</li>
              </div>
              <div>
                <li><i className='fa-solid fa-dumbbell'></i>Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Quam, provident</li>
              </div>
            </ul>
          </div>
          <div className="aboveline"></div>
          <div className="info">
            <h4><b>About us:</b></h4>
            <p><b> Our vision:</b></p>
            <p>Empowering athletes and sports entities through innovative management practices, fostering growth, and achieving excellence in the world of sports.</p>
            {/* {sport.map((checkbox, index) => (
        <div key={index}>
          <input
            type="checkbox"
            checked={checkbox.checked || false}
            onChange={() => handleCheckboxChange(index)}
          />
          <label>{sport.name}</label> */}
            {/* </div>
      ))}  */}


            <p><b>Our team</b></p>
            <p>Our team consists of experienced professionals passionate about sports.</p>
          </div>
        </div>

      </div>
      <div className="right">
        <div className="heading">
          <h2 class="aa">FOOTBALL </h2>

        </div>
        <div className="right1">
          <button>day1</button>
          <button>day2</button>
          <button>day3</button>
          <button>day4</button>


        </div>

        <div className="right2">
          <div className="about">
            <div className="name">
              <h4>Day1: Legs,Back,Abs</h4>


            </div>
            <div className="time">4workouts/1hr</div>

          </div>

        </div>

      </div>
    </div>
    //     </div>


  // )
  {/* {sport.days.day1.exc.map(exercise => (
                    <div key={exercise.id}>
                      <input
                        type="checkbox"
                        checked={exercise.checked || false}
                        onChange={() => handleCheckboxChange(exercise.id)}
                      />
                      <label>{exercise.name}</label>
                      <p>{exercise.set}</p>
                    </div>
                  ))} */}
  {/* {sport.days[day].exc.map(exercise => (
                    <div key={exercise.id}>
                      <input
                        type="checkbox"
                        checked={exercise.checked || false}
                        onChange={() => handleCheckboxChange(day, exercise.id)}
                      />
                      <label>{exercise.name}</label>
                    </div>
                  ))} */}
  {/* <input
                        type="checkbox" className='chec'
                        // checked=true
                        
                        onChange={() => handleCheckboxChange(currentDayId, exercise.id)}
                      /> */}
  {/* {Object.entries(sport.days).map(([dayKey, dayValue]) => (
                  <Link key={dayKey} to={`/sport/${id}/${dayKey}`}><button>{dayValue.dayname}</button></Link>
                ))} */}
  {/* {Object.entries(sport.days).map(([dayId, dayValue]) => (
                  <button key={dayId} onClick={() => handleDayChange(dayId)}><h4>{dayValue.dayname}{dayId==="sport.days[currentDayId]"?<hre/>:<></>}</h4></button>
                ))} */}
  //   const handleCheckboxChange = (exerciseId) => {
  //     const updatedSport = { ...sport };
  //     updatedSport.days.day1.exc = updatedSport.days.day1.exc.map(exercise => {
  //       if (exercise.id === exerciseId) {
  //         return { ...exercise, checked: !exercise.checked };
  //       }
  //       return exercise;
  //     });
  //     setSport(updatedSport);
  //   };
  // const handleCheckboxChange = (exerciseId) => {
  //     setSport(prevSport => {
  //       const updatedSport = { ...prevSport };
  //       updatedSport.days[day].exc = updatedSport.days[day].exc.map(exercise => {
  //         if (exercise.id === exerciseId) {
  //           return { ...exercise, checked: !exercise.checked };
  //         }
  //         return exercise;
  //       });
  //       return updatedSport;
  //     });
  //   };
  // const handleCheckboxChange = ( exerciseId) => {
  //     setSport(prevSport => {
  //       const updatedSport = { ...prevSport };
  //       updatedSport.days.[day].exc = updatedSport.days.[day].exc.map(exercise => {
  //         if (exercise.id === exerciseId) {
  //           return { ...exercise, checked: !exercise.checked };
  //         }
  //         return exercise;
  //       });
  //       return updatedSport;
  //     });
  //   };
  // const handleCheckboxChange = (dayKey, exerciseId) => {
  //     setSport(prevSport => {
  //       const updatedSport = { ...prevSport };
  //       const day = updatedSport.days[dayKey];
  //       const updatedExc = day.exc.map(exercise => {
  //         if (exercise.id === exerciseId) {
  //           return { ...exercise, checked: !exercise.checked };
  //         }
  //         return exercise;
  //       });
  //       // Update the exercises array for the specific day
  //       updatedSport.days[dayKey] = { ...day, exc: updatedExc };
  //       return updatedSport;
  //     });
  //   };

}

export default Days