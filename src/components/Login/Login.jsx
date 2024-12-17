// Import necessary React dependencies and assets
import React, { useState } from 'react';
import './Login.css';
import logo from '../../assets/images/fantastiqo-logo.png';

// Main Login component
const Login = () => {
    // Initialize form state with username and password fields
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    // TODO: Add additional state for:
    // - Error handling
    // - Loading states
    // - Form validation
    // - Authentication status

    // Handle input field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    // Handle form submission
    // TODO: Backend Integration Required:
    // 1. Create POST request to /api/auth/login
    // 2. Add error handling
    // 3. Implement JWT storage
    // 4. Add loading states during API call
    // 5. Redirect on successful login
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login attempted with:', formData);
    };

    // Handle forgot password functionality
    // TODO: Backend Integration Required:
    // 1. Create forgot password endpoint
    // 2. Implement email verification
    // 3. Add password reset flow
    // 4. Create reset token handling
    const handleForgotPassword = () => {
        console.log('Forgot password clicked');
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <img src={logo} alt="Fantastiqo Logo" className="logo" />
                {/* TODO: Add form validation messages */}
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        {/* TODO: Add input validation and error display */}
                        <input
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="Username"
                            required
                        />
                    </div>
                    <div className="form-group">
                        {/* TODO: Add password requirements and validation */}
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Password"
                            required
                        />
                    </div>
                    {/* TODO: Add loading state to button */}
                    <button type="submit" className="login-button">
                        Login
                    </button>
                </form>
                <div className="forgot-password">
                    <span onClick={handleForgotPassword}>
                        Forgot Password?
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Login;
