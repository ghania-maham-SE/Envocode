import React from "react";
import imageTwo from "../images/card1-img.png";
import imageThree from "../images/card2-img.png";
import imageFive from "../images/abb-salesforce-min.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import imageSix from "../images/salesForceTestImg.jpg";
import ReadMore from "./ReadMore";

const WhatWorksBest = () => {
  return (
    <div className="container">
      <section>
        <h2 className=" container text-2 my-3 ">
          What Works <span className="color-primary-lg">Best For You?</span>
        </h2>
        <div class="container row row-cols-1 row-cols-md-2 g-4 ">
          <div class="col-lg-6">
            <div class="card mb-3   ">
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    src={imageTwo}
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-md-8 card-hover">
                  <div class="card-body ">
                    <h5 class="card-title tab-text my-3 ">Dedicated Teams</h5>
                    <p class="card-text">
                      Make your workflows 2x efficient. Achieve your project
                      goals faster and better with purposely-built dedicated
                      teams.
                    </p>

                    <a className="link-button " href="">
                      Explore More <MdOutlineKeyboardArrowRight />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card mb-3 ">
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    src={imageThree}
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-md-8  card-hover">
                  <div class="card-body">
                    <h5 class="card-title tab-text my-3 font-weight-bold">
                      Fixed Pirce Projects
                    </h5>
                    <p class="card-text">
                      Say goodbye to scope creep and unexpected project costs.
                      Get your projects delivered well-aligned with your vision.
                    </p>

                    <a className="link-button " href="">
                      Explore More <MdOutlineKeyboardArrowRight />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className=" container text-2 my-3 ">
          Success <span className="color-primary-lg">Stories</span>
        </h2>

        <div
          id="carouselExampleCaptions"
          class="carousel carousel-dark slide"
          data-bs-ride="false"
        >
          <div class="carousel-inner ">
            <div class="carousel-item active ">
              <div class="card-group row row-cols-1 row-cols-md-2 g-4">
                <div class="col">
                  <div class="card">
                    <img src={imageSix} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <div class="d-flex align-items-center mb-4 mb-lg-0 text-start">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.webp"
                          class="rounded-circle img-fluid shadow-1"
                          alt="woman avatar"
                          width="100"
                          height="200"
                        />
                        <div class="ms-3">
                          <h5>Zynab Tucker </h5>
                          <p>CEO - Nitro League</p>
                        </div>
                      </div>

                      <ReadMore />
                    </div>
                  </div>
                </div>

                <div class="col">
                  <div class="card">
                    <img src={imageFive} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <div class="d-flex align-items-center mb-4 mb-lg-0 text-start">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.webp"
                          class="rounded-circle img-fluid shadow-1"
                          alt="woman avatar"
                          width="100"
                          height="200"
                        />
                        <div class="ms-3">
                          <h5>Zynab Tucker </h5>
                          <p>CEO - Nitro League</p>
                        </div>
                      </div>

                      <ReadMore />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="carousel-item">
              <div class="card-group row row-cols-1 row-cols-md-2 g-4">
                <div class="col">
                  <div class="card">
                    <img src={imageFive} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <div class="d-flex align-items-center mb-4 mb-lg-0 text-start">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.webp"
                          class="rounded-circle img-fluid shadow-1"
                          alt="woman avatar"
                          width="100"
                          height="200"
                        />
                        <div class="ms-3">
                          <h5>Zynab Tucker </h5>
                          <p>CEO - Nitro League</p>
                        </div>
                      </div>

                      <ReadMore />
                    </div>
                  </div>
                </div>

                <div class="col">
                  <div class="card ">
                    <img src={imageSix} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <div class="d-flex align-items-center mb-4 mb-lg-0 text-start">
                        <img
                          src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20%2810%29.webp"
                          class="rounded-circle img-fluid shadow-1"
                          alt="woman avatar"
                          width="100"
                          height="200"
                        />
                        <div class="ms-3">
                          <h5>Zynab Tucker </h5>
                          <p>CEO - Nitro League</p>
                        </div>
                      </div>
                      <ReadMore />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      <div className="text-center">
        <button type="button" class="btn btn-primary my-3 " id="button">
          View more
          <span class="mx-2 link-arrow">
            <LiaLongArrowAltRightSolid />
          </span>
        </button>
      </div>
    </div>
  );
};

export default WhatWorksBest;
