import axios from 'axios';
import React, { useEffect, useState } from 'react'

function TopVehicleHire() {

    const [topHire, setTopHire] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:8080/hireVehicle/top-rented-vehicles`)
            .then(response => {
                setTopHire(response.data);
            })
            .catch(error => {
                console.log("ERROR", error)
            })
    }, []);


  return (
    <div>
      <table class="table table-striped table-inverse table-responsive">
        <thead class="thead-inverse">
            <tr>
                <th>Tên Xe</th>
                <th>Sô lượng thuê</th>
                
            </tr>
            </thead>
            <tbody>
                {topHire.map(item =>(
                    <tr>
                   
                    <th>{item.vehicleName}</th>
                    <th>{item.totalRentals}</th>
                </tr>
                ))}
                
               
            </tbody>
      </table>
    </div>
  )
}

export default TopVehicleHire
