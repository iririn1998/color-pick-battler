import { Button } from "@mantine/core";
import clsx from "clsx";
import type { FC } from "react";
import { FaStar } from "react-icons/fa";
import { HiLockClosed } from "react-icons/hi";
import { Text } from "../Text";
import styles from "./index.module.css";

export type StageButtonProps = {
  stageNumber: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  isLocked: boolean;
  stars: 0 | 1 | 2 | 3;
  onClick?: () => void;
};

export const StageButton: FC<StageButtonProps> = ({
  stageNumber,
  isLocked,
  stars,
  onClick,
}) => {
  return (
    <Button
      className={clsx(
        styles["stage-button"],
        isLocked ? styles["-locked"] : styles["-unlocked"],
      )}
      onClick={isLocked ? undefined : onClick}
      disabled={isLocked}
      variant="filled"
    >
      <div className={styles.content}>
        {isLocked ? (
          <>
            <HiLockClosed className={styles["lock-icon"]} />
            <div className={styles.stars}>
              {[0, 1, 2].map((index) => (
                <FaStar
                  key={index}
                  className={clsx(styles.star, styles.empty)}
                />
              ))}
            </div>
          </>
        ) : (
          <>
            <Text size="2xl" fw="bold" className={styles["stage-number"]}>
              {stageNumber}
            </Text>
            <div className={styles.stars}>
              {[0, 1, 2].map((index) => (
                <FaStar
                  key={index}
                  className={clsx(
                    styles.star,
                    index < stars ? styles.filled : styles.empty,
                  )}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </Button>
  );
};
