import React from 'react'
import classnames from "classnames/bind";
import styles from './Navbar.module.scss'
import { FaSearch, FaUserAlt } from 'react-icons/fa';
import { AiFillSetting } from 'react-icons/ai';

const cx = classnames.bind(styles);

const Navbar = () => {
  return (
    <div className={cx('navbar')}>
      <div className={cx('logo')}>
        <img className={cx('image-logo')} src='./image/logo-full.ea382559.png' alt='logo' />
        <span>Admin mangager</span>
      </div>
      <div className={cx('icons')}>

        <FaSearch className={cx('icon')} />
        <FaUserAlt />
        <AiFillSetting> </AiFillSetting>
      </div>
    </div>
  )
}

export default Navbar
