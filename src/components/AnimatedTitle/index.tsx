import { Text } from "@mantine/core";
import type { FC } from "react";
import styles from "./index.module.css";

export type AnimatedTitleProps = {
  children: string;
};

export const AnimatedTitle: FC<AnimatedTitleProps> = ({ children }) => {
  return (
    <div className={styles.titleContainer}>
      <Text className={`${styles.animatedTitle} ${styles.titleGlow}`}>
        {children}
      </Text>
    </div>
  );
};
