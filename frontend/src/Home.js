import React, { useEffect } from 'react';
import Form from './Form';
import Nav from './Nav';
import './index.css';
import { animateElements } from './gsapAnimations';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './fonts/fonts.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function Home() {
  useEffect(() => {
    // Call the animateElements function when the component mounts
    animateElements();
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div>

      <div className="pattern-div">
      </div>

      <div className="container position-relative overflow-hidden">
        <div className="big-div p-4 mb-5 shadow d-flex flex-column align-items-center text-center">
          <Nav />
          <p className="main-heading display-3 mt-5 pt-4 pb-0 mb-0">
            Ultra Big Heading Full Of Words
          </p>
          <p className="second-heading fs-4">
            Ultra Big Heading Full Of Much More Wording
          </p>
              <img
                src="images/340619-PAIHI0-347.png"
                alt="Decorative Image"
                className="responsive-image sm-75 md-50 lg-25 xl-25"
              />
          <div className="form-container shadow p-4 mb-5">
            <form id="my-form" className="m-2">
              <Form />
            </form>
          </div>
        </div>
      </div>


<div className="second-section section">
  <div className="container p-4">
    <div className="div-section-2 py-5 my-5">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-4 div-features-css">
          <p className="second-section-heading display-3 overflow-visible lh-1">
            Service
            <br/> 
            Features
          </p>
        <div className="second-section-line pb-3"></div>
        </div>
        <div className="col-9 col-md-8 second-section-features shadow px-4 py-5">
          <div className="mx-auto row justify-content-center">
            <div className="col-12 col-sm-12 col-md-9 col-lg-4 text-center my-4">
              <img
                src="images/customer-service-agent_3847874.png"
                alt="Icon"
                className="img-fluid w-25"
              />
              <p className="second-section-feature fs-4 lh-sm m-0 mt-2">
              Feature Name
              </p>
            </div>
            <div className="col-12 col-sm-12 col-md-9 col-lg-4 text-center my-4">
              <img
                src="images/review_3847651.png"
                alt="Icon"
                className="img-fluid w-25"
              />
              <p className="second-section-feature fs-4 lh-sm m-0 mt-2">
                Feature Name
              </p>
            </div>
            <div className="col-12 col-sm-12 col-md-9 col-lg-4 text-center my-4">
              <img
                src="images/cash-on-delivery_3847810.png"
                alt="Icon"
                className="img-fluid w-25"
              />
              <p className="second-section-feature fs-4 lh-sm m-0 mt-2">
                Feature Name
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="div-section-2 py-5 my-5">
      <div className="row justify-content-center">

        <div className="col-12 col-lg-5 order-1 order-lg-2 div-features-css">
          <p className="second-section-heading2 display-3 overflow-visible lh-1">
            Some Service
            <br/> 
            Features
          </p>
        <div className="second-section-line second-section-line2 pb-3 ms-auto">
        </div>
        </div>

        <div className="col-12 col-lg-7 order-2 order-lg-1 second-section-features shadow px-5 py-5">
          <div className="mx-auto row justify-content-center">
            <p className="second-section-feature-text lh-sm fs-5 my-3">
              <span className="d-inline-flex align-items-center">
                <i className="icon-color-section2-2 fas fa-check-circle fa-xs me-3"></i>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </p>
            <p className="second-section-feature-text lh-sm fs-5 my-3">
              <span className="d-inline-flex align-items-center">
                <i className="icon-color-section2-2 fas fa-check-circle fa-xs me-3"></i>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </p>
            <p className="second-section-feature-text lh-sm fs-5 my-3">
              <span className="d-inline-flex align-items-center">
                <i className="icon-color-section2-2 fas fa-check-circle fa-xs me-3"></i>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
            </p>
          </div>
        </div>

      </div>
    </div>

    <div className="div-section-2 py-5 my-5">
      <div className="row justify-content-center">

        <div className="col-12 col-lg-5 div-features-css">
          <p className="second-section-heading display-3 overflow-visible lh-1">
            User
            <br/> 
            Review
          </p>
        <div className="second-section-line pb-3">
        </div>
        </div>

        <div className="col-12 col-lg-7 second-section-features shadow px-5 py-5">
          <div className="mx-auto row justify-content-center">
            <blockquote class="blockquote mb-4">
              <p className="second-section-feature-text">
                <i className="icon-color-section2-2 fas fa-quote-left fa-lg me-3"></i>
                <span className="font-italic">Lorem ipsum dolor sit amet consectetur adipisicing
                  elit. Pariatur sint nesciunt ad itaque aperiam expedita officiis incidunt
                  minus facere, molestias quisquam impedit inventore.</span>
              </p>
            </blockquote>
            <figcaption className="second-section-feature-text-mini blockquote-footer mb-0">
                  Miranda Smith in <cite title="Source Title">The Guardian</cite>
            </figcaption>
          </div>


        </div>

      </div>
    </div>

  </div>
</div>



    </div>
  );
}

export default Home;

