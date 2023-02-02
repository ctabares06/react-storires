import React from "react";
import ProductCard from "../components/ProductCard";

export default {
  title: "ProductCard",
  component: ProductCard,
  argTypes: {
    handleClick: {
      action: "clicked",
    },
  },
};

const Template = (args) => <ProductCard {...args} />;

export const Main = Template.bind({});
Main.args = {
  image: {
    url: "https://via.placeholder.com/300x200",
    alt: "placeholder",
    size: 200,
  },
  product: {
    title: "Product",
    description: "Lorem ipsum dolor sit amet",
    price: "100100.000",
  },
};
