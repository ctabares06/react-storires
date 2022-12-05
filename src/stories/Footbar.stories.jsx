import { ThemeProvider } from '@emotion/react';
import React from 'react';
import Footbar from '../components/Footbar';
import theme from '../styles/theme';

export default {
  title: 'Footbar',
  component: Footbar,
}

const whitThemeProvider = (Story, context) => (
  <ThemeProvider theme={theme}>
    <Story {...context} />
  </ThemeProvider>
)

const Template = (args) => <Footbar {...args} />

export const Main = Template.bind({});
Main.decorators = [whitThemeProvider]