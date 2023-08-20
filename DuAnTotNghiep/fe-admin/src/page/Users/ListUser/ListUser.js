import React, { useEffect, useState } from 'react'
import classnames from "classnames/bind";
import styles from './ListUser.module.scss'
// import axiosClient from 'axios';
import axios from 'axios';

const cx = classnames.bind(styles)


function ListUser() {

    const [customer, setCustomer] = useState([])
    useEffect(() => {
        // Gọi API "getall" từ Java Controller
        axios.get(`http://localhost:8080/customers/getAll`)
            .then(response => {
                setCustomer(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:');
            });
    }, []);
    
    return (
        <div>
            <div className={cx('listUser')}>
                <div className={cx('Widget_title')}>

                    <h3>List Customer</h3>
                    {/* <input type="search" placeholder="Search..." className={cx('Widget_search')}></input> */}

                </div>
                <div className={cx('listdata')}>
                    {customer.map(item => (
                        // <li className={cx('user')} key={item.cusUsername}><span>{item.cusUsername}</span> <span>FullName: {item.fullname}</span></li>
                        <div className={cx('user')} key={item.cusUsername} >
                            <div className={cx('userdetail')}>
                                <img className={cx('img')} src='../image/3-8.png' alt='' />
                                <div className={cx('userText')} >
                                    <span className={cx('cusUsername')}>{item.cusUsername} </span>
                                    <span className={cx('email')}>{item.email}</span>
                                </div>
                            </div>


                            <div className={cx('fullname')}> {item.fullname}</div>

                        </div>
                    ))}
                </div>


            </div>
        </div>
    )
}

export default ListUser

