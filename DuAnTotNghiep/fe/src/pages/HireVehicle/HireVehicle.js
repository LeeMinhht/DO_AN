import { Link, useParams } from "react-router-dom";
import classNames from "classnames/bind";
import styles from './HireVehicle.module.scss'
import { useState, useEffect } from "react";
import axiosClient from "~/scrips/healper/axiosClient";


const cx = classNames.bind(styles)
function HireVehicle() {

  const {vehicleId} = useParams();

  const [vhireDate, setHireDate] = useState('')
  const [vreturnDate, setReturnDate] = useState('')
  const [vstatus, setStatus] = useState(false)
  const [vcustomer, setCustomer] = useState({})
  const [vvehicle, setVehicle] = useState({})

  const [searchParams, setSearchParams] = useState({})

  //tìm kiếm vehicle theo vehicleId
  useEffect(() => {
    axiosClient.get(`http://localhost:8080/vehicle/getOne/${vehicleId}`)
      .then((response) => {
        const data = response;
        setVehicle(data);
      })
      .catch(() => {
        console.log('không tìm thấy vehicle')
      });
  }, [searchParams]);

  console.log(vehicleId)
  // tìm kiếm user
  const username = 'leminh';
  useEffect(() => {
    axiosClient.get(`http://localhost:8080/customers/findById/${username}`)
      .then((response) => {
        const data = response;
        setCustomer(data);
      })
      .catch(() => {
        console.log('không tìm thấy user')
      });
  }, [searchParams]);




  //lưu dữ liệu vào bảng thuê xe
  const handleHireVehicle = () => {
    const hireVehicleData = {
      status: vstatus,
      hireDate: new Date(new Date().getTime()),
      returnDate: '',
      customer: vcustomer,
      vehicle: vvehicle
    }


    axiosClient.post(`http://localhost:8080/hireVehicle/add`, hireVehicleData)
      .then((response) => {
        const data = response;
        console.log(data)
        alert('Bạn đã thuê thành công')
      })
      .catch((error) => {
        console.log('error save data')
        console.log(error)
      });
  }


  return (
    <div className={cx('wrapper')}>
      <input></input>
      <button className={cx("clear")} onClick={handleHireVehicle}>Thuê</button>
    </div>
  );
}

export default HireVehicle;