import React from "react";
import image from "../images/ashi.jpg";

const AboutUs = () => {
  return (
    <>
      <section className="container">
        <h2 className="page-heading about-heading">About Us</h2>
        <div className="about">
          <div className="hero-img">
            <img
              src={image}
              alt="hero"
            />
          </div>
          <div className="hero-content">
            <p>
            We provide oral care solutions for all dental problems, including Root
            Canal Treatment, teeth whitening, teeth cleansing and polishing, 
            complete or partial dentures, orthodontic treatment and more. With our
            team of expert dentists, we take care of all your dental needs and ensure
            complete sterilization in all our procedures.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
