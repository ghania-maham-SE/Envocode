import React from 'react';
import videoMain from "../images/tkxel-banner-video-comp.mp4";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import ServicesWeOffer from '../components/ServicesWeOffer';
import Form from '../components/Form';
import WhatWorksBest from '../components/WhatWorksBest';

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <video className="w-100" loop muted>
        <source src={videoMain} type="video/mp4" />
      </video>
      <div className='main-heading container'>
        <h1 className='my-5 '>We Engineer Software Solutions</h1>
        <p>Enterprises . Growth Companies . Startups </p>
        <div className="text-center">
          <button type="button" className="btn btn-primary my-5" id="button">
            Tell Us About Your Project
            <span className="mx-2 link-arrow">
              <LiaLongArrowAltRightSolid />
            </span>
          </button>
        </div>
      </div>
      <ServicesWeOffer />
      <WhatWorksBest/>
      <Form/>
    </div>
  );
};

export default LandingPage;
