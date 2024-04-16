// import mongoose from "mongoose";

// const BookSchema = new mongoose.Schema({
//     email: { 
//       type: String, 
//       required: true, 
//       unique: true, 
//       validate: {
//         validator: function(v) {
//           // Check if the email contains @ symbol
//           return /\S+@\S+\.\S+/.test(v);
//         },
//         message: props => `${props.value} is not a valid email address!`
//       }
//     },
//     name: { 
//       type: String, 
//       required: true,
//       validate: {
//         validator: function(v) {
//           // Check if the name contains only letters
//           return /^[a-zA-Z]+$/.test(v);
//         },
//         message: props => `${props.value} is not a valid name!`
//       }
//     },
//     phone: {
//       type: Number,
//       required: true,
//       validate: {
//         validator: function(v) {
//           // Check if the phone number has exactly 10 digits
//           return /^\d{10}$/.test(v);
//         },
//         message: props => `${props.value} is not a valid 10-digit phone number!`
//       }
//     },
//     date: { 
//       type: Date,
//       required: true
//     },
//     placeName: { 
//       type: String, 
//       required: true 
//     },
//     time: { 
//       type: Date, 
//       required: true 
//     }
// });

// export default mongoose.model("Book", BookSchema);

import mongoose from 'mongoose';

const { Schema } = mongoose;

const bookSchema = new Schema({
  placeName: {
    type: String,
    required: true,
    trim: true
},
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        // Add email format validation
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        // Add phone number format validation
        match: [/^\d{10}$/, 'Please fill a valid phone number']
    },
    date: {
        type: Date,
        required: true
    },
   
    startTime: {
        type: String,
        required: true,
        // Add custom validation for start time (e.g., validate against a specific format or range)
        validate: {
            validator: function (value) {
                // Example: Validate time format (HH:MM)
                return /^([01]\d|2[0-3]):([0-5]\d)$/.test(value);
            },
            message: props => `${props.value} is not a valid start time!`
        }
    },
    endTime: {
        type: String,
        required: true,
        // Add custom validation for end time (e.g., validate against a specific format or range)
        validate: {
            validator: function (value) {
                // Example: Validate time format (HH:MM)
                return /^([01]\d|2[0-3]):([0-5]\d)$/.test(value);
            },
            message: props => `${props.value} is not a valid end time!`
        }
    }
});

const Book = mongoose.model('Book', bookSchema);

export default Book;
