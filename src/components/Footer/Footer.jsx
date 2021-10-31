import React, { useState } from "react";
import { VscChevronRight } from "react-icons/vsc";
import logo from "../../assets/images/logo.svg";
import styles from "./Footer.module.scss";

export default function Footer() {
  const [sections, setSections] = useState([
    {
      id: 1,
      title: "Products",
      links: ["Website Hosting", "Free Automated Wordpress", "Migrations"],
      isSelected: false,
    },
    {
      id: 2,
      title: "Company",
      links: ["About", "Affiliates", "Blog"],
      isSelected: false,
    },
    {
      id: 3,
      title: "Support",
      links: ["Contact", "Knowledge Base", "FAQ"],
      isSelected: false,
    },
    {
      id: 4,
      title: "Domains",
      links: ["Domain Checker", "Domain Transfer", "Free Domain"],
      isSelected: false,
    },
  ]);

  function handleSelect(id) {
    const index = sections.findIndex(s => s.id === id);

    const newSections = [...sections];
    newSections[index].isSelected = !newSections[index].isSelected;

    setSections(newSections);
  }

  return (
    <footer className={styles.footer}>
      <div>
        {sections.map(section => (
          <section key={section.id}>
            <header onClick={() => handleSelect(section.id)}>
              <h2>{section.title}</h2>
              <span className={section.isSelected ? styles.selected : ""}>
                <VscChevronRight size={26} color="#fff" />
              </span>
            </header>

            <div>
              <ul className={section.isSelected ? styles.selected : ""}>
                {section.links.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </section>
        ))}
        <picture>
          <img src={logo} alt="logo" />
          <p>&copy; {new Date().getFullYear()} Felipe Silva S2</p>
        </picture>
      </div>
    </footer>
  );
}
