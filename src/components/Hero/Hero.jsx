import React from "react";
import "./Hero.module.scss";
import logo from "../../assets/images/banner.png";

export default function Hero() {
  return (
    <section>
      <div>
        <header>
          <h1>Cloud Hosting for Pros</h1>
          <p>Deploy your websites in less than 60 seconds.</p>
          <a href="#">
            <button type="button">Get started</button>
          </a>
        </header>
        <picture>
          <img src={logo} alt="" />
        </picture>
      </div>
    </section>
  );
}
