import type { PropsWithChildren } from "react";
import { Link } from "react-router";
import { join } from "../../shared/css/CssUtils";
import styles from "./Button.module.css";

interface ButtonProps extends PropsWithChildren {
  variant?: string;
  to: string;
}

export const ButtonLink = ({ to, variant, children }: ButtonProps) => {
  return (
    <Link
      to={to}
      className={join(styles.button, variant ? styles[variant] : "")}
    >
      {children}
    </Link>
  );
};
