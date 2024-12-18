import { ComponentProps } from "react";
import { Meta, StoryObj } from "@storybook/react";
import Button from "..";

type StoryProps = ComponentProps<typeof Button>;

const meta: Meta = {
  title: "Components/Button",
  component: Button,
};

type Story = StoryObj<StoryProps>;

export const Priamry: Story = {
  args: {
    label: "Button",
  },
};
export const Secondary: Story = {
  args: {
    label: "Button",
    variant: "secondary",
  },
};
export const Sizes: Story = {
  render: ({ label, ...args }) => {
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Button label={label || "Small"} {...args} size="small" />
        <Button label={label || "Medium"} {...args} size="medium" />
        <Button label={label || "Large"} {...args} size="large" />
      </div>
    );
  },
};

export default meta;