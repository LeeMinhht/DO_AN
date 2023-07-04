import classNames from "classnames/bind";
import styles from './History.module.scss'
import SidebarStore from "~/layouts/components/SidebarStore/SidebarStore";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faLocationDot, faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Image from "~/Component/Images";
import axiosClient from "~/scrips/healper/axiosClient";
import Button from "~/Component/Button";

const cx = classNames.bind(styles)

function History() {

    const [status, setStatus] = useState(false)
    const [hires, setHires] = useState([])

    const [showForm, setShowForm] = useState(false);
    const [hireId, setHireId] = useState(null);

    const [note, setNote] = useState(null);
    const [hireVehicle, setHireVehicle] = useState({});
    const [customer, setCustomer] = useState({});
    const [rating, setRating] = useState(1);

    const [cusUsername, setCusUsername] = useState('leminh');

    const submitShowFormDialog = (hireId) => {
        setHireId(hireId);
        setShowForm(true);
    }
    const submitHideFormDialog = () => {
        setShowForm(false);
    }

    //tìm kiếm lịch sử thuê theo cusUsername
    useEffect(() => {
        axiosClient.get(`http://localhost:8080/hireVehicle/findHistoryByCusUsername/${cusUsername},${status}`)
            .then((response) => {
                const data = response;
                setHires(data);
            })
            .catch(() => {
                console.log('error')
            });
    }, [status]);

    //tìm kiếm hire theo hireId
    useEffect(() => {
        axiosClient.get(`http://localhost:8080/hireVehicle/findById/${hireId}`)
            .then((response) => {
                const data = response;
                setHireVehicle(data);
            })
            .catch(() => {
                console.log('error')
            });
    }, [hireId]);

    //tìm kiếm customer theo cusUsername
    useEffect(() => {
        axiosClient.get(`http://localhost:8080/customers/findById/${cusUsername}`)
            .then((response) => {
                const data = response;
                setCustomer(data);
            })
            .catch(() => {
                console.log('error')
            });
    }, []);

    const handleSelectStatus = (e) => {
        const searchValue = e.target.value;

        if (!searchValue.startsWith(' ')) {
            setStatus(searchValue)
        }
    }
    //nội dung comment
    const handleNoteComment = (e) => {
        const searchValue = e.target.value;

        if (!searchValue.startsWith(' ')) {
            setNote(searchValue)
        }
    }
    //tính sao
    const handleStarClick = (event, starIndex) => {
        event.preventDefault();
        setRating(starIndex + 1);
    };


    //lưu dữ liệu vào Comment
    const submitComment = () => {
        
    if(note===null){
        alert("Vui lòng nhập đánh giá")
        return ;
    }
        const CommentData = {
            note: note,
            commentDate: new Date(new Date().getTime()),
            star: rating,
            hireVehicle: hireVehicle,
            customer: customer
        }
        console.log(CommentData)


        axiosClient.post(`http://localhost:8080/comments/add`, CommentData)
            .then((response) => {
                const data = response;
                console.log(data)
                setShowForm(false)
                alert('Thành công')
            })
            .catch((error) => {
                console.log('lỗi')
                console.log(error)
            });
    }
    return (


        <div className={cx('store-infomation')}>
            <div className={cx('store-container')}>
                <div className={cx('store-sidebar')}>
                    <SidebarStore cusUsername={cusUsername} status />
                </div>
                <div className={cx('content-account')}>
                    <div className={cx('content-item-user-profile')}>
                        <div className={cx('title')}>
                            <div className={cx('title-edit')}>
                                <h5>Chuyến hiện tại</h5>
                            </div>
                            <div className={cx('filter-status')}>
                                <p>Trạng thái: </p>
                                <div className={cx('custom-select')}>
                                    <select onChange={handleSelectStatus}>
                                        <option value={false}>Chuyến hiện tại</option>
                                        <option value={true}>Lịch sử chuyến</option>

                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className={cx('content')}>

                            {/* list car 100% with */}
                            <div className={cx('list-car-fav-car')}>
                                {hires.map((hire, index) => {
                                    return (
                                        <div className={cx('item-car-row')}>
                                            <div className={cx('item-box')}>
                                                <Link to={`/singleVehicle/${hire.vehicleId}`} onClick={() =>{
                                                     window.scrollTo(0, 0);
                                                }}>
                                                    <div className={cx('img-car')}>
                                                        <div className={cx('fix-img')}>
                                                            <Image src={`../../../images/${hire.image}`} />
                                                        </div>
                                                        <div className={cx('wrap-svg-fav-item')}>
                                                            <FontAwesomeIcon className={cx('heart-icon')} icon={faHeart} />
                                                        </div>
                                                    </div>
                                                </Link>
                                                <div className={cx('desc-car')}>

                                                    {hire.status ? (
                                                        <div className={cx('desc-tag')}>
                                                            <span className={cx('tag-item-false')}>Đã trả</span>
                                                        </div>
                                                    ) : (
                                                        <div className={cx('desc-tag')}>
                                                            <span className={cx('tag-item')}>Đang thuê</span>
                                                        </div>
                                                    )}

                                                    <div className={cx('desc-name')}>
                                                        <p>{hire.vehicleName}</p>
                                                    </div>
                                                    <div className={cx('desc-inf')}>
                                                        <div className={cx('wrap-svg')}>
                                                            <FontAwesomeIcon className={cx('chart-icon')} icon={faUser} />
                                                        </div>
                                                        <span className={cx('info')}>{hire.store.nameStore}</span>
                                                    </div>
                                                    <div className={cx('desc-address')}>
                                                        <div className={cx('address')}>
                                                            <div className={cx('wrap-svg')}>
                                                                <FontAwesomeIcon className={cx('location-icon')} icon={faLocationDot} />
                                                            </div>
                                                            <p>{hire.address.addressName}</p>
                                                        </div>
                                                    </div>
                                                    <div className={cx('line')}></div>
                                                    <div className={cx('desc-btn')}>
                                                        <Button onClick={() => submitShowFormDialog(hire.hireId)} className={cx('btn-comment')} primary green>Đánh giá</Button>
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
                                                                <p className={cx('main')}>{hire.rentByDay}đ</p>
                                                            </div>
                                                            <div className={cx('info-box-item')}>
                                                                <p>Tổng doanh thu tháng </p>
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

            {/* Dialog form */}

            {showForm ? (
                <div className={cx('dialog')}>
                    <div className={cx('modal-backdrop')}></div>
                    <div className={cx('fade-in-modal')}>
                        <div className={cx('modal-dialog')}>
                            <div className={cx('modal-content')}>
                                <div className={cx('modal-header')}>
                                    <Button className={cx('close')} onClick={submitHideFormDialog}>
                                        <span aria-hidden="true">×</span>
                                        <span class="sr-only"></span>
                                    </Button>
                                    <h5>Nội dung đánh giá</h5>

                                    {/* đánh giá sao */}
                                    {[...Array(5)].map((_, index) => (
                                        <span
                                            key={index}
                                            className={cx('star', { selected: index < rating })}
                                            onClick={(event) => handleStarClick(event, index)}
                                        >
                                            &#9733;
                                        </span>
                                    ))}
                                    {/*  */}

                                </div>
                                <div className={cx('modal-body')}>
                                    <div className={cx('trip-filter')}>
                                        <input placeholder="Nội dung" onChange={handleNoteComment}></input>
                                        <div className={cx('line-page')}></div>
                                        <div className={cx('apply-button')}>
                                            <Button onClick={submitComment}>Đánh giá</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (null)}


        </div>
    );
}

export default History;