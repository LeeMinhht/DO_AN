import classNames from "classnames/bind";
import styles from './RevenueVehicle.module.scss'
import { useEffect, useState } from "react";
import axiosClient from "~/scrips/healper/axiosClient";
import { Link, useParams } from "react-router-dom";
import Image from "~/Component/Images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faLocationDot, faUser } from "@fortawesome/free-solid-svg-icons";
import RevenueVehicleItem from "~/layouts/components/RevenueVehicleItem/RevenueVehicleItem";

const cx = classNames.bind(styles)
function RevenueVehicle() {
    const [revenueVehicle, setRevenueVehicle] = useState([])


    const { storeId } = useParams();

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    
    const [month, setMonth] = useState(currentMonth)

    useEffect(() => {
        axiosClient.get(`http://localhost:8080/hireVehicle/revenueByMonth/${month},${storeId} `)
            .then((response) => {
                const data = response;
                setRevenueVehicle(data);
            })
            .catch(() => {
                console.log('error')
            });
    }, [month]);

    const handleSelectStatus = (e) => {
        const searchValue = e.target.value;

        if (!searchValue.startsWith(' ')) {
            setMonth(searchValue)
        }
    }
    return (
        <div className={cx('wrapper-RevenueVehicle')}>
            <div className={cx('filter-status')}>
                <p>Tháng: </p>
                <div className={cx('custom-select')}>
                    <select onChange={handleSelectStatus} defaultValue={currentMonth}>
                        {[...Array(12)].map((_, index) => (
                            <option key={index} value={index + 1}>{index + 1}</option>
                        ))}

                    </select>
                </div>
            </div>
            {revenueVehicle.map((revenue, index) => {
                return (
                    <RevenueVehicleItem revenue={revenue} mon/>
                )
            })}
        </div>
    );
}

export default RevenueVehicle;