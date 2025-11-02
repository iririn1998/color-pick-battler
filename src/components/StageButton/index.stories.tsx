import type { Meta, StoryObj } from "@storybook/react";
import { StageButton } from "./index";

const meta: Meta<typeof StageButton> = {
  title: "Components/StageButton",
  component: StageButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    stageNumber: {
      control: { type: "number", min: 1, max: 8 },
      description: "ステージ番号",
    },
    isLocked: {
      control: "boolean",
      description: "ロック状態",
    },
    stars: {
      control: { type: "number", min: 0, max: 3 },
      description: "獲得した星の数（0-3）",
    },
    onClick: {
      action: "clicked",
      description: "クリック時のコールバック",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Unlocked: Story = {
  args: {
    stageNumber: 1,
    isLocked: false,
    stars: 2,
    onClick: () => {
      console.log("Stage 1 clicked");
    },
  },
};

export const Locked: Story = {
  args: {
    stageNumber: 3,
    isLocked: true,
    stars: 0,
  },
};
