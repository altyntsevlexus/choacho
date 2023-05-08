import React from "react";

import LandRover from "images/companies/land-rover.inline.svg";
import BMW from "images/companies/bmw.inline.svg";
import Ekolavka from "images/companies/ekolavka.inline.svg";
import Okwine from "images/companies/okwine.inline.svg";
import Visa from "images/companies/visa.inline.svg";
import VsiSvoi from "images/companies/vsi-svoi.inline.svg";

import * as styles from "./Companies.module.scss";

const Companies = () => (
  <section className={styles.root}>
    <div className={styles.wrapper}>
      <LandRover />
      <Ekolavka />
      <BMW />
      <Okwine />
      <VsiSvoi />
      <Visa />
    </div>
  </section>
);

export default Companies;
