import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "../Text";
import { AnimatedBackground } from "./index";

const meta: Meta<typeof AnimatedBackground> = {
  title: "Components/AnimatedBackground",
  component: AnimatedBackground,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: { type: "text" },
      description: "アニメーション背景内に表示するコンテンツ",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "100vw", height: "100vh" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

// 基本的なアニメーション背景
export const Default: Story = {
  args: {
    children: (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <Text size="xl" c="white" fw="bold">
          カラフルなグラデーション アニメーション
        </Text>
      </div>
    ),
  },
};
