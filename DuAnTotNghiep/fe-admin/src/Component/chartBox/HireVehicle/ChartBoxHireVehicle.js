import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import classnames from "classnames/bind";
import styles from './ChartBox.module.scss'

const cx = classnames.bind(styles)

function ChartBoxVehicle() {
  const [vehicleCount, setVehicleCount] = useState(0);
  const [hireCount, setHireCount] = useState(0);

  useEffect(() => {
    axios
      .get('http://localhost:8080/vehicle/countVehicle')
      .then(response => {
        setVehicleCount(response.data);
      })
      .catch(error => {
        console.error('Error fetching vehicle count:', error);
      });

    axios
      .get('http://localhost:8080/hireVehicle/countHire')
      .then(response => {
        setHireCount(response.data);
      })
      .catch(error => {
        console.error('Error fetching hire count:', error);
      });
  }, []);

  // Tính phần trăm số xe đang thuê và số xe còn lại
  const hiredPercentage = (hireCount / vehicleCount) * 100;
  const availablePercentage = 100 - hiredPercentage;

  const chartData = [
    { name: 'Đang thuê', value: hiredPercentage },
    { name: 'Còn lại', value: availablePercentage }
  ];

  const COLORS = ['#82ca9d', '#8884d8'];

  return (
    <div className={cx("chartBox")}>
      <div className={cx("boxInfor")}>
        <div className={cx("title")}>
          Tổng số xe: {vehicleCount}
        </div>
        <div className={cx("title")}>
          Số Xe đã được thuê: {hireCount}
        </div>
      </div>

      <div >
        <div className={cx("chart")}>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart width={400} height={400}>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                stroke="none"
                labelLine={false}
                label={({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
                  const RADIAN = Math.PI / 180;
                  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
                  const x = cx + radius * Math.cos(-midAngle * RADIAN);
                  const y = cy + radius * Math.sin(-midAngle * RADIAN);

                  return (
                    <text
                      x={x}
                      y={y}
                      fill="#000"
                      textAnchor={x > cx ? 'start' : 'end'}
                      dominantBaseline="central"
                    >
                      {`${(percent * 100).toFixed(0)}%`}
                    </text>
                  );
                }}
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="text" />
      </div>
    </div>
  );
}

export default ChartBoxVehicle;
