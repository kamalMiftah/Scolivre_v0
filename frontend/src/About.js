import React, { useEffect } from "react";
import Form from "./Form";
import Nav from "./Nav";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function Home() {
  return (
    <div>
      <div className="pattern-div"></div>

      <div className="container position-relative overflow-hidden">
        <div className="about-big-div p-4 mb-5 shadow d-flex flex-column">
          <Nav />
          <div className="row pt-4 mt-5">
            <div className="about-1 col-12 text-left px-4">
              <img
                src="images/ecole.jpeg"
                alt=""
                className="about-img-1 shadow img-fluid mb-4"
              />
            </div>
            <div className="about-2 col-12 text-left px-4 mb-0">
              <p className="about-heading display-5 text-left pt-4">
                À Propos de Nous
              </p>

              <div className="about-container shadow px-5 py-4 my-4">
                <p className="second-section-feature-text lh-sm fs-5 my-3">
                  Bienvenue sur notre site dédié à la fourniture de matériel
                  scolaire pour les enfants ! Nous sommes passionnés par
                  l'éducation et la préparation des jeunes esprits pour une
                  nouvelle année scolaire réussie.
                </p>
              </div>
            </div>
          </div>

          <div className="row pt-0">
            <div className="about-1 order-2 order-lg-1 col-12 col-lg-6 text-left px-4 mb-4">
              <p className="about-heading display-5 text-left pt-4">
                Notre Mission
              </p>

              <div className="about-container shadow px-5 py-4 my-4">
                <p className="second-section-feature-text lh-sm fs-5 my-3">
                  Nous avons pour mission de simplifier le processus d'achat de
                  fournitures scolaires en offrant un service de livraison
                  pratique directement à votre porte. Nous croyons que chaque
                  enfant mérite le meilleur départ possible pour l'année
                  scolaire, et nous nous engageons à fournir des produits de
                  qualité qui répondent à tous leurs besoins.
                </p>
              </div>
            </div>
            <div className="about-2 order-1 order-lg-2 col-12 col-lg-6 text-left px-4">
              <p className="about-heading display-5 text-left pt-4">
                Notre Histoire
              </p>

              <div className="about-container shadow px-5 py-4 my-4">
                <p className="second-section-feature-text lh-sm fs-5 my-3">
                  Fondé en 2024, notre entreprise a été créée par une équipe de
                  parents et d'éducateurs qui comprenaient les défis de la
                  préparation scolaire. Nous avons décidé de mettre notre
                  expertise et notre passion au service des familles en créant
                  une solution simple et efficace pour obtenir tout le
                  nécessaire pour la rentrée.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="second-section section">
        <div className="container p-4">
          <div className="div-section-2 py-5 my-5">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-4 div-features-css">
                <p className="second-section-heading display-3 overflow-visible lh-1">
                  Pourquoi Choisir Notre Service ?
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
                    <p className="second-section-feature fs-5 lh-sm m-0 my-2">
                      Service Client
                    </p>
                    <p className="about-small-text">
                      Notre équipe est toujours prête à vous aider et à répondre
                      à toutes vos questions pour garantir votre entière
                      satisfaction.
                    </p>
                  </div>
                  <div className="col-12 col-sm-12 col-md-9 col-lg-4 text-center my-4">
                    <img
                      src="images/review_3847651.png"
                      alt="Icon"
                      className="img-fluid w-25"
                    />

                    <p className="second-section-feature fs-5 lh-sm m-0 my-2">
                      Qualité et Sélection
                    </p>
                    <p className="about-small-text">
                      Nous proposons une gamme variée de fournitures scolaires
                      de qualité, sélectionnées pour chaque niveau.
                    </p>
                  </div>
                  <div className="col-12 col-sm-12 col-md-9 col-lg-4 text-center my-4">
                    <img
                      src="images/cash-on-delivery_3847810.png"
                      alt="Icon"
                      className="img-fluid w-25"
                    />
                    <p className="second-section-feature fs-5 lh-sm m-0 my-2">
                      Commodité
                    </p>
                    <p className="about-small-text">
                      Commandez en ligne et recevez vos fournitures directement
                      à votre domicile, sans stress ni tracas.
                    </p>
                  </div>
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
