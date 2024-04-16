import React,{useState,useContext} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { BASE_URL } from '../config'
import {authContext} from '../Context/AuthContext.jsx'
import '../Pagestyle/Sigin.css'

const Login = () => {
    const [formData,setFormdata]=useState({
        email:'',
        password:''
    })
   const handleInputChange=e=>{
    setFormdata({...formData,[e.target.name]:e.target.value});
   }
   const navigate=useNavigate();
   const [loading,setLoading]=useState(false);
   const [error, setError] = useState('');
   const{dispatch}=useContext(authContext)
   const submitHandler=async event=>{
    // console.log(formData);

    event.preventDefault();
    setLoading(true);
    try {
        const res=await fetch (`${BASE_URL}/auth/login`,{
            method:'post',
            headers:{
                    'Content-Type':'application/json'
            },
            body:JSON.stringify(formData)

        });

        const result=await res.json();

        if(!res.ok)
        {throw new Error(result.message);
        }
        dispatch({
            type:'LOGIN_SUCCESS',
            payload:{
                user:result.data,
                token:result.token,
            }
        })
        console.log(result,"login data");
        setLoading(false)
        console.log("succes:",result.message);
        console.log(result,"login data");
        // toast.success(message)
        setError('');
        navigate('/home')
    } catch (error) {
        // toast.error(error.message);
        console.log('error',error.message)
        setLoading(false);
        setError(error.message);
    }
};


  return (
    <div>
        <div className="reg">
        <h3>GAME ON</h3>

            <div className="register">
                <h3>Hello! welcome</h3></div>  
                <form  onSubmit={submitHandler} className="persond">
                    <div className="one">
                        <input type="email" placeholder='Enter your email' name='email' value={formData.email} onChange={handleInputChange} required/>
                    </div>
                    <div className="one">
                        <input type="password" placeholder='Password' name='password' value={formData.password} onChange={handleInputChange} required/>
                    </div>
                    <div className="submit">
                        <button disabled={loading && true} type="submit">Login</button>
                    </div>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <p className='comment'>Don't have an account?<Link to='/' >Register</Link> </p>
                </form>
        </div>
    </div>
  )
}

export default Login