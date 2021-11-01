import React from "react";
import styles from "./Hero.module.scss";
import logo from "../../assets/images/banner.png";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div>
        <header>
          <h1 data-aos="zoom-in-up">Cloud Hosting for Pros</h1>
          <p>Deploy your websites in less than 60 seconds.</p>
          <a href="https://github.com/FelipeL7/react-moshify" target="_blank">
            <button type="button">Get started</button>
          </a>
        </header>
        <picture data-aos="zoom-in">
          <img src={logo} alt="" />
        </picture>
      </div>
    </section>
  );
}
