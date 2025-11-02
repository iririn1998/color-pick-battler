import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "../Text";
import { StageBackground } from "./index";

const meta: Meta<typeof StageBackground> = {
  title: "Components/StageBackground",
  component: StageBackground,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: { type: "text" },
      description: "背景内に表示するコンテンツ",
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

export const Default: Story = {
  args: {
    children: (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <Text size="xl" c="white" fw="bold">
          ステージ選択画面の背景
        </Text>
      </div>
    ),
  },
};
