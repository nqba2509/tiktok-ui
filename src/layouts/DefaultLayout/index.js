import Header from "~/layouts/components/Header";
import styles from "./DefaultLayout.module.scss";
import Sidebar from "~/layouts/components/Sidebar/Sidebar";
import classNames from "classnames/bind";
import PropType from "prop-types";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <Sidebar />
        <div className={cx("content")}>{children}</div>
      </div>
    </div>
  );
}

DefaultLayout.prototype = {
  children: PropType.node.isRequired,
};

export default DefaultLayout;
