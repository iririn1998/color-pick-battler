import type { FC, ReactNode } from "react";
import styles from "./index.module.css";

export type StageBackgroundProps = {
  children: ReactNode;
};

export const StageBackground: FC<StageBackgroundProps> = ({ children }) => {
  return (
    <div className={styles.stageBackground}>
      <div className={styles.sky}></div>
      <div className={styles.hills}></div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};
