import React from "react";
import { graphql } from "gatsby";

import Layout from "components/Layout";
import Seo from "components/Seo";
import {
  Hero,
  Intro,
  Gallery,
  Process,
  Reviews,
  Companies,
} from "components/sections";

const MainPage = () => (
  <Layout>
    <main>
      <Hero />
      <Intro />
      <Gallery />
      <Process />
      <Reviews />
      <Companies />
    </main>
  </Layout>
);

export default MainPage;

export const Head = () => <Seo />;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
