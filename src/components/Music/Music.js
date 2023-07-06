import React, { useEffect } from "react";
import {
  MusicSide,
  shopify,
  listenOnSpotify,
  listenOnAppleMusic,
  slides1,
  slides2,
  slides3,
  slides4,
  slides5,
  slides6,
  slides7,
  slides8,
  slides9,
} from "../../images/image";
import Swiper, { Autoplay, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import styles from "./styles.module.css";
import ScrollToNextSection from "../ScrollToNextSection/ScrollToNextSection";
import SideImage from "../SideImage/SideImage";

const Music = () => {
  const slides = [
    { img: slides1 },
    { img: slides2 },
    { img: slides3 },
    { img: slides4 },
    { img: slides5 },
    { img: slides6 },
    { img: slides7 },
    { img: slides8 },
    { img: slides9 },
  ];
  useEffect(() => {
    let swiper = new Swiper(".mySwiper", {
      modules: [Autoplay, Navigation],

      direction: "horizontal",
      loop: true,
      slidesPerView: 4,
      spaceBetween: 0,
      autoplay: {
        delay: 4000,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        767: {
          slidesPerView: 4,
        },
        400: {
          slidesPerView: 2,
        },
        100: {
          slidesPerView: 2,
        },
      },
    });

    return () => {
      if (swiper) swiper.destroy();
    };
  }, []);
  return (
    <section className={styles.wrapper} id="music">
      <div className={styles.sliderWrapper}>
        <div className={styles.mySlider}>
          <div className={`swiper mySwiper`}>
            <div className="swiper-wrapper" style={{ padding: "0 100px" }}>
              {slides.map((el, i) => {
                return (
                  <div key={i} className="swiper-slide">
                    <img src={el.img} alt="#" className={styles.slides} />
                  </div>
                );
              })}
            </div>
          </div>
          <div
            className={`${styles.swiperButtonPrevs} swiper-button-prev`}
          ></div>
          <div
            className={`${styles.swiperButtonNexts} swiper-button-next`}
          ></div>
        </div>
      </div>
      <div className={styles.listenWrapper}>
        <img src={shopify} alt="#" className={styles.shopify} />
      </div>
      <div className={styles.iframeContainer}>
      <iframe
          title="Meet Jonathan Bartz!"
          width="100%"
          height="352"
          scrolling="no"
          frameborder="no"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/282200970&amp;color=%2338405d&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true"
        ></iframe>
      </div>
      <div className={styles.displayInline}>
      <a href="https://open.spotify.com/artist/0AbB4b3SMlb6bYhyFXJ9SG" target="_blank" rel="noreferrer">
      <img src={listenOnSpotify} alt="#" className={styles.listenOnSpotify} />
      </a>
      <a href="https://music.apple.com/us/artist/jonathan-bartz/499396815" target="_blank" rel="noreferrer">
      <img src={listenOnAppleMusic} alt="#" className={styles.listenOnAppleMusic} />
      </a>
</div>
      <ScrollToNextSection nextSection="bio" />
      <SideImage image={MusicSide} />
    </section>
  );
};

export default Music;
