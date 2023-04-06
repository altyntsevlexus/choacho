import React from "react";

import "styles/core.scss";
import Footer from "./Footer/Footer";

const Layout = ({ children }) => (
  <div>
    {children}
    <Footer />
  </div>
);

export default Layout;
