import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {  XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';


function ChartBox() {
  const [storeCount, setStoreCount] = useState(0);
  const [customerCount, setCustomerCount] = useState(0);

  useEffect(() => {
    // Gọi API "countStore" từ Java Controller để lấy tổng số cửa hàng
    axios
      .get('http://localhost:8080/store/countStore')
      .then(response => {
        setStoreCount(response.data);
      })
      .catch(error => {
        console.error('Error fetching store count:', error);
      });

    // Gọi API "getAll" từ Java Controller để lấy danh sách khách hàng
    axios
      .get('http://localhost:8080/customers/countCus')
      .then(response => {
        setCustomerCount(response.data);
      })
      .catch(error => {
        console.error('Error fetching cus count:', error);
      });
  }, []);

  const chartData = [
    { name: 'Cửa hàng', value: storeCount },
    { name: 'Khách hàng', value: customerCount }
  ];

  return (
    <div className="chartBox">
      <div className="boxInfo" />
      <div className="title">Tổng số cửa hàng: {storeCount}</div>
      <div className="customerCount">Tổng số khách hàng: {customerCount}</div>
      <div className="view">Chi tiết</div>
      <div className="chartInfo">
        <div className="chart">
        <ResponsiveContainer width="100%" height={100}>
            <LineChart data={chartData}>
              <XAxis dataKey="name" hide />
              <YAxis hide />
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="text" />
      </div>
    </div>
  );
}

export default ChartBox;
