import React from 'react'
import './Home.css'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
const Home = () => {
  return (
    <div className='mainContainer'>
        <div className='submit-container'>
          <Link to="/signup" className={"submit"}>Sign Up</Link>
          <Link to="/login" className={"submit"}>Login</Link>
        </div>
    </div>
  )
}

export default Home;
