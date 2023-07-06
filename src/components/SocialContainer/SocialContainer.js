import React from "react";
import { facebook, imdb, instagram, soundCloud, spotify, appleMusic } from "../../images/image";
import styles from "./styles.module.css";

const SocialContainer = () => {
  const socials = [
    { icon: instagram, to: "https://www.instagram.com/AmityIslandMusic/" },
    { icon: facebook, to: "https://www.facebook.com/people/Amity-Island-Music/100062956312860" },
    { icon: imdb, to: "http://www.imdb.com/name/nm3247791" },
    { icon: soundCloud, to: "https://soundcloud.com/melodious_harmony" },
    { icon: spotify, to: "https://open.spotify.com/artist/0AbB4b3SMlb6bYhyFXJ9SG" },
    { icon: appleMusic, to: "https://music.apple.com/us/artist/jonathan-bartz/499396815" },
  ];

  return (
    <div className={styles.socialContainer}>
      {socials.map((el, i) => (
        <a
          key={i}
          href={el.to}
          target="_blank"
          rel="noreferrer"
          className={styles.socialIconLink}
        >
          <img
            src={el.icon}
            alt="#"
            className={styles.socialIcon}
          />
        </a>
      ))}
    </div>
  );
};

export default SocialContainer;