import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faSignOut,
  faUser,
  faRectangleList
} from "@fortawesome/free-solid-svg-icons";
// import Tippy from "@tippyjs/react";
import Tippy from "@tippyjs/react/headless";
import { Link } from "react-router-dom";
// import "tippy.js/dist/tippy.css"; // optional

import styles from "./Header.module.scss";
import images from "~/assets/images";

import config from "~/config";
import Button from "~/Component/Button";
import Menu from "~/Component/Poper/Menu";
import Image from "~/Component/Images";
import Search from "../Search";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import Notification from "~/Component/Notification/Notification";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia}></FontAwesomeIcon>,
    title: "English",
    children: {
      title: "Language 123",
      data: [
        {
          code: "en",
          title: "English",
        },
        {
          code: "vi",
          title: "Tiếng Việt",
        }
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion}></FontAwesomeIcon>,
    title: "Feedback andh help",
    to: "/feedback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard}></FontAwesomeIcon>,
    title: "Keyboard shortcuts",
  },
];

function Header({ searchHiden }) {
  // const currentUser = true;




  const handleMenuChange = (menuItem) => {
    console.log(menuItem);
  };

  const [cusUser, setCusUser] = useState(null)
  const [userName, setUsername] = useState(null)

  const storedUserData = localStorage.getItem('user');
  const parsedUserData = JSON.parse(storedUserData);

  //login
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const cus = localStorage.getItem("user")
    console.log(cus);
    if (cus != null) {
      setCusUser(cus)
      setUsername(parsedUserData.cusUsername)
      console.log(parsedUserData.cusUsername);

      setIsLoggedIn(true);
    } else {
      return;
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user'); // Thay 'user' bằng khóa bạn đã sử dụng

    console.log("logout1", isLoggedIn);
    window.location.href = `/login`
    // setIsLoggedIn(false)
  };



  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>,
      title: "Trang cá nhân",
      to: `/profile/${userName}`,
    },
    {
      icon: <FontAwesomeIcon icon={faRectangleList}></FontAwesomeIcon>,
      title: "Lịch sử thuê xe",
      to: `/history/${userName}`,
    },
    {
      icon: <FontAwesomeIcon icon={faGear}></FontAwesomeIcon>,
      title: "Settings",
      to: "/settings",
    },
    // ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut}></FontAwesomeIcon>,
      title: "Log out",
      to: "/logout",
      separate: true,
    },
  ];

  return (
    (
      <header className={cx("wrapper")}>
        <div className={cx("inner")}>
          <Link to={config.routes.home} className={cx("logo-link")} onClick={() => { window.scrollTo(0, 0) }}>
            <img src={images.logo1} alt="MIKKAA" className={cx('logo-img')}></img>
            <h3 className={cx('title-logo')}>Take you everywhere</h3>
          </Link>


          {searchHiden ? (null) : (<Search />)}

          <div className={cx("action")}>
            {/* {isLoggedIn ? ( */}
            <>
              {isLoggedIn ? (<div>{userName},
                <button onClick={handleLogout}>Đăng Xuất</button>,
                <Tippy
                  trigger="click"
                  interactive
                  placement="bottom-end"
                  delay={[0, 500]}
                  offset={[12, 8]}
                  render={() => {
                    return (
                      <div>
                        <Notification />
                      </div>
                    );
                  }}
                // onHide={handleResetToFirstPage}
                >
                  <button className={cx("action-btn")}>
                    <FontAwesomeIcon icon={faBell} />
                  </button>
                </Tippy> </div>) : 
                (
                <Button to={`/login`} className={cx('customer-store')}>
                  Đăng Nhập
                </Button>)
              }
                
                
            </>
            {/* ) : (
              <>
                <Button text>Upload</Button>
                <Button primary >Log in</Button>
              </>
            )} */}

            <Menu
              items={isLoggedIn ? MENU_ITEMS : userMenu}
              onChange={handleMenuChange}
            >
              {isLoggedIn ? (
                <Image
                  src="https://files.fullstack.edu.vn/f8-prod/user_photos/199187/627002074c706.jpg"
                  className={cx("user-avatar")}
                  alt="Le Van Minh"
                >

                </Image>
              ) : (

                <>
                  <Button to={'/regis'} >Register</Button>
                  <Button primary to={`/login`} >Log in</Button>
                </>
              )}
            </Menu>
          </div>
        </div>
      </header>
    )

  );
}

export default Header;
