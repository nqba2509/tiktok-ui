import classNames from "classnames/bind";
import styles from "./Button.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  primary = false,
  outline = false,
  text = false,
  disabled = false,
  rounded = false,
  medium = false,
  large = false,
  children,
  leftIcon,
  rightIcon,
  onClick,
  ...passProps
}) {
  let Comp = "button"; //Mặc định là thẻ <Button>
  const props = { onClick, ...passProps }; // có props là 1 onCLick , ...passProps(tất cả các props pass vào)

  if (disabled) {
    delete props.onCLick;
  }

  if (to) {
    props.to = to; //props là to
    Comp = Link; // khi props là to thì sẻ thành thẻ <Link>
  } else if (href) {
    props.href = href; //props là href
    Comp = "a"; // khi props là href thì sẻ thành thẻ <a>
  }

  const classes = cx("wrapper", {
    primary,
    outline,
    text,
    rounded,
    disabled,
    large,
    medium,
  });

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
      <span className={cx("title")}>{children}</span>
      {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
    </Comp>
  );
}

export default Button;
