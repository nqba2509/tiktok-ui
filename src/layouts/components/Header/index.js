import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudUpload,
  faCoins,
  faSignOut,
  faEllipsisVertical,
  faGear,
  faEarthAsia,
  faKeyboard,
  faCircleQuestion,
  faUser,
  faMessage,
  faEnvelope,
  // faSignIn,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import classNames from "classnames/bind";

import Button from "~/components/Button";
import styles from "./Header.module.scss";
import images from "~/assets/image";
import Menu from "~/components/Popper/Menu";
import Search from "../Search";
import routesConfig from "~/config/routes";
import Image from "~/components/Image";

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: "Language",
    children: {
      title: "Language",
      data: [
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vn",
          title: "Tiếng Việt",
        },
        {
          type: "language",
          code: "cn",
          title: "Chinese",
        },
        {
          type: "language",
          code: "kr",
          title: "Korean",
        },
        {
          type: "language",
          code: "es",
          title: "Spain",
        },
        {
          type: "language",
          code: "tr",
          title: "Turkey",
        },
        {
          type: "language",
          code: "jp",
          title: "Japan",
        },
        {
          type: "language",
          code: "ca",
          title: "Canada",
        },
        {
          type: "language",
          code: "id",
          title: "Indonesia",
        },
        {
          type: "language",
          code: "it",
          title: "Italy",
        },
        {
          type: "language",
          code: "my",
          title: "Malaysia",
        },
        {
          type: "language",
          code: "nz",
          title: "New Zealand",
        },
        {
          type: "language",
          code: "th",
          title: "Thailand",
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: "Feedback and Help",
    to: "/feedback",
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: "Keybroad shortcuts",
  },
];

function Header() {
  const currentUser = true;

  //Handle Logic
  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case "language":
        //handle change language
        break;
      default:
    }
  };

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: "View profile",
      to: "/@hoaa",
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: "Get coins",
      to: "/coin",
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: "Settings",
      to: "/settings",
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: "Log out",
      to: "/logout",
      separate: true,
    },
  ];

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <div>
          <Link to={routesConfig.home} className={cx("logo-link")}>
            <img src={images.logo} alt="Tiktok" />
          </Link>
        </div>

        <Search />

        <div className={cx("actions")}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 50]} content="Upload video" placement="bottom">
                <button className={cx("action-btn")}>
                  <FontAwesomeIcon icon={faCloudUpload} />
                </button>
              </Tippy>
              <Tippy delay={[0, 50]} content="Message" placement="bottom">
                <button className={cx("action-btn")}>
                  <FontAwesomeIcon icon={faMessage} />
                </button>
              </Tippy>
              <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                <button className={cx("action-btn")}>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span className={cx("badge")}>12</span>
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Log in</Button>
            </>
          )}

          <Menu
            items={currentUser ? userMenu : MENU_ITEMS}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <Image
                className={cx("user-avatar")}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNFNKRIlelCDL2fF-rzzxdy4vQVU6xMQ--OQ&usqp=CAU"
                alt="avatar"
              ></Image>
            ) : (
              <button className={cx("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
