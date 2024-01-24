import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import Button from "~/components/Button";
import styles from "./AccountPreview.module.scss";

const cx = classNames.bind(styles);

function AccountPreview() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <img
          className={cx("avatar")}
          src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/167e85d0f26893b0fc184e46e16fb3df~c5_100x100.jpeg?biz_tag=tiktok_user.user_cover&lk3s=30310797&x-expires=1706148000&x-signature=wF%2BCNiV3CDac9%2FVWgUT8nKbaCN0%3D"
          alt=""
        />
        <Button className={cx("follow-btn")} primary>
          Follow
        </Button>
      </div>
      <div className={cx("body")}>
        <p className={cx("nickname")}>
          <strong>duynguyen2023</strong>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </p>
        <p className={cx("name")}>Nguyễn Quý Khánh Duy</p>
        <p className={cx("analytics")}>
          <strong className={cx("value")}>8.2M </strong>
          <span className={cx("label")}>Followers</span>
          <strong className={cx("value")}>8.2M </strong>
          <span className={cx("label")}>Likes</span>
        </p>
      </div>
    </div>
  );
}

export default AccountPreview;
