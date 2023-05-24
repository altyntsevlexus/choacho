import { graphql, useStaticQuery } from "gatsby";

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          og {
            title
            description
            url
          }
        }
      }
    }
  `);

  return data.site.siteMetadata;
};
