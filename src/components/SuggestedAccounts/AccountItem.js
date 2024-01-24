import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountPreview from "./AccountPreview/AccountPreview";
import styles from "./SuggestedAccounts.module.scss";

const cx = classNames.bind(styles);

function AccountItem() {
  const renderPreview = (props) => {
    return (
      <div tabIndex="-1" {...props}>
        <PopperWrapper>
          <AccountPreview />
        </PopperWrapper>
      </div>
    );
  };

  return (
    <div>
      <Tippy
        interactive
        delay={[800, 0]}
        offset={[-20, 0]}
        placement="bottom"
        render={renderPreview}
      >
        <div className={cx("account-item")}>
          <img
            className={cx("avatar")}
            src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/167e85d0f26893b0fc184e46e16fb3df~c5_100x100.jpeg?biz_tag=tiktok_user.user_cover&lk3s=30310797&x-expires=1706148000&x-signature=wF%2BCNiV3CDac9%2FVWgUT8nKbaCN0%3D"
            alt=""
          />
          <div className={cx("item-info")}>
            <p className={cx("nickname")}>
              <strong>duynguyen2023</strong>
              <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
            </p>
            <p className={cx("name")}>Nguyễn Quý Khánh Duy</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

AccountItem.propTypes = {};

export default AccountItem;
