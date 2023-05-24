import React from "react";

import LandRover from "images/companies/land-rover.inline.svg";
import BMW from "images/companies/bmw.inline.svg";
import Ekolavka from "images/companies/ekolavka.inline.svg";
import Okwine from "images/companies/okwine.inline.svg";
import Visa from "images/companies/visa.inline.svg";
import VsiSvoi from "images/companies/vsi-svoi.inline.svg";
import Comfy from "images/companies/comfy.inline.svg";
import RoyalCanin from "images/companies/royal-canin.inline.svg";

import * as styles from "./Companies.module.scss";

const Companies = () => (
  <section className={styles.root}>
    <div className={styles.wrapper}>
      <Visa />
      <Ekolavka />
      <BMW />
      <Okwine />
      <VsiSvoi />
      <LandRover />
      <Comfy />
      <RoyalCanin />
    </div>
  </section>
);

export default Companies;
