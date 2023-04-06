import React from "react";

import "styles/core.scss";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => (
  <>
    {children}
    <Footer />
  </>
);

export default Layout;
