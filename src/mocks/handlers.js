import { rest } from 'msw';

const handlers = [
	rest.get('http://localhost:3030/keyboards', (req, res, ctx) =>
		res(
			ctx.json([
				{
					image: {
						url: 'https://via.placeholder.com/300x200',
						alt: 'placeholder',
						size: 200,
					},
					product: {
						id: 10,
						title: 'keyboard 1',
						description: 'Lorem ipsum dolor sit amet',
						price: '100100.000',
					},
				},
				{
					image: {
						url: 'https://via.placeholder.com/300x200',
						alt: 'placeholder',
						size: 200,
					},
					product: {
						id: 11,
						title: 'keyboard 2',
						description: 'Lorem ipsum dolor sit amet',
						price: '100100.000',
					},
				},
				{
					image: {
						url: 'https://via.placeholder.com/300x200',
						alt: 'placeholder',
						size: 200,
					},
					product: {
						id: 12,
						title: 'keyboard 3',
						description: 'Lorem ipsum dolor sit amet',
						price: '100100.000',
					},
				},
			])
		)
	),
];

export default handlers;
