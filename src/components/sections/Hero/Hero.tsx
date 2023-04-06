import React from "react";

import hand from "images/hand.png";
import Logo from "components/Logo";
import useMediaQuery from "hooks/useMediaQuery";

import * as styles from "./Hero.module.scss";

const Hero = () => {
  const isTablet = useMediaQuery("(min-width: 767px)");

  return (
    <section className={styles.root}>
      <div className={styles.wrapper}>
        <Logo className={styles.logo} size={60} />
        <div className={styles.description}>
          <p className={styles.descriptionText}>Твоя солоденька CHO A CHO</p>
          <a href="#footer" className={styles.contactUs}>
            Звʼязатись з нами
          </a>
        </div>
        {isTablet && (
          <img src={hand} alt="Рука тримає шоколадку" className={styles.hand} />
        )}
      </div>
    </section>
  );
};

export default Hero;
