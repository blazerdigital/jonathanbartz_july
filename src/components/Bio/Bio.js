import React from "react";
import { BioSide } from "../../images/image";
import ScrollToNextSection from "../ScrollToNextSection/ScrollToNextSection";
import SideImage from "../SideImage/SideImage";
import styles from "./styles.module.css";
const Bio = () => {
  return (
    <section className={styles.wrapper} id="bio">
      <div className={styles.descriptionContainer}>
        <div className={styles.descriptionWrapper}>
          <p className={styles.description}>
          Jonathan Bartz is an award-winning composer based in Los Angeles. A life-long fan of filmmaking, he has a passion for collaborating with new and burgeoning film, television and other mediamakers. Described as “uniquely talented,” (Guillermo Díaz, director) “kind, genuine, shockingly intuitive” (Adam Sass, author) and “the preeminent collaborator” (Rob Matthews, director) he brings a fresh and singularly crafted sound to each project.
            <br />
            <br />
            <span className={styles.highlight}>Humanity</span>,
            <span className={styles.highlight}> craftsmanship</span>,
            <span className={styles.highlight}> exploration </span>
            and<span className={styles.highlight}> hot coffee</span> are at the heart of Jonathan’s soul and sound. Recently, he has enjoyed working on such iconic films as the latest <span className={styles.boldedword}>Star Wars</span> Trilogy (The Force Awakens, The Last Jedi, The Rise of Skywalker) and Marvel’s <span className={styles.boldedword}>Avengers</span> series (Infinity War, Endgame). Other recent credits include <span className={styles.boldedword}>Indiana Jones and the Dial of Destiny</span>, <span className={styles.boldedword}>The Fabelmans</span>, <span className={styles.boldedword}>Lego Star Wars </span>animated television series, and <span className={styles.boldedword}>The Orville</span>.
            <br />
            <br />
            He has worked with directors and artists from Steven Spielberg and J.J. Abrams to Cheyenne Jackson and Mariah Carey. His music has been heard, recorded, and performed across the United States from Carnegie Hall in New York City to the scoring stages of Los Angeles.
            <br />
            <br />
            <span className={`${styles.highlight} ${styles.boldedword}`}>Please don’t hesitate to reach out and introduce yourself!</span>
          </p>
        </div>
      </div>
      <div className={styles.biobackgroundimage}></div>
      <ScrollToNextSection nextSection="contact" />
      <SideImage image={BioSide} />
    </section>
  );
};

export default Bio;
