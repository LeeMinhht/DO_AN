import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { Wrapper as PopperWrapper } from '~/Component/Poper';
import AccountPreview from './AccountPreview';
import styles from './SuggestedAccounts.module.scss'


const cx = classNames.bind(styles)
function AccountItem() {

    const renderPreview = (props) => {
        return (
            <div tabIndex='-1' {...props}>
                <PopperWrapper>
                    <AccountPreview></AccountPreview>
                </PopperWrapper>
            </div>
        )
    }
    return ( 
        <div>
            <Tippy
            interactive
            offset={[-20,0]}
            placement='bottom'
            delay={[800,0]}
            render={renderPreview}
            >
                <div className={cx('account-item')}>
                    <img
                        className={cx('avatar')}
                        src='https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-giso/69f71a8f50bddd1009b0c05016bab0dd~c5_100x100.jpeg?x-expires=1684501200&x-signature=w%2BCczDk4kHRzv7inTZDNlqW3gx4%3D' alt=''>  
                    </img>
                    <div className={cx('item-info')}>
                        <p className={cx('nickname')}>
                            <strong>pv_truong9999</strong>
                            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                        </p>
                        <p className={cx('name')}>Phan Trường</p>
                    </div>
                </div>
            </Tippy>
        </div>
     );
}

AccountItem.propTypes = {
    
}

export default AccountItem;