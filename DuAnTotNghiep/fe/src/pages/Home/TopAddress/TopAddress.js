import classNames from "classnames/bind";
import styles from './TopAddress.module.scss'
import { Link } from "react-router-dom";
import Image from "~/Component/Images";
import images from "~/assets/images";
import { useEffect, useState } from "react";
import axiosClient from "~/scrips/healper/axiosClient";

const cx = classNames.bind(styles)
function TopAddress() {
    const [listAddress, setListAddress] = useState([])

     useEffect(() => {
    axiosClient.get(`http://localhost:8080/address/findTop4`)
      .then((response) => {
        const data = response;
        setListAddress(data);
        console.log(data)
      })
      .catch(() => {
        console.log('không tìm thấy vehicle')
      });
  }, []);

    return (
        <div>
            <div className={cx('address-container')}>
                <h2 className={cx('address-container-title')}>Địa Điểm Nổi Bật</h2>
            </div>
            
            <div className={cx('address-container')}>
                <div className={cx('address-container-city')}>
                    <div className={cx('container-city-content')}>

                        {listAddress.map((address,index) =>{
                            return (
                                <div className={cx('content-item-1')}>
                            <Link className={cx('item-1-Link')}>
                                <div className={cx('item-1-img')}>

                                    <Image className={cx('img-hcm')} src={`../../../images/${address.image}`}></Image>
                                </div>
                                <p className={cx('HCM-title')}>{address.addressName}
                                    <span className={cx('HCM-sl')}>{address.slXe} xe</span></p>

                            </Link>
                        </div>
                            )
                        })}

                        
                    </div>
                </div>
            </div>

        </div>

    );
}

export default TopAddress;