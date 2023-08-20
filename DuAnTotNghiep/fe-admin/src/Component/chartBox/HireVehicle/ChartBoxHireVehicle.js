import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

function ChartBoxVehicle() {
  const [vehicleCount, setVehicleCount] = useState(0);
  const [hireCount, setHireCount] = useState(0);

  useEffect(() => {
    // Gọi API "countVehicle" từ Java Controller để lấy tổng số lượng xe
    axios
      .get('http://localhost:8080/vehicle/countVehicle')
      .then(response => {
        setVehicleCount(response.data);
      })
      .catch(error => {
        console.error('Error fetching vehicle count:', error);
      });

    // Gọi API "countHire" từ Java Controller để lấy số xe đang được thuê
    axios
      .get('http://localhost:8080/hireVehicle/countHire')
      .then(response => {
        setHireCount(response.data);
      })
      .catch(error => {
        console.error('Error fetching hire count:', error);
      });
  }, []);

  const chartData = [
    { name: 'Tổng số xe', value: vehicleCount },
    { name: 'Số xe đang thuê', value: hireCount }
  ];

  const COLORS = ['#8884d8', '#82ca9d'];

  return (
    <div className="chartBox">
      <div className="boxInfor">
        <div className="title">
          Tổng số xe: {vehicleCount}
        </div>
        <div className="customerCount">
          Tổng số khách hàng: {hireCount}
        </div>
        <div className="view">Chi tiết</div>
      </div>

      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart width={400} height={400}>
              <Pie
                data={chartData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                // innerRadius={60}
                outerRadius={80}
                fill="#8884d8"
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
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="text" />
      </div>

    </div >
  );
}

export default ChartBoxVehicle;
