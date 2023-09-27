import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("avatar")}
        src="https://p16-sign-useast2a.tiktokcdn.com/tos-useast2a-avt-0068-aiso/9af69780bdb9b1fc9c2382c00c0f42f0~c5_100x100.jpeg?x-expires=1695970800&x-signature=%2BIFKTAMlS424H8WfemeVelznufA%3D"
        alt="Name"
      />
      <div className={cx("info")}>
        <h4 className={cx("name")}>
          <span>Nguyen Quy Bao An</span>
          <FontAwesomeIcon className={cx("check-icon")} icon={faCheckCircle} />
        </h4>
        <span className={cx("username")}>annguyen</span>
      </div>
    </div>
  );
}

export default AccountItem;
