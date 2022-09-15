import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import HomeBg from "../assets/home/background-home-desktop.jpg";
import React, { useEffect } from "react";

const Home: NextPage = () => {
  return (
    <section className={`${styles.home} container`}>
      <div className={styles.mainContainer}>
        <div>
          <h2>so, you want to travel</h2>
          <h1 className={styles.title}>SPACE</h1>
          <p>
            Lets face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because well give you a truly out of this
            world experience!
          </p>
        </div>
        <div>
          {" "}
          <button>explore</button>
        </div>
      </div>

      <style global jsx>
        {`
          body {
            background-image: url(${HomeBg.src});
            background-repeat: no-repeat;
            background-size: cover;
          }
        `}
      </style>
    </section>
  );
};

export default Home;
