import classNames from "classnames/bind";
import styles from './SidebarStore.module.scss'
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { } from "@fortawesome/free-solid-svg-icons";
import { faCalendar, faCaretSquareDown, faCaretSquareUp, faMoneyBill1, faUser } from "@fortawesome/free-regular-svg-icons";
import config from "~/config";
import { FaCarSide } from "react-icons/fa";

const cx = classNames.bind(styles)
function SidebarStore({ store, cusUsername }) {

    if (store) {

    }
    return (
        <div className={cx('sidebar-container')}>
            <div className={cx('title')}>
                <h4>Xin chào bạn!</h4>
            </div>
            {store ? (
                <div className={cx('sidebar')}>
                   <nav>
                        <NavLink className={(nav) => cx('sidebar-item', { active: nav.isActive })} to={`/managerStore/${store.storeId}`}>
                            <div className={cx('wrap-svg')}>
                                <FontAwesomeIcon className={cx('item-icon')} icon={faCaretSquareUp} />
                            </div>
                            <p>Xe của tôi</p>
                        </NavLink>
                        <NavLink className={(nav) => cx('sidebar-item', { active: nav.isActive })} to={`/hireRequired/${store.storeId}`}>
                            <div className={cx('wrap-svg')}>
                                <FontAwesomeIcon className={cx('item-icon')} icon={faMoneyBill1}/>
                            </div>
                            <p>Yêu cầu thuê xe</p>
                        </NavLink>
                        <NavLink className={(nav) => cx('sidebar-item', { active: nav.isActive })} to={`/managerStore/information/${store.storeId}`}>
                            <div className={cx('wrap-svg')}>
                                <FontAwesomeIcon className={cx('item-icon')} icon={faUser} />
                            </div>
                            <p>Thông tin của tôi</p>
                        </NavLink>

                        <NavLink className={(nav) => cx('sidebar-item', { active: nav.isActive })} to={`/addVehicle/${store.storeId}`}>
                            <div className={cx('wrap-svg')}>
                                <FontAwesomeIcon className={cx('item-icon')} icon={faCaretSquareUp} />
                            </div>
                            <p>Đăng kí xe</p>
                        </NavLink>

                        <NavLink className={(nav) => cx('sidebar-item', { active: nav.isActive })} to={`/revenue/${store.storeId}`}>
                            <div className={cx('wrap-svg')}>
                                <FontAwesomeIcon className={cx('item-icon')} icon={faMoneyBill1}/>
                            </div>
                            <p>Doanh thu</p>
                        </NavLink>
                      

                    </nav>
                </div>
            ) : (null)}

            {cusUsername ? (
                <div className={cx('sidebar')}>
                    <nav>
                        <NavLink className={(nav) => cx('sidebar-item', { active: nav.isActive })} to={`/history/${cusUsername}`}>
                            <div className={cx('wrap-svg')}>
                                <FontAwesomeIcon className={cx('item-icon')} icon={faCaretSquareUp} />
                            </div>
                            <p>Danh sách thuê</p>
                        </NavLink>
                        <NavLink className={(nav) => cx('sidebar-item', { active: nav.isActive })} to={`/`}>
                            <div className={cx('wrap-svg')}>
                                <FontAwesomeIcon className={cx('item-icon')} icon={faUser} />
                            </div>
                            <p>Xe yêu thích</p>
                        </NavLink>

                    </nav>
                </div>
            ) : (null)}
        </div>
    );
}

export default SidebarStore;