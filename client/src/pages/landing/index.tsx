import React from "react";
import HeaderComponent from "../../components/Header";
import BannerComponent from "../../components/Banner";
import AboutUsComponent from "../../components/AboutUs";
import Testimonial from "../../components/Testimony";
import LandingFooter from "../../components/LandingFooter";

const LandingPage = () => {
  return (
    <>
      <HeaderComponent />
      <BannerComponent />
      <AboutUsComponent />
      <Testimonial />
      <AboutUsComponent />
      <Testimonial />
      <LandingFooter />
    </>
  );
};

export default LandingPage;
