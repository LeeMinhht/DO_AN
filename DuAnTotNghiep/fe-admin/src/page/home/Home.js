import React from 'react'
import classnames from "classnames/bind";
import styles from './Home.module.scss'
import ListUser from '../Users/ListUser/ListUser';
import ChartBox from '../../Component/chartBox/Customer/ChartBoxCus';
import ChartBoxMoney from '../../Component/chartBox/Money/ChartBoxMoney';
import ChartBoxVehicle from '../../Component/chartBox/HireVehicle/ChartBoxHireVehicle';

const cx = classnames.bind(styles)

const Home = () => {
  return (
    <div className={cx('home')}>

      <div className={cx('box1')}>
        <ListUser/>
      </div>


      <div className={cx('box2')}>
        Doanh thu theo tháng
        <ChartBoxMoney/>
      </div>


      <div className={cx('box3')}>

       Số khách hàng thành cửa hàng
       <ChartBox/>

      </div>

      <div className={cx('box4')}>
       Thống kê số lượng xe
     <ChartBoxVehicle/>
      </div>

      <div className={cx('box5')}>
        Biểu đồ lượng khách hàng

      </div>

      <div className={cx('box6')}>
        tinh tinh

      </div>
    </div>
  )
}

export default Home
