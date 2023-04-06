import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/MacPawFixelText-Bold.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="macpaw-bold"
    />,
    <link
      rel="preload"
      href="/fonts/MacPawFixelText-Medium.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="macpaw-medium"
    />,
  ]);
};
