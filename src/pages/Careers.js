import React from "react";
import imageSix from "../images/salesForceTestImg.jpg";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import imageSeven from "../images/environment.png"
const Careers = () => {
  const sectionStyle = {
    backgroundImage: `url(${imageSix})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: "90px",
  };
  return (
    <div>
      <section style={sectionStyle}>
        <div className="careers-container my-3">
          <h1>Invest in your career,</h1>
          <h1>
            <span className="icon-font font-weight-bold">Grow </span>with tech’s
            top talent.
          </h1>

          <div class="btn-group my-5" role="group" aria-label="Basic example">
            <button type="button " class=" ">
              <form class="d-flex" role="search">
                <input
                  class="search-form"
                  placeholder="Search for a job title"
                  aria-label="Search"
                />
              </form>
            </button>
            <button type="" class="">
              {" "}
              <div class="dropdown">
                <button
                  class=" dropdown-toggle search-form"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  All Categories
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Design
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      IT Support
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                     Software Engineering
                    </a>
                  </li>
                </ul>
              </div>
            </button>
            <button type="button" class="">
              <div class="dropdown">
                <button
                  class=" dropdown-toggle search-form"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  All Locations
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      Lahore, PK
                    </a>
                  </li>
                  {/* <li>
                    <a class="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li> */}
                </ul>
              </div>
            </button>
            <button type="button" class="btn btn-primary">
              Search Jobs
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="container  my-5 ">
          <div class=" container row row-cols-1 row-cols-md-3 g-4">
            <div class="col ">
              <div class="card card2-hover">
                <div class="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <h5 class="card-title career-text">HR Intern</h5>
                    <p class="card-text my-3">Lahore, Pakistan</p>
                  </div>
                  <span class="link-arrow">
                    <LiaLongArrowAltRightSolid />
                  </span>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card card2-hover">
                <div class="card-body  d-flex justify-content-between align-items-center">
                  <div>
                    <h5 class="card-title career-text">
                      Senior B2B Content Writer & Contributing Author
                    </h5>
                    <p class="card-text my-1">Lahore, Pakistan</p>
                  </div>
                  <span class="link-arrow">
                    <LiaLongArrowAltRightSolid />
                  </span>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card card2-hover">
                <div class="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <h5 class="card-title career-text">
                      Software Enginner/React Native
                    </h5>
                    <p class="card-text my-3">Lahore, Pakistan</p>
                  </div>
                  <span class="link-arrow">
                    <LiaLongArrowAltRightSolid />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container  my-5 ">
          <div class=" container row row-cols-1 row-cols-md-3 g-4">
            <div class="col">
              <div class="card card2-hover">
                <div class="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <h5 class="card-title career-text">
                      Project Management Associate/ Specialist
                    </h5>
                    <p class="card-text my-1">Lahore, Pakistan</p>
                  </div>
                  <span class="link-arrow">
                    <LiaLongArrowAltRightSolid />
                  </span>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card card2-hover">
                <div class="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <h5 class="card-title career-text">
                      Software Engineer/iOS + .Net
                    </h5>
                    <p class="card-text my-3">Lahore, Pakistan</p>
                  </div>
                  <span class="link-arrow">
                    <LiaLongArrowAltRightSolid />
                  </span>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card card2-hover">
                <div class="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <h5 class="card-title career-text">Principal DevOps</h5>
                    <p class="card-text my-3">Lahore, Pakistan</p>
                  </div>
                  <span class="link-arrow">
                    <LiaLongArrowAltRightSolid />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="text-center my-5">
        <button type="button" class="btn btn-primary" id="button">
          See all 30 open Roles
        </button>
      </div>


      <section className="my-5">

      <div class="container text-start">
  <div class="row align-items-start">
    <div class="col-lg-6">
     <strong><h1>Skills Development Program</h1></strong>
     <p>Always on the go for equipping our employees with the right skill set & enabling them to be the change enablers in the community.</p>
     <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       <strong>In-house Certification</strong>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>Opportunity to enhance your skillset and stay updated with in-demand technologies through universally valuable certifications. These certifications are funded by tkxel, so you are only focused on grabbing your interested courses instead of worrying about the costs.</p>
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       <strong>Sponsored Trainings & Workshops</strong>
        
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>We enrich our professional learning culture through regular workshops aimed at empowering individuals to adopt emerging skills while promoting team cohesiveness.</p>
      </div>
    </div>
  </div>
 
</div>
    </div>
    <div class="col-lg-6">
    <img src={imageSeven}/>
    </div>
   
  </div>
</div>
      </section>

      <section className="bg-dark text-white p-5  d-flex">
      <div class="container text-center">
  <div class="row ">
    <div class="col-lg-6">
    <h1 className="text-start">Envocode</h1>
    </div>
    <div class="col-lg-6">
    <div className="d-flex text-end">
        <p className="mx-5">Life at Envocode</p>
        <p className="">Benefits</p>
        <p className="mx-5">Jobs</p>
    </div>
    </div>
   
  </div>
</div>
    
   
</section>



    </div>
  );
};

export default Careers;
