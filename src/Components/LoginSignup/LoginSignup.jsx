import React, { useState } from 'react';
import './LoginSignup.css';
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

const LoginSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    const data = {
      email,
      password,
    };

    axios.post('http://localhost:4000/login', data)
      .then((response) => {
        console.log(response.data);
        if (response.data.code === 200) {
            navigate('/userdetail');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>Login</div>
        <div className='underline'></div>
      </div>
      <div className='inputs'>
        <div className='input'>
          <img src={email_icon} alt="" />
          <input
            type="email"
            placeholder='Email Id'
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className='input'>
          <img src={password_icon} alt="" />
          <input
            type="password"
            placeholder='Password'
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
      </div>
      <div className='submit-container'>
        <div className={"submit"} onClick={navigate('/userdetail')}>Login</div>
      </div>
    </div>
  );
};

export default LoginSignup;
