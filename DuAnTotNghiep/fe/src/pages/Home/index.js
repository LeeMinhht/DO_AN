import queryString from 'query-string';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import Footer from '~/layouts/components/Footer/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faLocationDot, faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axiosClient from '~/scrips/healper/axiosClient';
import Button from '~/Component/Button';
import ListVehicle from './ListVehicle/ListVehicle';
import TopAddress from './TopAddress/TopAddress';
import Advantage from './Advantage/Advantage';



const cx = classNames.bind(styles)


function Home() {
    const [minPrice, setMinPrice] = useState(0)
    const [maxPrice, setMaxPrice] = useState(0)
    const [addressId, setAddressId] = useState(1)
    const [vehicles, setVehicles] = useState([])

    const [addresss, setAddresss] = useState([])

    const [isValidData, setIsValidData] = useState(true);

    //gửi request để check trạng thái nạp tiền

    const values = queryString.parse(window.location.search);
    const orderId = values.orderId;
    console.log(orderId);



    //tìm kiếm all Address
    useEffect(() => {
        axiosClient.get(`http://localhost:8080/address/findAll`)
            .then((response) => {
                const data = response;
                setAddresss(data);
            })
            .catch(() => {
                console.log('error')
            });
    }, []);

    //Tìm kiếm theo vị trí và giá tiền
    const submitFindVehicle = () => {
        if (maxPrice <= 0) {
            alert("Làm ơn chọn giá lớn hơn 0 VND")
            return;
        }
        // axiosClient.get(`http://localhost:8080/vehicle/findByAddressAndPrice/${addressId},${minPrice},${maxPrice}`)
        //     .then((response) => {
        //         const data = response;
        //         setVehicles(data);
        //         console.log(data)
        //     })
        //     .catch(() => {
        //         console.log('không tìm thấy Vehicle')
        //     });
        window.location.href = `/search/${addressId}/${minPrice}/${maxPrice}`;
    }
    const handleMinprice = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setMinPrice(searchValue)
        }
    }

    const handleMaxprice = (e) => {
        const searchValue = e.target.value;

        if (!searchValue.startsWith(' ')) {
            setMaxPrice(searchValue)
        }
    }

    const handleSelectChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setAddressId(searchValue)
        }
    }

    useEffect(() => {
        axiosClient.get(`http://localhost:8080/vehicle/findTop8`)
            .then((response) => {
                const data = response;
                setVehicles(data);
                console.log(data)
            })
            .catch(() => {
                console.log('không tìm thấy vehicle')
            });
    }, []);

    return (

        <div className={cx('wrapper')}>
            <div className={cx('background-banned')}>
                <h1 className={cx('home-title')}>Mikaa - Cùng bạn đến mọi Hành trình</h1>
            </div >

            {/* phần tìm kiếm */}
            <div className={cx('search-option')}>
                <div className={cx('option')}>
                    <Link>
                        <div className={cx('option-item-1')}>
                            <div className={cx('item-1-svg')}>
                                <FontAwesomeIcon className={cx('item-1-icon')} icon={faCar}></FontAwesomeIcon>
                            </div>
                            <p className={cx('item-1-name')}>Ô tô</p>
                        </div>
                    </Link>
                    <Link>
                        <div className={cx('option-item-2')}>
                            <div className={cx('item-1-svg')}>
                                <FontAwesomeIcon className={cx('item-2-icon')} icon={faCar}></FontAwesomeIcon>
                            </div>
                            <p className={cx('item-2-name')}>Xe máy</p>
                        </div>
                    </Link>
                </div>
                <div className={cx('home-search')}>
                    <div className={cx('search-form')}>
                        <div className={cx('search-form-item-address')}>
                            <div className={cx('search-form-item-address-title')}>
                                <div className={cx('search-form-item-address-title')}>
                                    <div className={cx('address-svg')}>
                                        <FontAwesomeIcon className={cx('address-svg-icon')} icon={faLocationDot} />
                                    </div>
                                    <p className={cx('address-inf')}>Địa điểm</p>
                                </div>
                            </div>
                            <div className={cx('search-form-item-choose')}>
                                <div className={cx('choose-item')}>
                                    <div className={cx('choose-item-option')}>
                                        {/* <input className={cx('choose-item-value')} type='text' placeholder='Đà Nẵng'></input> */}
                                        <select className={cx('choose-item-value')} onChange={handleSelectChange}>
                                            {addresss.map((tinh, index) => {
                                                return (
                                                    <option key={index} value={tinh.addressId}>{tinh.addressName}</option>
                                                )
                                            })}

                                        </select>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className={cx('line-line-address')}></div>

                        {/* search option2 */}

                        <div className={cx('search-form-item-address')}>
                            <div className={cx('search-form-item-address-title')}>
                                <div className={cx('search-form-item-address-title')}>
                                    <div className={cx('address-svg')}>
                                        <FontAwesomeIcon className={cx('address-svg-icon')} icon={faMoneyCheckDollar} />
                                    </div>
                                    <p className={cx('address-inf')}>Giá tiền</p>
                                </div>
                            </div>
                            <div className={cx('search-form-item-choose')}>
                                <div className={cx('choose-item')}>
                                    <div className={cx('choose-item-option')}>
                                        {/* <input className={cx('choose-item-value')} type='text' placeholder='Đà Nẵng'></input> */}
                                        <input className={cx('choose-item-value')}
                                            value={minPrice}
                                            type='text' placeholder='Từ'
                                            onChange={handleMinprice}>
                                        </input>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className={cx('line-line-address')}></div>

                        {/* search option3 */}

                        <div className={cx('search-form-item-address')}>
                            <div className={cx('search-form-item-address-title')}>
                                <div className={cx('search-form-item-address-title')}>
                                    <div className={cx('address-svg')}>
                                        <FontAwesomeIcon className={cx('address-svg-icon')} icon={faMoneyCheckDollar} />
                                    </div>
                                    <p className={cx('address-inf')}>Giá tiền</p>
                                </div>
                            </div>
                            <div className={cx('search-form-item-choose')}>
                                <div className={cx('choose-item')}>
                                    <div className={cx('choose-item-option')}>

                                        <input className={cx('choose-item-value')}
                                            value={maxPrice}
                                            type='text' placeholder='Đến'
                                            onChange={handleMaxprice}>
                                        </input>

                                    </div>
                                </div>
                            </div>

                        </div>

                        <Button className={cx('btn-search')} onClick={submitFindVehicle}  primary green>Tìm Xe</Button>

                    </div>

                </div>
            </div>

            {/* các xe được thuê nhiều nhất */}
            <div className={cx('top8-vehicle')}>
                <div className={cx('top8-vehicle-header')}>
                    <h2 className={cx('vehicle-header-title')}>Xe Dành Cho Bạn</h2>
                </div>
                <div className={cx('vehicle-container')}>
                    <ListVehicle vehicles={vehicles}></ListVehicle>
                </div>
                <div className={cx('all-vehicle')}>
                    <Link to={`/allVehicle`}>
                        <h4 className={cx('all-vehicle-title')}>Xem tất cả</h4>
                    </Link>
                </div>

            </div>

            {/* Địa điểm nổi bật */}
            <div className={cx('topLocation')}>
                <TopAddress />
            </div>

            {/* Ưu điểm */}
            <div className={cx('advantage')}>
                <Advantage />
            </div>

        </div >



    );
}

export default Home;