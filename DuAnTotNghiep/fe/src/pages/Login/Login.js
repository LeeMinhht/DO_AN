import React, { useState } from 'react';
import axios from 'axios';
import axiosClient from '~/scrips/healper/axiosClient';

const LoginComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [data, setData] = useState({})

  const customer = {
    username: username,
    password: password
  }

  const handleLogin = () => {
    axiosClient.post(`http://localhost:8080/api/v1/public/user-login`, customer)
      .then((response) => {
        const data = response;
        setData(data)
        console.log(data)
        localStorage.setItem('user', JSON.stringify(response.data.user));
        console.log('Đăng nhập thành công');
        window.location.href = `/`;
      })
      .catch(() => {
        console.log('không tìm thấy Vehicle')
      });
  }
 

  return (
    <div>
      <h2>Đăng nhập</h2>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleLogin}>Đăng nhập</button>
    </div>
  );
};

export default LoginComponent;
