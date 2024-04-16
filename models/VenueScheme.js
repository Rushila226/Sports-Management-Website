import mongoose from "mongoose";

const VenueSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true, 
      validate: {
        validator: function(v) {
          // Check if the email contains @ symbol
          return /\S+@\S+\.\S+/.test(v);
        },
        message: props => `${props.value} is not a valid email address!`
      }
    },
    name: { 
      type: String, 
      required: true,
      validate: {
        validator: function(v) {
          // Check if the name contains only letters
          return /^[a-zA-Z]+$/.test(v);
        },
        message: props => `${props.value} is not a valid name!`
      }
    },
    phone: {
      type: Number,
      required: true,
      validate: {
        validator: function(v) {
          // Check if the phone number has exactly 10 digits
          return /^\d{10}$/.test(v);
        },
        message: props => `${props.value} is not a valid 10-digit phone number!`
      }
    },
    date: { type: Date }
  });

export default mongoose.model("Venue", VenueSchema);