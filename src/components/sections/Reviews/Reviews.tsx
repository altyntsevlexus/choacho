import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import * as styles from "./Reviews.module.scss";

const Reviews = () => (
  <section className={styles.root}>
    <div className={styles.wrapper}>
      <h3 className={styles.title}>Що про нас кажуть клієнти?</h3>
      <ul className={styles.list}>
        <li className={styles.listItem}>
          <div className={styles.review}>
            <p className={styles.reviewDescription}>
              Це була найкраща шоколадка, яку я коли-небудь їв! Смак був
              настільки насиченим та багатим, що я міг смакувати його довго
              після того, як зʼїв кусочок. Крім того, шоколад танув в роті, що
              робило його ще більш приємним у вживанні. Я б точно рекомендував
              цей шоколад усім, хто любить насолоджуватися вишуканими смаками та
              якісними продуктами.
            </p>
            <div className={styles.reviewer}>
              <StaticImage
                src="../../../images/man.jpg"
                alt="man"
                width={60}
                height={60}
                className={styles.reviewerImage}
              />
              <div>
                <p className={styles.reviewerName}>Євген Авраменко</p>
                <p className={styles.reviewerPosition}>Постійний клієнт</p>
              </div>
            </div>
          </div>
        </li>
        <li className={styles.listItem}>
          <div className={styles.review}>
            <p className={styles.reviewDescription}>
              Ми замовили цей шоколад для нашого корпоративного подарунку та
              були дуже задоволені результатом. Шоколад мав вишуканий смак та
              насичений аромат, що сподобалося всім отримувачам подарунка. Крім
              того, на упаковці була ншаша ембелма, що додало до загального
              враження від подарунка. Консультації з питань замовлення та
              доставки були дуже швидкими та професійними. Дякуємо за чудовий
              шоколадний досвід!
            </p>
            <div className={styles.reviewer}>
              <StaticImage
                src="../../../images/woman.jpg"
                alt="woman"
                width={60}
                height={60}
                className={styles.reviewerImage}
              />
              <div>
                <p className={styles.reviewerName}>Богдана Златова</p>
                <p className={styles.reviewerPosition}>
                  HR менеджер в Privat Bank
                </p>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
);

export default Reviews;
