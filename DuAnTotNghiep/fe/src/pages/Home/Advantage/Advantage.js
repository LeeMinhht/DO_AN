import classNames from "classnames/bind";
import styles from './Advantage.module.scss'
import Image from "~/Component/Images";
import images from "~/assets/images";

const cx = classNames.bind(styles)

function Advantage() {
    return (
        <div className={cx('advantage-container')}>
            <h2>Ưu Điểm Của Mikaa</h2>
            <h5 className={cx('advantage-title')}>Những tính năng giúp bạn dễ dàng hơn khi thuê xe trên Mikaa</h5>
            <div className={cx('container-content')}>
                <div className={cx('content-item')}>
                    <div className={cx('item-img')}>
                        <Image src={images.advantage1} className={cx('img-inf')}></Image>
                    </div>
                    <h5 className={cx('item-title-other')}>Yên tâm đặt xe</h5>
                    <p className={cx('title-description')}>Không tính phí huỷ chuyến trong vòng 1h sau khi đặt cọc. Hoàn cọc và bồi thường 100% nếu chủ xe huỷ chuyến trong vòng 7 ngày trước chuyến đi.</p>
                </div>
                <div className={cx('content-item')}>
                    <div className={cx('item-img')}>
                        <Image src={images.advantage2} className={cx('img-inf')}></Image>
                    </div>
                    <h5 className={cx('item-title-other')}>Thủ tục đơn giản</h5>
                    <p className={cx('title-description')}>Chỉ cần có CCCD gắn chip (Hoặc Passport) &amp; Giấy phép lái xe là bạn đã đủ điều kiện thuê xe trên Mioto.</p>
                </div>
                <div className={cx('content-item')}>
                    <div className={cx('item-img')}>
                        <Image src={images.advantage3} className={cx('img-inf')}></Image>
                    </div>
                    <h5 className={cx('item-title-other')}>Thanh toán dễ dàng</h5>
                    <p className={cx('title-description')}>Đa dạng hình thức thanh toán: ATM, thẻ Visa &amp; Ví điện tử (Momo, VnPay, ZaloPay).</p>
                </div>
                <div className={cx('content-item')}>
                    <div className={cx('item-img')}>
                        <Image src={images.advantage4} className={cx('img-inf')}></Image>
                    </div>
                    <h5 className={cx('item-title-other')}>Giao xe tận nơi</h5>
                    <p className={cx('title-description')}>Bạn có thể lựa chọn giao xe tận nhà/sân bay... Phí tiết kiệm chỉ từ 15k/km.</p>
                </div>
                <div className={cx('content-item')}>
                    <div className={cx('item-img')}>
                        <Image src={images.advantage5} className={cx('img-inf')}></Image>
                    </div>
                    <h5 className={cx('item-title-other')}>Dòng xe đa dạng</h5>
                    <p className={cx('title-description')}>Hơn 100 dòng xe cho bạn tuỳ ý lựa chọn: Mini, Sedan, CUV, SUV, MPV, Bán tải.</p>
                </div>
                <div className={cx('content-item')}>
                    <div className={cx('item-img')}>
                        <Image src={images.advantage6} className={cx('img-inf')}></Image>
                    </div>
                    <h5 className={cx('item-title-other')}>Lái xe an toàn</h5>
                    <p className={cx('title-description')}>Vững tay lái với gói bảo hiểm thuê xe từ nhà bảo hiểm MIC & PJICO.</p>
                </div>
            </div>
        </div>
    );
}

export default Advantage;