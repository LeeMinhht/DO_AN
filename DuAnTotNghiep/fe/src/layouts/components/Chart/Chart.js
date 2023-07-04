import { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import classNames from 'classnames/bind';
import styles from './Chart.module.scss'

const cx = classNames.bind(styles)

function Chart({ revenue }) {

    const [data, setData] = useState([]);

    useEffect(() => {
        const newData = revenue.map((item) => ({
            month: item.thang,
            revenue: item.totalMoney,
        }));
        setData(newData);
    }, [revenue]);

    const [activeIndex, setActiveIndex] = useState(null);

    const handleBarMouseOver = (data, index) => {
        setActiveIndex(index);
    };

    const handleBarMouseLeave = () => {
        setActiveIndex(null);
    };


    return (
        <BarChart width={900} height={350} className={cx('chart')} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" tickFormatter={(value) => `Tháng ${value}`} />
            <YAxis tickFormatter={(value) => value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })} width={120} />
            <Tooltip formatter={(value) => value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })} labelFormatter={(label) => `Tháng ${label}`} />
            <Legend />
            <Bar dataKey="revenue" name="Doanh thu" fill="#8884d8" onMouseOver={handleBarMouseOver}
                onMouseLeave={handleBarMouseLeave} />
        </BarChart>
    );
}

export default Chart;