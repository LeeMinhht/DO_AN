import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { Link } from "react-router-dom";
import Image from "../Images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faUser } from "@fortawesome/free-solid-svg-icons";
import Button from "../Button";

const cx = classNames.bind(styles);

function AccountItem({ data }) {
  return (
    <Link to={`/@${data.nickname}`} className={cx("wrapper")}>
      <div className={cx('item-car-row')}>
        <div className={cx('item-box')}>
          <Link to={`/singleVehicle/${data.vehicleId}`}>
            <div className={cx('img-car')}>
              <div className={cx('fix-img')}>
                <Image src={`../../../images/${data.image}`} />
              </div>
            </div>
          </Link>
          <div className={cx('desc-car')}>

            <div className={cx('desc-name')}>
              <p>{data.vehicleName}</p>
            </div>
            <div className={cx('desc-inf')}>
              <div className={cx('wrap-svg')}>
                <FontAwesomeIcon className={cx('chart-icon')} icon={faUser} />
              </div>
              <span className={cx('info')}>{data.store.nameStore}</span>
            </div>
            <div className={cx('desc-address')}>
              <div className={cx('address')}>
                <div className={cx('wrap-svg')}>
                  <FontAwesomeIcon className={cx('location-icon')} icon={faLocationDot} />
                </div>
                <p>{data.address.addressName}</p>
              </div>
            </div>
            <div className={cx('line')}></div>
          </div>

         
        </div>
      </div>
    </Link>
  );
}
AccountItem.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AccountItem;
