import {
  Text as MantineText,
  type TextProps as MantineTextProps,
} from "@mantine/core";
import clsx from "clsx";
import type { FC, ReactNode } from "react";
import styles from "./index.module.css";

export type TextProps = MantineTextProps & {
  children: ReactNode;
};

export const Text: FC<TextProps> = ({ children, className, ...props }) => {
  return (
    <MantineText {...props} className={clsx(styles.text, className)}>
      {children}
    </MantineText>
  );
};
