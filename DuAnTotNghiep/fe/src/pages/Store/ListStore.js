import classNames from "classnames/bind";
import { Link, useParams } from "react-router-dom";
import styles from './Store.module.scss'
import { useEffect, useState } from "react";
import axiosClient from "~/scrips/healper/axiosClient";
import Image from "~/Component/Images";
import images from "~/assets/images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faFileCirclePlus, faShop, faUserPlus } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)


function ListStore() {
  const { cusUsername } = useParams();

  const [stores, setStores] = useState([])


  //tìm kiếm store theo username
  useEffect(() => {
    axiosClient.get(`http://localhost:8080/store/findByCustomer/${cusUsername}`)
      .then((response) => {
        const data = response;
        setStores(data);
        console.log(data);
        
      })
      .catch(() => {
        console.log('không tìm thấy user')
      });
  }, []);


  return (
    <div className={cx('wrapper')}>
      <div className={cx('header')}>
        <div className={cx('heder-row')}>
          <div className={cx('heder-col')}>
            <div className={cx('heder-action')}>
              <FontAwesomeIcon className={cx('heder-icon')} icon={faUserPlus} />
              <h4 className={cx('heder-title')}>Đăng Ký</h4>
              <p className={cx('content')}>Tạo thêm cửa hàng dành cho bạn</p>
            </div>
          </div>
          <div className={cx('heder-col')}>
            <div className={cx('heder-action-2')}>
              <FontAwesomeIcon className={cx('heder-icon')} icon={faFileCirclePlus} />
              <h4 className={cx('heder-title')}>Hoàn thiện hồ sơ</h4>
              <p className={cx('content')}>Tạo hồ sơ miễn phí,có ngay thu nhập ưng ý</p>
            </div>
          </div>
          <div className={cx('heder-col')}>
            <div className={cx('heder-action-3')}>
              <FontAwesomeIcon className={cx('heder-icon')} icon={faFile} />
              <h4 className={cx('heder-title')}>Trợ giúp</h4>
              <p className={cx('content')}>Liê hệ với chúng tôi khi bạn cần trợ giúp</p>
            </div>
          </div>
        </div>
      </div>

      <div className={cx('store-List')}>
        <section className={cx('body-row')}>
          <div className={cx('body-header')}>
            <div className={cx('body-header-container')}>
              <FontAwesomeIcon className={cx('body-heder-icon')} icon={faShop} />
              <h2 className={cx('body-header-title')}>Cửa hàng của bạn</h2>
            </div>
          </div>
          <div className={cx('body-container')}>
            <div className={cx('body-container-outside')}>
              <div className={cx('body-container-row')}>
                {stores.map((store, index) => {
                  return (
                    <section className={cx('body-container-col')}>
                      <Link to={`/managerStore/${store.storeId}`}>
                        <Image className={cx('storeItem-icon')} src={store.image ? (`../images/${store.image}`) : (images.logo1)} />
                        {/* // <img src={`../images/${store.image}`} alt='Portrait' /> */}
                      </Link>
                      <div className={cx('storeItem-content')}>
                        <div className={cx('storeItem-content-infor')}>
                          <Link to={`/managerStore/${store.storeId}`}>
                            <p className={cx('storeItem-name')}>{store.nameStore}</p>
                          </Link>
                          <p className={cx('storeItem-countVehicle')}> Địa chỉ: {store.address.addressName}</p>
                          <p className={cx('storeItem-countVehicle')}> Tài khoản: {store.cartStore}VND</p>
                        </div>
                      </div>
                    </section>
                  )
                })}
              </div>
            </div>
          </div>


        </section>
      </div>
    </div>
  );
}

export default ListStore;