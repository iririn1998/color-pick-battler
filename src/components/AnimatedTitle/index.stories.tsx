import { Center } from "@mantine/core";
import type { Meta, StoryObj } from "@storybook/react";
import { AnimatedBackground } from "../AnimatedBackground";
import { AnimatedTitle } from ".";

const meta: Meta<typeof AnimatedTitle> = {
  title: "Components/AnimatedTitle",
  component: AnimatedTitle,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: { type: "text" },
      description: "アニメーション付きで表示するタイトルテキスト",
    },
  },
  decorators: [
    (Story) => (
      <AnimatedBackground>
        <Center style={{ padding: "3rem", minHeight: "200px" }}>
          <Story />
        </Center>
      </AnimatedBackground>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

// デフォルトのタイトル
export const Default: Story = {
  args: {
    children: "Color Pick Battler",
  },
};
