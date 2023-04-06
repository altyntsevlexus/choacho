import React from "react";

import { useSiteMetadata } from "hooks/useSiteMetadata";

interface Props {
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

const Seo = ({ title, description, children }: Props) => {
  const { title: defaultTitle, description: defaultDescription } =
    useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {children}
    </>
  );
};

export default Seo;
