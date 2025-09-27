import type { Meta, StoryObj } from "@storybook/react";
import { Frame } from "./index";
import { Text } from "@mantine/core";

const meta: Meta<typeof Frame> = {
  title: "Components/Frame",
  component: Frame,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: { type: "text" },
      description: "フレーム内に表示するコンテンツ",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 基本的なフレーム
export const Default: Story = {
  args: {
    children: <Text size="xl">フレームコンテンツ</Text>,
  },
};
