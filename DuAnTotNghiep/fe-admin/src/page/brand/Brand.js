import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Brand() {
    const [listBrand, setListBrand] = useState([])
  useEffect(() => {
    axios.get(`http://localhost:8080/brands/getAll`)
      .then(response => {
        setListVehicle(response.data);
      })
      .catch(error => {
        console.log("ERROR", error)
      })
  }, []);
  return (
    <div>
      
    </div>
  )
}

export default Brand
