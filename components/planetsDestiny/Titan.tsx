import React from "react";
import Image from "next/image";
import TitanPng from "../../assets/destination/image-titan.png";
import styles from "./Planets.module.css";

const Titan = () => {
  return (
    <div className={styles.container}>
      <figure>
        <Image src={TitanPng} alt="mars" />
      </figure>
      <div className={styles.mainContainer}>
        <h1>Titan</h1>
        <p className={styles.description}>
          The only moon known to have a dense atmosphere other than Earth, Titan
          is a home away from home (just a few hundred degrees colder!). As a
          bonus, you get striking views of the Rings of Saturn.
        </p>
        <div className={styles.infor}>
          <p>
            avg.distance time<span>1.6 bil. km</span>
          </p>

          <p>
            est.travel time <span>7 years</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Titan;
