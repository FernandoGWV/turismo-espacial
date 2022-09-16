import React from "react";
import Image from "next/image";
import MarsPng from "../../assets/destination/image-mars.png";
import styles from "./Planets.module.css";

const Mars = () => {
  return (
    <div className={styles.container}>
      <figure>
        <Image src={MarsPng} alt="mars" />
      </figure>
      <div>
        <h1>Mars</h1>
        <p className={styles.description}>
          Don’t forget to pack your hiking boots. You’ll need them to tackle
          Olympus Mons, the tallest planetary mountain in our solar system. It’s
          two and a half times the size of Everest!
        </p>

        <p>
          avg.distance time<span>225 mil. km</span>
        </p>

        <p>
          est.travel time <span>9 months</span>
        </p>
      </div>
    </div>
  );
};

export default Mars;
