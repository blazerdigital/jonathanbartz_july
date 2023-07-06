import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { hamburger } from "../../images/image";
import styles from "./styles.module.css";
import SocialContainer from "../SocialContainer/SocialContainer";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const navItems = [
    { navItem: "ABOUT", to: "about" },
    { navItem: "TESTIMONIALS", to: "testimonial" },
    { navItem: "MUSIC", to: "music" },
    { navItem: "bio", to: "bio" },
    { navItem: "Collaboration", to: "contact" },
  ];
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 90) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {sidebar ? (
        <p class={styles.close} onClick={() => setSidebar((prev) => !prev)}></p>
      ) : (
        <img
          src={hamburger}
          alt="#"
          className={styles.hamburger}
          onClick={() => setSidebar((prev) => !prev)}
        />
      )}
      <section
        className={`${styles.navbar} ${sidebar && styles.sidebar} ${
          scrolled && styles.activeBg
        }`}
      >
        <div className={`${styles.navItems} `}>
          {navItems.map((el, i) => (
            <Link
              to={el.to}
              className={styles.navItem}
              key={i}
              activeClass={styles.active}
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              onClick={() => setSidebar(false)}
            >
              {el.navItem}{" "}
            </Link>
          ))}
        </div>
        <div className={styles.socialContainer}>
        <SocialContainer />
        </div>
      </section>
    </>
  );
};

export default Navbar;
