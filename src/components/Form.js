import React from 'react'
import { FaRegStar } from "react-icons/fa";
const Form = () => {
  return (
    <div>
        <div class="container my-3">
  <div class="row align-items-start">
    <div class="col-lg-8 bg-light">
        <h1>Ready To Get Started</h1>
       <select class="form-select my-3" aria-label="Default select example">
  <option selected>How can we help you?</option>
  <option value="1">Applying for job</option>
  <option value="2">Mobile App Development</option>
  <option value="3">Web Development</option>
  <option value="3">Other</option>
</select>
        <div class="row g-3 mb-3 ">
  <div class="col">
    <input type="text" class="form-control" placeholder="Your Name" aria-label="First name"/>
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Your Email" aria-label="Last name"/>
  </div>
</div>
<div class="row g-3">
  <div class="col">
    <input type="text" class="form-control" placeholder="(+92)3123456789" aria-label="First name"/>
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Organization" aria-label="Last name"/>
  </div>
</div>

<div class="mb-3 my-3">
  <textarea class="form-control" placeholder="Project Description" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
  Check here to subscribe for updates.
  </label>
</div>

<button type="button " class="btn btn-primary my-3"id=''>Send 
      <span class="mx-2 link-arrow"></span></button>
    </div>
  
    <div class="col-lg-4">
    <div class=" container d-flex  align-items-center">
    
    <div class=" p-3">
        <div class="d-flex justify-content-between align-items-center">
            <div class="ratings">
                <i class="rating-color"><FaRegStar /></i>
                <i class=" rating-color"><FaRegStar /></i>
                <i class="rating-color"><FaRegStar /></i>
                <i class=" rating-color"><FaRegStar /></i>
                <i class=""><FaRegStar /></i>
            </div>
            
        </div>
        
        
      
    </div>
    
</div>
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

    </div>
   
  </div>
</div>
        {/* <select class="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
        <div class="row g-3">
  <div class="col">
    <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"/>
  </div>
</div>
<div class="row g-3">
  <div class="col">
    <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
  </div>
  <div class="col">
    <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"/>
  </div>
</div>

<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault">
    Default checkbox
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked/>
  <label class="form-check-label" for="flexCheckChecked">
    Checked checkbox
  </label>
</div>
<button type="button" class="btn btn-primary"id='button'>Explore Our Digital Solutions 
      <span class="mx-2 link-arrow"></span></button> */}
    </div>
  )
}

export default Form