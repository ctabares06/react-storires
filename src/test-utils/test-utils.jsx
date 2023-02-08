import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from '@mui/material';
import theme from '../styles/theme';

const themeProvider = ({ children }) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
);

const customRender = (ui, options) =>
	render(ui, { wrapper: themeProvider, ...options });

export * from '@testing-library/react';

export { customRender as render };
