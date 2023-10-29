import React from 'react'
import './Userdetail.css'
import { useNavigate } from 'react-router-dom';


export const Userdetail = () => {
  const navigate = useNavigate();
  return (
    <div className='detailContainer'>
      <div>
        <p>Name: Prashant</p>
        <p></p>
      </div>
      <div>
        <p>Age: 23</p>
      </div>
      <div>
        <p>Gender: Male</p>
      </div>
      <div>
        <p>D.O.B: 23/11/2000</p>
      </div>
      <div>
        <p>Mobile: 8303127229</p>
      </div>
      <div className='submit-container'>
        <div className={"submit"} onClick={()=>navigate('/')}>Logout</div>
      </div>
    </div>
  )
}
