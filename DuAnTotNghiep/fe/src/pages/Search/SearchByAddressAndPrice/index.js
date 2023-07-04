import classNames from "classnames/bind";
import styles from './Search.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowRight, faDollar, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosClient from "~/scrips/healper/axiosClient";
import ListVehicle from "~/pages/Home/ListVehicle/ListVehicle";

const cx = classNames.bind(styles)

function Search() {
    const [vehicles, setVehicles] = useState([])
    const [address, setAddress] = useState({})
    

    const { addressId, minPrice, maxPrice } = useParams();
    const [searchValue, setSearchValue] = useState(addressId)

    console.log(addressId)

    //Tìm kiếm address theo addressId
    useEffect(() => {
        axiosClient.get(`http://localhost:8080/address/findById/${addressId}`)
            .then((response) => {
                const data = response;
                setAddress(data);
                console.log(data);
            })
            .catch(() => {
                console.log('error')
            });
    }, [setSearchValue]);

    const handleAddress = (e) => {
        const searchValue = e.target.value;

        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue)
        }
    }

    //Tìm kiếm theo vị trí và giá tiền

    useEffect(() => {
        axiosClient.get(`http://localhost:8080/vehicle/findByAddressAndPrice/${addressId},${minPrice},${maxPrice}`)
            .then((response) => {
                const data = response;
                setVehicles(data);
                console.log(data)
            })
            .catch(() => {
                console.log('không tìm thấy Vehicle')
            });
    }, []);

    return (
        <div className={cx('wrapper-search')}>
            <div className={cx('finding-section')}>
                <div className={cx('m-container')}>
                    <div className={cx('finding-container')}>
                        <div className={cx('finding-info')}>
                            <div className={cx('input-form')}>
                                <div className={cx('wrap-svg')}>
                                    <FontAwesomeIcon className={cx('wrap-svg-location')} icon={faLocationDot} />
                                </div>
                                <div className={cx('address')}>
                                    <input value={address.addressName}  onChange={handleAddress} />
                                </div>
                            </div>
                            <div className={cx('price-form')}>
                                <div className={cx('price-form-item')}>
                                    <div className={cx('wrap-svg')}>
                                        <FontAwesomeIcon className={cx('wrap-svg-location')} icon={faDollar} />
                                    </div>
                                    <div className={cx('price-value')}>

                                        <input className={cx('')} value={minPrice} placeholder="" onChange={handleAddress} />

                                    </div>
                                </div>
                                <div className={cx('wrap-svg')}>
                                    <FontAwesomeIcon className={cx('wrap-svg-location')} icon={faCircleArrowRight} />
                                </div>
                                <div className={cx('price-form-item')}>
                                    <div className={cx('wrap-svg')}>
                                        <FontAwesomeIcon className={cx('wrap-svg-location')} icon={faDollar} />
                                    </div>
                                    <div className={cx('price-value')}>

                                        <input value={maxPrice} placeholder="" onChange={handleAddress} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div>
                <div className={cx('list-car-section')}>
                    <div className={cx('scroll-fix')}>
                        <div className={cx('m-container')}>
                            <ListVehicle vehicles={vehicles}></ListVehicle>
                            {/* <div className={cx('col4-mg20-list-car')}>
                                {vehicles.map((vehicle,index) =>{
                                    return (
                                        <ProductItem vehicle={vehicle} key={index}/>
                                    )
                                })}
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search;