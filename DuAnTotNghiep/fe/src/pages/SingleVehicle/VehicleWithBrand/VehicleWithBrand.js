import classNames from "classnames/bind";
import styles from './VehicleWithBrand.module.scss'
import { Link,useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axiosClient from "~/scrips/healper/axiosClient";
import Image from "~/Component/Images";
import images from "~/assets/images";
import ProductItem from "~/Component/ProductItem/ProductItem";

const cx = classNames.bind(styles)

function VehicleWithBrand() {
    
    const {vehicleId} = useParams();
    const [vehicles,setVehicles] = useState([])

    const [brandId,setBrandId] = useState("")
    


        //tìm kiếm brandId theo vehicleId
        useEffect(() => {
            axiosClient.get(`http://localhost:8080/vehicle/findBrandIdByVehicleId/${vehicleId}`)
                .then((response) => {
                    const data = response;
                    setBrandId(data);

                })
                .catch(() => {
                    console.log("khong tim thay brandId");
    
                });
        }, []);
        
        console.log(brandId)
        //tìm kiếm vehicles theo brandId
        useEffect(() => {
            console.log(brandId)
            axiosClient.get(`http://localhost:8080/vehicle/findVehicleWithBrand/${brandId}`)
                .then((response) => {
                    const data = response;
                    setVehicles(data);
                    console.log(data);
                })
                .catch(() => {
                    console.log("khong tim thay vehicle");
    
                });
        }, [brandId]);

    
    return ( 
        <div className={cx('wrapper')}>
            {vehicles.map((vehicle,index) =>{
                return (
                    <ProductItem
                        key={index}
                        vehicle={vehicle}
                    />
                )
            })}

        </div>
     );
}

export default VehicleWithBrand;