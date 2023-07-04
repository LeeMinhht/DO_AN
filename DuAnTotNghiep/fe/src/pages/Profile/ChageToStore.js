import classNames from 'classnames/bind';
import styles from './ChangeToStore.module.scss'
import { useEffect, useState } from 'react'

import { useParams } from "react-router-dom";
import axiosClient from "~/scrips/healper/axiosClient";
import Button from '~/Component/Button';

const cx = classNames.bind(styles)
function ChangeToStore() {

  const [identityCard, setidentityCard] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  const [nameStore, setNameStore] = useState('')
  const [image, setImage] = useState('')
  const [customer, setCustomer] = useState({})

  const date = new Date();


  const { cusUsername } = useParams();

  //tìm kiếm customer bằng cusUsername
  useEffect(() => {
    axiosClient.get(`http://localhost:8080/customers/findById/${cusUsername}`)
      .then((response) => {
        const data = response;
        setCustomer(data);
      })
      .catch(() => {
        console.log('không tìm thấy user')
      });
  }, []);

  const handleChangeIdentityCard = (e) => {
    const searchValue = e.target.value;

    if (!searchValue.startsWith(' ')) {
      setidentityCard(searchValue)
    }
  }

  const handleChangeNameStore = (e) => {
    const searchValue = e.target.value;

    if (!searchValue.startsWith(' ')) {
      setNameStore(searchValue)
    }
  }

  const handleChangeAddress = (e) => {
    const searchValue = e.target.value;

    if (!searchValue.startsWith(' ')) {
      setAddress(searchValue)
    }
  }

  const handleChangePhone = (e) => {
    const searchValue = e.target.value;

    if (!searchValue.startsWith(' ')) {
      setPhone(searchValue)
    }
  }

  const handleChangeImage = (e) => {
    const file = e.target.files[0];
    const imageName = file.name;

    if (!imageName.startsWith(' ')) {
      setImage(imageName)
    }
  }

   //lưu dữ liệu vào bảng thuê xe
   const submitChang = () => {
    const storeData = {
      nameStore: nameStore,
      address: address,
      image: image,
      cartStore: 0,
      phone: phone,
      identityCard: identityCard,
      createDate: date,
      customer: customer
    }
    console.log(storeData)

    axiosClient.post(`http://localhost:8080/store/add`, storeData)
      .then((response) => {
        const data = response;
        console.log(data)
        alert('chuyển đổi thành công')
      })
      .catch((error) => {
        console.log('error')
        console.log(error)
      });
  }


  return (
    <div classNames={cx('container-change')}>
      <div className={cx("module-register")}>
        <div className={cx("m-container")}>
          <div className={cx("main-title")}>
            <h4 className={cx("main-title-inf")}>Đăng kí Cho thuê xe</h4>
          </div>
        </div>
        <div className={cx("register-container")}>
          <div className={cx("content-register")}>

            <div className={cx("group-form-detail")}>
              <h6 className={cx("license")}>Số CCCD</h6>
              <p className={cx("pl")}>
                <span className={cx("note")}>Lưu ý: Số CCCD sẽ không thể thay đổi sau khi đăng kí.</span>
              </p>
              <div className={cx("col-left")}>
                <div className={cx("line-form")}>
                  <div className={cx("wrap-input")}>
                    <input type="text" className={cx("input")} value={identityCard} onChange={handleChangeIdentityCard}></input>
                  </div>
                </div>
              </div>
            </div>

            <div className={cx("group-form-detail")}>
              <h6 className={cx("license")}>Địa chỉ</h6>
              <div className={cx("wrap-input")}>
                <input type="text" className={cx("input")} value={address} onChange={handleChangeAddress}></input>
              </div>
            </div>

            <div className={cx("group-form-detail")}>
              <h6 className={cx("license")}>Số điện thoại</h6>
              <div className={cx("wrap-input")}>
                <input type="text" className={cx("input")} value={phone} onChange={handleChangePhone}></input>
              </div>
            </div>

            <div className={cx("group-form-detail")}>
              <h6 className={cx("license")}>Tên cửa hàng</h6>
              <div className={cx("wrap-input")}>
                <input type="text" className={cx("input")} value={nameStore} onChange={handleChangeNameStore}></input>
              </div>
            </div>

            <div className={cx("group-form-detail")}>
              <h6 className={cx("license")}>Hình ảnh cửa hàng</h6>
              <div className={cx("wrap-input")}>
                <input type="file" className={cx("input")} value={image} onChange={handleChangeImage}></input>
                
              </div>
             
            </div >

          </div>
          <div className={cx("btn-register-group")}>
            <Button onClick={submitChang} className={cx("btn-register")} primary green large>Đăng Kí</Button>
          </div>
        </div>

      </div>
  
    </div>
  );
}

export default ChangeToStore;