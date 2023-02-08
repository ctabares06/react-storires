import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Keyboards from './pages/Keyboards';

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<Layout>
				<Home />
			</Layout>
		),
	},
	{
		path: '/keyboards',
		element: (
			<Layout>
				<Keyboards />
			</Layout>
		),
	},
]);

export default function App() {
	return <RouterProvider router={router} />;
}
