import axios from 'axios';
import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './HireVehicle.module.scss'
import 'bootstrap/dist/css/bootstrap.css';

const cx = classNames.bind(styles)
function Hirevehicle() {

    const [listHire, setListHire] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:8080/hireVehicle/getAll`)
            .then(response => {
                setListHire(response.data);
            })
            .catch(error => {
                console.log("ERROR", error)
            })
    }, []);

    function formatCurrency(amount) {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
    }
    function formatDate(dateString) {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(dateString).toLocaleDateString('vi-VN', options);
    }
    return (
        <div>
            
            <table className={cx("table")}>
                <thead className={cx("thead")}>
                    <tr className={cx('tr')}>
                        <th className={cx('th')}>Tài Khoản</th>
                        <th className={cx('th')}>Tên Xe</th>
                        <th className={cx('th')}>Số Tiền</th>
                        <th className={cx('th')}>Ngày Thuê</th>
                        <th className={cx('th')}>Ngày Trả</th>
                      
                        <th className={cx('th')}>Xác Nhận</th>
                        <th className={cx('th')}>Trả Xe</th>


                    </tr>
                </thead>
                <tbody>
                    {listHire.map(item => (
                        <tr>
                            <td>{item.customer.cusUsername}</td>
                            <td>{item.vehicle.vehicleName}</td>
                            <td>{formatCurrency(item.totalMoney)}</td>
                            <td>{formatDate(item.hireDate)}</td>
                            <td>{formatDate(item.returnDate)}</td>
                            <td>{item.statusAccept ? 'Chưa Xác nhận' : ' Xác nhận'}</td>
                            <td>{item.status ? 'Trả xe' : 'Chưa trả xe'}</td>
                        </tr>
                    ))}


                </tbody>
            </table>
        </div>
    )
}

export default Hirevehicle
