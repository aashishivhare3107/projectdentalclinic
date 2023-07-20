import React from "react";
import image from "../images/heroimg.jpg";
import "../styles/hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          life is short. <br />
          Smile you still have teeth.
        </h1>
        <p>
        Dental clinic delivers quality dentistry with a personalized touch.
        Each patient is treated with the utmost care, compassion, empathy
        and state-of-the-art dentistry that promises nothing but the best.
        </p>
      </div>
      <div className="hero-img">
        <img
          src={image}
          alt="hero"
        />
      </div>
    </section>
  );
};

export default Hero;
