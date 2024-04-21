import React from "react";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { SiAzuredevops } from "react-icons/si";
import { HiPencilSquare } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import { TbDeviceMobileCog } from "react-icons/tb";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { LuCircuitBoard } from "react-icons/lu";
import { MdOutlineWeb } from "react-icons/md";
const WhatWeDo = () => {
  return (
    <div>
      <section>
        <h1 className="container text-center my-5 text-2">What We Do</h1>
        <div class="container text-center">
          <div class="row align-items-start ">
            <div class="col-lg-3 tab-text">
              <a class="nav-link  " aria-current="page" href="#">
                Software Development
              </a>
            </div>
            <div class="col-lg-3 tab-text">
              <a class="nav-link" href="#">
                {" "}
                Consultation
              </a>
            </div>
            <div class="col-lg-3 tab-text">
              <a class="nav-link" href="#">
                Solutions
              </a>
            </div>
            <div class="col-lg-3 tab-text">
              <a class="nav-link" href="#">
                {" "}
                Emerging Technologies
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div class="container   my-5">
          <div class="row align-items-start ">
            <div class="col-lg-6 my-5">
              <h2 className="text-2 ">
                Software <span className="color-primary-lg">Development</span>
              </h2>
              <h4>
                Named among top 1% global companies by Clutch, we have the trust
                of 500+ companies when it comes to bespoke software solutions.
              </h4>
            </div>

            <div class="col-lg-6">
              <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col">
                  <div class="card card1">
                    <div class="card-body">
                      <h5 class="card-title title d-flex justify-content-between align-items-center">
                        <span className="card-icons mx-2">
                          <FaSearch />
                        </span>
                        Q/A Testing
                        <LiaLongArrowAltRightSolid />
                      </h5>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card card1">
                    <div class="card-body">
                      <h5 class="card-title title d-flex justify-content-between align-items-center">
                        <span className="card-icons mx-2">
                          <HiPencilSquare />
                        </span>
                        UI/UX Design
                        <LiaLongArrowAltRightSolid />
                      </h5>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card card1">
                    <div class="card-body">
                      <h5 class="card-title title d-flex justify-content-between align-items-center">
                        <span className="card-icons mx-2">
                          <SiAzuredevops />
                        </span>
                        DevOps
                        <LiaLongArrowAltRightSolid />
                      </h5>
                    </div>
                  </div>
                </div>{" "}
                <div class="col">
                  <div class="card card1">
                    <div class="card-body">
                      <h5 class="card-title title d-flex justify-content-between align-items-center">
                        <span className="card-icons mx-2">
                          <TbDeviceMobileCog />
                        </span>
                        Mobile Management
                        <LiaLongArrowAltRightSolid />
                      </h5>
                    </div>
                  </div>
                </div>{" "}
                <div class="col">
                  <div class="card card1">
                    <div class="card-body">
                      <h5 class="card-title title d-flex justify-content-between align-items-center">
                        <span className="card-icons mx-2">
                          <HiMiniComputerDesktop />
                        </span>
                        Custom Software Development
                        <LiaLongArrowAltRightSolid />
                      </h5>
                    </div>
                  </div>
                </div>{" "}
                <div class="col">
                  <div class="card card1">
                    <div class="card-body">
                      <h5 class="card-title title d-flex justify-content-between align-items-center">
                        <span className="card-icons mx-2">
                          <LuCircuitBoard />
                        </span>
                        Embedded Software Development
                        <LiaLongArrowAltRightSolid />
                      </h5>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card card1">
                    <div class="card-body">
                      <h5 class="card-title title d-flex justify-content-between align-items-center">
                        <span className="card-icons mx-2">
                          <MdOutlineWeb />
                        </span>
                        Web app Development
                        <span className="">
                          <LiaLongArrowAltRightSolid />
                        </span>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" bg-light p-3 my-5">
        <div class="container my-5">
          <div class="container row align-items-start">
            <div class="col-lg-6">
              <h2 className="text-2 ">
                Consultation <span className="color-primary-lg">services</span>
              </h2>
              <h4>
                We will help you accelerate your digital transformation journey.
              </h4>
            </div>
            <div class="col-lg-6">
              <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col">
                  <div class="card card1">
                    <div class="card-body bg-light">
                      <h5 class="card-title title d-flex justify-content-between align-items-center">
                        <span className="card-icons mx-2">
                          <LuCircuitBoard />
                        </span>
                        Discovery Workshop
                        <LiaLongArrowAltRightSolid />
                      </h5>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card card1">
                    <div class="card-body bg-light">
                      <h5 class="card-title title d-flex justify-content-between align-items-center">
                        <span className="card-icons mx-2">
                          <LuCircuitBoard />
                        </span>
                        Product Strategy
                        <LiaLongArrowAltRightSolid />
                      </h5>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card card1">
                    <div class="card-body bg-light">
                      <h5 class="card-title title d-flex justify-content-between align-items-center">
                        <span className="card-icons mx-2">
                          <LuCircuitBoard />
                        </span>
                        Process Consulting
                        <LiaLongArrowAltRightSolid />
                      </h5>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card card1">
                    <div class="card-body bg-light">
                      <h5 class="card-title title d-flex justify-content-between align-items-center">
                        <span className="card-icons mx-2">
                          <LuCircuitBoard />
                        </span>
                        POC
                        <LiaLongArrowAltRightSolid />
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div class="container   my-3">
          <div class="row align-items-start ">
            <div class="col-lg-6 my-5">
              <h2 className="text-2 ">
                Solution<span className="color-primary-lg">Implementation</span>
              </h2>
              <h4>
                As a trusted partner of world’s leading CRM solutions, we can
                help you customize and implement business solutions 3x faster
                and smarter.
              </h4>
            </div>

            <div class="col-lg-6">
              <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col">
                  <div class="card card1">
                    <div class="card-body ">
                      <h5 class="card-title title d-flex justify-content-between align-items-center">
                        <span className="card-icons mx-2">
                          <FaSearch />
                        </span>
                        Salesforce
                        <LiaLongArrowAltRightSolid />
                      </h5>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card card1">
                    <div class="card-body">
                      <h5 class="card-title title d-flex justify-content-between align-items-center">
                        <span className="card-icons mx-2">
                          <HiPencilSquare />
                        </span>
                        Service Now
                        <LiaLongArrowAltRightSolid />
                      </h5>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card card1">
                    <div class="card-body">
                      <h5 class="card-title title d-flex justify-content-between align-items-center">
                        <span className="card-icons mx-2">
                          <SiAzuredevops />
                        </span>
                        Mulesoft
                        <LiaLongArrowAltRightSolid />
                      </h5>
                    </div>
                  </div>
                </div>{" "}
                <div class="col">
                  <div class="card card1">
                    <div class="card-body">
                      <h5 class="card-title title d-flex justify-content-between align-items-center">
                        <span className="card-icons mx-2">
                          <TbDeviceMobileCog />
                        </span>
                        AWS
                        <LiaLongArrowAltRightSolid />
                      </h5>
                    </div>
                  </div>
                </div>{" "}
                <div class="col">
                  <div class="card card1">
                    <div class="card-body">
                      <h5 class="card-title title d-flex justify-content-between align-items-center">
                        <span className="card-icons mx-2">
                          <HiMiniComputerDesktop />
                        </span>
                        Cyber Security
                        <LiaLongArrowAltRightSolid />
                      </h5>
                    </div>
                  </div>
                </div>{" "}
                <div class="col">
                  <div class="card card1">
                    <div class="card-body">
                      <h5 class="card-title title d-flex justify-content-between align-items-center">
                        <span className="card-icons mx-2">
                          <LuCircuitBoard />
                        </span>
                        BPO
                        <LiaLongArrowAltRightSolid />
                      </h5>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card card1">
                    <div class="card-body">
                      <h5 class="card-title title d-flex justify-content-between align-items-center">
                        <span className="card-icons mx-2">
                          <MdOutlineWeb />
                        </span>
                        Cloud Migration
                        <span className="">
                          <LiaLongArrowAltRightSolid />
                        </span>
                      </h5>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card card1">
                    <div class="card-body">
                      <h5 class="card-title title d-flex justify-content-between align-items-center">
                        <span className="card-icons mx-2">
                          <MdOutlineWeb />
                        </span>
                        Shopify
                        <span className="">
                          <LiaLongArrowAltRightSolid />
                        </span>
                      </h5>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card card1">
                    <div class="card-body">
                      <h5 class="card-title title d-flex justify-content-between align-items-center">
                        <span className="card-icons mx-2">
                          <MdOutlineWeb />
                        </span>
                        Power BI
                        <span className="">
                          <LiaLongArrowAltRightSolid />
                        </span>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" bg-light p-3 my-5">
        <div class="container my-5">
          <div class="container row align-items-start">
            <div class="col-lg-6">
              <h2 className="text-2 ">
                Emerging <span className="color-primary-lg">Technologies</span>
              </h2>
              <h4>
                We help companies become an early adopter of emerging
                technologies to stay ahead of their competitors.
              </h4>
            </div>
            <div class="col-lg-6">
              <div class="row row-cols-1 row-cols-md-2 g-4">
                <div class="col">
                  <div class="card card1">
                    <div class="card-body bg-light">
                      <h5 class="card-title title d-flex justify-content-between align-items-center">
                        <span className="card-icons mx-2">
                          <LuCircuitBoard />
                        </span>
                        Discovery Workshop
                        <LiaLongArrowAltRightSolid />
                      </h5>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card card1">
                    <div class="card-body bg-light">
                      <h5 class="card-title title d-flex justify-content-between align-items-center">
                        <span className="card-icons mx-2">
                          <LuCircuitBoard />
                        </span>
                        Product Strategy
                        <LiaLongArrowAltRightSolid />
                      </h5>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card card1">
                    <div class="card-body bg-light">
                      <h5 class="card-title title d-flex justify-content-between align-items-center">
                        <span className="card-icons mx-2">
                          <LuCircuitBoard />
                        </span>
                        Process Consulting
                        <LiaLongArrowAltRightSolid />
                      </h5>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card card1">
                    <div class="card-body bg-light">
                      <h5 class="card-title title d-flex justify-content-between align-items-center">
                        <span className="card-icons mx-2">
                          <LuCircuitBoard />
                        </span>
                        POC
                        <LiaLongArrowAltRightSolid />
                      </h5>
                    </div>
                  </div>
                </div>
                <div class="col">
                  <div class="card card1">
                    <div class="card-body bg-light">
                      <h5 class="card-title title d-flex justify-content-between align-items-center">
                        <span className="card-icons mx-2">
                          <LuCircuitBoard />
                        </span>
                        POC
                        <LiaLongArrowAltRightSolid />
                      </h5>
                    </div>
                  </div>
                </div>{" "}
                <div class="col">
                  <div class="card card1">
                    <div class="card-body bg-light">
                      <h5 class="card-title title d-flex justify-content-between align-items-center">
                        <span className="card-icons mx-2">
                          <LuCircuitBoard />
                        </span>
                        POC
                        <LiaLongArrowAltRightSolid />
                      </h5>
                    </div>
                  </div>
                </div>{" "}
                <div class="col">
                  <div class="card card1">
                    <div class="card-body bg-light">
                      <h5 class="card-title title d-flex justify-content-between align-items-center">
                        <span className="card-icons mx-2">
                          <LuCircuitBoard />
                        </span>
                        POC
                        <LiaLongArrowAltRightSolid />
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;
