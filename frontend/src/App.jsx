import React , { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';
import ProfilePage from './pages/ProfilePage/ProfilePage'; 
import FlightPage from './pages/FlightPage/FlightPage';
import AdminPage from './pages/AdminPage/AdminPage';
import BookPage from './pages/BookPage/BookPage';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  

  const HandleAuthChange = (e)=>{
    setIsAuthenticated(e)  
  }
 
  return (
    <Router> 
      <div> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage setIsAuthenticated = {HandleAuthChange}/>} />
          <Route path="/signup" element={<SignupPage setIsAuthenticated = {HandleAuthChange} />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/flights" element={<FlightPage />} />
          <Route path="/booknow" element={<BookPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
