import type { FC } from "react";
import { Text } from "../Text";
import styles from "./index.module.css";

interface StageTitleBannerProps {
  title: string;
}

export const StageTitleBanner: FC<StageTitleBannerProps> = ({ title }) => {
  return (
    <div className={styles.banner}>
      <Text size="xl" fw="bold" className={styles.title}>
        {title}
      </Text>
    </div>
  );
};
