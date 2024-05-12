import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { Header } from '../Header';
import { RootState } from '../../store/store';
import {
  registerUser,
  updateEmail,
  updatePassword,
} from '../../store/userSlice';
import { validateEmail } from '../../utils/utils';
import './SignUpForm.css';

export const SignUpForm: React.FC = () => {
  const [error, setError] = useState<string>('');
  const email = useSelector((state: RootState) => state.user.email);
  const password = useSelector((state: RootState) => state.user.password);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleEmailRegistration = async (e: React.FormEvent) => {
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
      const response = await axios.post('http://localhost:4000/users/register', { email, password });
      console.log('User registered successfully:', response.data);

      dispatch(registerUser({ email, password }));
      navigate('/login');
    } catch (error) {
      console.error('Error registering user:', error);
      setError('Error registering user. Please try again later.');
    }
  };

  return (
    <>
      <Header showButtons={false} />
      <div className="SignUp">
        <form className="form" onSubmit={handleEmailRegistration}>
          <h1>Sign Up</h1>
          <label className="label">
            Email:
            <input
              className="input"
              type="email"
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
          {error && <div className="error" style={{color: 'red', fontSize:'12px'}}>{error}</div>}
          <button type="submit" className="button">
            Sign Up With Email
          </button>
          <Link to="/login" className="link-login">Already have an account? Log in</Link>
        </form>
      </div>
    </>
  );
};
