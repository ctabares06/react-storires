import React from 'react';
import { screen, render } from 'test-utils';
import ProductList from '../../../pages/Keyboards/ProductsList';
import { ThemeProvider } from '@mui/system';
import theme from '../../../styles/theme';

test('should display list', async () => {
	render(<ProductList />, {
		wrapper: ({ children }) => {
			return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
		},
	});

	const productList = await screen.findAllByRole('img', {
		name: 'placeholder',
	});
	expect(productList).toHaveLength(3);
});
