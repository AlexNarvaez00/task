import { join } from "../../shared/css/CssUtils";
import styles from "./Input.module.css";
import type { TextareaHTMLAttributes } from "react";

type TextAreaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextArea = ({ children, className, ...props }: TextAreaProps) => {
  return (
    <textarea {...props} className={join(styles.input, className ?? "")}>
      {children}
    </textarea>
  );
};
