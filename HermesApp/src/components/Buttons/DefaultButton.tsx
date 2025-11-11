import React from "react";
import styles from "./DefaultButton.module.css";

interface DefaultButtonProps {
  label?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
}

function DefaultButton({
  label = "Default Button",
  className,
  ...rest
}: DefaultButtonProps) {
  const cls = [styles.button, className].filter(Boolean).join(" ");
  return (
    <button className={cls} {...rest}>
      {label}
    </button>
  );
}

export default DefaultButton;
