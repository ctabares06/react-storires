import React from 'react';
import Button from '../components/Button';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary']
    }
  }
}

const Template = (args) => <Button {...args} />

export const Contained = Template.bind({});
Contained.args = {
  variant: 'contained',
  color: 'primary',
  label: 'text',
}