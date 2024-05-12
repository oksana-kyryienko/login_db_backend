import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Header } from '../Header';
import { RootState } from '../../store/store';
import { loginUser, updateEmail, updatePassword } from '../../store/userSlice';
import { validateEmail } from '../../utils/utils';
import './LoginForm.css';
import axios from 'axios';

export const LoginForm: React.FC = () => {
  const [error, setError] = useState<string>('');
  const email = useSelector((state: RootState) => state.user.email);
  const password = useSelector((state: RootState) => state.user.password);
  const loggedIn = useSelector((state: RootState) => state.user.loggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (loggedIn) {
      navigate('/content');
    }
  }, [loggedIn, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Email and password are required.');
      return;
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:4000/users/login', {
        email,
        password,
      });
      console.log('User logged in successfully:', response.data);
      dispatch(loginUser({ username: email, password }));
    } catch (error) {
      console.error('Error logging in:', error);
      setError('This user has not been registered');
    }
  };

  return (
    <>
      <Header showButtons={false} />
      <div className="Login">
        <div className="img-container">
          <img className="image" src="/login.png" alt="city" />
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <h1>Login</h1>
          <label className="label">
            Email:
            <input
              className="input"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                dispatch(updateEmail(e.target.value));
                setError('');
              }}
            />
          </label>

          <label className="label">
            Password:
            <input
              className="input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                dispatch(updatePassword(e.target.value));
                setError('');
              }}
            />
          </label>

          <p className="text-brown">Forgot password?</p>

          {error && <div className="error">{error}</div>}

          <button type="submit" className="button">
            Sign In
          </button>

          <div className="new-account">
            <p className="text-account">Don't have an account?</p>
            <Link to="/signup" className="sign-up">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};
