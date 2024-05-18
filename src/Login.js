import React, { useState } from 'react';
import {useNavigate} from "react-router-dom"
import axios from 'axios';
import './Login.css'; // Import custom CSS file

const Login = ({ setUser }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('buyer');

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isLogin) {
      try {
        const response = await axios.post('https://6649263b56a6512a1208f674--rentify-backend.netlify.app/users/login', { email, password });
        setUser(response.data);
        console.log(response.data);
        navigate('/properties');
      } catch (error) {
        console.error(error);
      }
    } else {
      try {
        const response = await axios.post('https://6649263b56a6512a1208f674--rentify-backend.netlify.app/users/register', { name, email, phoneNumber, password, userType });
        setUser(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>{isLogin ? 'Login' : 'Register'}</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          {!isLogin && <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />}
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          {!isLogin && <input type="text" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />}
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          {!isLogin && (
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  value="buyer"
                  checked={userType === 'buyer'}
                  onChange={(e) => setUserType(e.target.value)}
                />
                Buyer
              </label>
              <label>
                <input
                  type="radio"
                  value="seller"
                  checked={userType === 'seller'}
                  onChange={(e) => setUserType(e.target.value)}
                />
                Seller
              </label>
            </div>
          )}
          <button type="submit">{isLogin ? 'Login' : 'Register'}</button>
        </form>
        <p className="switch-link" onClick={() => setIsLogin(!isLogin)}>{isLogin ? 'Create an account' : 'Already have an account? Login'}</p>
      </div>
    </div>
  );
};

export default Login;



