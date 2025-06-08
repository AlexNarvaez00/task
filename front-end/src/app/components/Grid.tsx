import { join } from "../../shared/css/CssUtils";
import styles from "./Grid.module.css";
import type { PropsWithChildren } from "react";

interface GridProps extends PropsWithChildren {
  cols: number;
}

export const Grid = ({ cols, children }: GridProps) => {
  return (
    <section className={join(styles.grid, styles[`cols-${cols}`])}>
      {children}
    </section>
  );
};
