import classNames from "classnames/bind";
import { Link, useParams } from "react-router-dom";

import styles from './ManagerStore.module.scss'
import { useState, useEffect } from "react";
import axiosClient from "~/scrips/healper/axiosClient";
import Button from "~/Component/Button";
import SidebarStore from "~/layouts/components/SidebarStore/SidebarStore";
import Image from "~/Component/Images";
import images from "~/assets/images";
import { freeHire } from "~/Component/Icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple, faLocation, faLocationDot, faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import ProductItem from "~/Component/ProductItem/ProductItem";

const cx = classNames.bind(styles)
function ManagerStore() {



    const { storeId } = useParams();
    const [vehicles, setVehicles] = useState([])
    const [store, setStore] = useState({})

    //tìm kiếm vehicles theo store
    useEffect(() => {
        axiosClient.get(`http://localhost:8080/vehicle/findByStoreId/${storeId}`)
            .then((response) => {
                const data = response;
                setVehicles(data);
                console.log(data);
            })
            .catch(() => {
                console.log('error')
            });
    }, []);

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
                            <div className={cx('filter-status')}>
                                <p>Trạng thái: </p>
                                <div className={cx('custom-select')}>
                                    <select>
                                        <option value="0">Tất cả</option>
                                        <option value="2">Đang hoạt động</option>
                                        <option value="5">Đang Cho thuê</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className={cx('list-vehicle')}>
                            <div className={cx('list-vehicle-container')}>
                                {vehicles.map((vehicle, index) => {
                                    return (
                                        <ProductItem vehicle={vehicle} />

                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ManagerStore;