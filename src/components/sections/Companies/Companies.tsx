import React from "react";

import Spotify from "images/companies/spotify.inline.svg";
import Google from "images/companies/google.inline.svg";
import Airbnb from "images/companies/airbnb.inline.svg";
import Dhl from "images/companies/dhl.inline.svg";
import Dropbox from "images/companies/dropbox.inline.svg";
import Reddit from "images/companies/reddit.inline.svg";
import Stripe from "images/companies/stripe.inline.svg";
import Tesla from "images/companies/tesla.inline.svg";

import * as styles from "./Companies.module.scss";

const Companies = () => (
  <section className={styles.root}>
    <div className={styles.wrapper}>
      <Spotify />
      <Google />
      <Airbnb />
      <Dhl />
      <Dropbox />
      <Reddit />
      <Stripe />
      <Tesla />
    </div>
  </section>
);

export default Companies;
