// Users.js
import React, { useEffect, useState } from 'react';
import classnames from "classnames/bind";
import styles from './Users.module.scss';
import { useTable } from 'react-table';
import axios from 'axios';
import DeleteUser from './DeleteUser/DeleteUser';


const cx = classnames.bind(styles);


function formatPhoneNumber(phoneNumber) {
  if (!phoneNumber) return '';
  const cleanedNumber = phoneNumber.replace(/\D/g, '');

  // Tách số điện thoại thành các phần: [prefix, middle, suffix]
  const prefix = cleanedNumber.substring(0, 4);    
  const middle = cleanedNumber.substring(4, 7);    
  const suffix = cleanedNumber.substring(7);      

  // Kết hợp các phần thành số điện thoại định dạng "prefix middle suffix"
  return `${prefix} ${middle} ${suffix}`;
}

function formatLicense(license) {
  if (!license) return '';
  const cleanedLicense = license.replace(/\D/g, '');

  // Tách số GPLX thành các phần: [prefix, middle, suffix]
  const prefix = cleanedLicense.substring(0, 4);    // Example: 1234
  const middle = cleanedLicense.substring(4, 7);    // Example: 567
  const suffix = cleanedLicense.substring(7);       // Example: 890

  // Kết hợp các phần thành số GPLX định dạng "prefix middle suffix"
  return `${prefix} ${middle} ${suffix}`;
}

function formatIdentityCard(identityCard) {
  if (!identityCard) return '';
  const cleanedIdentityCard = identityCard.replace(/\D/g, '');

  // Tách số CMND thành các phần: [prefix, middle, suffix]
  const prefix = cleanedIdentityCard.substring(0, 3);    // Example: 123
  const middle = cleanedIdentityCard.substring(3, 6);    // Example: 456
  const suffix = cleanedIdentityCard.substring(6);       // Example: 789

  // Kết hợp các phần thành số CMND định dạng "prefix middle suffix"
  return `${prefix} ${middle} ${suffix}`;
}

function Users() {
  const [userData, setUserData] = useState([]);
  // const [storeData,setStore] = useState([]);
  useEffect(() => {
    // Gọi API "getAll" từ Java Controller để lấy danh sách người dùng
    axios
      .get('http://localhost:8080/customers/getAll')
      .then(response => {
        // Sau khi có dữ liệu người dùng, lấy thông tin cửa hàng cho từng người dùng và cập nhật state userData.
        const usersWithStoreData = response.data.map(async user => {
          try {
            const storeResponse = await axios.get(`http://localhost:8080/store/findByCustomer/${user.cusUsername}`);
            user.storeNames = storeResponse.data.map(store => store.nameStore).join(', ');
          } catch (error) {
            console.error('Lỗi khi lấy dữ liệu cửa hàng cho người dùng:', error);
            user.storeNames = 'Không có cửa hàng';
          }
          return user;
        });

        Promise.all(usersWithStoreData)
          .then(updatedUserData => {
            setUserData(updatedUserData);
          })
          .catch(error => {
            console.error('Lỗi khi cập nhật dữ liệu người dùng với thông tin cửa hàng:', error);
          });
      })
      .catch(error => {
        console.error('Lỗi khi lấy dữ liệu người dùng:', error);
      });
  }, []);

  const handleSoftDelete = (cusId) => {
    axios.delete(`http://localhost:8080/customers/lockCustomer/${cusId}`)
      .then(response => {
        // Xóa thành công, cập nhật danh sách người dùng
        fetchUserData();
      })
      .catch(error => {
        console.error("Error deleting user:", error);
      });
  };


  const columns = React.useMemo(
    () => [
      { Header: 'ID', accessor: 'cusUsername' },
      { Header: 'Họ và tên', accessor: 'fullname' },
      { Header: 'Email', accessor: 'email' },
      { Header: 'Điện Thoại', accessor: 'phone', Cell: ({ value }) => formatPhoneNumber(value) },
      {
        Header: 'Giới tính',
        accessor: 'gender',
        Cell: ({ value }) => (value === false ? 'Nam' : 'Nữ'),
      },
      {
        Header: 'Địa chỉ',
        accessor: 'address.addressName',
      },
      {
        Header: 'Số CMND',
        accessor: 'identityCard',
        Cell: ({ value }) => formatIdentityCard(value),
      },
      {
        Header: 'Số GPLX',
        accessor: 'license',
        Cell: ({ value }) => formatLicense(value),
      },
      {
        Header: 'Tên cửa hàng',
        accessor: 'storeNames',
        Cell: ({ value }) => value || 'Chưa có cửa hàng',
      },
      {
        Header: 'Khóa Tài Khoản',
        Cell: ({ value, row }) => (
          <DeleteUser user={row.original} onDelete={fetchUserData} />
        ),
      },
      // Thêm các cột khác nếu cần
    ],
    []
  );

  const fetchUserData = () => {
    // Gọi lại API "getAll" để cập nhật lại danh sách người dùng sau khi xóa
    axios
      .get('http://localhost:8080/customers/getAll')
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  };

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data: userData });

  return (
    <div className={cx('userTable')}>
      <table {...getTableProps()} className={cx('table')}>
        <thead className={cx('userthead')}>
          {headerGroups.map(headerGroup => (
            <tr className={cx('usertr')} {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th className={cx('userth')} {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className={cx('usertbody')} {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr className={cx('usertr')} {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td className={cx('usertd')} {...cell.getCellProps()}>
                      {cell.column.id === "delete" ? (
                        <DeleteUser userId={row.original.cusUsername} onDelete={handleSoftDelete} />
                      ) : (
                        cell.render('Cell')
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
