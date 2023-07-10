import classNames from "classnames/bind";
import styles from './Profile.module.scss'
import { useState, useEffect } from 'react'
import axiosClient from "~/scrips/healper/axiosClient";
import Image from "~/Component/Images";
import images from "~/assets/images";
import Button from "~/Component/Button";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faUsers } from "@fortawesome/free-solid-svg-icons";
import ProductItem from "~/Component/ProductItem/ProductItem";

const cx = classNames.bind(styles)

function Profile() {
  const [customer, setCustomer] = useState({})
  const [store, setStore] = useState({})
  const [hireVehicles, setHireVehicles] = useState([])
  const [vehicles, setVehicles] = useState([])
  const [addressName, setAddressName] = useState(null)

  const username = 'tranTai';
  console.log(username);
  useEffect(() => {
    axiosClient.get(`http://localhost:8080/customers/findById/${username}`)
      .then((response) => {
        const data = response;
        setCustomer(data);
        setAddressName(data.address.addressName)
        console.log(data.address.addressName)
        console.log(data);
      })
      .catch(() => {
        console.log('không tìm thấy user')
      });
  }, [username]);

  //tìm kiếm store theo username
  useEffect(() => {
    axiosClient.get(`http://localhost:8080/store/findByCustomer/${username}`)
      .then((response) => {
        const data = response;
        console.log(data);

        setStore(data);
      })
      .catch(() => {
        console.log('không tìm thấy store')
      });
  }, []);

  //Tìm kiếm các lượt thuê xe theo username
  useEffect(() => {
    axiosClient.get(`http://localhost:8080/hireVehicle/findHireByCusUsername/${username}`)
      .then((response) => {
        const data = response;
        setHireVehicles(data);
      })
      .catch(() => {
        console.log('không tìm thấy hireVehicle')
      });
  }, [username]);

  //Tìm kiếm các xe đã thuê theo username
  useEffect(() => {
    axiosClient.get(`http://localhost:8080/vehicle/findVehicleByCustomerWasHire/${username}`)
      .then((response) => {
        const data = response;
        setVehicles(data);
      })
      .catch(() => {
        console.log('không tìm thấy Vehicle')
      });
  }, [username]);



  return (
    <div className={cx('wrapper')}>
      <div className={cx('profile-header')}>
        <div className={cx("profile-banner")}>
          <div className={cx('profile-user')}>
            <div className={cx('profile-user-avatar')}>
              <div className={cx('avatar')}>
                <Image className={cx('avatar-img')} src={customer.image ? (`../images/${customer.image}`) : (images.image2)} />
              </div>
            </div>
            <div className={cx('username')}>
              <span>{customer.fullname}</span>
            </div>
          </div>
          <div className={cx('btn-change-background')}>
            <FontAwesomeIcon fontSize={20} icon={faCamera} />
            Update cover photo
          </div>


        </div>

      </div>
      <div className={cx('profile-container')}>
        <section className={cx('body-row')}>
          <section className={cx('body-col')}>
            <div className={cx('content-left')}>
              <div className={cx('box-wrapper')}>
                <h4 className={cx('title')}>Giới thiệu</h4>
                <div className={cx('box-wrapper-item')}>
                  <FontAwesomeIcon className={cx('box-wrapper-icon')} icon={faUsers}></FontAwesomeIcon>
                  <span className={cx('title-about')}>khách hàng tiềm năng của <span className={cx('trademark')}>Mikaa</span></span>
                </div>
              </div>
              <div className={cx('box-wrapper')}>
              <div className={cx('content')}>
              <h4 className={cx('title')}>Thông tin</h4>
              </div>
                <div className={cx('info-box')}>
                  
                  <div className={cx('info-box-item')}>
                    <p>Tên đăng nhập</p>
                    <p className={cx('main')}>{customer.cusUsername}</p>
                  </div>
                  <div className={cx('info-box-item')}>
                    <p>Họ tên</p>
                    <p className={cx('main')}>{customer.fullname}</p>
                  </div>
                  <div className={cx('info-box-item')}>
                    <p>Email</p>
                    <p className={cx('main')}>{customer.email}</p>
                  </div>
                  <div className={cx('info-box-item')}>
                    <p>Phone</p>
                    <p className={cx('main')}>{customer.phone}</p>
                  </div>
                  <div className={cx('info-box-item')}>
                    <p>Địa chỉ</p>
                    <p className={cx('main')}>{addressName}</p>
                  </div>
                  <div className={cx('info-box-item')}>
                    <p>Tài khoản</p>
                    <p className={cx('main')}>{customer.cart}đ</p>
                  </div>

                </div>
                <div className={cx('btn-group')}>
                  <Button primary green small>Chỉnh sửa</Button>
                  <Button primary green small>Đổi mật khẩu</Button>
                  <Button primary green small>Nạp tiền</Button>
                  {store.length === 0 ? (<Button to={`/changeToStore/${customer.cusUsername}`} primary green small>chuyển đổi cửa hàng</Button>)
                    : (<Button to={`/store/${customer.cusUsername}`} primary green small onClick={() =>{
                      
                        window.scrollTo(0, 0);
                      
                    
                    }}>Cửa hàng của bạn</Button>)}
                </div>
              </div>

            </div>
          </section>
          <section className={cx('body-col-2')}>
            <div className={cx('box-wrapper')}>
              <h4 className={cx('title')}>Hoạt động gần đây</h4>
              <div className={cx('box-wrapper-item')}>
                {hireVehicles.map((hire, index) => {
                  return (
                    <Link className={cx('hire-item-link')}>
                      <h4 className={cx('title-about')}>Bạn Đã thuê xe vào {hire.hireDate} </h4>
                    </Link>
                  )
                })}
              </div>
            </div>
          </section>
        </section>

        <div className={cx('box-wrapper')}>
          <div className={cx('title-vehicle')}>
            <h4 className={cx('title-vehicle-wasHire')}>Các xe bạn đã trải nghiệm</h4>
          </div>
          <div className={cx('hireVehicle-history')}>
            {vehicles.map((vehicle, index) => {
              return (
                <ProductItem vehicle={vehicle} />
              )
            })}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Profile;