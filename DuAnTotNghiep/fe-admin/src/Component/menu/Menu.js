import React from 'react'
import classnames from "classnames/bind";
import styles from './Menu.module.scss'
import { Link } from 'react-router-dom';
import { FaCarAlt, FaHandPointUp, FaHome, FaStore, FaUserAlt } from "react-icons/fa";

const cx = classnames.bind(styles);

const Menu = () => {
  return (
    <div className={cx('menu')}>
      <div className={cx('item')}>
        <span className={cx('title')}>
          <FaUserAlt/> Người Dùng</span>
        <Link className={cx('titleItem')} to={`/admin`}>
          {/* <img className={cx('imgIcon')}  src='./image/home.svg' alt=''/> */}
          <FaHome></FaHome>
          <span className={cx('listItemTitle')}>Trang Chủ</span>
        </Link> 
        <Link className={cx('titleItem')} to={`/admin/user`}>
          {/* <img className={cx('imgIcon')} src='./image/profile.svg' alt=''/> */}
          <FaUserAlt/>
          <span className={cx('listItemTitle')}>Khách Hàng</span>
          
        </Link> 
      
        <Link className={cx('titleItem')} to={`/admin/store`}>
          <FaStore/>
          <span className={cx('listItemTitle')}>Cửa Hàng</span>
        </Link>
      
      
      </div>
      <div className={cx('item')}>
        <span className={cx('title')}>
          <FaCarAlt/>
          Thống Kê Xe</span>
        <Link className={cx('titleItem')} to={`/admin/vehicle`}>
          <FaCarAlt/>
          <span className={cx('listItemTitle')}>Xe </span>
        </Link> 
        <Link className={cx('titleItem')} to={'/admin/hire'}>
          <FaHandPointUp/>
          <span className={cx('listItemTitle')}>Thuê Xe</span>
        </Link> 
        <Link className={cx('titleItem')}>
          <img className={cx('imgIcon')} src='./image/profile.svg' alt=''/>
          <span className={cx('listItemTitle')}></span>
        </Link> 
        <Link className={cx('titleItem')}>
          <img className={cx('imgIcon')} src='./image/profile.svg' alt=''/>
          <span className={cx('listItemTitle')}></span>
        </Link> 
      
      
      </div>
    </div>
  )
}

export default Menu
