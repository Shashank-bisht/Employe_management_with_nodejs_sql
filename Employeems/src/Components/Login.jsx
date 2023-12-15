import React, { useState } from 'react'
import './styles.css'
import {useNavigate} from 'react-router-dom';
import axios from 'axios'
const Login = () => {
    const [values, setValues]= useState({
        email: "",
        password: ""
    }) 
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    const handleSubmit = (event) => {
      event.preventDefault();
      axios.post('http://localhost:8000/auth/adminlogin', values)
        .then(result => {
          if(result.data.loginStatus ){
            navigate('/dashboard')
          }else{
          setError(result.data.Error)
          }
          
        })
        .catch(err => console.log(err));
    };
//in handleSubmit values is passed as the data payload to be sent with the request. values likely contains data from a form or some other data that needs to be sent to the server.

  return (
    <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
        <div className='p-3 rounded w-35 border loginForm'>
          <div className='text-danger'>{error && error}</div>
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit} action="">
        {/* onsubmit is when form is submited*/}
        <div className='mb-3'>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" className='form-control rounded-0' onChange={(e)=> setValues({...values, email: e.target.value})} />
            {/* keep the values same but add new email to end of it by updating object*/}
        </div>
        <div className='mb-3'>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" className='form-control rounded-0' onChange={(e)=> setValues({...values, password: e.target.value})} />
            {/* keep the values same but add new password to end of it by updating object*/}
        </div>
        <button className='btn btn-success w-100 rounded-0'>Login</button>
        <div className='mb-3 mt-2'>
            <input type="checkbox" name="tick" id="tick"  />
            <label htmlFor="password">You Agree with terms & conditions</label>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Login
