import styles from "./Input.module.css";
import type { InputHTMLAttributes } from "react";
import { join } from "../../shared/css/CssUtils";

export const Input = ({ ...props }: InputHTMLAttributes<HTMLInputElement>) => {
  return <input {...props} className={join(styles.input)} />;
};
