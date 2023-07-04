import PropTypes from 'prop-types';
import Sidebar from "~/layouts/components/Sidebar";
import Header from "~/layouts/components/Header";

import classNames from "classnames/bind";
import styles from './DefaultLayout.module.scss'
import Footer from '../components/Footer/Footer';
import { render } from '@testing-library/react';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
   
    return (
        <div className={cx('wrapper')}>
            <Header></Header>
            <div className={cx('container')}>
                {/* <Sidebar></Sidebar> */}
                <div className={cx('content')}>
                    {children}
                </div>

            </div>

            <Footer></Footer>
        </div>
    );
    


}
DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,

}

export default DefaultLayout;