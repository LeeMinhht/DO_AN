import React, { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import axios from "axios";
import classnames from "classnames/bind";
import styles from './ChartBoxMoney.module.scss'

const cx = classnames.bind(styles)

const RevenueChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Gọi API để lấy dữ liệu doanh thu từ server
    axios.get("http://localhost:8080/store/revenues")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Đảm bảo có đủ 12 tháng trong data để hiển thị
  const completeData = [];
  for (let month = 1; month <= 12; month++) {
    const monthData = data.find(item => item.month === month) || {
      year: new Date().getFullYear(),
      month: month,
      totalRevenue: 0
    };
    completeData.push(monthData);
  }
  const tooltipFormatter = (value, name) => {
    if (name === "totalRevenue" && value !== undefined) {
      return ["Doanh thu", value];
    }
    return [name, value];
  };
  function formatCurrency(amount) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
}

 // Hàm kết hợp cả hai định dạng
 const combineFormatters = (value, name) => {
  const currencyFormatted = formatCurrency(value);
  const tooltipFormatted = tooltipFormatter(currencyFormatted, name); // Gọi hàm tooltipFormatter
  return tooltipFormatted;
};
  return (
    <BarChart  width={400} height={300} data={completeData}>
      {/* <CartesianGrid strokeDasharray="3 3" /> */}
      <XAxis dataKey="month" />
      <YAxis tickFormatter={formatCurrency} fontSize={12}/>
      <Tooltip  formatter={(value, name) => combineFormatters(value, name)}  />
      <Bar  dataKey="totalRevenue" fill="#8884d8"  />
    </BarChart>
  );
};

export default RevenueChart;
