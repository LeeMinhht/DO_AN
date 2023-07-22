import classNames from "classnames/bind";
import styles from './Payment.module.scss'
import { useState } from "react";
import Button from "~/Component/Button";
import axiosClient from "~/scrips/healper/axiosClient";
import axios from "axios";
import { withRouter } from 'react-router';

const cx = classNames.bind(styles)

function Payment(props) {


    const [amount, setAmount] = useState(null)
    const [url, setUrl] = useState(null)

    const handleAmount = (e) => {
        const inputValue = e.target.value;
        if (!inputValue.startsWith(' ')) {
            setAmount(inputValue)
        }
        
    }

    const submitPayment = () => {

        const paymentData = {
            amount: amount,
            content:'Nap tien',
            returnUrl:'http://localhost:3000',
            notifyUrl:'http://localhost:3000'
        }

        console.log(paymentData)



        axiosClient.post(`http://localhost:8080/payment/get-urlpayment`, paymentData)
            .then((response) => {
                const data = response;
                setUrl(data.url)
                console.log(data)
                
            })
            .catch(() => {
                console.log('error')
            });

    }

    return ( 
        <div className={cx("wrapper")}>
            <div className={cx("module-register")}>
                <div className={cx("m-container")}>
                    <div className={cx("main-title")}>
                        <h4 className={cx("main-title-inf")}>Nạp tiền</h4>
                    </div>
                </div>
                <div className={cx("register-container")}>
                    <div className={cx("content-register")}>

                        <div className={cx("group-form-detail")}>
                            <h6 className={cx("license")}>Nhập số tiền</h6>
                           
                            <div className={cx("col-left")}>
                                <div className={cx("line-form")}>
                                    <div className={cx("wrap-input")}>
                                        <input type="text" className={cx("input")} value={amount} onChange={handleAmount}></input>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className={cx("group-form-detail")}>
                            <h6 className={cx("license")}>Mô tả</h6>
                            <textarea className={cx('description')} value={description} onChange={handleDescription}></textarea>
                        </div>

                        <div className={cx("group-form-detail")}>
                            <h6 className={cx("license")}>Tên xe</h6>
                            <div className={cx("wrap-input")}>
                                <input type="text" className={cx("input")} value={vehicleName} onChange={handleVehicleName}></input>
                            </div>
                        </div>

                        <div className={cx("group-form-detail")}>
                            <h6 className={cx("license")}>Giá thuê theo ngày</h6>
                            <div className={cx("wrap-input")}>
                                <input type="text" className={cx("input")} value={rentByDay} onChange={handleRenByDay}></input>
                            </div>
                        </div> */}

                        {/* <div className={cx("group-form-detail")}>
                            <h6 className={cx("license")}>Địa chỉ</h6>
                            <div className={cx("wrap-input")}>
                            <select className={cx("input")} onChange={handleAddress}>
                                    {addresss.map((address, index) => {
                                        return (
                                            <option key={index} value={address.addressId}>{address.addressName}</option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>

                        <div className={cx("group-form-detail")}>
                            <h6 className={cx("license")}>Hãng xe</h6>
                            <div className={cx("wrap-input")}>
                                <select className={cx("input")} onChange={handleBrand}>
                                    {brands.map((br, index) => {
                                        return (
                                            <option key={index} value={br.brandId}>{br.nameBrand}</option>
                                        )
                                    })}
                                </select>
                            </div>
                        </div>

                        <div className={cx("group-form-detail")}>
                            <h6 className={cx("license")}>Hình ảnh</h6>
                            <div className={cx("wrap-input")}>
                                <input type="file" className={cx("input")} onChange={onImageChange}></input>
                            </div>
                            <div className={cx("wrap-input")}>
                                <input type="file" className={cx("input")} onChange={onImageChange2}></input>
                            </div>
                            <div className={cx("wrap-input")}>
                                <input type="file" className={cx("input")} onChange={onImageChange3}></input>
                            </div>
                        </div > */}


                    </div>
                    <div className={cx("btn-register-group")}>
                        <Button onClick={submitPayment} to={url} className={cx("btn-register")}
                            primary green large>Nạp tiền</Button>
                    </div>
                </div>

            </div>
            
        </div>
     );
}

export default Payment;