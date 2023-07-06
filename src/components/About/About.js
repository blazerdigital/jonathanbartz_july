import React from "react";
import { animateScroll } from "react-scroll";
import { AboutSide, BackToTop, LogoCard } from "../../images/image";
import ScrollToNextSection from "../ScrollToNextSection/ScrollToNextSection";
import SideImage from "../SideImage/SideImage";
import styles from "./styles.module.css";
import SocialContainer from "../SocialContainer/SocialContainer";

const About = () => {
  return (
    <section className={styles.wrapper} id="about">
      <div className={styles.details}>
        <div className={styles.logoWrapper}>
          <img src={LogoCard} alt="Logo" className={styles.logo} />
        </div>
        <div className={styles.socialContainer}>
        <SocialContainer />
        </div>
      </div>
      <SideImage image={AboutSide} />
      <ScrollToNextSection nextSection="testimonial" />
      <img
        src={BackToTop}
        onClick={() => animateScroll.scrollToTop()}
        alt="#"
        className={styles.backtopTop}
      />
    </section>
  );
};

export default About;

