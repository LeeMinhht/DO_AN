import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faCoins,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faSignOut,
  faUser,
  faBellSlash,
  faBell,
  faBellConcierge,
  faRectangleTimes,
  faRectangleList
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";
import { Link } from "react-router-dom";
import "tippy.js/dist/tippy.css"; // optional

import styles from "./Header.module.scss";
import images from "~/assets/images";

import config from "~/config";
import Button from "~/Component/Button";
import Menu from "~/Component/Poper/Menu";
import { BellIcon, MessageIcon, UploadIcon,changeBackgroundimage } from "~/Component/Icons";
import Image from "~/Component/Images";
import Search from "../Search";
import { FaBell } from "react-icons/fa";
import { useEffect, useState } from "react";
import axiosClient from "~/scrips/healper/axiosClient";

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

function Header({searchHiden}) {
  const currentUser = true;
 
  const [customer,setCustomer] = useState({})
  const [store,setStore] = useState([])

  const cusUsername = 'leminh'

  useEffect(() => {
    axiosClient.get(`http://localhost:8080/customers/findById/${cusUsername}`)
      .then((response) => {
        const data = response;
        setCustomer(data);
        console.log(data)
      })
      .catch(() => {
        console.log('không tìm thấy user')
      });
  }, [cusUsername]);

  //tìm kiếm store theo username
  useEffect(() => {
    axiosClient.get(`http://localhost:8080/store/findByCustomer/${cusUsername}`)
      .then((response) => {
        const data = response;
        setStore(data);
      })
      .catch(() => {
        console.log('không tìm thấy store')
      });
  }, []);

  //handle logic
  const handleMenuChange = (menuItem) => {
    console.log(menuItem);
  };

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>,
      title: "Trang cá nhân",
      to: "/profile/:cusUsername",
    },
    {
      icon: <FontAwesomeIcon icon={faRectangleList}></FontAwesomeIcon>,
      title: "Lịch sử thuê xe",
      to: `/history/${cusUsername}`,
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
  const username = 'leminh';

  return (
    (
      <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <Link to={config.routes.home} className={cx("logo-link")}>
          <img src={images.logo1} alt="MIKKAA" className={cx('logo-img')}></img>
          <h3 className={cx('title-logo')}>Take you everywhere</h3>
        </Link>
        

        {searchHiden?(null):(<Search />)}

        <div className={cx("action")}>
          {currentUser ? (
            <>
            {store.length()===0?(<Button className={cx('customer-store')}>Đăng kí cửa hàng</Button>):
            (<Button className={cx('customer-store')}>Cửa hàng của bạn</Button>)}
              <Tippy delay={[0, 200]} content="Message" placement="bottom">
                <button className={cx("action-btn")}>
                  {/* <UploadIcon /> */}
                  <BellIcon></BellIcon>

                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary >Log in</Button>
            </>
          )}

          <Menu
            items={currentUser ? userMenu : MENU_ITEMS}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <Image
                src="https://files.fullstack.edu.vn/f8-prod/user_photos/199187/627002074c706.jpg"
                className={cx("user-avatar")}
                alt="Le Van Minh"
              ></Image>
            ) : (
              <button className={cx("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
    )
    
  );
}

export default Header;
