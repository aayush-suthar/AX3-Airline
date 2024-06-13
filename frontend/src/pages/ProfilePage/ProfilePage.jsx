import React from 'react';
import './ProfilePage.css'; 
import Navbar from '../../Components/Navbar/Navbar';

const ProfilePage = ({user_info}) => {
  return (
    <div className="profile-page">
          <Navbar user_info = {user_info}/>
      <div className="container">
        <h1>User Profile</h1>
       
      </div>
    </div>
  );
};

export default ProfilePage;
