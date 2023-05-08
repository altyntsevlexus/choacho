import React from "react";

import Logo from "components/Logo";
import Instagram from "images/icons/instagram.inline.svg";

import * as styles from "./Footer.module.scss";

const Footer = () => (
  <footer className={styles.root} id="footer">
    <div className={styles.wrapper}>
      <Logo size={60} className={styles.logo} />
      <div className={styles.contactDetails}>
        <a className={styles.button} href="mailto:choacho57@gmail.com">
          choacho57@gmail.com
        </a>
        <a className={styles.button} href="tel:0667495569">
          067 138 52 82
        </a>
      </div>
      <a
        href="https://www.instagram.com/cho_a_cho/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <Instagram className={styles.socials} height={60} width={60} />
      </a>
    </div>
  </footer>
);

export default Footer;
