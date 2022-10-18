import { ThemeProvider } from '@emotion/react';
import React from 'react';
import Button from '../components/Button';
import theme from '../styles/theme';

export default {
  title: 'CustomButton',
  component: Button,
}

const whitThemeProvider = (Story, context) => (
  <ThemeProvider theme={theme}>
    <Story {...context} />
  </ThemeProvider>
)

const Template = (args) => <Button {...args} />

export const Contained = Template.bind({});
Contained.decorators = [whitThemeProvider]
Contained.args = {
  variant: 'contained',
  color: 'yellow',
  label: 'text',
}