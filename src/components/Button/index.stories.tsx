import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./index";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["filled", "outline", "light", "subtle", "gradient"],
    },
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    color: {
      control: { type: "color" },
    },
    disabled: {
      control: { type: "boolean" },
    },
    loading: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// プライマリーボタン
export const Primary: Story = {
  args: {
    children: "Primary Button",
    variant: "filled",
  },
};

// アウトラインボタン
export const Outline: Story = {
  args: {
    children: "Outline Button",
    variant: "outline",
  },
};

// ライトボタン
export const Light: Story = {
  args: {
    children: "Light Button",
    variant: "light",
  },
};

// サブトルボタン
export const Subtle: Story = {
  args: {
    children: "Subtle Button",
    variant: "subtle",
  },
};

// 異なるサイズ
export const Small: Story = {
  args: {
    children: "Small Button",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    children: "Large Button",
    size: "lg",
  },
};

// 無効状態
export const Disabled: Story = {
  args: {
    children: "Disabled Button",
    disabled: true,
  },
};

// ローディング状態
export const Loading: Story = {
  args: {
    children: "Loading Button",
    loading: true,
  },
};

// カラーバリエーション
export const ColorVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
      <Button color="blue">Blue</Button>
      <Button color="red">Red</Button>
      <Button color="green">Green</Button>
      <Button color="yellow">Yellow</Button>
      <Button color="purple">Purple</Button>
      <Button color="pink">Pink</Button>
    </div>
  ),
};

// サイズバリエーション
export const SizeVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <Button size="xs">XS</Button>
      <Button size="sm">SM</Button>
      <Button size="md">MD</Button>
      <Button size="lg">LG</Button>
      <Button size="xl">XL</Button>
    </div>
  ),
};

// バリアントの比較
export const VariantComparison: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "8px",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      <Button variant="filled">Filled</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="light">Light</Button>
      <Button variant="subtle">Subtle</Button>
    </div>
  ),
};
