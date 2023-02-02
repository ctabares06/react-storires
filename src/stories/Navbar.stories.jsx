import React from 'react';
import Navbar from '../components/Navbar';

export default {
	title: 'Navbar',
	component: Navbar,
	argTypes: {
		position: {
			control: 'select',
			options: ['absolute', 'fixed', 'relative', 'static', 'sticky'],
		},
	},
};

function Template(args) {
	return <Navbar {...args} />;
}

export const Main = Template.bind({});
Main.args = {
	variant: 'elevation',
	position: 'fixed',
};
