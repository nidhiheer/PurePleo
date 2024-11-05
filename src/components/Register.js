import React from 'react';

const Register = () => {
    return (
        <div className="register-container">
            <div className="register-box">
                <img src="./logo.png" alt="Logo" className="logo" />
                <h2>REGISTER</h2>
                <input type="text" placeholder="NAME" className="input-field" />
                <input type="password" placeholder="PASSWORD" className="input-field" />
                <button className="register-button">LOGIN</button>
                <p className="register-text">
                    donot have an account? 
                    <a href="/login" className="login-link"> LOGIN</a>
                </p>
            </div>
        </div>
    );
};

export default Register;