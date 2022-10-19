import { ThemeProvider } from '@emotion/react';
import React from 'react';
import Navbar from '../components/Navbar';
import theme from '../styles/theme';

export default {
  title: 'Navbar',
  component: Navbar,
}

const whitThemeProvider = (Story, context) => (
  <ThemeProvider theme={theme}>
    <Story {...context} />
  </ThemeProvider>
)

const Template = (args) => <Navbar {...args} />

export const Main = Template.bind({});
Main.decorators = [whitThemeProvider]
Main.args = {
  variant: 'elevation',
  color: 'dark'
}