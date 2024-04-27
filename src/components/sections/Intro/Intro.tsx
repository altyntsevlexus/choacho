import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";

import * as styles from "./Intro.module.scss";

const Intro = () => {
  const { t } = useTranslation("intro");

  return (
    <section className={styles.root}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>
          {t("title")}
          <span>!</span>
        </h2>
        <p className={styles.subtitle}>{t("description")}</p>
      </div>
    </section>
  );
};

export default Intro;
