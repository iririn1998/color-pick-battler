import { Button } from "@mantine/core";
import clsx from "clsx";
import type { ComponentProps, FC, MouseEventHandler } from "react";
import type { IconType } from "react-icons";
import styles from "./index.module.css";

export type NavigationButtonProps = Omit<
  ComponentProps<typeof Button>,
  "children"
> & {
  icon: IconType;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

export const NavigationButton: FC<NavigationButtonProps> = ({
  icon: Icon,
  className,
  ...rest
}) => {
  return (
    <Button
      {...rest}
      className={clsx(styles.navigationButton, className)}
      variant="filled"
    >
      <Icon className={styles.icon} />
    </Button>
  );
};
