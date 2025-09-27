import { Center } from "@mantine/core";
import type { FC, ReactNode } from "react";
import styles from "./index.module.css";

export type FrameProps = {
  children: ReactNode;
};

export const Frame: FC<FrameProps> = ({ children }) => {
  return <Center className={styles.frame}>{children}</Center>;
};
