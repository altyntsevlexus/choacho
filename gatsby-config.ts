import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "Cho A Cho",
    description:
      "Cho A Cho - це справжній бельгійский шоколад. Наші шоколадки можна знайти в крамницях та кафе Києва.",
    og: {
      title: "Cho A Cho",
      description:
        "Cho A Cho - це справжній бельгійский шоколад. Наші шоколадки можна знайти в крамницях та кафе Києва.",
      url: "https://www.choacho.com.ua",
    },
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-root-import",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/logo.png",
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Mulish`,
            file: `https://fonts.googleapis.com/css2?family=Mulish:wght@400;800&display=swap`,
          },
        ],
      },
    },
  ],
};

export default config;
