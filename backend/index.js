import express from"express"
import cookieParser from "cookie-parser"
import cors from 'cors'
import mongoose from "mongoose"
import dotenv from 'dotenv'

import {authenticateUser} from "./Controllers/middleware.js"
import userRoute from "./Routes/user.js"
import Book from "./models/BookSchema.js"
import authRoute from './Routes/auth.js'
import venueRoute from './Routes/venue.js'
import bookRoute from './Routes/book.js'
dotenv.config();
const app =express();
const port =process.env.PORT || 3001;

const corsOptions={
    origin:true,
};

app.get('/',(req,res)=>{
    res.send("Api is working");
});

//databse connection
mongoose.set('strictQuery',false)
const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser:true,
            useUnifiedTopology:true,

        })
        console.log("mongo database is connected")
    }
    catch(e){
        console.log('Mongo database is not connected')
    }
}


// Route to fetch booking details based on authenticated user's email
app.get('/api/v1/book', authenticateUser, async (req, res) => {
    try {
        // Fetch booking details from MongoDB based on the user's email
        const bookings = await Book.find({ email: req.user.email });
        res.json({ bookings });
    } catch (error) {
        console.error("Error fetching bookings:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});


//middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use('/api/v1/auth',authRoute);
app.use('/api/v1/venue',venueRoute);
app.use('/api/v1/book',bookRoute);
app.use("/api/vi/users",userRoute);


app.listen(port,()=>{
    connectDB();
    console.log("server is running on port"+port);
});