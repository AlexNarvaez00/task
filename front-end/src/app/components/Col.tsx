import styles from "./Col.module.css";
import type { PropsWithChildren } from "react";

interface ColProps extends PropsWithChildren {
  span?: number;
}

export const Col = ({ span = 1, children }: ColProps) => {
  return <div className={styles[`col-span-${span}`]}>{children}</div>;
};
