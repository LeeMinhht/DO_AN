import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Store({ cusUsername ="nghia" }) {
  const [nameStore, setStoreName] = useState('Chưa có cửa hàng');

  useEffect(() => {
    console.log('cusUsername:', cusUsername); // Kiểm tra giá trị của cusUsername
    // Gọi API để lấy thông tin cửa hàng cho khách hàng với cusUsername
    axios
      .get(`http://localhost:8080/store/findByCustomer/${cusUsername}`)
      .then(response => {
        if (response.data) {
          setStoreName(response.data.nameStore);
        
        }
      })
      .catch(error => {
        console.error('Error fetching store data:', error);
      });
  }, [cusUsername]);

  return <span>{nameStore}</span>;
}

export default Store;
