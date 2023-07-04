import classNames from "classnames/bind";
import styles from './StoreInformation.module.scss'
import SidebarStore from "~/layouts/components/SidebarStore/SidebarStore";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosClient from "~/scrips/healper/axiosClient";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import Image from "~/Component/Images";
import images from "~/assets/images";

const cx = classNames.bind(styles)

function StoreInfomation() {

    const { storeId } = useParams();

    const [store, setStore] = useState({})
    const [address, setAddress] = useState({})

    //tìm kiếm store theo storeId
    useEffect(() => {
        axiosClient.get(`http://localhost:8080/store/getById/${storeId}`)
            .then((response) => {
                const data = response;
                setStore(data);
                setAddress(data.address)
            })
            .catch(() => {
                console.log('error')
            });
    }, []);

    return (
        <div className={cx('store-infomation')}>
            <div className={cx('store-container')}>
                <div className={cx('store-sidebar')}>
                    <SidebarStore store={store} />
                </div>
                <div className={cx('content-account')}>
                    <div className={cx('content-item-user-profile')}>
                        <div className={cx('title')}>
                            <div className={cx('title-edit')}>
                                <h5>Thông tin tài khoản</h5>
                                <div className={cx('swap-svg')}>
                                    <FontAwesomeIcon icon={faPen} />
                                </div>
                            </div>
                        </div>
                        <div className={cx('content')}>
                            <div className={cx('avatar-box')}>
                                <div className={cx('avatar-xl-has-edit')}>
                                    <Image src={store.image ? (`../../images/${store.image}`) : (images.image3)} />
                                </div>
                                <h6 className={cx('store-name')}>{store.nameStore}</h6>
                                <p className={cx('note')}>Tham gia: 25/06/2023</p>
                            </div>
                            <div className={cx('info-user')}>
                                <div className={cx('info-box')}>
                                    <div className={cx('info-box-item')}>
                                        <p>Số điện thoại</p>
                                        <p className={cx('main')}>{store.phone}</p>
                                    </div>
                                    <div className={cx('info-box-item')}>
                                        <p>Tài khoản</p>
                                        <p className={cx('main')}>{store.cartStore}đ</p>
                                    </div>
                                    <div className={cx('info-box-item')}>
                                        <p>Địa chỉ</p>
                                        <p className={cx('main')}>{address.addressName}</p>
                                    </div>

                                </div>
                                <div className={cx('info-desc')}>
                                    <div className={cx('info-desc-item')}>
                                        <div className={cx('title-item')}>
                                            Email
                                        </div>
                                        <div className={cx('name')}>
                                            {store.email ? (store.email) : ('Leeminh0810@gmail.com')}
                                        </div>
                                    </div>
                                    <div className={cx('info-desc-item')}>
                                        <div className={cx('title-item')}>
                                            Facebook
                                        </div>
                                        <div className={cx('name')}>
                                            {store.facebook ? (store.facebook) : ('https://www.facebook.com/lengocminh0810')}
                                        </div>
                                    </div>
                                    <div className={cx('info-desc-item')}>
                                        <div className={cx('title-item')}>
                                            Tiktok
                                        </div>
                                        <div className={cx('name')}>
                                            {store.tiktok ? (store.tiktok) : ('https://www.tiktok.com/@lengocminh0810')}
                                        </div>
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

export default StoreInfomation;