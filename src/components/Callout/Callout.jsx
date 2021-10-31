import React from "react";
import styles from "./Callout.module.scss";

export default function Callout() {
  return (
    <div className={styles.calloutWrapper}>
      <div className={styles.calloutContent}>
        <div>
          <h2>Ready to Get Started?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
            voluptate tempora qui distinctio consequatur aliquid pariatur
            cupiditate quas cum fugit.
          </p>
        </div>
        <button>Get Started</button>
      </div>
    </div>
  );
}
