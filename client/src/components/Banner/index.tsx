import React from "react";
import "../../assets/scss/Banner/banner.scss";

const BannerComponent = () => {
  return (
    <section className="section-hero">
      <div className="hero">
        <div className="hero-text-box">
          <h1 className="heading-primary">EC - CARE MEDICAL LABORATORY</h1>
          <p className="hero-description">
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs.
          </p>
          <a href="#" className="btn btn--fill margin-right-btn">
            View Services
          </a>
        </div>
        <div className="hero-img-box">
          <img
            src="https://prayagtandon.github.io/Omnifood-Project/Hero-section/img/hero.png"
            alt="Woman enjoying food, meals in storage container, and food bowls on a table"
            className="hero-img"
          />
        </div>
        <div className="delivered-meals">
          <p className="delivered-text">
            <span>250,000+</span> meals delivered last year!
          </p>
        </div>
      </div>
    </section>
  );
};

export default BannerComponent;
