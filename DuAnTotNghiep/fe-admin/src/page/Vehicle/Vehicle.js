import React, { useEffect, useState } from 'react'
import classnames from "classnames/bind";
import styles from './Vehicle.module.scss'
import axios from 'axios';

const cx = classnames.bind(styles)

function Vehicle() {
  const [listVehicle, setListVehicle] = useState([])
  useEffect(() => {
    axios.get(`http://localhost:8080/vehicle/findAll`)
      .then(response => {
        setListVehicle(response.data);
      })
      .catch(error => {
        console.log("ERROR", error)
      })
  }, []);
  function formatCurrency(amount) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
  }
  return (
    <div>
      <div className={cx('listStore')}>
        <div className={cx('box-table')}>
          <table className={cx('table')}>
            <thead className={cx('thead')}>
              <tr className={cx('tr')}>
                <th className={cx('th')}>Tên Xe</th>
                <th className={cx('th')}>Giá thuê</th>
                <th className={cx('th')}>Trạng thái</th>
                <th className={cx('th')}>Kiểu Xe</th>

                <th className={cx('th')}>Địa Chỉ</th>
                <th className={cx('th')}>Cửa Hàng</th>
                <th className={cx('th')}>Hãng xe</th>
                <th className={cx('th')}>Thông tin</th>
                {/* <th>Action</th> */}
              </tr>
            </thead>
            <tbody className={cx('tbody')}>
              {listVehicle.map(item => (
                <tr>
                  <th>{item.vehicleName}</th>
                  <th>{formatCurrency(item.rentByDay)}</th>
                  <td>{item.statusHiring ? 'Đang thuê' : 'Chưa Thuê'}</td>
                  <td>{item.vehicleType ? '4 chỗ' : '7 chỗ'}</td>
                  <td>{item.address.addressName}</td>
                  <td>{item.store.nameStore}</td>
                  <td>{item.brand.nameBrand}</td>
                  <td ><textarea className={cx('textarea')}  name="" id="" cols="15" rows="2">{item.description}</textarea></td>

                  {/* <td>{item.reports.status}</td> */}

                  {/* <td>
                                    <button type="button" class="btn btn-outline-dark">X</button>

                                    <button type="button" class="btn btn-outline-primary">Edit</button>

                                </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Vehicle

