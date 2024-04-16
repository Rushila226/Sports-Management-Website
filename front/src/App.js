


import './App.css';


import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import Routine from './Pages/Routine';
import Book from './Pages/Book';
import Place1 from './Pages/Place1';
import Login from './Pages/Login'
import Sign from './Pages/Sign';
import { AuthContextProvider } from './Context/AuthContext.jsx';
import BookingForm from './Pages/BookingForm.jsx';
import Booked from './Pages/Booked.jsx';
import BookVenue from './Pages/BookVenue.jsx';
import UserDashboard from './Pages/UserDashboard.jsx';



function App() {
  
  return (
    <div >
      <BrowserRouter>
      <AuthContextProvider>
     
      
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/routines' element={<Routine/>}/>
        <Route path='/routines/:id' element={<Routine/>}/>

        <Route path='/booking' element={<Book/>}/>
        
        <Route path='/booking/places/:id' element={<Place1 />} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Sign/>}/>
      <Route path='/bookingform' element={<BookingForm/>}/>
      <Route path='/success' element={<Booked/>}/>
      <Route path='/bookvenue/:id' element={<BookVenue/>}/>
      <Route path='/user' element={<UserDashboard/>}/>





      </Routes>
      </AuthContextProvider>
      
      </BrowserRouter>
     
    </div>
  );
}

export default App;
