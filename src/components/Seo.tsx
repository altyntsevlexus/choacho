import React from "react";

import { useSiteMetadata } from "hooks/useSiteMetadata";

interface Props {
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

const Seo = ({ title, description, children }: Props) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    og,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta property="og:title" content={og.title} />
      <meta property="og:description" content={og.description} />
      <meta property="og:url" content={og.url} />
      {children}
    </>
  );
};

export default Seo;
