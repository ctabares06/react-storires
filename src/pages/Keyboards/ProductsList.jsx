import { Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import ProductCard from '../../components/ProductCard';

function ProductList() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3030/keyboards')
			.then((res) => res.json())
			.then((result) => setProducts(result));
	}, []);

	return (
		<Grid container spacing={2}>
			{products.map(({ product, image }) => (
				<Grid item xs={3} key={product.id}>
					<ProductCard product={product} image={image} />
				</Grid>
			))}
		</Grid>
	);
}

export default ProductList;
