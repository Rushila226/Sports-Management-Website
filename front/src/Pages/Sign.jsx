import React,{useState} from 'react'
import { Link ,useNavigate} from 'react-router-dom'

import '../Pagestyle/Sigin.css'
import { BASE_URL } from '../config'
const Sign = () => {
    const [formData,setFormdata]=useState({
        name:'',
        email:'',
        password:''
    })
    const navigate=useNavigate();
    const [loading,setLoading]=useState(false);
    const [error, setError] = useState('');
   const handleInputChange=e=>{
    setFormdata({...formData,[e.target.name]:e.target.value});
   }
   const submitHandler=async event=>{
    // console.log(formData);

    event.preventDefault();
    setLoading(true);
    try {
        const res=await fetch (`${BASE_URL}/auth/`,{
            method:'post',
            headers:{
                    'Content-Type':'application/json'
            },
            body:JSON.stringify(formData)

        })
        const {message}=await res.json()
        if(!res.ok)
        {throw new Error(message)
        }
        setLoading(false)
        console.log("succes:",message)
        // toast.success(message)
        setError('');
        navigate('/home')
    } catch (error) {
        // toast.error(error.message);
        console.log('error',error.message)
        setLoading(false);
        setError(error.message);
    }

   }

    return (
        <div>
          
            <div className="reg">
            
            
                <h3>GAME ON</h3>
                <div className="register">
                    <h3>Create an Account</h3>
                </div>
                <form onSubmit={submitHandler}>
                    
                    <div className="one">
                        <input type="text" placeholder='Full name' name='name' value={formData.name} onChange={handleInputChange} required/>
                    </div>
                    <div className="one">
                        <input type="email" placeholder='Enter your email' name='email' value={formData.email} onChange={handleInputChange} required/>
                    </div>
                    <div className="one">
                        <input type="password" placeholder='Password' name='password' value={formData.password} onChange={handleInputChange} required />
                    </div>
                    <div className="submit">
                        <button disabled={loading } type="submit">Sign up</button>
                    </div>
                    {error && <p style={{ color: 'black' }}>{error}</p>}
                    <p className='comment'>Already have an account?<Link to='/login' >Login</Link> </p>
                </form>
            </div>
        </div>
    )
}

export default Sign