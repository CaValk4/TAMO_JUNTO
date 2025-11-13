import React, {ReactNode} from "react";
import styles from "./css/DefaultButton.module.css";

interface DefaultButtonProps {
  children?: ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit" | "reset";
}

function DefaultButton({
  children = "Default Button",
  className,
  type = "button",
  ...rest
}: DefaultButtonProps) {

  //Lógica para tratar os estilos do botão.
  const cls = [styles.button, className].filter(Boolean).join(" ");

  return (
    <button
      type={type}
      className={cls}
      {...rest}
    >
      {children}
    </button>
  );
}

export default DefaultButton;