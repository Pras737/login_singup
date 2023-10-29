import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import '../LoginSignup/LoginSignup';
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import { useNavigate } from 'react-router-dom';

const LoginSignup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = () => {
    console.log('clicked')
    const userData = {
      name,
      email,
      password,
    };

    axios
      .post('http://localhost:4000/signup', userData)
      .then((response) => {
        console.log('API Response:', response.data);
        if (response.data.code === 200) {
            navigate('/userdetail');
        }
      })
      .catch((error) => {
        console.error('API Error:', error);
      });
  };

  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>Signup</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        <div className='input'>
          <img src={user_icon} alt="" />
          <input
            type="text"
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)} 
          />
        </div>
        <div className='input'>
          <img src={email_icon} alt="" />
          <input
            type="email"
            placeholder='Email Id'
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
          />
        </div>
        <div className='input'>
          <img src={password_icon} alt="" />
          <input
            type="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
      </div>
      <div className='submit-container'>
        <div className={"submit"} onClick={handleSignUp}>Sign Up</div>
      </div>
    </div>
  );
};

export default LoginSignup;
