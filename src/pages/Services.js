import React from "react";
import imageOne from "../images/services-banner-img.png";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import WhatWeDo from "../components/WhatWeDo";
import WhatWorksBest from "../components/WhatWorksBest";
import Form from "../components/Form";

const Services = () => {
  return (
    <div>
    
      <section>
        <div class="container my-5">
          <div class=" container row align-items-start">
            <div class="col-lg-6 my-5">
              <p className="page-title">Services</p>

              <h1 className="text-1">
                We Engineer{" "}
                <span class="color-primary-lg">Software Solutions</span>{" "}
              </h1>
              <p className="caption">
                We help you envision technology that powers the future of your
                business
              </p>
              <button type="button" class="btn btn-primary" id="button">
                Explore Our Digital Solutions
                <span class="mx-2 link-arrow">
                  <LiaLongArrowAltRightSolid />
                </span>
              </button>
            </div>
            <div class="col-lg-6">
              <img className="w-100" src={imageOne} />
            </div>
          </div>
        </div>
      </section>
      <WhatWeDo />
      <WhatWorksBest />
      <Form />
      
    </div>
  );
};

export default Services;
