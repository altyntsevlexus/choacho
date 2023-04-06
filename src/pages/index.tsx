import React from "react";

import Layout from "components/Layout";
import Seo from "components/Seo";
import {
  Hero,
  Services,
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
      {/* <Services /> */}
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
