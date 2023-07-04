import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import classNames from 'classnames/bind';
import styles from './Carousel.module.scss'
import images from '~/assets/images';
import Image from '~/Component/Images';

const cx=classNames.bind(styles)

function Carousel() {
    return (
        <div className={cx('wapper')}>
            <div id="carouselExampleControls" className={cx('carousel slide')} data-bs-ride="carousel">
                <div className={cx('carousel-inner')}>
                    <div className={cx('carousel-item active')}>
                        {/* <img src="..." className= alt="..."> */}
                        <Image className={cx('img')} src={images.image2}></Image>
                    </div>
                    <div className={cx('carousel-item')}>
                        {/* <img src="..." className={cx('d-block w-100')} alt="..."> */}
                        <Image className={cx('img')} src={images.image2}></Image>

                    </div>
                    <div className={cx('carousel-item')}>
                        {/* <img src="..." className={cx('d-block w-100')} alt="..."> */}
                        <Image className={cx('img')} src={images.image2}></Image>

                    </div>
                </div>
                <button className={cx('carousel-control-prev')} type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className={cx('carousel-control-prev-icon')} aria-hidden="true"></span>
                    <span className={cx('visually-hidden')}>Previous</span>
                </button>
                <button className={cx("carousel-control-next")} type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className={cx("carousel-control-next-icon")} aria-hidden="true"></span>
                    <span className={cx("visually-hidden")}>Next</span>
                </button>
            </div>
        </div>
    );
}

export default Carousel;
