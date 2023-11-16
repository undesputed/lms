import React from "react";
import "../../assets/scss/AboutUs/aboutus.scss";

const AboutUsComponent = () => {
  return (
    <>
      <div className="we-are-block">
        <div id="about-us-section">
          <div className="about-us-image">
            <img
              src="https://images.unsplash.com/photo-1602052577122-f73b9710adba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxhYm9yYXRvcnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              width="808"
              height="458"
              alt="Lobby Image"
            />
          </div>

          <div className="about-us-info">
            <h2>&lt;Section Title&gt;</h2>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>

            <a href="#" title="About Us Button">
              ABOUT US
            </a>
          </div>
        </div>

        <div id="history-section">
          <div className="history-image">
            <img
              src="https://images.unsplash.com/photo-1518152006812-edab29b069ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGFib3JhdG9yeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              width="951"
              height="471"
              alt="Building Pic"
            />
          </div>

          <div className="history-info">
            <h2>&lt;Section Title&gt;</h2>

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>

            <a href="#" title="History Button">
              HISTORY
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsComponent;
