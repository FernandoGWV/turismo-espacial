import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HomeBg from "../assets/home/background-home-desktop.jpg";
import React, { useEffect } from "react";

const Home: NextPage = () => {
  return (
    <section className={styles.home}>
      Começando o Projeto Turismo Espacial
      <style global jsx>
        {`
          body {
            background-image: url(${HomeBg.src});
            background-image: url(${HomeBg.src});
            background-repeat: no-repeat;
            background-position: cover;
            background-size: cover;
          }
        `}
      </style>
    </section>
  );
};

export default Home;
