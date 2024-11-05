import React, { useState } from 'react';
import './Register.css'; 

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Data Submitted:", formData);
  };

  return (
    <div className="register-container">
      <div className="register-formContainer">
        <img src="logo.png" alt="Pure Pleo Logo" className="register-logo" />
        <h2 className="register-header">REGISTER</h2>
        <form onSubmit={handleSubmit} className="register-form">
          <input
            type="text"
            name="name"
            placeholder="NAME"
            value={formData.name}
            onChange={handleChange}
            className="register-input"
            required
          />
          <input
            type="tel"
            name="mobile"
            placeholder="MOBILE NO."
            value={formData.mobile}
            onChange={handleChange}
            className="register-input"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="EMAIL"
            value={formData.email}
            onChange={handleChange}
            className="register-input"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="PASSWORD"
            value={formData.password}
            onChange={handleChange}
            className="register-input"
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="CONFIRM PASSWORD"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="register-input"
            required
          />
          <button type="submit" className="register-registerButton">REGISTER</button>
        </form>
        <p className="register-footerText">If already registered then</p>
        <button className="register-loginButton">LOGIN</button>
      </div>
    </div>
  );
}

export default Register;
