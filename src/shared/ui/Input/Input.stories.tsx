/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input, InputThemes } from './Input';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
  title: 'shared/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'Test placeholder'
};
Primary.decorators = [
  StoreDecorator({
    address: {
      addressQuery: 'Test'
    }
  })
];

export const OutlinePurple = Template.bind({});
OutlinePurple.args = {
  placeholder: 'Test placeholder',
  theme: InputThemes.OUTLINE_PURPLE
};
OutlinePurple.decorators = [
  StoreDecorator({
    address: {
      addressQuery: 'Test'
    }
  })
];
