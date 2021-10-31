import React from "react";
import styles from "./Features.module.scss";

import easy from "../../assets/images/easy@2x.png";
import fast from "../../assets/images/fast@2x.png";
import support from "../../assets/images/support@2x.png";
import wordPress from "../../assets/images/wordpress@2x.png";

import { CgWebsite } from "react-icons/cg";
import { FaWordpress } from "react-icons/fa";
import { GiMagicSwirl } from "react-icons/gi";
import { GiBackwardTime } from "react-icons/gi";

export default function Features() {
  return (
    <section className={styles.features}>
      <header>
        <h2>Host on the Cloud to Keep Growing</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed,
          voluptatem.
        </p>
      </header>
      {/* Easy */}
      <article>
        <div>
          <span>
            <GiMagicSwirl size={35} />
          </span>
          <h3>Super Easy to Use</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            obcaecati vel ad unde est illo at. Labore excepturi officia dolores!
          </p>
          <a href="#">Learn more</a>
        </div>
        <picture>
          <img src={easy} alt="easy" />
        </picture>
      </article>
      {/* Fast */}
      <article>
        <div>
          <span>
            <CgWebsite size={35} />
          </span>
          <h3>Super Easy to Use</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            obcaecati vel ad unde est illo at. Labore excepturi officia dolores!
          </p>
          <a href="#">Learn more</a>
        </div>
        <picture>
          <img src={fast} alt="fast" />
        </picture>
      </article>
      {/* Wordpress */}
      <article>
        <div>
          <span>
            <FaWordpress size={35} />
          </span>
          <h3>Super Easy to Use</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            obcaecati vel ad unde est illo at. Labore excepturi officia dolores!
          </p>
          <a href="#">Learn more</a>
        </div>
        <picture>
          <img src={wordPress} alt="wordpress" />
        </picture>
      </article>
      {/* 24/7 */}
      <article>
        <div>
          <span>
            <GiBackwardTime size={35} />
          </span>
          <h3>Super Easy to Use</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
            obcaecati vel ad unde est illo at. Labore excepturi officia dolores!
          </p>
          <a href="#">Learn more</a>
        </div>
        <picture>
          <img src={support} alt="support" />
        </picture>
      </article>
    </section>
  );
}
