import React, { useState } from 'react';
import classnames from "classnames/bind";
import styles from './Login.module.scss';
import axios from 'axios';
import Button from '../../Component/Button';

const cx = classnames.bind(styles);

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const customer = {
    username: username,
    password: password
  };

  const handleLogin = () => {
    if (!username || !password) {
      setError("Vui lòng nhập đầy đủ thông tin đăng nhập.");
      return;
    }

    axios.post(`http://localhost:8080/api/v1/public/admin-login`, customer)
      .then((response) => {
        // Xử lý đăng nhập thành công
        localStorage.setItem('user', JSON.stringify(response.data.user));
        console.log('Đăng nhập thành công');
        window.location.href = `/admin`;
      })
      .catch(() => {
        // Xử lý đăng nhập thất bại
        setError("Tên đăng nhập hoặc mật khẩu không chính xác.");
      });
  };

  return (
    <div className={cx('wrapper')}>
      <div classNames={cx('container-change')}>
        <div className={cx("module-register")}>

          <div className={cx("register-container")}>
            <div className={cx("m-container")}>
              <div className={cx("main-title")}>
                <h4 className={cx("main-title-inf")}>
                  <img className={cx("main-img-inf")} alt='' src='../image/icons8-admin-80.png' />
                  Đăng nhập</h4>
              </div>
            </div>
            <div className={cx("group-form-detail")}>
              <h6 className={cx("license")}>Username: </h6>
              <div className={cx("wrap-input")}>
                <input placeholder='Nhập Username của bạn' className={cx("input")} type="text" value={username} onChange={(e) => setUsername(e.target.value)}></input>
              </div>
            </div>
            <div className={cx("group-form-detail")}>
              <h6 className={cx("license")}>Password :</h6>
              <div className={cx("wrap-input")}>
                <input className={cx("input")} placeholder='Nhập Password của bạn' type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
              </div>
            </div>
            <div className={cx("error")}>
              {error && <div className={cx("error-message")}>{error}</div>}
            </div>
            <div className={cx("btn-register-group")}>
              <Button onClick={handleLogin} className={cx("btn-register")} primary green large>Đăng nhập</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
