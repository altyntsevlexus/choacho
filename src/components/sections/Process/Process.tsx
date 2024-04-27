import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";

import Logo from "components/Logo";
import useMediaQuery from "hooks/useMediaQuery";
import Research from "images/icons/research.inline.svg";
import Briefcase from "images/icons/briefcase.inline.svg";
import Pen from "images/icons/pen.inline.svg";

import * as styles from "./Process.module.scss";

const Process = () => {
  const isTablet = useMediaQuery("(min-width: 767px)");
  const { t } = useTranslation("process");

  return (
    <section className={styles.root}>
      <div className={styles.wrapper}>
        {isTablet && <Logo size={400} className={styles.logo} />}
        <div className={styles.description}>
          <h3 className={styles.title}>
            <span className={styles.highlighted}>3</span> {t("reasons")}
          </h3>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Research className={styles.itemImage} height={40} width={40} />
              <div>
                <h4 className={styles.itemTitle}>{t("chocolate.title")}</h4>
                <p className={styles.itemDescription}>
                  {t("chocolate.description")}
                </p>
              </div>
            </li>
            <li className={styles.item}>
              <Briefcase className={styles.itemImage} height={40} width={40} />
              <div>
                <h4 className={styles.itemTitle}>{t("unique.title")}</h4>
                <p className={styles.itemDescription}>
                  {t("unique.description")}
                </p>
              </div>
            </li>
            <li className={styles.item}>
              <Pen className={styles.itemImage} height={40} width={40} />
              <div>
                <h4 className={styles.itemTitle}>{t("design.title")}</h4>
                <p className={styles.itemDescription}>
                  {t("design.description")}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Process;
