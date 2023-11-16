import React from "react";
import { QuoteAltRight } from "styled-icons/boxicons-solid";
import people from "../../assets/image/random/people.png";
import Slider from "react-slick";
import "../../assets/scss/Testimonial/testimonial.scss";
import { settings } from "./settings";
import { Grid, Typography } from "@mui/material";

const Testimonial = () => {
  return (
    <>
      <div className="testimonials">
        <div className="con">
          <div className="row">
            <h2>Testimonials</h2>
            <Slider {...settings}>
              <Grid item md={6} lg={4}>
                <div className="card border-light bg-light text-center">
                  <div className="up">
                    <QuoteAltRight
                      size={45}
                      className="card-img-top rounded-circle"
                      aria-hidden="true"
                      color="#0c7f3e"
                    />
                  </div>
                  <div className="card-body blockquote">
                    <div className="">
                      <img src={people} alt="Avatar" />
                    </div>
                    <p className="card-text">
                      I learned more about my craft, and I was impressed that
                      they market it in different countries. The staff were
                      always friendly and willing to answer any questions I had.
                    </p>
                    <footer className="blockquote-footer">
                      <cite title="Source Title">Lilian White</cite>
                    </footer>
                    <footer className="testimonials-book-title blockquote">
                      <cite title="Source Title">Emmanuel</cite>
                    </footer>
                  </div>
                </div>
              </Grid>

              <Grid item md={6} lg={4}>
                <div className="card border-light bg-light text-center">
                  <div className="up">
                    <QuoteAltRight
                      size={45}
                      className="card-img-top rounded-circle"
                      aria-hidden="true"
                      color="#0c7f3e"
                    />
                  </div>
                  <div className="card-body blockquote">
                    <div className="">
                      <img src={people} alt="Avatar" width={"50%"} />
                    </div>
                    <p className="card-text">
                      Stratton Press not only took their time to walk me all the
                      way but went further by providing the editing, publishing,
                      and marketing side. I would recommend Stratton Press for
                      being a good, caring publishing company and the best team
                      of professionals I grew to love and admire.
                    </p>
                    <footer className="blockquote-footer">
                      <cite title="Source Title">Adelia Goncalves</cite>
                    </footer>
                    <footer className="testimonials-book-title blockquote">
                      <cite title="Source Title">Love Me Now & Forever</cite>
                    </footer>
                  </div>
                </div>
              </Grid>

              <Grid item md={6} lg={4}>
                <div className="card border-light bg-light text-center">
                  <div className="up">
                    <QuoteAltRight
                      size={45}
                      className="card-img-top rounded-circle"
                      aria-hidden="true"
                      color="#0c7f3e"
                    />
                  </div>
                  <div className="card-body blockquote">
                    <div className="">
                      <img src={people} alt="Avatar" width={"50%"} />
                    </div>
                    <p className="card-text">
                      I really appreciated the way your organization has helped
                      me as a writer to have a finished product with my book. It
                      was really helpful to work with the company which not only
                      provided great suggestions but also was considerate
                      regarding my ideas and vision. I am grateful that such a
                      difficult journey for others was a less stressful process
                      for me.
                    </p>
                    <footer className="blockquote-footer">
                      <cite title="Source Title">Jean-Maurice Belekwa</cite>
                    </footer>
                    <footer className="testimonials-book-title blockquote">
                      <cite title="Source Title">
                        How the Tiniest Can Be Stronger Than the Most Ferocious
                      </cite>
                    </footer>
                  </div>
                </div>
              </Grid>

              <Grid item md={6} lg={4}>
                <div className="card border-light bg-light text-center">
                  <div className="up">
                    <QuoteAltRight
                      size={45}
                      className="card-img-top rounded-circle"
                      aria-hidden="true"
                      color="#0c7f3e"
                    />
                  </div>
                  <div className="card-body blockquote">
                    <div className="">
                      <img src={people} alt="Avatar" width={"50%"} />
                    </div>
                    <p className="card-text">
                      I thought the complete procedure was very good. Far better
                      than any I have seen previously with other books.
                    </p>
                    <footer className="blockquote-footer">
                      <cite title="Source Title">Tom Shipley</cite>
                    </footer>
                    <footer className="testimonials-book-title blockquote">
                      <cite title="Source Title">
                        The United States of America: The Most Successful Nation
                        and People of All
                      </cite>
                    </footer>
                  </div>
                </div>
              </Grid>

              <Grid item md={6} lg={4}>
                <div className="card border-light bg-light text-center">
                  <div className="up">
                    <QuoteAltRight
                      size={45}
                      className="card-img-top rounded-circle"
                      aria-hidden="true"
                      color="#0c7f3e"
                    />
                  </div>
                  <div className="card-body blockquote">
                    <div className="">
                      <img src={people} alt="Avatar" width={"50%"} />
                    </div>
                    <p className="card-text">
                      Stratton Press has taken the rough road to publication and
                      smoothed it out. As an author, I feel grateful to each and
                      every member of their team. It's almost like being part of
                      a family.
                    </p>
                    <footer className="blockquote-footer">
                      <cite title="Source Title">Jerry Crossley</cite>
                    </footer>
                    <footer className="testimonials-book-title blockquote">
                      <cite title="Source Title">The Seen and the Unseen</cite>
                    </footer>
                  </div>
                </div>
              </Grid>

              <Grid item md={6} lg={4}>
                <div className="card border-light bg-light text-center">
                  <div className="up">
                    <QuoteAltRight
                      size={45}
                      className="card-img-top rounded-circle"
                      aria-hidden="true"
                      color="#0c7f3e"
                    />
                  </div>
                  <div className="card-body blockquote">
                    <div className="">
                      <img src={people} alt="Avatar" width={"50%"} />
                    </div>
                    <p className="card-text">
                      For ease of working with, this publisher is one of the
                      best. Beautiful work and done in a timely manner.
                    </p>
                    <footer className="blockquote-footer">
                      <cite title="Source Title">CB Millien</cite>
                    </footer>
                    <footer className="testimonials-book-title blockquote">
                      <cite title="Source Title">
                        Savage Destiny: Blood Bond
                      </cite>
                    </footer>
                  </div>
                </div>
              </Grid>

              <Grid item md={6} lg={4}>
                <div className="card border-light bg-light text-center">
                  <div className="up">
                    <QuoteAltRight
                      size={45}
                      className="card-img-top rounded-circle"
                      aria-hidden="true"
                      color="#0c7f3e"
                    />
                  </div>
                  <div className="card-body blockquote">
                    <div className="">
                      <img src={people} alt="Avatar" width={"50%"} />
                    </div>
                    <p className="card-text">
                      They did an amazing job on my novel, Rebirth of the Dark
                      Ones. Check it out! I would recommend them.
                    </p>
                    <footer className="blockquote-footer">
                      <cite title="Source Title">Clint Charles Fryer</cite>
                    </footer>
                    <footer className="testimonials-book-title blockquote">
                      <cite title="Source Title">Rebirth of the Dark Ones</cite>
                    </footer>
                  </div>
                </div>
              </Grid>
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
