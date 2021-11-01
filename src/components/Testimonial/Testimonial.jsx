import React from "react";
import { RiDoubleQuotesL } from "react-icons/ri";
import testimonialImg from "../../assets/images/testimonial.jpg";
import styles from "./Testimonial.module.scss";

export default function Testimonial() {
  return (
    <section className={styles.testimonial} data-aos="zoom-in">
      <header>
        <h2>What our Customers are Saying</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, ipsam.{" "}
        </p>
      </header>
      <div className={styles.testimonialWrapper}>
        <div className={styles.testimonialCard}>
          <div className={styles.testimonialContent}>
            <div>
              <img src={testimonialImg} alt="A happy, smiling customer" />
              <span>
                <RiDoubleQuotesL size={40} color="#fff" />
              </span>
            </div>

            <blockquote>
              <p>
                &nbsp;Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt optio officiis dolore earum error eaque perferendis
                laudantium sed praesentium dolorum.&nbsp;
              </p>

              <footer>
                <hr />
                <div>
                  <h3>John Smith</h3>
                  <p>ABC Company</p>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
