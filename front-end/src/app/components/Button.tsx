import type { PropsWithChildren } from "react";
import { join } from "../../shared/css/CssUtils";
import styles from "./Button.module.css";

interface ButtonProps extends PropsWithChildren {
  variant?: string;
}

export const Button = ({ variant, children }: ButtonProps) => {
  return (
    <button className={join(styles.button, variant ? styles[variant] : "")}>
      {children}
    </button>
  );
};
