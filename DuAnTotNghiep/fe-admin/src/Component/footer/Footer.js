import React from 'react'
import classnames from "classnames/bind";
import styles from './Footer.module.scss'

const cx = classnames.bind(styles);

const Footer = () => {
  return (
    <div className={cx('footer')}>
      <span>Vehicle Admin</span>
      <span>@Hehicle@gmail.com</span>
      <span>0123123123</span>
      <span>Da Nang Viet nam</span>

    </div>
  )
}

export default Footer
