import React from "react";

import image1 from "images/gallery-1.jpg";
import image2 from "images/gallery-2.jpg";
import image3 from "images/gallery-3.jpg";
import image4 from "images/gallery-4.jpg";
import image5 from "images/gallery-5.jpg";
import image6 from "images/gallery-6.jpg";
import image7 from "images/gallery-7.jpg";

import * as styles from "./Gallery.module.scss";

const Gallery = () => (
  <section className={styles.root}>
    <div className={styles.wrapper}>
      <img src={image1} alt="" />
      <img src={image2} className={styles.big} alt="" />
      <img src={image3} alt="" />
      <img src={image4} alt="" />
      <img src={image5} alt="" />
      <img src={image6} alt="" />
      <img src={image7} alt="" />
    </div>
  </section>
);

export default Gallery;
