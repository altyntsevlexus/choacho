import React from "react";

import Logo from "components/Logo";
import Instagram from "images/instagram.inline.svg";

import * as styles from "./Footer.module.scss";

const Footer = () => (
  <footer className={styles.root} id="footer">
    <div className={styles.wrapper}>
      <Logo size={60} className={styles.logo} />
      <a className={styles.contactDetails} href="mailto:email@mail.com">
        email@mail.com
      </a>
      <a className={styles.contactDetails} href="tel:0667495569">
        066 749 55 69
      </a>
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
