import React from 'react';
import './App.css';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import Signup from './Components/Signup/Signup';
import Home from './Components/Home/Home'
import { Userdetail } from './Components/Userdetail/Userdetail';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="/login" element={<LoginSignup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/userdetail" element={<Userdetail />} />
      </Routes>
    </Router>
  );
}

export default App;
