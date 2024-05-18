import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './Login';
import Properties from './Properties';
import './App.css'; // Import custom CSS file

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Rentify</h1>
      <p>Find your dream home with ease!</p>
      <div className="features">
        <div className="feature">
          <img src='../public/search.jpg' alt="Search Icon" />
          <h2>Search Properties</h2>
          <p>Search for properties based on your preferences, such as location, price, and amenities.</p>
        </div>
        <div className="feature">
          <img src="../public/contact" alt="Contact Icon" />
          <h2>Contact Sellers</h2>
          <p>Connect with sellers directly to schedule viewings or ask questions about the properties.</p>
        </div>
        <div className="feature">
          <img src="../public/fav" alt="Save Icon" />
          <h2>Save Favorites</h2>
          <p>Save your favorite properties to easily access them later and compare options.</p>
        </div>
      </div>
      <Link to="/login">
        <button className="btn">Get Started</button>
      </Link>
    </div>
  );
};


const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <nav className="navbar">
        <span>Rentify</span>
        <Link to="/" className="nav-link">Home</Link>
        {user ? (
          <>
            <Link to="/properties" className="nav-link">Properties</Link>
            <span className="user-name">{user.name}</span>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-link">Login</Link>
          </>
        )}
      </nav>
      <Routes>
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/properties" element={<Properties user={user} />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;



