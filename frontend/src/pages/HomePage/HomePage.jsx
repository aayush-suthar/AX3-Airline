import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { useLocation } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  
  const {state} = useLocation()
  let user_info = null 
  if(state){
    user_info = state.user_info
  }
  return (
    <>
    <Navbar user_info = {user_info}/>
    <div className="home-page">
      <div className="container"> 
        <h1>Welcome to the Airline Website</h1>
      </div>
    </div>
    </> 
  );
};

export default HomePage; 

