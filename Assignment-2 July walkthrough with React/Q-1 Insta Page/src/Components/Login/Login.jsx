import React from 'react';
import './Login.css'

function Login() {
    return (
        <div className="login">
            <div className="input-boxes">
                <input type="text" placeholder="Email Address" />
                <input type="password" placeholder="Password" />
                <button>Login</button>
            </div>
        </div>
    );
}

export default Login;