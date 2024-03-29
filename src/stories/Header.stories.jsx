import React from 'react';
import Header from '../components/Header';

export default {
  title: 'Header',
  component: Header,
}

const Template = (args) => <Header {...args} />

export const Main = Template.bind({});
Main.args = {
  title: 'Cheap caps',
  variant: 'elevation',
}