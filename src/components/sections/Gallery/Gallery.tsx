import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import useMediaQuery from "hooks/useMediaQuery";

import * as styles from "./Gallery.module.scss";

const Gallery = () => {
  const isTablet = useMediaQuery("(min-width: 768px)");

  return (
    <section>
      <div className={styles.wrapper}>
        <StaticImage src="../../../images/gallery/gallery1.jpg" alt="" />
        <StaticImage
          src="../../../images/gallery/gallery2.jpg"
          className={styles.big}
          alt=""
        />
        <StaticImage src="../../../images/gallery/gallery3.jpg" alt="" />
        <StaticImage src="../../../images/gallery/gallery4.jpg" alt="" />
        {isTablet && (
          <StaticImage src="../../../images/gallery/gallery5.jpg" alt="" />
        )}
        {isTablet && (
          <StaticImage src="../../../images/gallery/gallery6.jpg" alt="" />
        )}
        <StaticImage src="../../../images/gallery/gallery7.jpg" alt="" />
      </div>
    </section>
  );
};

export default Gallery;
