import React, { useState } from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";

import hand from "images/hand.png";
import Instagram from "images/icons/instagram.inline.svg";
import Logo from "components/Logo";
import Dialog from "components/Dialog";

import * as styles from "./Hero.module.scss";

const Hero = () => {
  const [isDialogActive, setIsDialogActive] = useState(false);
  const { t } = useTranslation("hero");

  return (
    <section className={styles.root}>
      <div className={styles.wrapper}>
        <Logo className={styles.logo} size={60} />
        <div className={styles.description}>
          <p className={styles.descriptionText}>{t("title")}</p>
          <button
            onClick={() => setIsDialogActive(true)}
            className={styles.contactUs}
            type="button"
          >
            {t("contact-us")}
          </button>
        </div>
        <img src={hand} alt="Рука тримає шоколадку" className={styles.hand} />
      </div>
      <Dialog setIsActive={setIsDialogActive} isActive={isDialogActive}>
        <div className={styles.contactDetails}>
          <h2>{t("contact-details")}</h2>
          <a
            className={styles.contactDetailsButton}
            href="mailto:choacho57@gmail.com"
          >
            choacho57@gmail.com
          </a>
          <a className={styles.contactDetailsButton} href="tel:0671385282">
            067 138 52 82
          </a>
          <a
            href="https://www.instagram.com/cho_a_cho/"
            rel="noopener noreferrer"
            target="_blank"
            className={styles.contactDetailsButton}
          >
            <Instagram height={20} width={20} />
            Instagram
          </a>
        </div>
      </Dialog>
    </section>
  );
};

export default Hero;
