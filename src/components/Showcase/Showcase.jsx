import React from "react";
import styles from "./Showcase.module.scss";

import ipad from "../../assets/images/ipad@2x.png";
import { MdOutlineSystemUpdateAlt } from "react-icons/md";
import { FaWordpress } from "react-icons/fa";
import { BsGraphUp } from "react-icons/bs";

export default function Showcase() {
  return (
    <section className={styles.showcase}>
      <div className={styles.showcaseContent}>
        <header>
          <h2>User-friendly Control Panel</h2>
        </header>
        <div className={styles.showcaseGrid}>
          <picture data-aos="fade-right">
            <img src={ipad} alt="ipad" />
          </picture>
          <div>
            <ul data-aos="fade-up">
              <li>
                {/* Media */}
                <div className={styles.showcaseMedia}>
                  <div>
                    <MdOutlineSystemUpdateAlt size={40} />
                  </div>
                  <div>
                    <h3>Easy Start & Managed Updates</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Veniam quisquam, ex nostrum vero voluptates dicta
                      excepturi vel perspiciatis consequuntur ab.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                {/* Media 2*/}
                <div className={styles.showcaseMedia}>
                  <div>
                    <BsGraphUp size={40} />
                  </div>
                  <div>
                    <h3>Staging, GIT & WP-CLI</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Veniam quisquam, ex nostrum vero voluptates dicta
                      excepturi vel perspiciatis consequuntur ab.
                    </p>
                  </div>
                </div>
              </li>
              <li>
                {/* Media 3*/}
                <div className={styles.showcaseMedia}>
                  <div>
                    <FaWordpress size={40} />
                  </div>
                  <div>
                    <h3>Dynamic Caching & More</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Veniam quisquam, ex nostrum vero voluptates dicta
                      excepturi vel perspiciatis consequuntur ab.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
