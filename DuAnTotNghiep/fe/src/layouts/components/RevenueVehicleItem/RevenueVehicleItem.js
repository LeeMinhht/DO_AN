import classNames from "classnames/bind";
import styles from './RevenueVehicleItem.module.scss'
import { Link } from "react-router-dom";
import Image from "~/Component/Images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)
function RevenueVehicleItem({ revenue }) {
    return (
        <div className={cx('item-car-row')}>

            <div className={cx('item-box')}>
                <Link to={`/singleVehicle/${revenue.vehicleId}`} onClick={() => {
                    window.scrollTo(0, 0);
                }}>
                    <div className={cx('img-car')}>
                        <div className={cx('fix-img')}>
                            <Image src={`../../../images/${revenue.image}`} />
                        </div>
                        <div className={cx('wrap-svg-fav-item')}>
                            <FontAwesomeIcon className={cx('heart-icon')} icon={faHeart} />
                        </div>
                    </div>
                </Link>
                <div className={cx('desc-car')}>

                    <div className={cx('desc-name')}>
                        <p>{revenue.vehicleName}</p>
                    </div>
                    <div className={cx('desc-name')}>
                        <p>Mã số xe:     0{revenue.vehicleId}</p>
                    </div>

                    <div className={cx('desc-address')}>
                        <div className={cx('address')}>
                            <div className={cx('wrap-svg')}>
                                <FontAwesomeIcon className={cx('location-icon')} icon={faLocationDot} />
                            </div>
                            <p>{revenue.address.addressName}</p>
                        </div>
                    </div>


                    <div className={cx('line')}></div>
                </div>

                <div className={cx('hire-history-inf')}>
                    {/*  */}
                    <div className={cx('info-user')}>
                        <div className={cx('info-box')}>

                            <div className={cx('info-box-item')}>
                                <p>Giá thuê theo ngày</p>
                                <p className={cx('main')}>{revenue.rentByDay.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
                            </div>
                            <div className={cx('info-box-item')}>
                                <p>Tổng số lượt thuê</p>
                                <p className={cx('main')}>{revenue.slThue}</p>
                            </div>
                            <div className={cx('info-box-item')}>
                                <p>Tổng doanh thu </p>
                                <p className={cx('main')}>{revenue.totalMoney?(revenue.totalMoney.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })):('0đ')}</p>
                            </div>

                        </div>
                    </div>
                    {/*  */}
                </div>
            </div>
        </div>
    );
}

export default RevenueVehicleItem;