import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import * as styles from "./Reviews.module.scss";

const Reviews = () => (
  <section className={styles.root}>
    <div className={styles.wrapper}>
      <div>
        <h3 className={styles.title}>Що про нас кажуть клієнти?</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <div className={styles.review}>
              <p className={styles.reviewDescription}>
                Тут можна було писати що ми такі класні і бла бла бла! Але
                пропоную заглянути в{" "}
                <a
                  href="https://www.instagram.com/cho_a_cho/"
                  className={styles.highlightedText}
                >
                  інсту
                </a>{" "}
                та побачити що насправді про нас говорять справжні люди. Та с
                ким ми працюємо.
              </p>
            </div>
          </li>
        </ul>
      </div>
      <a
        href="https://www.instagram.com/cho_a_cho/"
        target="_blank"
        rel="noreferrer noopener"
        className={styles.image}
      >
        <StaticImage
          src="../../../images/instagram.jpg"
          alt="Instagram"
          height={600}
        />
      </a>
    </div>
  </section>
);

export default Reviews;
