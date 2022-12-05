import React from "react";
import StoreHeader from "../StoreHeader";
import Footbar from "../Footbar";

const Layout = ({ children }) => {
  return (
    <>
      <StoreHeader />
      {children}
      <Footbar />
    </>
  );
};

export default Layout;
