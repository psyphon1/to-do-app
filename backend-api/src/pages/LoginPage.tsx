import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setToken } from '../store/authSlice';
import { login } from '../services/api';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const res = await login(email, password);
      dispatch(setToken(res.data.token));
      // redirect to home
    } catch {
      alert('Login failed');
    }
  };

  return (
    <div>
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}