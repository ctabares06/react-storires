import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTheme } from '@mui/system';
import Container from '../../components/Container';
import ProductCard from '../../components/ProductCard';
import keyboardBG from '../../assets/keyboard_bg.jpg';
import BackgroundImage from '../../components/Image/BackgroundImage';
import ProductList from './ProductsList';

function Keyboards() {
	const theme = useTheme();
	const [keyboards, setKeyboards] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3030/keyboards')
			.then((res) => res.json())
			.then((result) => {
				setKeyboards(result);
			});
	}, []);

	return (
		<>
			<BackgroundImage url={keyboardBG}>
				<Typography
					sx={{
						textDecoration: 'none',
					}}
					color="primary.contrastText"
					variant="h1"
					component="a"
					href="#keyboards"
				>
					KEYBOARDS
				</Typography>
			</BackgroundImage>
			<Container
				sx={{
					mt: theme.spacing(5),
				}}
			>
				<Typography
					sx={{
						textAlign: 'center',
					}}
					id="keyboards"
					color="primary.contrastText"
					variant="h1"
					component="h1"
				>
					PRODUCT LIST
				</Typography>
				<ProductList />
			</Container>
		</>
	);
}

export default Keyboards;
