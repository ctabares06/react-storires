import React from 'react';
import { Typography, Box, useTheme } from '@mui/material';
import { ShoppingCartSimple } from 'phosphor-react';
import Header from '../Header';

const items = ['keyboards', 'key caps', 'switches', "PCB's"];

function StoreHeader() {
	const theme = useTheme();

	return (
		<Header position="fixed" color="primary" title="CheapCaps">
			<Box
				sx={{
					marginRight: 'auto',
				}}
			>
				{items.map((item) => (
					<Typography
						sx={{
							display: 'inline-block',
							mx: theme.spacing(1),
						}}
						variant="h5"
						component="div"
					>
						{item}
					</Typography>
				))}
			</Box>

			<ShoppingCartSimple size={32} />
		</Header>
	);
}

export default StoreHeader;
