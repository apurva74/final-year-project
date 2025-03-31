import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import NavbarSub from './NavbarSub';
import './login.css';

function Login() {
  const [profile, setProfile] = useState('');

  const handleProfileChange = (e) => {
    setProfile(e.target.value);
  };

  const handleGoogleLoginSuccess = (credentialResponse) => {
    if (!profile) {
      alert('Please select a profile before signing in with Google.');
      return;
    }

    // Simulate sending profile and Google data to the backend
    const loginData = {
      profile,
      googleCredential: credentialResponse,
    };

    console.log('Login data:', loginData);
    alert(`Google login successful with profile: ${profile}`);
  };

  const handleGoogleLoginError = () => {
    alert('Google login failed. Please try again.');
  };

  return (
      <div className="login-page">
          <NavbarSub />
        <h1 className="login-title1">Login</h1>
        <div className="form1">
          <form className="login-form">
            <select className="dropdown" value={profile} onChange={handleProfileChange} required>
              <option value="" disabled>Select Profile</option>
              <option value="Admin">Admin</option>
              <option value="Student">Student</option>
              <option value="College Faculty">College Faculty</option>
              <option value="Company">Company</option>
            </select>
            <input type="text" placeholder="Username" required />
            <input type="password" placeholder="Password" required />
            <button type="submit"> <Link to="/collegefaculty">Login</Link></button>
            <p className="message">
              Not Registered? <Link to="/register">Create an account</Link>
            </p>
          </form>

          <GoogleLogin
            onSuccess={handleGoogleLoginSuccess}
            onError={handleGoogleLoginError}
          />
        </div>
      </div>
  );
}

export default Login;
