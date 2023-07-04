import classNames from "classnames/bind";
import styles from "./Revenue.module.scss";

import Chart from "~/layouts/components/Chart/Chart";
import SidebarStore from "~/layouts/components/SidebarStore/SidebarStore";
import { useEffect, useState } from "react";
import axiosClient from "~/scrips/healper/axiosClient";
import RevenueVehicle from "./RevenueVehicle/RevenueVehicle";
import { useParams } from "react-router-dom";
import AllRevenueVehicle from "./AllRevenueVehicle/AllRevenueVehicle";

const cx = classNames.bind(styles);

function Revenue() {
    const [store, setStore] = useState({});
    const [revenue, setRevenue] = useState([]);

    const {storeId} = useParams();

    //tìm kiếm store theo storeId
    useEffect(() => {
        axiosClient.get(`http://localhost:8080/store/getById/${storeId}`)
            .then((response) => {
                const data = response;
                setStore(data);
                console.log(data);
            })
            .catch(() => {
                console.log('error')
            });
    }, []);

    useEffect(() => {
        axiosClient.get(`http://localhost:8080/hireVehicle/revenue`)
            .then((response) => {
                const data = response;
                setRevenue(data);
            })
            .catch(() => {
                console.log('error')
            });
    }, []);

    


    return (
        <div className={cx("wrapper-revenue")}>
            <div className={cx("revenue-container")}>
                <div className={cx("store-sidebar")}>
                    <SidebarStore store={store} />
                </div>

                <div className={cx('content-revenue')}>
                    <div className={cx('content-monthRevenue')}>
                        <div className={cx('title')}>
                            <h2 >Biểu đồ doanh thu</h2>
                        </div>
                        <Chart revenue={revenue} />
                    </div>
                    <div className={cx('content-monthRevenue')}>
                        <div className={cx('title')}>
                            <h2 >Doanh thu theo tháng</h2>
                            
                        </div>
                        <div className={cx('monthRevenue-body')}>
                            <RevenueVehicle />
                        </div>
                    </div>

                    <div className={cx('content-monthRevenue')}>
                        <div className={cx('title')}>
                            <h2 >Doanh thu chi tiết từng xe</h2>
                            
                        </div>
                        <div className={cx('monthRevenue-body')}>
                            <AllRevenueVehicle  />
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Revenue;
