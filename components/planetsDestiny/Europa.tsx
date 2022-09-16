import React from "react";
import Image from "next/image";
import EuroppaPng from "../../assets/destination/image-europa.png";
import styles from "./Planets.module.css";

const Europa = () => {
  return (
    <div className={styles.container}>
      <figure>
        <Image src={EuroppaPng} alt="mars" />
      </figure>
      <div>
        <h1>Europa</h1>
        <p className={styles.description}>
          The smallest of the four Galilean moons orbiting Jupiter, Europa is a
          winter lover’s dream. With an icy surface, it’s perfect for a bit of
          ice skating, curling, hockey, or simple relaxation in your snug
          wintery cabin.
        </p>

        <p>
          avg.distance time<span>628 mil. km</span>
        </p>

        <p>
          est.travel time <span>3 years</span>
        </p>
      </div>
    </div>
  );
};

export default Europa;
