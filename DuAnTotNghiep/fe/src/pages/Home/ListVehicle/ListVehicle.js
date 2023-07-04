import classNames from "classnames/bind";
import styles from './ListVehicle.module.scss'
import { useEffect, useState } from "react";
import axiosClient from "~/scrips/healper/axiosClient";

import ProductItem from "~/Component/ProductItem/ProductItem";

const cx = classNames.bind(styles)

function ListVehicle({vehicles}) {
  // const [vehicles, setVehicles] = useState([])
  const [searchValue, setSerachValue] = useState('')

  // useEffect(() => {
  //   axiosClient.get(`http://localhost:8080/vehicle/findTop8`)
  //     .then((response) => {
  //       const data = response;
  //       setVehicles(data);
  //       console.log(data)
  //     })
  //     .catch(() => {
  //       console.log('không tìm thấy vehicle')
  //     });
  // }, [searchValue]);

  return (
    <div className={cx('vehicle-container-col20')}>
      {vehicles.map((vehicle, index) => {
        return (
          <ProductItem key={index} vehicle={vehicle}/>
        )
      })}
    </div>
  );
}

export default ListVehicle;