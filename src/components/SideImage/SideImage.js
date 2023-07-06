import React from "react";
import styles from "./styles.module.css";
const SideImage = ({ image }) => {
  return (
    <>
      <img src={image} alt="#" className={styles.sideImage} />
    </>
  );
};

export default SideImage;

