import styles from "./Footer.module.scss"
import classNames from "classnames/bind"
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons";

const cx = classNames.bind(styles);


function Footer() {
    return (
        <div className={cx('footer')}>
            <div className={cx('m-container')}>
                <div className={cx('footer-about')}>
                    <div className={cx('footer-info')}>
                        <Link className={cx('wrap-svg')}>
                        <img className={cx("main-img-inf")} alt='' src='../image/logo1.png' />
                        </Link>
                        <div className={cx('phone-mail')} >
                            <Link className={cx('item')}>
                                <p className={cx('main')}>1900 6789</p>
                                <p>Hỗ trợ 7AM - 10PM</p>
                            </Link>
                            <Link className={cx('item')}>
                                <p className={cx('main')}>contact@mikaa.vn</p>
                                <p>Đặt câu hỏi cho Mikaa</p>
                            </Link>
                        </div>

                        <div className={cx('footer-contact')} >
                            <a href="https://www.facebook.com/lengocminh0810/" className={cx('wrap-svg-contact')}>
                                <FontAwesomeIcon className={cx('svg-item')} icon={faFacebook} />
                            </a>
                            <a href="https://www.facebook.com/lengocminh0810/" className={cx('wrap-svg-contact')}>
                                <FontAwesomeIcon className={cx('svg-item')} icon={faTiktok} />
                            </a>
                            <a href="https://www.facebook.com/lengocminh0810/" className={cx('wrap-svg-contact')}>
                                <FontAwesomeIcon className={cx('svg-item')} icon={faInstagram} />
                            </a>
                        </div>
                    </div>

                    <div className={cx('footer-path')}>
                        <div className={cx('path-item')}>
                            <p className={cx('main-sub')}>Chính Sách</p>
                            <div className={cx('item-sub')}>
                                <Link className={cx('sub-item')}>Chính sách và quy định</Link>
                                <Link className={cx('sub-item')}>Quy chế hoạt động</Link>
                                <Link className={cx('sub-item')}>Bảo mật thông tin</Link>
                                <Link className={cx('sub-item')}>Giải quyết tranh chấp</Link>
                            </div>
                        </div>
                        <div className={cx('path-item')}>
                            <p className={cx('main-sub')}>Tìm hiểu thêm</p>
                            <div className={cx('item-sub')}>
                                <Link className={cx('sub-item')}>Hướng dẫn chung</Link>
                                <Link className={cx('sub-item')}>Hướng dẫn đặt xe</Link>
                                <Link className={cx('sub-item')}>Hướng dẫn thanh toán</Link>
                                <Link className={cx('sub-item')}>Giải quyết tranh chấp</Link>
                            </div>
                        </div>
                        <div className={cx('path-item')}>
                            <p className={cx('main-sub')}>Nội dung khác</p>
                            <div className={cx('item-sub')}>
                                <Link className={cx('sub-item')}>Hỏi và trả lời</Link>
                                <Link className={cx('sub-item')}>Mikaa Blog</Link>
                                <Link className={cx('sub-item')}>Bảo mật thông tin</Link>
                                <Link className={cx('sub-item')}>Tuyển dụng</Link>
                            </div>
                        </div>
                        <div className={cx('path-item')}>
                            <p className={cx('main-sub')}>Đối tác</p>
                            <div className={cx('item-sub')}>
                                <Link className={cx('sub-item')}>Đăng ký chủ xe Mikaa</Link>
                                <Link className={cx('sub-item')}>Đăng ký GPS MITRACK 4G</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Footer;


