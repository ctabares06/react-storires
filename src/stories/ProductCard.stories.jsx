import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import React from "react";
import ProductCard from "../components/ProductCard";
import theme from "../styles/theme";

export default {
  title: "ProductCard",
  component: ProductCard,
  argTypes: {
    handleClick: {
      action: "clicked",
    },
  },
};

const whitThemeProvider = (Story, context) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Story {...context} />
  </ThemeProvider>
);

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
Main.decorators = [whitThemeProvider];
