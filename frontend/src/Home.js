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
      <Nav />

      <div className="pattern-div">
      </div>

      <div className="container position-relative overflow-hidden">
        <div className="big-div p-4 mb-5 shadow d-flex flex-column align-items-center text-center">
          <p className="main-heading display-3 mt-5 pt-4 pb-0 mb-0">
            Ultra Big Heading Full Of Words
          </p>
          <p className="second-heading display-7">
            Ultra Big Heading Full Of Words
          </p>
              <img
                src="images/340619-PAIHI0-347.png"
                alt="Decorative Image"
                className="responsive-image sm-75 md-50 lg-25 xl-25"
              />
          <div className="form-container shadow p-4">
            <form id="my-form" className="m-2">
              <Form />
            </form>
          </div>
        </div>
      </div>

<section className="second-section py-5 py-xl-8 with-background">
  <div className="container text-center">
    <h2 className="display-5 mb-4">Our Features</h2>
    <p className="mb-4">
      Discover the amazing features we offer to make your experience better.
    </p>

    <div className="row gy-5 justify-content-center">
      <div className="col-12 col-sm-6 col-lg-4 text-center">
        <div className="d-flex justify-content-center align-items-center mb-3">
          <i className="fas fa-credit-card fa-3x"></i>
        </div>
        <h5 className="mb-2">Secure Payments</h5>
        <p className="m-0">
          Your transactions are safe with our secure payment methods.
        </p>
      </div>

      <div className="col-12 col-sm-6 col-lg-4 text-center">
        <div className="d-flex justify-content-center align-items-center mb-3">
          <i className="fas fa-trophy fa-3x"></i>
        </div>
        <h5 className="mb-2">Top Quality</h5>
        <p className="m-0">
          We provide only the best quality products for you.
        </p>
      </div>

      <div className="col-12 col-sm-6 col-lg-4 text-center">
        <div className="d-flex justify-content-center align-items-center mb-3">
          <i className="fas fa-box-open fa-3x"></i> 
        </div>
        <h5 className="mb-2">Fast Delivery</h5>
        <p className="m-0">
          Get your orders delivered quickly and efficiently.
        </p>
      </div>
    </div>
  </div>
</section>



    <section className="comment-ca-marche d-flex align-items-center py-5">
      <div className="instructions">
        <h2>COMMENT CA MARCHE ?</h2>
        <ol>
          <li>Prenez en photo votre/vos liste(s) de fournitures scolaires</li>
          <li>Remplissez votre nom et votre numéro de téléphone</li>
          <li>Cliquez sur joindre votre liste et sélectionnez la/les liste(s)</li>
          <li>Cliquez sur envoyer</li>
        </ol>
        <p><strong>N.B:</strong> Si vous avez plus d'un enfant, merci de joindre toutes les listes en même temps.</p>
      </div>
      <div className="icon-container">
        <i className="icon fas fa-camera"></i> {/* Replace with your icon */}
      </div>
    </section>


    <section class="testimonials py-5">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <p class="card-text">"This product has changed my life! Highly recommended."</p>
                            <h5 class="card-title">John Doe</h5>
                            <h6 class="card-subtitle mb-2 text-muted">CEO, Company</h6>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <p class="card-text">"Amazing service and support. I will definitely come back."</p>
                            <h5 class="card-title">Jane Smith</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Marketing Director</h6>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <div class="card-body">
                            <p class="card-text">"A top-notch experience from start to finish. Great job!"</p>
                            <h5 class="card-title">Alice Johnson</h5>
                            <h6 class="card-subtitle mb-2 text-muted">Freelancer</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    </div>
  );
}

export default Home;

