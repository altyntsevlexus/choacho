import React from "react";

import Logo from "components/Logo";
import Research from "images/research.inline.svg";
import Briefcase from "images/briefcase.inline.svg";
import Pen from "images/pen.inline.svg";

import * as styles from "./Process.module.scss";

const Process = () => (
  <section className={styles.root}>
    <div className={styles.wrapper}>
      <Logo size={400} />
      <div className={styles.description}>
        <h3 className={styles.title}>3 прості причини обрати наш шоколад</h3>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Research className={styles.itemImage} height={40} width={40} />
            <div>
              <h4 className={styles.itemTitle}>Бельгійський шоколад</h4>
              <p className={styles.itemDescription}>
                Бельгійський шоколад це вишуканість та висока якість. Це ручна
                робота майстрів-кондитерів, які використовують тільки найкращі
                інгредієнти.
              </p>
            </div>
          </li>
          <li className={styles.item}>
            <Briefcase className={styles.itemImage} height={40} width={40} />
            <div>
              <h4 className={styles.itemTitle}>Корпоративні замовлення</h4>
              <p className={styles.itemDescription}>
                У Вас є можливість замоивити шоколад у вигляді подарунків для
                Ваших клієнтів або співробітників.
              </p>
            </div>
          </li>
          <li className={styles.item}>
            <Pen className={styles.itemImage} height={40} width={40} />
            <div>
              <h4 className={styles.itemTitle}>Особливий дизайн</h4>
              <p className={styles.itemDescription}>
                Ще з упаковки можна зрозуміти що буде смачно. Дизайн упаковки
                так і манить купити цей шоколад.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Process;
