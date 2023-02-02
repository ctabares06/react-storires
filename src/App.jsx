import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

const router = createBrowserRouter([
	{
		path: '/',
		element: (
			<Layout>
				<Home />
			</Layout>
		),
	},
]);

export default function App() {
	return <RouterProvider router={router} />;
}
