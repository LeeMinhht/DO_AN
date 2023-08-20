import classNames from "classnames/bind"
import styles from './SingleVehicle.module.scss'
import { Await, Link, useParams } from 'react-router-dom';

import { useState, useEffect } from "react";
import axiosClient from "~/scrips/healper/axiosClient";
import Image from "~/Component/Images";
import images from "~/assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faChartSimple, faCircleInfo, faLocationDot, faPhone, faStar } from "@fortawesome/free-solid-svg-icons";
import Button from "~/Component/Button";
import Comment from "./Comment/Comment";
import Notification from "~/Component/Notification/Notification";
import axios from "axios";

const cx = classNames.bind(styles)

function SingleVehicle() {
    const { vehicleId } = useParams();
    console.log(vehicleId);

    const [vehicle, setVehicle] = useState({})
    const [store, setStore] = useState({})
    const [customer, setCustomer] = useState({})
    const [addressName, setAddressName] = useState(null)
    const [hireData, setHireData] = useState({})


    useEffect(() => {
        axiosClient.get(`http://localhost:8080/vehicle/findById/${vehicleId}`)
            .then((response) => {
                const data = response;
                setVehicle(data);
                setAddressName(data.address.addressName);
            })
            .catch(() => {
                console.log("looi");

            });
    }, [vehicleId]);

    //tìm kiếm store theo vehicleId
    useEffect(() => {
        axiosClient.get(`http://localhost:8080/store/findStoreByVehicleId/${vehicleId}`)
            .then((response) => {
                const data = response;
                setStore(data);
            })
            .catch(() => {
                console.log("looi");

            });
    }, []);

    //tìm kiếm customer
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
    }, []);

    // 
    const today = new Date();
    const date = today.toLocaleDateString('en-GB');

    const hours = today.getHours() + 2;
    const minutes = today.getMinutes();
    const time = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}`;

    const [returnDate, setReturnDate] = useState('')
    // const [diffDays, setDiffDays] = useState(1)

    //chuyển đổi sang date để tính tổng tiền
    const date1 = new Date(date.split('/').reverse().join('-'));
    const date2 = new Date(returnDate);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    // 
    //định dạng kiểu tiền tệ



    const handleReturnDate = (e) => {
        const searchValue = e.target.value;

        if (!searchValue.startsWith(' ')) {

            const dateParts = returnDate.split('-');
            const date = `${dateParts[2]}/${dateParts[1]}/${dateParts[0]}`;
            setReturnDate(searchValue)
        }

    }

    //lưu dữ liệu vào bảng thuê xe
    const submitHireVehicle = async () => {

        if (isNaN(diffDays)) {
            alert("Vui lòng chọn ngày trả")
            return;
        }

        if ((date2 - date1) <= 0) {
            alert("Ngày trả xe không hợp lệ, vui lòng chọn ngày lớn hơn ngày hiện tại")
            return;
        }

        if (customer.cart < (vehicle.rentByDay + vehicle.rentByDay * 0.1) * diffDays) {
            alert("Bạn không đủ tiền để thuê, vui lòng nap thêm tiền vào tài khoản")
            return;
        }

        const hireVehicleData = {
            status: false,
            statusAccept: false,
            hireDate: new Date(date.split('/').reverse().join('-')),
            returnDate: returnDate,
            customer: customer,
            vehicle: vehicle,
            totalMoney: (vehicle.rentByDay + vehicle.rentByDay * 0.1) * diffDays

        }

        try {
            const response1 = await axios.post(`http://localhost:8080/hireVehicle/add`, hireVehicleData);
            const hireData = response1.data;
            setHireData(hireData);
            alert('Yêu cầu thuê xe thành công');

            //set trạng thái xe đã thuê
            vehicle.statusHiring = false;
            await axios.put(`http://localhost:8080/vehicle/update/${vehicleId}`, vehicle);

            //thêm thông báo
            const notificationData = {
                content: 'thue thanh cong',
                createDate: new Date(date.split('/').reverse().join('-')),
                isRead: false,
                customer: customer,
                hireVehicle: hireData,
                transaction: null
            };

            console.log(notificationData);

            await axios.post(`http://localhost:8080/notifications/add`, notificationData);

        } catch (error) {
            console.log('Error: ', error.message);
            console.log('Error details: ', error.response.data);
        }


        //   trừ tiền của ngưỜi đặt
        customer.cart = customer.cart - (vehicle.rentByDay + vehicle.rentByDay * 0.1) * diffDays
        axiosClient.put(`http://localhost:8080/customers/update/${username}`, customer)
            .then((response) => {
                const data = response;
            })
            .catch((error) => {
                console.log('trừ tiền không thành công')
                console.log(error)
            });

        //  Cộng tiền cho shop
        store.cartStore = store.cartStore + (vehicle.rentByDay + vehicle.rentByDay * 0.1) * diffDays
        axiosClient.put(`http://localhost:8080/store/update/${store.storeId}`, store)
            .then((response) => {
                const data = response;
            })
            .catch((error) => {
                console.log('cộng tiền không thành công')
                console.log(error)
            });

    }

    return (

        <div className={cx('wrapper')}>
            <div className={cx('cover-car')}>
                <div className={cx('m-container')}>
                    <div className={cx('cover-car-container-content')}>
                        <div className={cx('main-img')}>
                            <div className={cx('cover-car-item')}>
                                <Image className={cx('img-content')} src={vehicle.image ? (`../images/${vehicle.image}`) : (images.vehicle1)}></Image>
                            </div>
                        </div>
                        <div className={cx('sub-img')}>
                            <div className={cx('cover-car-item')}>
                                <Image className={cx('item-img')} src={vehicle.image ? (`../images/${vehicle.image2}`) : (images.vehicle1)} />
                            </div>
                            <div className={cx('cover-car-item')}>
                                <Image className={cx('item-img')} src={vehicle.image ? (`../images/${vehicle.image3}`) : (images.vehicle1)} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className={cx('detail-car')}>
                <div className={cx('m-container')}>
                    <div className={cx('detail-container')}>
                        <div className={cx('container-detail')}>
                            <div className={cx('info-car-basic')}>
                                <div className={cx('group-name')}>
                                    <h3 className={cx('group-name-inf')}>{vehicle.vehicleName}</h3>
                                </div>
                                <div className={cx('group-total')}>
                                    <div className={cx('wrap-svg')}>
                                        <FontAwesomeIcon className={cx('star-rating')} icon={faStar} />
                                    </div>
                                    <span className={cx('infor')}>5</span>
                                    <span className={cx('dot')}>•</span>

                                    <div className={cx('wrap-svg')}>
                                        <FontAwesomeIcon className={cx('chart')} icon={faChartSimple} />
                                    </div>
                                    <span className={cx('infor')}>{vehicle.slThue} Lượt thuê</span>
                                    <span className={cx('dot')}>•</span>

                                    <div className={cx('wrap-svg')}>
                                        <FontAwesomeIcon className={cx('location')} icon={faLocationDot} />
                                    </div>
                                    <span className={cx('infor')}>{addressName}</span>
                                    <span className={cx('dot')}>•</span>
                                </div>
                            </div>
                        </div>
                        <div className={cx('sidebar-detail')}>
                            <div className={cx('rent-box')}>
                                <div className={cx('price')}>
                                    <h4 className={cx('renByDay')}>{vehicle.rentByDay ? (vehicle.rentByDay.toLocaleString('vi-VN', { minimumFractionDigits: 0, maximumFractionDigits: 0 })) : (null)} đ/Ngày</h4>
                                </div>
                                <div className={cx('date-time-form')}>
                                    <div className={cx('form-item')}>
                                        <label className={cx('form-item-title')}>Nhận xe</label>
                                        <div className={cx('wrap-date-time')}>
                                            <div className={cx('wrap-date')}>
                                                <span className={cx('value')}>{date}</span>
                                            </div>
                                            <div className={cx('wrap-time')}><span class="value">{time}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={cx('line')}></div>

                                    <div className={cx('form-item')}>
                                        <label className={cx('form-item-title')}>Trả xe</label>
                                        <div className={cx('wrap-date-time')}>
                                            <div className={cx('wrap-date')}>
                                                <input type="date" value={returnDate}
                                                    onChange={handleReturnDate}
                                                    className={cx('value')}></input>
                                            </div>
                                            <div className={cx('wrap-time')}><span class="value">{time}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={cx('address-form')}>
                                    <label className={cx('form-item-title')}>Địa chỉ nhận xe</label>
                                    <div className={cx('form-address')}>
                                        <span className={cx('value')}>{addressName}</span>
                                    </div>
                                </div>
                                <div className={cx('line-page')}></div>
                                <div className={cx('price-container')}>
                                    <div className={cx('price-item')}>
                                        <p className={cx('df-align-center')}>Đơn giá thuê</p>
                                        <p className={cx('cost')}>{vehicle.rentByDay ? (vehicle.rentByDay.toLocaleString('vi-VN', { minimumFractionDigits: 0, maximumFractionDigits: 0 })) : (null)} đ/ngày</p>
                                    </div>
                                    <div className={cx('price-item')}>
                                        <p className={cx('df-align-center')}>Phí dịch vụ</p>
                                        <p className={cx('cost')}>{(vehicle.rentByDay * 0.1).toLocaleString('vi-VN', { minimumFractionDigits: 0, maximumFractionDigits: 0 })} đ/ngày</p>
                                    </div>
                                    <div className={cx('line-page')}></div>
                                    <div className={cx('price-item')}>
                                        <p className={cx('sum-price')}>Tổng cộng</p>
                                        {isNaN(diffDays) ? (<p className={cx('cost')}>
                                            {(vehicle.rentByDay + vehicle.rentByDay * 0.1).toLocaleString('vi-VN', { minimumFractionDigits: 0, maximumFractionDigits: 0 })} đ</p>)
                                            : (<p className={cx('cost')}>
                                                {((vehicle.rentByDay + vehicle.rentByDay * 0.1) * diffDays).toLocaleString('vi-VN', { minimumFractionDigits: 0, maximumFractionDigits: 0 })} đ</p>)}
                                    </div>
                                </div>
                                {vehicle.statusHiring === true ? (
                                    <Button onClick={submitHireVehicle} primary large green className={cx('hire-btn')}>Đặt xe</Button>
                                ) : (<Button onClick={submitHireVehicle} disable primary large className={cx('hire-btn')}>Xe hiện đang bận</Button>)}

                            </div>
                        </div>
                        <div className={cx('content-detail')}>
                            <div className={cx('line-page')}></div>
                            <div className={cx('info-car-desc')}>
                                <h6 className={cx('description')}>Mô tả</h6>
                                <pre className={cx('description-inf')}>{vehicle.description}</pre>
                            </div>
                            <div className={cx('line-page')}></div>

                            <div className={cx('info-car-desc')}>
                                <h6 className={cx('description')}>Giấy tờ thuê xe</h6>
                                <div className={cx('required-papers')}>
                                    <div className={cx('required-papers-item')}>
                                        <div className={cx('type-item')}>
                                            <div className={cx('swap-svg')}>
                                                <FontAwesomeIcon className={cx('circle-info')} icon={faCircleInfo} />
                                            </div>
                                            <p className={cx('font-12')}>Bắt Buộc</p>
                                        </div>
                                        <div className={cx('type-content')}>
                                            <FontAwesomeIcon className={cx('address-card')} icon={faAddressCard} />
                                            <div className={cx('type-name')}>
                                                <p className={cx('type-name-inf')}>CMND và GPLX (đối chiếu)</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('line-page')}></div>

                            <div className={cx('info-car-desc')}>
                                <h6 className={cx('description')}>Tài sản thế chấp</h6>
                                <div className={cx('required-papers')}>
                                    <p>15 triệu (tiền mặt/chuyển khoản cho chủ xe khi nhận xe)
                                        hoặc Xe máy (kèm cà vẹt gốc) giá trị 15 triệu</p>
                                </div>
                            </div>

                            <div className={cx('line-page')}></div>

                            <div className={cx('info-car-desc')}>
                                <h6 className={cx('description')}>Chủ xe</h6>
                                <div className={cx('profile-info')}>
                                    <Link className={cx('profile-desc')}>
                                        <div className={cx('profile-avatar')}>
                                            <Image className={cx('profile-avatar-img')} src={store.image ? (`../images/${store.image}`) : (images.vehicle1)}></Image>
                                        </div>
                                        <div className={cx('info')}>
                                            <h5 className={cx('store-name')}>{store.nameStore}</h5>
                                            <div className={cx('verifi')}>
                                                <div className={cx('wrap-svg')}>
                                                    <FontAwesomeIcon className={cx('chart')} icon={faChartSimple} />
                                                </div>
                                                <span className={cx('infor')}>{vehicle.slThue} Lượt thuê</span>
                                            </div>
                                            <div className={cx('wrap-svg')}>
                                                <FontAwesomeIcon className={cx('phone')} icon={faPhone} />
                                                <span className={cx('infor')}>{store.phone}</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                            {/* comment */}
                            <div className={cx('info-car-desc')}>
                                <Comment vehicleId={vehicleId} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div >
    )
}

export default SingleVehicle;