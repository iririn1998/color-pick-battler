import type { Meta, StoryObj } from "@storybook/react";
import {
  IoArrowBack,
  IoChevronBack,
  IoChevronForward,
  IoVolumeHigh,
} from "react-icons/io5";
import { NavigationButton } from "./index";

const meta: Meta<typeof NavigationButton> = {
  title: "Components/NavigationButton",
  component: NavigationButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: false,
      description: "表示するアイコン（react-icons）",
    },
    onClick: {
      action: "clicked",
      description: "クリック時のコールバック",
    },
    disabled: {
      control: "boolean",
      description: "無効化状態",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const BackButton: Story = {
  args: {
    icon: IoArrowBack,
    "aria-label": "戻る",
    onClick: () => {
      console.log("Back clicked");
    },
  },
};

export const SoundButton: Story = {
  args: {
    icon: IoVolumeHigh,
    "aria-label": "サウンド",
    onClick: () => {
      console.log("Sound clicked");
    },
  },
};

export const PreviousPageButton: Story = {
  args: {
    icon: IoChevronBack,
    "aria-label": "前のページ",
    onClick: () => {
      console.log("Previous page clicked");
    },
  },
};

export const NextPageButton: Story = {
  args: {
    icon: IoChevronForward,
    "aria-label": "次のページ",
    onClick: () => {
      console.log("Next page clicked");
    },
  },
};

export const Disabled: Story = {
  args: {
    icon: IoChevronBack,
    "aria-label": "前のページ",
    disabled: true,
  },
};
