import classNames from "classnames/bind";
import styles from './AccountPreview.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Button from "~/Component/Button";

const cx = classNames.bind(styles)

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/0c086c2bf834b6fb9984a62710e04ed9~c5_100x100.jpeg?x-expires=1684393200&x-signature=BxMJ7MyovfbeinldqN4453f5zyU%3D" alt=""></img>
                <Button className={cx('follow-btn')} primary>Follow</Button>
            </div>

            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>tranducnghia</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Trần Đức Nghĩa</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Follower</span>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Like</span>
                </p>

            </div>
        </div>
    );
}

export default AccountPreview;