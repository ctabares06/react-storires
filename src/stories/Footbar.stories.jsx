import React from 'react';
import Footbar from '../components/Footbar';

export default {
  title: 'Footbar',
  component: Footbar,
}

const Template = (args) => <Footbar {...args} />

export const Main = Template.bind({});