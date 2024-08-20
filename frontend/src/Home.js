import React, { useEffect } from "react";
import Form from "./Form";
import Nav from "./Nav";
import { animateElements } from "./gsapAnimations";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function Home() {
  useEffect(() => {
    // Call the animateElements function when the component mounts
    animateElements();
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div>
      <div className="pattern-div"></div>

      <div className="container position-relative overflow-hidden">
        <div className="big-div p-4 mb-5 shadow d-flex flex-column align-items-center text-center">
          <Nav />
          <p className="main-heading display-3 mt-5 pt-4 pb-0 mb-0 mx-4">
            Préparez la rentrée sans stress ! Commandez, nous livrons, vos
            enfants sont prêts.
          </p>
          <p className="second-heading fs-4">
            Remplissez le formulaire ci-dessous avec la liste des fournitures
            nécessaires, et nous nous occupons du reste.
          </p>
          <img
            src="images/340619-PAIHI0-347.png"
            alt=""
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
                  Nos Atouts
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
                    <p className="second-section-feature fs-5 lh-sm m-0 mt-2">
                      Un support client toujours à votre écoute.
                    </p>
                  </div>
                  <div className="col-12 col-sm-12 col-md-9 col-lg-4 text-center my-4">
                    <img
                      src="images/review_3847651.png"
                      alt="Icon"
                      className="img-fluid w-25"
                    />
                    <p className="second-section-feature fs-5 lh-sm m-0 mt-2">
                      Des fournitures scolaires soigneusement choisies.
                    </p>
                  </div>
                  <div className="col-12 col-sm-12 col-md-9 col-lg-4 text-center my-4">
                    <img
                      src="images/cash-on-delivery_3847810.png"
                      alt="Icon"
                      className="img-fluid w-25"
                    />
                    <p className="second-section-feature fs-5 lh-sm m-0 mt-2">
                      Payez uniquement à la réception.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="div-section-2 pb-5 my-5">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-5 order-1 order-lg-2 div-features-css">
                <p className="second-section-heading2 display-3 overflow-visible lh-1">
                  Comment Passer Votre Commande ?
                </p>
                <div className="second-section-line second-section-line2 pb-3 ms-auto"></div>
              </div>

              <div className="col-12 col-lg-7 order-2 order-lg-1 second-section-features shadow px-5 py-5">
                <div className="mx-auto row justify-content-center">
                  <p className="second-section-feature-text lh-sm fs-5 my-3">
                    <span className="d-inline-flex align-items-center">
                      <i className="icon-color-section2-2 fas fa-info-circle fa-sm me-3"></i>
                      Remplissez Vos Informations de Livraison:
                      <br /> Commencez par saisir votre nom, numéro de téléphone
                      , ville et adresse pour que nous puissions livrer les
                      fournitures à la bonne adresse.{" "}
                    </span>
                  </p>
                  <p className="second-section-feature-text lh-sm fs-5 my-3">
                    <span className="d-inline-flex align-items-center">
                      <i className="icon-color-section2-2 fas fa-info-circle fa-sm me-3"></i>
                      Ajoutez des Détails Supplémentaires : <br />
                      Indiquez toute information spéciale concernant la
                      livraison ou les fournitures dans la section commentaires.
                    </span>
                  </p>
                  <p className="second-section-feature-text lh-sm fs-5 my-3">
                    <span className="d-inline-flex align-items-center">
                      <i className="icon-color-section2-2 fas fa-info-circle fa-sm me-3"></i>
                      Téléchargez la Photo des Fournitures : <br />
                      Dans la dernière étape, prenez une photo claire des
                      fournitures scolaires dont votre enfant a besoin et
                      téléchargez-la dans le formulaire.
                    </span>
                  </p>
                  <p className="second-section-feature-text lh-sm fs-5 my-3">
                    <span className="d-inline-flex align-items-center">
                      <i className="icon-color-section2-2 fas fa-info-circle fa-sm me-3"></i>
                      Soumettez Votre Commande : <br />
                      Une fois toutes les informations complétées et la photo
                      téléchargée, cliquez sur "Envoyer". Nous nous occupons du
                      reste et livrerons les fournitures directement chez vous.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="div-section-2 pb-5 my-5">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-5 div-features-css">
                <p className="second-section-heading display-3 overflow-visible lh-1">
                  User
                  <br />
                  Review
                </p>
                <div className="second-section-line pb-3"></div>
              </div>

              <div className="col-12 col-lg-7 second-section-features shadow px-5 py-5">
                <div
                  id="carouselExampleControls"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="mx-auto row justify-content-center">
                        <blockquote className="blockquote mb-4">
                          <p className="second-section-feature-text">
                            <i className="icon-color-section2-2 fas fa-quote-left fa-lg me-3"></i>
                            <span className="font-italic">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Pariatur sint nesciunt ad itaque aperiam
                              expedita officiis incidunt minus facere.
                            </span>
                          </p>
                        </blockquote>
                        <figcaption className="second-section-feature-text-mini blockquote-footer mb-0">
                          Miranda Smith in{" "}
                          <cite title="Source Title">The Guardian</cite>
                        </figcaption>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="mx-auto row justify-content-center">
                        <blockquote className="blockquote mb-4">
                          <p className="second-section-feature-text">
                            <i className="icon-color-section2-2 fas fa-quote-left fa-lg me-3"></i>
                            <span className="font-italic">
                              Another example of carousel item content, this
                              content is great for showing the user review, we
                              need to add more text.
                            </span>
                          </p>
                        </blockquote>
                        <figcaption className="second-section-feature-text-mini blockquote-footer mb-0">
                          Another Author in{" "}
                          <cite title="Source Title">Another Source</cite>
                        </figcaption>
                      </div>
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                  >
                    <i className="fas fa-chevron-left" aria-hidden="true"></i>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                  >
                    <i className="fas fa-chevron-right" aria-hidden="true"></i>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-black">
        <div className="py-3 py-md-5 py-xl-8 py-xxl-10">
          <div className="container">
            <div className="row gy-4 gy-md-0">
              <div className="col-12 col-md-6">
                <div className="link-wrapper">
                  <ul className="m-0 list-unstyled">
                    <li>
                      <a
                        href="#!"
                        className="link-opacity-75-hover text-decoration-none link-light fs-1 lh-sm"
                      >
                        Shop
                      </a>
                    </li>
                    <li>
                      <a
                        href="#!"
                        className="link-opacity-75-hover text-decoration-none link-light fs-1 lh-sm"
                      >
                        Products
                      </a>
                    </li>
                    <li>
                      <a
                        href="#!"
                        className="link-opacity-75-hover text-decoration-none link-light fs-1 lh-sm"
                      >
                        Offers
                      </a>
                    </li>
                    <li>
                      <a
                        href="#!"
                        className="link-opacity-75-hover text-decoration-none link-light fs-1 lh-sm"
                      >
                        Clearance
                      </a>
                    </li>
                    <li>
                      <a
                        href="#!"
                        className="link-opacity-75-hover text-decoration-none link-light fs-1 lh-sm"
                      >
                        Releases
                      </a>
                    </li>
                    <li>
                      <a
                        href="#!"
                        className="link-opacity-75-hover text-decoration-none link-light fs-1 lh-sm"
                      >
                        Deals
                      </a>
                    </li>
                    <li>
                      <a
                        href="#!"
                        className="link-opacity-75-hover text-decoration-none link-light fs-1 lh-sm"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <section className="mb-4 mb-lg-5 mb-xl-7">
                  <div className="row">
                    <div className="col-6">
                      <div className="address-wrapper">
                        <h4 className="mb-3 h5 text-white">Head Office</h4>
                        <address className="mb-3 fs-7 text-light opacity-75">
                          69323 Swaniawski Forest <br />
                          North Aronfort, Alabama, 26323
                        </address>
                        <p className="m-0">
                          <a
                            className="fs-7 link-light link-opacity-75 link-opacity-100-hover text-decoration-none"
                            href="tel:+1-479-589-0693"
                          >
                            1-479-589-0693
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="address-wrapper">
                        <h4 className="mb-3 h5 text-white">Branch Office</h4>
                        <address className="mb-3 fs-7 text-light opacity-75">
                          166 McGlynn Overpass Suite <br />
                          Elisabethside, Minnesota, 55755
                        </address>
                        <p className="m-0">
                          <a
                            className="fs-7 link-light link-opacity-75 link-opacity-100-hover text-decoration-none"
                            href="tel:+540-284-4036"
                          >
                            540-284-4036
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </section>
                <section>
                  <div className="row">
                    <div className="col-6">
                      <div className="address-wrapper">
                        <h4 className="mb-3 h5 text-white">Warehouse</h4>
                        <address className="m-0 fs-7 text-light opacity-75">
                          88329 Dach Grove Apt. <br />
                          West Bretton, Carolina, 81706
                        </address>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="social-media-wrapper">
                        <h4 className="mb-3 h5 text-white">Connect</h4>
                        <ul className="m-0 list-unstyled d-flex justify-content-start gap-3">
                          <li>
                            <a
                              href="#!"
                              className="link-opacity-75 link-opacity-100-hover link-light"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                className="bi bi-facebook"
                                viewBox="0 0 16 16"
                              >
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#!"
                              className="link-opacity-75 link-opacity-100-hover link-light"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                className="bi bi-twitter"
                                viewBox="0 0 16 16"
                              >
                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334q.002-.211-.006-.422A6.7 6.7 0 0 0 16 3.542a6.7 6.7 0 0 1-1.889.518 3.3 3.3 0 0 0 1.447-1.817 6.5 6.5 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.32 9.32 0 0 1-6.767-3.429 3.29 3.29 0 0 0 1.018 4.382A3.3 3.3 0 0 1 .64 6.575v.045a3.29 3.29 0 0 0 2.632 3.218 3.2 3.2 0 0 1-.865.115 3 3 0 0 1-.614-.057 3.28 3.28 0 0 0 3.067 2.277A6.6 6.6 0 0 1 .78 13.58a6 6 0 0 1-.78-.045A9.34 9.34 0 0 0 5.026 15" />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#!"
                              className="link-opacity-75 link-opacity-100-hover link-light"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                className="bi bi-linkedin"
                                viewBox="0 0 16 16"
                              >
                                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#!"
                              className="link-opacity-75 link-opacity-100-hover link-light"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                className="bi bi-youtube"
                                viewBox="0 0 16 16"
                              >
                                <path d="M8 0c-.53 0-1.038.063-1.537.182C5.115.282 4.25.654 3.5 1.287 2.608 2.004 2 3.084 2 4.303v7.394c0 1.22.608 2.299 1.5 2.999.75.633 1.616 1.005 2.963 1.115C6.962 15.937 7.467 16 8 16c.535 0 1.043-.063 1.54-.182.75-.11 1.737-.483 2.528-1.2.892-.718 1.5-1.797 1.5-2.999V4.303c0-1.22-.608-2.299-1.5-2.999-.791-.717-1.779-1.09-2.528-1.2C9.043.063 8.535 0 8 0zm-1.585 10.787V5.214l6.5 2.786-6.5 2.787z" />
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
