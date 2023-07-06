import React, { useEffect } from "react";
import { TestimonialSide } from "../../images/image";
import Swiper, { Autoplay, Navigation } from "swiper";
import styles from "./styles.module.css";
import "swiper/css";
import "swiper/css/navigation";
import ScrollToNextSection from "../ScrollToNextSection/ScrollToNextSection";
import SideImage from "../SideImage/SideImage";

const Testimonial = () => {
  const slides = [
    {
      description:
        "I love working with Jonathan Bartz! He brings a wealth of knowledge and talent to any project that he does. He’s a wonderful composer and orchestrator and is superbly knowledgeable. Saying Yes! to Jonathan’s involvement on any project is going to be to the benefit of everyone involved!",
      name: "Bill Ross",
      position: "Obi-Wan Kenobi, Indiana Jones and the Dial of Destiny",
    },
    {
      description:
        "Jonathan is an incredible musical talent who I’ve had the pleasure of working with on multiple projects. He will undoubtedly be my first choice composer on any project I direct. I truly believe he will go on to become one of the great film/tv composers of our generation.",
      name: "Rob Matthews",
      position: "Director",
    },
    {
      description:
        "I feel extremely fortunate that my Directorial debut will be scored by the uniquely talented composer, Jonathan Bartz. I cannot wait to hear what he creates for the otherworldly vibe of our film...",
      name: "Guillermo Díaz",
      position: "Director",
    },
    {
      description:
        "Jonathan has composed original scores on multiple projects for me. He has a wonderful understanding of human emotion and how that translates musically and can enhance the storytelling. His orchestration and overall musical quality has immense depth to it. One of his most important qualities is also his ability to take direction and understand the vision for the film. It is always a huge pleasure getting to work with Jonathan.",
      name: "Lukas Colombo",
      position: "Director",
    },
    {
      description:
        "Working with a composer like Jonathan Bartz is every filmmakers dream. Not only is he an exceptionally talented musician, he’s also a very kind and genuine person who is an absolute pleasure to collaborate with. If you believe that music is truly the heart and soul of a film, Jonathan is the man you want behind the curtain.",
      name: "Adam Sass",
      position: "Author",
    },
    {
      description:
        "I’ve known Jonathan Bartz for over a decade, and I am constantly in awe of his creativity, resourcefulness, and adaptability as a creative collaborator. Bartz has one of the most extensive inner libraries of musical knowledge I've ever known in a person. He is kind, quick, and shockingly intuitive at knowing what a given mood calls for. His taste level is through the roof. I couldn't recommend him more!",
      name: "John Huybrecht",
      position: "Director",
    },
    {
      description:
        "As a first-time filmmaker, I anticipated finding the right music to be quite a challenge. I’m so thankful fate brought me together with Jonathan Bartz. The beautiful, eerie, award-winning score he created elevated my project to a place I couldn’t have even imagined. I was captivated by his instincts and appreciative of his patience and willingness to implement all of my notes, no matter how particular. I couldn’t ask for a better collaborator and I’m excited for our next project together!",
      name: "Daniel Bruington",
      position: "Director",
    },
  ];

  useEffect(() => {
    let swiper = new Swiper(".descriptionSwiper", {
      modules: [Autoplay, Navigation],

      direction: "horizontal",
      loop: true,
      slidesPerView: 1,
      spaceBetween: 15,
      autoplay: {
        delay: 6000,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    return () => {
      if (swiper) swiper.destroy();
    };
  }, []);
  return (
    <section className={styles.wrapper} id="testimonial">
      <div className={styles.mySlider}>
        <div className={`swiper descriptionSwiper`}>
          <div className="swiper-wrapper">
            {slides.map((el, i) => {
              return (
                <div key={i} className="swiper-slide">
                  <div className={styles.descriptionContainer}>
                    <p className={styles.description}> {el.description}</p>

                    <div className={styles.nameAndPostion}>
                      <p className={styles.name}>{el.name}</p>
                      <p className={styles.position}>{el.position}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            className={`${styles.swiperButtonPrev} swiper-button-prev`}
          ></div>
          <div
            className={`${styles.swiperButtonNext} swiper-button-next`}
          ></div>
        </div>
      </div>
      <SideImage image={TestimonialSide} />
      <ScrollToNextSection nextSection="music" />
    </section>
  );
};

export default Testimonial;
