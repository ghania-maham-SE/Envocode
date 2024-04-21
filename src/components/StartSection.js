import React from 'react'
import {FaLongArrowAltRight} from "react-icons/fa";

const StartSection = () => {
  return (
    <div>
        
            <div className="sectionheading">
                <p>Our Clients</p>
                <h1 className="bolds">
                    Bringing vision <h1 className="mbt">to life</h1>
                </h1>
                <h5>
                    We are committed to offer tailor-made solutions <br /> well-aligned with your goals.
                </h5>
                <button type="button" className="btn btn-primary btn2">
                    Contact us
                    <FaLongArrowAltRight />
                </button>
            </div>
            <div className="sectiontwod bg-primary my-3">
                <h2 className="">We Are What Our Clients Need Us to Be</h2>
                <div className="">
                    <div className="row">
                        <div className="col-lg-2"></div>
                        <div className="col-lg-2 py-2">
                            <h2>500</h2>
                            <h4>Global Clients </h4>
                            <p>Across 40+ countries and 6 continents</p>
                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-2 py-2">
                            <h2>85%</h2>

                            <h4>Returning Clients</h4>
                            <p>Approach us to improve and expand their solutions</p>
                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-2 py-2">
                            <h2>60%</h2>
                            <h4>Loyal Clients</h4>
                            <p>Have continued to choose tkxel for over 3 years</p>
                        </div>
                    </div>
                </div>
            </div>
    
    </div>
  )
}

export default StartSection