import type { PropsWithChildren } from "react";
import { join } from "../../shared/css/CssUtils";
import styles from "./Heading.module.css";

type HeadingProps = PropsWithChildren;

export const H1 = ({ children }: HeadingProps) => {
  return <h1 className={join(styles.h1)}>{children}</h1>;
};

export const H2 = ({ children }: HeadingProps) => {
  return <h2 className={join(styles.h2)}>{children}</h2>;
};

export const H3 = ({ children }: HeadingProps) => {
  return <h2 className={join(styles.h3)}>{children}</h2>;
};
