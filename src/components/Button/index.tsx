import {
  Button as MantineButton,
  type ButtonProps as MantineButtonProps,
} from "@mantine/core";
import type { FC } from "react";

export type ButtonProps = MantineButtonProps;

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return <MantineButton {...props}>{children}</MantineButton>;
};
