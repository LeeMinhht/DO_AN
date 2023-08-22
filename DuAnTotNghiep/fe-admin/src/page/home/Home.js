import React from 'react'
import classnames from "classnames/bind";
import styles from './Home.module.scss'
import ListUser from '../Users/ListUser/ListUser';
import ChartBoxMoney from '../../Component/chartBox/Money/ChartBoxMoney';
import ChartBoxVehicle from '../../Component/chartBox/HireVehicle/ChartBoxHireVehicle';
import TopVehicleHire from '../hireVehicle/TopVehicleHire';

const cx = classnames.bind(styles)

const Home = () => {

  

  return (
    <div className={cx('home')}>

      <div className={cx('box1')}>
        <h4>   Danh sách khách hàng</h4>
        <ListUser/>
      </div>


      <div className={cx('box2')}>
      <h5> Doanh thu theo tháng</h5>

        <ChartBoxMoney/>
      </div>


      <div className={cx('box3')}>

       <h4>Top Xe được thuê nhiều nhất</h4>
        <TopVehicleHire/>

      </div>

      <div className={cx('box4')}>
        <h4> Thống kê số lượng xe</h4>
      
     <ChartBoxVehicle/>
      </div>

      

     
    </div>
  )
}

export default Home
