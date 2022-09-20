import React, { useState } from "react";
import CrewBg from "../../assets/crew/background-crew-desktop.jpg";
import styles from "../../styles/Crew.module.css";

const Crew = () => {
  const [loading, setLoading] = useState(false);
  React.useEffect(() => {
    setLoading(true);
    document.documentElement.style.background = `url(${CrewBg.src})`;
    document.documentElement.style.backgroundRepeat = "no-repeat";
    document.documentElement.style.backgroundSize = `cover`;
    setLoading(false);
  }, []);

  if (loading) return <div>Carregando...</div>;
  return (
    <section className="container">
      <div className={styles.header}> </div>
    </section>
  );
};

export default Crew;
