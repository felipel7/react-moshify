import React, { useState } from "react";
import { MdOutlineYoutubeSearchedFor } from "react-icons/md";

import styles from "./Domain.module.scss";

export default function Domain() {
  const [domains, setDomains] = useState([
    { id: 1, text: ".com $9", isSelected: false },
    { id: 2, text: ".sg $12", isSelected: true },
    { id: 3, text: ".space $7", isSelected: false },
    { id: 4, text: ".info $14", isSelected: false },
    { id: 5, text: ".net $11", isSelected: false },
    { id: 6, text: ".xyz $10", isSelected: false },
  ]);

  function handleSelected(event, id) {
    event.preventDefault();

    const index = domains.findIndex(domain => domain.id === id);

    const newDomains = domains.map(domain => {
      domain.isSelected = false;
      return {
        ...domain,
      };
    });

    newDomains[index].isSelected = true;
    setDomains(newDomains);
  }

  return (
    <div className={styles.domain} data-aos="zoom-in-up">
      <header>
        <h2>Starting at $10 per month</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
          totam!
        </p>
      </header>
      <div>
        <input type="text" placeholder="Enter domain name here..." />
        <button>
          <MdOutlineYoutubeSearchedFor size={25} />
          Search
        </button>
      </div>
      <ul>
        {domains.map(domain => (
          <li key={domain.id}>
            <a
              href="/"
              onClick={event => handleSelected(event, domain.id)}
              className={domain.isSelected ? `${styles.active}` : ""}
            >
              {domain.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
