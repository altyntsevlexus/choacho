import React from "react";

import * as styles from "./Intro.module.scss";

const Intro = () => (
  <section className={styles.root}>
    <div className={styles.wrapper}>
      <h2 className={styles.title}>
        Привіт<span>!</span>
      </h2>
      <p className={styles.subtitle}>
        Ми пропонуємо тобі скуштувати найсмачніший шоколад.
      </p>
    </div>
  </section>
);

export default Intro;
