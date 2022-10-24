import { ThemeProvider } from '@emotion/react';
import React from 'react';
import StoreHeader from '../components/StoreHeader';
import theme from '../styles/theme';

export default {
  title: 'StoreHeader',
  component: StoreHeader,
}

const whitThemeProvider = (Story, context) => (
  <ThemeProvider theme={theme}>
    <Story {...context} />
  </ThemeProvider>
)

const Template = (args) => <StoreHeader {...args} />

export const Main = Template.bind({});
Main.decorators = [whitThemeProvider]