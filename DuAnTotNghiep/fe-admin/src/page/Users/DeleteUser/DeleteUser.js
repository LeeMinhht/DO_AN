import React, { useState } from 'react';
import axios from 'axios';
import classnames from "classnames/bind";
import styles from './DeleteUser.module.scss';

const cx = classnames.bind(styles);

function DeleteUser({ user, onDelete }) {
  const [isLocked, setIsLocked] = useState(user.isLocked);

  const handleToggleLock = () => {
    const confirmation = window.confirm(
      `Bạn có muốn ${isLocked ? "mở" : "khóa"} tài khoản này không?`
    );

    if (confirmation) {
      axios
        .post(`http://localhost:8080/customers/toggleLock/${user.cusUsername}`)
        .then(response => {
          setIsLocked(!isLocked); // Toggle trạng thái khóa/mở
          user.isLocked = !user.isLocked; // Cập nhật trạng thái trong đối tượng user
        })
        .catch(error => {
          console.error("Error toggling user lock:", error);
        });
    }
  };

  return (
    <button className={cx('btnDel')} onClick={handleToggleLock}>
      <img className={cx('img')} src='../image/icons8-close-window-48.png' alt='' />
      {isLocked ? "Mở" : "Khóa"}
    </button>
  );
}

export default DeleteUser;
