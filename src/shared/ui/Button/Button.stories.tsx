import type { Meta, StoryObj } from "@storybook/react-webpack5";

import { Button, ButtonTheme } from "./Button";

const meta = {
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    theme: ButtonTheme.PRIMARY,
    children: "Primary Button",
  },
};
