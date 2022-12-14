import { ThemeProvider } from '@emotion/react';
import React from 'react';
import Header from '../components/Header';
import theme from '../styles/theme';

export default {
  title: 'Header',
  component: Header,
}

const whitThemeProvider = (Story, context) => (
  <ThemeProvider theme={theme}>
    <Story {...context} />
  </ThemeProvider>
)

const Template = (args) => <Header {...args} />

export const Main = Template.bind({});
Main.decorators = [whitThemeProvider]
Main.args = {
  title: 'Cheap caps',
  variant: 'elevation',
  color: 'dark'
}