import axios from "axios";
import { useEffect, useState } from "react";
import classNames from 'classnames/bind'
import styles from './ListStore.module.scss'
import 'bootstrap/dist/css/bootstrap.css';

const cx = classNames.bind(styles)


function ListStore() {
    const [listStore, setListStore] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8080/store/getAll`)
            .then(reponse => {
                setListStore(reponse.data);
            })
            .catch(error => {
                console.log("ERROR");
            });
    }, []);
    //format
    function formatDate(dateString) {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(dateString).toLocaleDateString('vi-VN', options);
    }
    function formatCurrency(amount) {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
    }
    return (<div>


        <div className={cx('listStore')}>
            <div className={cx('box-table')}>
                <table className={cx('table')}>
                    <thead className={cx('thead')}>
                        <tr className={cx('tr')}>
                            {/* <th className={cx('th')}>StoreId</th> */}
                            <th className={cx('th')}>Tên cửa hàng</th>
                            <th className={cx('th')}>Tên Khách Hàng</th>
                            <th className={cx('th')}>Địa chỉ</th>
                            <th className={cx('th')}>Ngày tạo</th>
                            <th className={cx('th')}>Doanh thu</th>
                            {/* <th>Action</th> */}
                        </tr>
                    </thead>
                    <tbody className={cx('tbody')}>
                        {listStore.map(item => (
                            <tr>
                                {/* <th>{item.storeId}</th> */}

                                <th>{item.nameStore}</th>
                                <td> {item.customer.fullname}</td>
                                <td>{item.address.addressName}</td>
                                <td>{formatDate(item.createDate)}</td>
                                <td>{formatCurrency(item.identityCard)}</td>
                                {/* <td>
                                    <button type="button" class="btn btn-outline-dark">X</button>

                                    <button type="button" class="btn btn-outline-primary">Edit</button>

                                </td> */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>


    </div >);
}

export default ListStore;
