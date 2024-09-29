import React from 'react';

const Login = () => {
    return (
        <div className="login-container">
            <div className="login-box">
                <img src="./logo.png" alt="Logo" className="logo" />
                <h2>LOGIN</h2>
                <input type="text" placeholder="NAME" className="input-field" />
                <input type="password" placeholder="PASSWORD" className="input-field" />
                <button className="login-button">LOGIN</button>
                <p className="register-text">
                    donot have an account? 
                    <a href="/register" className="register-link"> REGISTER</a>
                </p>
            </div>
        </div>
    );
};

export default Login;