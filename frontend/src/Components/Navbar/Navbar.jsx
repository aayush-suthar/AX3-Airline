import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = ({ user_info }) => {
  return (  
    <div className="navbar">
      <div className="navbar-container">
        <Link state = {{user_info : user_info}} href="/" className="navbar-logo">Ax3 Airlines</Link>
        <ul className="navbar-nav">
          <li className="navbar-item"><Link state = {{user_info : user_info}} to="/">Home</Link></li>
          <li className="navbar-item"><Link state = {{user_info : user_info}} to="/flights">Flights</Link></li>
          <li className="navbar-item user-profile active"><Link state = {{user_info : user_info}} to="/profile">Profile</Link></li>
          <li className="navbar-item"><Link state = {{user_info : user_info}} to="/login">Login</Link></li>
          <li className="navbar-item"><Link state = {{user_info : user_info}} to="/signup">Signup</Link></li>
          <li className="navbar-item"><Link state = {{user_info : user_info}} to="/admin">Admin</Link></li>
        </ul>
      </div>
    </div> 
  );
};  

export default Navbar; 
