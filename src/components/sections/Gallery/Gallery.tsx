import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import useMediaQuery from "hooks/useMediaQuery";

import * as styles from "./Gallery.module.scss";

const Gallery = () => {
  const isTablet = useMediaQuery("(min-width: 768px)");

  return (
    <section>
      <div className={styles.wrapper}>
        <StaticImage src="../../../images/gallery-1.jpg" alt="" />
        <StaticImage
          src="../../../images/gallery-2.jpg"
          className={styles.big}
          alt=""
        />
        <StaticImage src="../../../images/gallery-3.jpg" alt="" />
        <StaticImage src="../../../images/gallery-4.jpg" alt="" />
        {isTablet && <StaticImage src="../../../images/gallery-5.jpg" alt="" />}
        {isTablet && <StaticImage src="../../../images/gallery-6.jpg" alt="" />}
        <StaticImage src="../../../images/gallery-7.jpg" alt="" />
      </div>
    </section>
  );
};

export default Gallery;
