import React from "react";
import styles from "../../styles/Destiny.module.css";
import DestinyBg from "../../assets/destination/background-destination-desktop.jpg";
import Europa from "../../components/planetsDestiny/Europa";
import Mars from "../../components/planetsDestiny/Mars";
import Moon from "../../components/planetsDestiny/Moon";
import Titan from "../../components/planetsDestiny/Titan";

const Destination = () => {
  const [moon, setMoon] = React.useState(true);
  const [mars, setMars] = React.useState(false);
  const [europa, setEuropa] = React.useState(false);
  const [titan, setTitan] = React.useState(false);

  return (
    <section className={`${styles.destination} container`}>
      <ul>
        <li className={moon ? styles.btnActive : ""}>
          <button
            id="moon"
            onClick={() => {
              setMoon(true);
              setMars(false);
              setEuropa(false);
              setTitan(false);
            }}
          >
            moon
          </button>
        </li>

        <li className={mars ? styles.btnActive : ""}>
          <button
            id="mars"
            onClick={() => {
              setMoon(false);
              setMars(true);
              setEuropa(false);
              setTitan(false);
            }}
          >
            mars
          </button>
        </li>

        <li className={europa ? styles.btnActive : ""}>
          <button
            id="europa"
            onClick={() => {
              setMoon(false);
              setMars(false);
              setEuropa(true);
              setTitan(false);
            }}
          >
            europa
          </button>
        </li>

        <li className={titan ? styles.btnActive : ""}>
          <button
            id="titan"
            onClick={() => {
              setMoon(false);
              setMars(false);
              setEuropa(false);
              setTitan(true);
            }}
          >
            titan
          </button>
        </li>
      </ul>
      {moon ? (
        <div id="moon">
          <Moon />
        </div>
      ) : null}

      {mars ? (
        <div id="mars">
          <Mars />
        </div>
      ) : null}

      {europa ? (
        <div id="europa">
          <Europa />
        </div>
      ) : null}

      {titan ? (
        <div id="titan">
          <Titan />
        </div>
      ) : null}

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
