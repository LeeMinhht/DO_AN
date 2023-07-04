import classNames from "classnames/bind"
import styles from './Comment.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import images from "~/assets/images";
import Image from "~/Component/Images";
import { useEffect, useState } from "react";
import axiosClient from "~/scrips/healper/axiosClient";

const cx = classNames.bind(styles)



function Comment({ vehicleId }) {

    const [comments, setComments] = useState([])

    // Tìm kiếm comment theo vehicleId
    useEffect(() => {
        axiosClient.get(`http://localhost:8080/comments/findByVehicleId/${vehicleId}`)
            .then((response) => {
                const data = response;
                setComments(data);
                console.log(data);
            })
            .catch(() => {
                console.log("looi");

            });
    }, [vehicleId]);


    return (
        <div>
            <div className={cx('reviews')}>
                <div className={cx('rate-reviews')}>
                    <div className={cx('swap-svg')}>
                        <FontAwesomeIcon className={cx('star-rating')} icon={faStar} />
                    </div>
                    <p className={cx('rate')}>4.6</p>
                </div>
                <span className={cx('dot')}>•</span>
                <p className={cx('total-review')}>10 đánh giá</p>
            </div>

            <div className={cx('list-reviews')}>
                {comments.map((comment, index) => {
                    return (
                        <div className={cx('item-reviews')} key={index}>
                            <div className={cx('profile')}>
                                <div className={cx('desc')}>
                                    <Link className={cx('avatar')}>
                                        <Image className={cx('avatar-img')} src={comment.customer.image?(`../images/${comment.customer.image}`):(images.image3)} />
                                    </Link>
                                    <div className={cx('info')}>
                                        <Link>
                                            <h6 className={cx('cusUsername')}>{comment.customer.cusUsername}</h6>
                                        </Link>
                                        <div className={cx('rate')}>
                                            <div className={cx('star-rating')}>
                                                <FontAwesomeIcon className={cx('star-container')} icon={faStar} />
                                                <p className={cx('star-inf')}>{comment.star}</p>
                                            </div>
                                            
                                            <p className={cx('time')}>{comment.commentDate}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <p className={cx('main-review')}>
                                {comment.note}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default Comment;