import React from "react";

import hand from "images/hand.png";
import Logo from "components/Logo";

import * as styles from "./Hero.module.scss";

const Hero = () => (
  <section className={styles.root}>
    <div className={styles.wrapper}>
      <Logo className={styles.logo} size={60} />
      <div className={styles.description}>
        <p className={styles.descriptionText}>
          Залежність від шоколаду - це CHO A CHO!
        </p>
        <a href="#footer" className={styles.contactUs}>
          Звʼязатись з нами
        </a>
      </div>
      <img src={hand} alt="" className={styles.hand} />
    </div>
  </section>
);

export default Hero;
