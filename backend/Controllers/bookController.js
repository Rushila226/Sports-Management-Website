// // routes/bookingRoutes.js


// import Book from '../models/BookSchema.js';



// export const book=async (req, res) => {
//     console.log(req.body); // Log the request body
//     const{email,name,phone,date,placeName,time}=req.body;

//     try {
 
//         const existingBooking = await Book.findOne({ placeName, date, time });
//         if (existingBooking) {
//             return res.status(400).json({ error: 'Place already booked for this date and time' });
//         }
//         const newbooking = new Book({ email, name, phone, date:new Date(date).toISOString(), placeName, time });
//         await newbooking.save();
//         res.status(201).json({ message: 'Booking successful' });
//     } catch (error) {
       
//         console.error('Error booking venue:', error);

//         // Provide a more informative error message:
//         let errorMessage = 'Internal server error';
//         if (error.name === 'ValidationError') {
//             errorMessage = 'Validation error: ' + error.message;
//         } else if (error.name === 'MongoError') {
//             errorMessage = 'Database error: ' + error.message;
//         }
//         res.status(500).json({ success: false, message: errorMessage  });
//     }
// };
import Book from '../models/BookSchema.js';

class BookingConflictError extends Error {
    constructor(message) {
      super(message);
      this.name = 'BookingConflictError';
    }
  }

export const book = async (req, res) => {
    console.log(req.body); // Log the request body
    const { email, name, phone, date, placeName, startTime, endTime } = req.body;

    try {
        // Check if there is an existing booking for the same place, date, and overlapping time
        const existingBooking = await Book.findOne({
            placeName,
            date,
            $or: [
                { $and: [{ startTime: { $lte: startTime } }, { endTime: { $gt: startTime } }] },
                { $and: [{ startTime: { $lt: endTime } }, { endTime: { $gte: endTime } }] }
            ]
        });

        // if (existingBooking) {
        //     return res.status(400).json({ error: 'Place already booked for this date and time' });
        // }
        if (existingBooking) {
            throw new BookingConflictError('Place already booked for this date and time');
          }

        // Create a new booking
        const newBooking = new Book({
            email,
            name,
            phone,
            date: new Date(date).toISOString(),
            placeName,
            startTime,
            endTime
        });

        await newBooking.save();
        res.status(201).json({ message: 'Booking successful' });
    } catch (error) {
        console.error('Error booking venue:', error);

        // Provide a more informative error message:
        let errorMessage = 'Internal server error';
        if (error instanceof BookingConflictError) {
            errorMessage = error.message;
          }
        else if (error.name === 'ValidationError') {
            errorMessage = 'Validation error: ' + error.message;
        } else if (error.name === 'MongoError') {
            errorMessage = 'Database error: ' + error.message;
        }//  else if (error.message === 'Place is already booked for this date and time') {
        //     errorMessage = error.message;
        // }
        res.status(500).json({ success: false, message: errorMessage });
    }
};


