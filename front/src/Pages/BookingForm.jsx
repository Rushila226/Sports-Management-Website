// // BookingForm.jsx
// import React, { useState } from 'react';
// import './BookingForm.css'

// const BookingForm = () => {
//     const [bookingDetails, setBookingDetails] = useState({
//         name:'',
//         email:'',
//         number:'',
//         date:''

//     });
//     const handleInputChange=e=>{
//         setBookingDetails({...bookingDetails},[e.target.name],e.target.value)
//     }

//     // const handleSubmit = async (event) => {
//     //     event.preventDefault(); // Prevent form submission

//     //     // Get form values
//     //     const name = event.target.name.value;
//     //     const number = event.target.number.value;
//     //     const email = event.target.email.value;
//     //     const date = event.target.date.value;

//     //     // Validation
//     //     if (name.trim() === '' || number.trim() === '' || email.trim() === '' || date.trim() === '') {
//     //         alert('Please fill in all fields.');
//     //         return;
//     //     }

//     //     if (!validateName(name)) {
//     //         alert('Name can only contain alphabets.');
//     //         return;
//     //     }

//     //     if (!validateEmail(email)) {
//     //         alert('Please enter a valid email address.');
//     //         return;
//     //     }

//     //     // Prepare data for POST request
//     //     const formData = {
//     //         name: name,
//     //         number: number,
//     //         email: email,
//     //         date: date
//     //     };

//     //     try {
//     //         // Make a POST request to the server
//     //         const response = await fetch('http://localhost:3000/bookingform', {
//     //             method: 'POST',
//     //             headers: {
//     //                 'Content-Type': 'application/json'
//     //             },
//     //             body: JSON.stringify(formData)
//     //         });
//     //         const data = await response.json();
//     //         if (data.success) {
//     //             // Set booking details
//     //             setBookingDetails(data.bookingDetails);
//     //         } else {
//     //             alert(data.message);
//     //         }
//     //     } catch (error) {
//     //         console.error('Error:', error);
//     //         // Handle the error (display an error message, etc.)
//     //     }
//     // };

//     // // Function to validate name (only alphabets allowed)
//     // const validateName = (name) => {
//     //     const re = /^[\sA-Za-z]+$/;
//     //     return re.test(name);
//     // };

//     // // Function to validate email address format
//     // const validateEmail = (email) => {
//     //     const re = /\S+@\S+\.\S+/;
//     //     return re.test(email);
//     // };

//     return (
//         <section className="book" id="book">
//             <h1 className="heading"><span>Book</span> Now</h1>
//             <div className="row">
//                 <div className="form-container">
//                     <form id="bookForm" >
//                         <input type="text" id="name" placeholder="Your Name" className="box" required />
//                         <input type="tel" id="number" placeholder="Your Number" className="box" pattern="[0-9]{10}" required />
//                         <input type="email" id="email" placeholder="Your Email" className="box" required />
//                         <input type="date" id="date" className="box" required />
//                         <input type="submit" value="Book Now" className="btn" />
//                     </form>
//                 </div>
//             </div>
//             {/* Display booking details */}
//             {Object.keys(bookingDetails).length > 0 && (
//                 <div id="bookingDetails">
//                     <p>Booking Details:</p>
//                     <p>Name: {bookingDetails.name}</p>
//                     <p>Number: {bookingDetails.number}</p>
//                     <p>Email: {bookingDetails.email}</p>
//                     <p>Date: {bookingDetails.date}</p>
//                 </div>
//             )}
//         </section>
//     );
// };

// export default BookingForm;

// import React, { useState,useEffect } from 'react';
// import data_place from '../Components/Assests/placedata'
// import {  useNavigate,useParams } from 'react-router-dom';
// import { BASE_URL } from '../config';
// import '../Pagestyle/BookingForm.css'
// const BookingForm = () => {
    

 
//     const [formData, setFormData] = useState({
        
//         email: '',
//         name: '',
//         phone: '',
//         date: ''
//     });
//     const navigate = useNavigate();
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState('');

//     const handleInputChange = e => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const submitHandler = async event => {
//         event.preventDefault();
//         setLoading(true);
//         try {
//             const res = await fetch(`${BASE_URL}/venue/bookingform`, {
//                 method: 'post',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(formData)
//             });
//             const responseData= await res.json();
//             if (!res.ok) {
//                 throw new Error(responseData.message||'Something went wrong');
//             }
//             setLoading(false);
//             console.log("success:", responseData.message);
//             setError('');
//             navigate('/home');
//         } catch (error) {
//             console.log('error', error.message);
//             setLoading(false);
//             setError(error.message||'Something went wrong');
//         }
//     };

//     return (
//         <div>
//             <div className="reg" >
//                 <div className="register">
//                 {/* {
//                     data_place.map(p=>( */}
//                         <h3>Book <h5></h5> </h3>
//                 {/* //     ))
//                 // }  */}
//                 </div>
//                 <form onSubmit={submitHandler} >
//                     <div className="one">
//                         <input type="text" placeholder='Full name' name='name' value={formData.name} onChange={handleInputChange} required />
//                     </div>
//                     <div className="one">
//                         <input type="email" placeholder='Enter your email' name='email' value={formData.email} onChange={handleInputChange} required />
//                     </div>
//                     <div className="one">
//                         <input type="tel" placeholder='Phone number' name='phoneNumber' value={formData.phoneNumber} onChange={handleInputChange} required />
//                     </div>
//                     <div className="one">
//                         <input type="date" placeholder='Select date' name='date' value={formData.date} onChange={handleInputChange} required />
//                     </div>
//                     <div className="submit">
//                         <button type="submit" disabled={loading}>Book Now</button>
//                     </div>
                   
//                     {/* <p className='comment'>Already have an account? <Link to='/login'>Login</Link></p> */}
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default BookingForm;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../config';
import '../Pagestyle/BookingForm.css';
import Navbar from '../Components/Navbar/Navbar';

const BookingForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        name: '',
        phone: '',
        date: ''
    });
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleInputChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const submitHandler = async event => {
        event.preventDefault();
        setLoading(true);
        try {
            const res = await fetch(`${BASE_URL}/venue/bookingform`, {
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
        }
    };

    return (
        <div>
            <Navbar/>
            <div className="reg">
                <div className="register">
                    <h3>Book</h3>
                </div>
                <form onSubmit={submitHandler}>
                    <div className="one">
                        <input type="text" placeholder='Full name' name='name' value={formData.name} onChange={handleInputChange} required />
                    </div>
                    <div className="one">
                        <input type="email" placeholder='Enter your email' name='email' value={formData.email} onChange={handleInputChange} required />
                    </div>
                    <div className="one">
                        <input type="tel" placeholder='Phone number' name='phone' value={formData.phone} onChange={handleInputChange} required />
                    </div>
                    {error && <div className="error">{error}</div>}
                    <div className="one">
                        <input type="date" placeholder='Select date' name='date' value={formData.date} onChange={handleInputChange} required />
                    </div>
                    <div className="submit">
                        <button type="submit" disabled={loading}>Book Now</button>
                    </div>
                    
                </form>
            </div>
        </div>
    );
};

export default BookingForm;
