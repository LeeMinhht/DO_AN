import classNames from "classnames/bind";
import { Link, useParams } from "react-router-dom";

import styles from './HireRequired.module.scss'
import { useState, useEffect } from "react";
import axiosClient from "~/scrips/healper/axiosClient";
import Button from "~/Component/Button";
import SidebarStore from "~/layouts/components/SidebarStore/SidebarStore";
import Image from "~/Component/Images";
import images from "~/assets/images";
import { freeHire } from "~/Component/Icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple, faHeart, faLocation, faLocationDot, faStar, faStarHalfStroke, faUser } from "@fortawesome/free-solid-svg-icons";
import ProductItem from "~/Component/ProductItem/ProductItem";

const cx = classNames.bind(styles)
function HireRequired() {



    const { storeId } = useParams();
    const [hireVehicles, setHireVehicles] = useState([])
    const [store, setStore] = useState({})
    const [status, setStatus] = useState(false)
    const [hire, setHire] = useState({})

    //tìm kiếm yêu cầu thuê xe theo store
    useEffect(() => { 
        axiosClient.get(`http://localhost:8080/hireVehicle/findByStatusAccept/${storeId}`)
            .then((response) => {
                const data = response;
                setHireVehicles(data);
                console.log(data);
            })
            .catch(() => {
                console.log('error')
            });
    }, [hire]);

    //tìm kiếm store theo storeId
    useEffect(() => {
        axiosClient.get(`http://localhost:8080/store/getById/${storeId}`)
            .then((response) => {
                const data = response;
                setStore(data);
                console.log(data);
            })
            .catch(() => {
                console.log('error')
            });
    }, []);

    const handleSelectStatus = (e) => {
        console.log(status)
        const searchValue = e.target.value;

        if (!searchValue.startsWith(' ')) {
            setStatus(searchValue)
        }
    }

    const handleSubmitHire=(hire) => {
        console.log(hire)

        hire.statusAccept = true;
            axiosClient.put(`http://localhost:8080/hireVehicle/updateHireById/${hire.hireId}`,hire)
                .then((response) => {
                    const data = response;
                    setHire(data);
                    console.log(data);
                    alert("Xác nhận thuê thành công")
                })
                .catch(() => {
                    console.log('error')
                });
    }

    //từ chối
    const handleRefuse=(hire) => {
        console.log(hire)

        hire.statusAccept = true;
            axiosClient.put(``)
                .then((response) => {
                    const data = response;
                    setHire(data);
                    console.log(data);
                    alert("Xác nhận thuê thành công")
                })
                .catch(() => {
                    console.log('error')
                });
    }

    return (
        <div className={cx('Manager-store')}>
            <div className={cx('store-container')}>


                <div className={cx('store-sidebar')}>
                    <SidebarStore store={store} />
                </div>


                <div className={cx('store-content')}>

                    <div className={cx('content-body')}>
                        <div className={cx('body-header')}>
                            <h4>Danh sách xe</h4>

                        </div>

                        <div className={cx('list-vehicle')}>
                            <div className={cx('list-vehicle-container')}>
                                        <div className={cx('content')}>

                                            {/* list car 100% with */}
                                            <div className={cx('list-car-fav-car')}>
                                                {hireVehicles.map((hire, index) => {
                                                    return (
                                                        <div className={cx('item-car-row')}>
                                                            <div className={cx('item-box')}>
                                                                <Link to={`/singleVehicle/${hire.vehicle.vehicleId}`} onClick={() => {
                                                                    window.scrollTo(0, 0);
                                                                }}>
                                                                    <div className={cx('img-car')}>
                                                                        <div className={cx('fix-img')}>
                                                                            <Image src={`../../../images/${hire.vehicle.image}`} />
                                                                        </div>
                                                                        <div className={cx('wrap-svg-fav-item')}>
                                                                            <FontAwesomeIcon className={cx('heart-icon')} icon={faHeart} />
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                                <div className={cx('desc-car')}>

                                                                    <div className={cx('desc-name')}>
                                                                        <p>{hire.vehicle.vehicleName}</p>
                                                                    </div>
                                                                    <div className={cx('desc-inf')}>
                                                                        <div className={cx('wrap-svg')}>
                                                                            <FontAwesomeIcon className={cx('chart-icon')} icon={faUser} />
                                                                        </div>
                                                                        <span className={cx('info')}>nguời thuê: {hire.customer.cusUsername}</span>
                                                                    </div>
                                                                    <div className={cx('desc-address')}>
                                                                        <div className={cx('address')}>
                                                                            <div className={cx('wrap-svg')}>
                                                                                <FontAwesomeIcon className={cx('location-icon')} icon={faLocationDot} />
                                                                            </div>
                                                                            <p>{hire.vehicle.address.addressName}</p>
                                                                        </div>
                                                                    </div>
                                                                    <div className={cx('line')}></div>
                                                                    <div className={cx('desc-btn')}>
                                                                        <Button className={cx('btn-comment')} onClick={()=>
                                                                            handleSubmitHire(hire)
                                                                        } primary small green>Chấp nhận</Button>
                                                                        <div className={cx('desc-btn')}>
                                                                            <Button className={cx('btn-comment')} onClick={() => handleRefuse(hire)} primary small >Từ chối</Button>
                                                                        </div>
                                                                    </div>

                                                                </div>

                                                                <div className={cx('hire-history-inf')}>
                                                                    {/*  */}
                                                                    <div className={cx('info-user')}>
                                                                        <div className={cx('info-box')}>
                                                                            <div className={cx('info-box-item')}>
                                                                                <p>Ngày thuê</p>
                                                                                <p className={cx('main')}>{hire.hireDate}</p>
                                                                            </div>
                                                                            <div className={cx('info-box-item')}>
                                                                                <p>Ngày trả</p>
                                                                                <p className={cx('main')}>{hire.returnDate}</p>
                                                                            </div>
                                                                            <div className={cx('info-box-item')}>
                                                                                <p>Giá thuê theo ngày</p>
                                                                                <p className={cx('main')}>{hire.vehicle.rentByDay}đ</p>
                                                                            </div>
                                                                            <div className={cx('info-box-item')}>
                                                                                <p>Tổng tiền </p>
                                                                                <p className={cx('main')}>{hire.totalMoney}đ</p>
                                                                            </div>

                                                                        </div>
                                                                    </div>
                                                                    {/*  */}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}

                                            </div>

                                        </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HireRequired;