import React from 'react'
import classnames from "classnames/bind";
import styles from './Login.module.scss'

const cx =  classnames.bind(styles)

const Login = () => {
  return (
    <div className={cx('login')}>
      login
    </div>
  )
}

export default Login