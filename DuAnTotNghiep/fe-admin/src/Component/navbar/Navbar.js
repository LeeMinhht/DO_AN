import React, { useEffect, useState } from 'react'
import classnames from "classnames/bind";
import styles from './Navbar.module.scss'
import { Link } from 'react-router-dom';


const cx = classnames.bind(styles);

const Navbar = () => {


  const handleLogout = () => {
    localStorage.removeItem('user'); // Thay 'user' bằng khóa bạn đã sử dụng


    window.location.href = `/login`

  };

  return (
    <div className={cx('navbar')}>
      <Link className={cx('link')} to={`/admin`}>
      <div className={cx('logo')}>
        <h3 className={cx('title-logo')}> <img className={cx("main-img-inf")} alt='' src='../image/mikaa (1).png' />Take you everywhere</h3>
      </div>
      </Link>
     
      <div className={cx('btn')}>
        <button className={cx('btn btn-outline-dark')} onClick={handleLogout}>Đăng Xuất</button>
      </div>
    </div>
  )
}

export default Navbar
