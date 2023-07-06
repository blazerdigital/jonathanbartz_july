import React from "react";
import { Link } from "react-scroll";
import { arrow } from "../../images/image";
import styles from "./styles.module.css";

const ScrollToNextSection = ({ nextSection }) => {
  return (
    <div>
      <Link to={nextSection} spy={true} smooth={true} offset={0} duration={500}>
        <img src={arrow} alt="#" className={styles.arrow} />
      </Link>
    </div>
  );
};

export default ScrollToNextSection;
