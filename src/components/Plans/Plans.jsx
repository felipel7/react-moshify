import React from "react";
import Card from "../Card/Card";
import styles from "./Plans.module.scss";

export default function Plans() {
  return (
    <section className={styles.plans}>
      <Card />
      <Card type="primary" />
      <Card />
    </section>
  );
}
