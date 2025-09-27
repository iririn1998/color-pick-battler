import type { Meta, StoryObj } from "@storybook/react";
import { Character } from ".";

const meta: Meta<typeof Character> = {
  title: "Character",
  component: Character,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    src: {
      control: "text",
      description: "キャラクターの画像パス",
    },
    size: {
      control: "number",
      description: "画像のサイズ（px）",
    },
    split: {
      control: "number",
      description: "分割数",
    },
    speed: {
      control: {
        type: "range",
        min: 50,
        max: 1000,
        step: 50,
      },
      description: "アニメーション速度（ms）",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Enemy1: Story = {
  args: {
    src: "/img/enemy_1.png",
    size: 64,
    split: 3,
    speed: 200,
  },
};

export const EnemyBoss: Story = {
  args: {
    src: "/img/enemy_boss_1.png",
    size: 256,
    split: 3,
    speed: 200,
  },
};
