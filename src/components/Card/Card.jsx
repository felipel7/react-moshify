import React from "react";
import styles from "./Card.module.scss";

import { GiCheckMark } from "react-icons/gi";

export default function Card({ type }) {
  const cardContainer = [styles.cardContainer, styles[type]].join(" ");

  return (
    <div className={cardContainer}>
      <header className={styles.cardHeader}>
        <h3>Entry</h3>
        <div>
          <span className={styles.price}>$14</span>
          <span className={styles.billingCycle}>/month</span>
          <span className={styles.badge}>10% OFF</span>
        </div>
        <span>Easy start on the cloud</span>
      </header>
      <div className={styles.cardBody}>
        <ul>
          <li>
            <GiCheckMark size={16} />
            Unlimited Websites
          </li>
          <li>
            <GiCheckMark size={16} />
            Unlimited Bandwidth
          </li>
          <li>
            <GiCheckMark size={16} />
            100 GB SSD Storage
          </li>
          <li>
            <GiCheckMark size={16} />3 GB RAM
          </li>
        </ul>
        <button>Buy now</button>
      </div>
    </div>
  );
}
