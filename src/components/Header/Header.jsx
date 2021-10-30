import React, { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";

import logo from "../../assets/images/logo.svg";
import styles from "./Header.module.scss";

export default function Header() {
  const [isOpen, setOpen] = useState(false);

  let toggler = isOpen ? `${styles.active}` : "";

  const links = [
    { id: 1, title: "Hosting" },
    { id: 2, title: "VPS" },
    { id: 3, title: "Domain" },
    { id: 4, title: "Pricing" },
  ];

  return (
    <nav className={styles.nav}>
      <a href="">
        <img src={logo} alt="moshify logo" />
      </a>
      <IoMenuOutline
        className={toggler}
        size={32}
        onClick={() => setOpen(!isOpen)}
      />
      <ul className={toggler}>
        {links.map(link => (
          <li key={link.id}>
            <a href="#">{link.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
