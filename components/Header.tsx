import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import Image from "next/image";
import Logo from "../assets/shared/logo.svg";

const Header = () => {
  return (
    <header className={`${styles.mainContainer} container`}>
      <figure>
        <Image src={Logo} alt="Logo" />
      </figure>
      <div>
        <section>
          <nav className={styles.header}>
            <ul>
              <li>
                <Link href="/">
                  <a>
                    {" "}
                    <span>00</span> Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/destination">
                  <a>
                    {" "}
                    <span>01</span> Destination
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/crew">
                  <a>
                    {" "}
                    <span>02</span> crew
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/technology">
                  <a>
                    {" "}
                    <span>03</span> technology
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </section>
      </div>
    </header>
  );
};

export default Header;
