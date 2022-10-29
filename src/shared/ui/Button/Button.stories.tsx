/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button, ButtonSize, ButtonTheme } from './Button';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
  title: 'shared/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Test Button'
};

export const BackgroundWhite = Template.bind({});
BackgroundWhite.args = {
  children: 'Test Button',
  theme: ButtonTheme.BACKGROUND_WHITE
};

export const BackgroundPurple = Template.bind({});
BackgroundPurple.args = {
  children: 'Test Button',
  theme: ButtonTheme.BACKGROUND_PURPLE
};
