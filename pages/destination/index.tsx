import React from "react";
import styles from "../../styles/Destiny.module.css";
import DestinyBg from "../../assets/destination/background-destination-desktop.jpg";
import Europa from "../../components/planetsDestiny/Europa";
import Mars from "../../components/planetsDestiny/Mars";
import Moon from "../../components/planetsDestiny/Moon";
import Titan from "../../components/planetsDestiny/Titan";

const Destination = () => {
  return (
    <section className={`${styles.destination} container`}>
      <ul>
        <li>
          <button id="moon">moon</button>
        </li>
        <li>
          <button id="mars">mars</button>
        </li>
        <li>
          <button id="europa">europa</button>
        </li>
        <li>
          <button id="titan">titan</button>
        </li>
      </ul>

      <div id="moon">
        <Moon />
      </div>

      {
        <style global jsx>{`
          body {
            background-image: url(${DestinyBg.src});
            background-repeat: no-repeat;
            background-size: cover;
          }
        `}</style>
      }
    </section>
  );
};

export default Destination;
