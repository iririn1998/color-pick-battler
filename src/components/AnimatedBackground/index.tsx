import type { FC, ReactNode } from "react";
import styles from "./index.module.css";

export type AnimatedBackgroundProps = {
  children: ReactNode;
};

export const AnimatedBackground: FC<AnimatedBackgroundProps> = ({
  children,
}) => {
  return (
    <div className={styles.animatedBackground}>
      {/* 浮遊粒子 */}
      <div className={styles.particle}></div>
      <div className={styles.particle}></div>
      <div className={styles.particle}></div>
      <div className={styles.particle}></div>
      <div className={styles.particle}></div>
      <div className={styles.particle}></div>
      <div className={styles.particle}></div>
      <div className={styles.particle}></div>
      {/* 子要素 */}
      <div className={styles.container}>{children}</div>
    </div>
  );
};
