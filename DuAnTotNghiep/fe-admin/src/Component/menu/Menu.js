import React from 'react'
import classnames from "classnames/bind";
import styles from './Menu.module.scss'
import { Link } from 'react-router-dom';


const cx = classnames.bind(styles);

const Menu = () => {
  return (
    <div className={cx('menu')}>
      <div className={cx('item')}>
        <span className={cx('title')}>User</span>
        <Link className={cx('titleItem')}>
          <img className={cx('imgIcon')}  src='./image/home.svg' alt=''/>
          <span className={cx('listItemTitle')}>Home</span>
        </Link> 
        <Link className={cx('titleItem')} to={`/user`}>
          <img className={cx('imgIcon')} src='./image/profile.svg' alt=''/>
          <span className={cx('listItemTitle')}>Profile</span>
          
        </Link> 
      
        <Link className={cx('titleItem')} to={`/store`}>
          <img className={cx('imgIcon')} src='./image/profile.svg' alt=''/>
          <span className={cx('listItemTitle')}>Store</span>
        </Link>
      
      
      </div>
      <div className={cx('item')}>
        <span className={cx('title')}>Vehicle</span>
        <Link className={cx('titleItem')} to={`/vehicle`}>
          <img className={cx('imgIcon')} src='./image/home.svg' alt=''/>
          <span className={cx('listItemTitle')}>Vehicle</span>
        </Link> 
        <Link className={cx('titleItem')}>
          <img className={cx('imgIcon')} src='./image/profile.svg' alt=''/>
          <span className={cx('listItemTitle')}>Brand Vehicle</span>
        </Link> 
        <Link className={cx('titleItem')}>
          <img className={cx('imgIcon')} src='./image/profile.svg' alt=''/>
          <span className={cx('listItemTitle')}>Transactions</span>
        </Link> 
        <Link className={cx('titleItem')}>
          <img className={cx('imgIcon')} src='./image/profile.svg' alt=''/>
          <span className={cx('listItemTitle')}>About</span>
        </Link> 
      
      
      </div>
    </div>
  )
}

export default Menu
