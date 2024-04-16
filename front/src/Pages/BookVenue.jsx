// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import data_place from '../Components/Assests/placedata'

// const BookVenue = () => {
//   const { id } = useParams();
//   console.log("id:", id);
//   const [place, setPlace] = useState(null);
//   useEffect(() => {
//     const matchedPlace = data_place.find(place => place.id === parseInt(id));
//     setPlace(matchedPlace);

//   }, [id]);
//   return (
//     <div>BookVenue

//       <div className="reg">
//         <div className="register">
//           <h3>Book</h3>
//         </div>
//         <form onSubmit={ }>
//         <div className="one">
//             <input type="text" placeholder='Place name' name=' Place name' value={formData.name} onChange={handleInputChange} required />
//           </div>
//           <div className="one">
//             <input type="email" placeholder='Enter your email' name='email' value={formData.email} onChange={handleInputChange} required />
//           </div>
//           <div className="one">
//             <input type="text" placeholder='Full name' name='name' value={formData.name} onChange={handleInputChange} required />
//           </div>
//           <div className="one">
//                         <input type="tel" placeholder='Phone number' name='phone' value={formData.phone} onChange={handleInputChange} required />
//                     </div>
//                     {error && <div className="error">{error}</div>}

//         </form>
//       </div>
//       {
//         place ? (
//           <>
//             {place.name}</>) : (<>loading...</>)
//       }
//     </div>
//   )
// }

// export default BookVenue
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data_place from '../Components/Assests/placedata';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../config';
const BookVenue = () => {
  const { id } = useParams();
  console.log("id:", id);
  const [place, setPlace] = useState(null);
  const [formData, setFormData] = useState({
    placeName: '',
    email: '',
    name: '',
    phone: '',
    date: '',
    startTime: '', // Add startTime field
    endTime: '' // Add endTime field
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const matchedPlace = data_place.find(place => place.id === parseInt(id));
    setPlace(matchedPlace);
    if (matchedPlace) {
      setFormData({
        ...formData,
        placeName: matchedPlace.name
      });
    }
  }, [id,formData]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
    const submitHandler = async event => {
      event.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${BASE_URL}/book/bookvenue`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const responseData = await res.json();
      if (!res.ok) {
        throw new Error(responseData.message || 'Something went wrong');
      }
      setLoading(false);
      console.log("success:", responseData.message);
      setError('');
      navigate('/success');
    } catch (error) {
      console.log('error', error.message);
      setLoading(false);
      setError(error.message || 'Something went wrong');
    //   if (error.message === 'Place is already booked for this date and time') {
    //     setError(error.message);
    // } else {
    //     setError('Something went wrong');
    // }
    }
  };
  // };

  // Generate options for time select in half-hour increments from 8 am to 10 pm
  const generateTimeOptions = () => {
    const options = [];
    for (let hour = 8; hour <= 22; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        options.push(
          <option key={timeString} value={timeString}>{timeString}</option>
        );
      }
    }
    return options;
  };

  return (
    <div>BookVenue
      <div className="reg">
        <div className="register">
          <h3>Book</h3>
        </div>
        <form onSubmit={submitHandler}>
          <div className="one">
            <input type="text" placeholder='Place name' name='placeName' value={formData.placeName} onChange={handleInputChange} required />
          </div>
          <div className="one">
            <input type="email" placeholder='Enter your email' name='email' value={formData.email} onChange={handleInputChange} required />
          </div>
          <div className="one">
            <input type="text" placeholder='Full name' name='name' value={formData.name} onChange={handleInputChange} required />
          </div>
          <div className="one">
            <input type="tel" placeholder='Phone number' name='phone' value={formData.phone} onChange={handleInputChange} required />
          </div>
          <div className="one">
            <input type="date" placeholder='Date' name='date' value={formData.date} onChange={handleInputChange} required />
          </div>
          <div className="one">
            <select name="startTime" value={formData.startTime} onChange={handleInputChange} required>
              <option value="">Select Start Time</option>
              {generateTimeOptions()}
            </select>
          </div>
          <div className="one">
            <select name="endTime" value={formData.endTime} onChange={handleInputChange} required>
              <option value="">Select End Time</option>
              {generateTimeOptions()}
            </select>
          </div>
          {error && <div className="error">{error}</div>}
          <button type="submit" disabled={loading}>Book Now</button>
        </form>
      </div>
      {/* {place ? <>{place.name}</> : <>loading...</>} */}
    </div>
  )
}

export default BookVenue;
