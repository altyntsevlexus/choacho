import React from "react";

import * as styles from "./Intro.module.scss";

const Intro = () => (
  <section className={styles.root}>
    <div className={styles.wrapper}>
      <h2 className={styles.title}>
        привіт<span>!</span>
      </h2>
      <p className={styles.subtitle}>
        Ми пропонуємо тобі скуштувати найсмачніший шоколад.
      </p>
      <p className={styles.description}>
        Ми привозимо шоколад з Бельгії, який відрізняється від інших сортів
        своїм смаком і якістю. Шоколад відмінно підходить для подарунків, а
        також для власного споживання.
      </p>
    </div>
  </section>
);

export default Intro;
