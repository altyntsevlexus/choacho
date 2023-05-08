import React from "react";

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
                та побачити що насправді про нас говорять справжні люди з якими
                ми працюємо.
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

export default Reviews;
