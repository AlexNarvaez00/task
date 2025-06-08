import { join } from "../../shared/css/CssUtils";
import styles from "./Input.module.css";
import type { SelectHTMLAttributes } from "react";

export const Select = ({
  children,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement>) => {
  return (
    <select {...props} className={join(styles.input)}>
      {children}
    </select>
  );
};
