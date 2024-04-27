import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";

import * as styles from "./Reviews.module.scss";

const Reviews = () => {
  const { t } = useTranslation("reviews");

  return (
    <section className={styles.root}>
      <div className={styles.wrapper}>
        <div>
          <h3 className={styles.title}>{t("title")}</h3>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <div className={styles.review}>
                <p className={styles.reviewDescription}>
                  {t("description.start")}
                  <a
                    href="https://www.instagram.com/cho_a_cho/"
                    className={styles.highlightedText}
                  >
                    {t("description.inst")}
                  </a>{" "}
                  {t("description.end")}
                </p>
              </div>
            </li>
          </ul>
        </div>
        <iframe
          src="https://www.instagram.com/cho_a_cho/embed"
          title="instagram"
          loading="lazy"
          className={styles.instagram}
        />
      </div>
    </section>
  );
};

export default Reviews;
