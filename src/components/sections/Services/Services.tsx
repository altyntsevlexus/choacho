import React from "react";

import Research from "images/research.inline.svg";
import Briefcase from "images/briefcase.inline.svg";
import Pen from "images/pen.inline.svg";

import * as styles from "./Services.module.scss";

const Services = () => (
  <section className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <Research className={styles.cardImage} />
        <h3 className={styles.cardTitle}>Бельгійский шоколад</h3>
      </div>
      <div className={styles.card}>
        <Briefcase className={styles.cardImage} />
        <h3 className={styles.cardTitle}>Корпоративні замовлення</h3>
      </div>
      <div className={styles.card}>
        <Pen className={styles.cardImage} />
        <h3 className={styles.cardTitle}>Особливий дизайн</h3>
      </div>
    </div>
  </section>
);

export default Services;
