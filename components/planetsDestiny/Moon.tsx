import React from "react";
import Image from "next/image";
import MoonPng from "../../assets/destination/image-moon.png";
import styles from "./Planets.module.css";

const Moon = () => {
  return (
    <div className={styles.container}>
      <figure>
        <Image src={MoonPng} alt="moon" />
      </figure>
      <div>
        <h1>Moon</h1>
        <p className={styles.description}>
          See our planet as you’ve never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11
          landing sites.
        </p>
        <div className={styles.infor}>
          <p>
            avg.distance time<span>384,400 km</span>
          </p>

          <p>
            est.travel time <span>3 days</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Moon;
