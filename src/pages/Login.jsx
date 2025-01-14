import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import j7 from '../assets/jpg/6.jpg';

const Login = ({ setIsAuthenticated }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Example login logic
        if (email === 'test@example.com' && password === 'password') {
            setIsAuthenticated(true); // Mark user as authenticated
            navigate('/'); // Redirect after successful login
        } else {
            alert('Invalid credentials!');
        }
    };

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', padding: '2rem' }}>
            {/* Image Section */}
            <div style={{ flex: 1, textAlign: 'center' }}>
                <img
                    src={j7}
                    alt="Login Illustration"
                    style={{ maxWidth: '100%', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}
                />
            </div>

            {/* Form Section */}
            <div
                style={{
                    flex: 0.5,
                    padding: '2rem',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                    backgroundColor: '#fff',
                    marginLeft: '2rem',
                }}
            >
                <h2 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '1rem' }}>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{ width: '100%', padding: '0.5rem' }}
                        />
                    </div>
                    <div style={{ marginBottom: '1rem' }}>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{ width: '100%', padding: '0.5rem' }}
                        />
                    </div>
                    <button type="submit" style={{ width: '100%', padding: '0.5rem', backgroundColor: '#6200ea', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

Login.propTypes = {
    setIsAuthenticated: PropTypes.func.isRequired,
};

export default Login;