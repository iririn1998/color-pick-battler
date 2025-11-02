import type { Meta, StoryObj } from "@storybook/react";
import { StageTitleBanner } from "./index";

const meta: Meta<typeof StageTitleBanner> = {
  title: "Components/StageTitleBanner",
  component: StageTitleBanner,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "ステージセレクト",
  },
};
