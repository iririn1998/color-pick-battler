import { Text as MantineText, type TextProps as MantineTextProps } from "@mantine/core";
import type { FC, ReactNode } from "react";
import styles from "./index.module.css";

export type TextProps = MantineTextProps & {
    children: ReactNode;
};

export const Text: FC<TextProps> = ({ children, ...props }) => {
  return <MantineText {...props} className={styles.text}>{children}</MantineText>;
};
