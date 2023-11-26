import React, { useState } from 'react';
import Axios from 'axios';
import './login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        Axios.post('http://127.0.0.1:8000/users/login/', {
            email: email,
            password: password
        })
        .then(response => {
            console.log(response);
            
        })
        .catch(error => {
            setError('Login failed: ' + error.message);
            console.error('Login error', error);
        });
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit} className="login-form">
                <h2 className="login-title">Login</h2>
                {error && <p className="error">{error}</p>}
                <div className="input-group">
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="Email Address" 
                        required 
                    />
                </div>
                <div className="input-group">
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="Password" 
                        required 
                    />
                </div>
                <button type="submit" className="login-button">Sign In</button>
            </form>
        </div>
    );
}

export default Login;
