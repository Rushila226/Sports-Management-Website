import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserDashboard = () => {
    const [user, setUser] = useState({});
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        // Fetch user details and booking details from the server
        axios.get('/api/v1/auth') // Assuming this endpoint returns user details
            .then(response => {
                setUser(response.data); // Assuming user details are returned in the response
            })
            .catch(error => {
                console.error('Error fetching user details:', error);
            });

        axios.get('/api/v1/bookvenue') // Assuming this endpoint returns booking details
            .then(response => {
                setBookings(response.data.bookings); // Assuming bookings are returned in the response
            })
            .catch(error => {
                console.error('Error fetching booking details:', error);
            });
    }, []);

    return (
        <div>
            <h1>User Dashboard</h1>
            <h2>Welcome, {user.name}</h2>
            <p>Email: {user.email}</p>

            <h3>Booking Details</h3>
            <ul>
                {bookings.map(booking => (
                    <li key={booking._id}>
                        {/* Display booking details */}
                        {/* Example: Booking date and venue */}
                        <p>Booking Date: {booking.date}</p>
                        <p>Venue: {booking.placeName}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserDashboard;
