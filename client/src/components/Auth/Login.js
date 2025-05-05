// client/src/components/Auth/Login.js
import React, { useState, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import Loader from '../UI/Loader';
import './Auth.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [formError, setFormError] = useState('');

  const { login, isAuthenticated, loading, error } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect if already authenticated
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  useEffect(() => {
    // Set form error from context
    if (error) {
      setFormError(error);
    }
  }, [error]);

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormError('');
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      setFormError('Please enter all fields');
      return;
    }

    try {
      await login(formData);
      navigate('/');
    } catch (err) {
      // Error is handled in context
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="auth-container">
      <h1>Login</h1>
      <form onSubmit={onSubmit}>
        {formError && <div className="alert-error">{formError}</div>}
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={onChange}
            required
            minLength="6"
          />
        </div>
        
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
      
      <p className="auth-redirect">
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Login;