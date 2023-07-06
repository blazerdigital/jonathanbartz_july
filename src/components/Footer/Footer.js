import React from "react";
import { owner } from "../../images/image";
import SocialContainer from "../SocialContainer/SocialContainer";
import styles from "./styles.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section className={styles.footer}>
      <img src={owner} alt="#" className={styles.owner} />
      <div className="footersocial">
        <SocialContainer />
      </div>
      <p className={styles.text}>{`${currentYear} JONATHANBARTZ.COM ALL RIGHTS RESERVED`}</p>
    </section>
  );
};

export default Footer;
