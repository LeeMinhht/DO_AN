import classNames from "classnames/bind";
import styles from './AllRevenueVehicle.module.scss'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosClient from "~/scrips/healper/axiosClient";
import RevenueVehicleItem from "~/layouts/components/RevenueVehicleItem/RevenueVehicleItem";

const cx = classNames.bind(styles)
function AllRevenueVehicle() {
    const [revenueVehicle, setRevenueVehicle] = useState([])


    const { storeId } = useParams();

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    
    const [month, setMonth] = useState(currentMonth)

    useEffect(() => {
        axiosClient.get(`http://localhost:8080/hireVehicle/getRevenueVehicle/${storeId} `)
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
            
            {revenueVehicle.map((revenue, index) => {
                return (
                    <RevenueVehicleItem revenue={revenue} mon/>
                )
            })}
        </div>
    );
}

export default AllRevenueVehicle;