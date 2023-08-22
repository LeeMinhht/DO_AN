import classNames from "classnames/bind";
import styles from './Notification.module.scss'
import { useEffect, useState } from "react";
import axiosClient from "~/scrips/healper/axiosClient";
import Image from "../Images";
import { Link } from "react-router-dom";
import axios from "axios";



const cx = classNames.bind(styles)




// const [username, setUsername] = useState(null)
// const storedUserData = localStorage.getItem('user');

// const parsedUserData = JSON.parse(storedUserData);
// const username = parsedUserData.cusUsername;


 const username = "nghia123";


function Notification(props) {
const [notifications, setNotifications] = useState([])


    useEffect(() => {
        axiosClient.get(`http://localhost:8080/notifications/findByUsername/${username}`)
            .then((response) => {
                const data = response;
                setNotifications(data)
            })
            .catch(() => {
                console.log('không tìm thấy user')
            });
    }, []);

    // useEffect(() => {
    //     // Lấy danh sách thông báo từ API
    //     const fetchNotifications = async () => {
    //         try {
    //             const response = await axios.get(`http://localhost:8080/notifications/findByUsername/${username}`);
    //             setNotifications(response.data);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };

    //     fetchNotifications();
    // }, []);

    //   // Hàm xử lý khi nhận được thông báo mới
    //   const dispatch = useDispatch();
    //   const notifications = useSelector((state) => state.notifications.list);
    //   const [socket, setSocket] = useState(null);

    //   useEffect(() => {
    //     // Gửi request API để lấy danh sách notifications ban đầu
    //     axios.get(`http://localhost:8080/notifications/findByUsername/${username}`)
    //       .then((response) => {
    //         dispatch(setNotifications(response.data));
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });

    //     // Khởi tạo WebSocket để nhận các thông báo mới
    //     const newSocket = new WebSocket('ws://localhost:8080');
    //     setSocket(newSocket);

    //     return () => {
    //       newSocket.close();
    //     };
    //   }, []);

    //   useEffect(() => {
    //     if (!socket) {
    //       return;
    //     }

    //     socket.onmessage = (message) => {
    //       const notification = JSON.parse(message.data);
    //       dispatch(addNotification(notification));
    //     };
    //   }, [socket, dispatch]);


    return (

        <div className={cx('wrapper-notification')}>
            <h5 className={cx('title-name')}>Thông báo</h5>
            <div className={cx('line-page')}></div>
            <div className={cx('list-notification')}>
                {notifications.map((notification, index) => {
                    return (
                        <>
                            {notification.hireVehicle ?
                                (
                                    <div className={cx('notification-item')}>
                                        <div className={cx('item-icon')}>
                                            <Image className={cx('icon-img')} src={`../../../images/notification.png`} />
                                        </div>
                                        <Link to={`/history/${username}`} onClick={() => { window.scrollTo(0, 0) }}>
                                            <div className={cx('desc')}>
                                                <span className={cx('title')}>Thông báo đặt xe thành công</span>

                                                <span className={cx('content')}>bạn đã đặt thành công xe
                                                    <b>
                                                        <u>{notification.hireVehicle.vehicle.vehicleName}</u>
                                                    </b>
                                                    với tổng số tiền là   <b>
                                                        <u>{notification.hireVehicle.totalMoney.toLocaleString('vi-VN', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}đ</u>
                                                    </b>
                                                </span>
                                                <span className={cx('time')}>{notification.createDate}</span>

                                            </div>
                                        </Link>

                                    </div>
                                )
                                : (
                                    <div className={cx('notification-item')}>
                                        <div className={cx('item-icon')}>
                                            <Image className={cx('icon-img')} src={`../../../images/notification.png`} />
                                        </div>
                                        <div className={cx('desc')}>
                                            <span className={cx('title')}>Thông báo nạp tiền thành công</span>
                                            <span className={cx('content')}>{notification.content}
                                                <b>
                                                    <u></u>
                                                </b>
                                            </span>
                                        </div>
                                    </div>
                                )}
                        </>
                    )

                })}
            </div>


        </div>


    );
}

export default Notification;