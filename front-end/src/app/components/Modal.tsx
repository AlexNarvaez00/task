import { join } from "../../shared/css/CssUtils";
import styles from "./Modal.module.css";
import type { PropsWithChildren } from "react";

export const Modal = ({ children }: PropsWithChildren) => {
  return <section className={join(styles.modal)}>{children}</section>;
};
