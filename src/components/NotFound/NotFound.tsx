import React from "react";

import * as styles from "./NotFound.module.scss";

const NotFound = () => (
  <div className={styles.root}>
    <span className={styles.title}>404</span>
    <span className={styles.subtitle}>Сторінка не знайдена</span>
  </div>
);

export default NotFound;
