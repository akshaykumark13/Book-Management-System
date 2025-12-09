import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import api from '../../api/axios'
import { Link } from 'react-router-dom';
import './Login.css'

 const Login = () => {
  const navigate = useNavigate()
  const [credentials,setCredentials] =useState({
    username:'', password:''
  });
  const[error,setError] = useState('');

  const handleChange =(e) =>{
    setCredentials({...credentials,[e.target.name]:e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('token/', credentials);
      const { access, refresh } = response.data;
  
      localStorage.setItem('access', access);
      localStorage.setItem('refresh', refresh);
  
      // ✅ Decode token safely
       // ✅ Decode token to check role
    const tokenPayload = JSON.parse(atob(access.split('.')[1]));
    const isAdmin = tokenPayload.is_staff || tokenPayload.is_superuser;
    localStorage.setItem('isAdmin', isAdmin); // Store admin flag
      
    navigate('/dashboard'); // Normal user dashboard
  } 
      catch (error) {
      setError('Invalid username or password');
    }
  };
  

  return (
    <div className='background container-fluid d-flex justify-content-center align-items-center vh-100'>
    <div className='glass-card' style={{ maxWidth: '500px', width: '100%' }}>
      <h1 className="mb-4">Login</h1>

      {error && <div className="alert alert-danger">{error}</div>}
      
      <div className='card-text'>

        <form onSubmit={handleSubmit}>
          <div className='form-group mb-3'>
            <label htmlFor="username" className="form-label">Username</label>
            <input onChange={handleChange}
            type="text" name='username' placeholder='Username' className='form-control' value={credentials.username} required
            />
          </div>

          <div className='form-group mb-3'>
            <label className="form-label">Password</label>
            <input onChange={handleChange}
            type="password" name='password' className='form-control' placeholder='Password' value={credentials.password} required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form><br />
        <p style={{alignItems:'center', justifyContent:'center',display:'flex', gap:'12px'}}>
        <span>Don't have an account?</span> <Link to="/register" style={{fontSize:'17px',fontWeight:'bold',color:'orange'}}>Register here</Link>
        </p>
      </div>
    </div>
    </div>
  )
}

export default Login;