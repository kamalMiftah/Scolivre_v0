import React, { useState, useEffect } from "react";
import Form from "./Form";
import Nav from "./Nav";
import Nav2 from "./Nav2";
import { animateElements } from "./gsapAnimations";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function Home() {
  const [showNav2, setShowNav2] = useState(false);

  useEffect(() => {
    // Call the animateElements function when the component mounts
    animateElements();

    const handleScroll = () => {
      if (window.scrollY > 150) {
        // Adjust this value as needed
        setShowNav2(true);
      } else {
        setShowNav2(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className="pattern-div"></div>

      <div
        id="home-section"
        className="container position-relative overflow-hidden"
      >
        <div className="big-div p-4 mb-5 shadow d-flex flex-column align-items-center text-center">
          <Nav />
          {showNav2 && <Nav2 />} {/* Conditionally render Nav2 */}
          <p className="main-heading display-5 mt-4 pt-3 pb-0 mb-0 mx-4">
            Préparez la rentrée facilement !<br /> Commandez, nous livrons.
          </p>
          <p className="second-heading fs-5 pt-3">
            Remplissez le formulaire ci-dessous avec la liste des fournitures
            nécessaires, <br />
            et nous nous occupons du reste.
          </p>
          <img
            src="images/340619-PAIHI0-347.png"
            alt=""
            className="responsive-image sm-75 md-50 lg-25 xl-25"
          />
          <div className="form-container shadow p-4 mb-4">
            <form id="my-form" className="m-2">
              <Form />
            </form>
          </div>
        </div>
      </div>

      <div id="marche-section" className="second-section section">
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
                      Des outils scolaires sélectionnés avec soin.
                    </p>
                  </div>
                  <div className="col-12 col-sm-12 col-md-9 col-lg-4 text-center my-4">
                    <img
                      src="images/cash-on-delivery_3847810.png"
                      alt="Icon"
                      className="img-fluid w-25"
                    />
                    <p className="second-section-feature fs-5 lh-sm m-0 mt-2">
                      Payez uniquement lors de la réception.
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
                  Comment
                  <br /> ça marche?
                </p>
                <div className="second-section-line second-section-line2 pb-3 ms-auto"></div>
              </div>

              <div className="col-12 col-lg-7 order-2 order-lg-1 second-section-features shadow px-5 py-5">
                <div className="mx-auto row justify-content-center">
                  <p className="second-section-feature-text lh-sm fs-5 my-2">
                    <span className="d-inline-flex align-items-center">
                      <i className="icon-color-section2-2 fas fa-info-circle fa-sm me-3"></i>
                      Remplissez Vos Informations de Livraison:{" "}
                    </span>
                  </p>
                  <p className="second-section-feature-text fs-6">
                    Commencez par saisir votre nom, numéro de téléphone , ville
                    et adresse pour que nous puissions livrer les fournitures à
                    la bonne adresse.{" "}
                  </p>
                  <p className="second-section-feature-text lh-sm fs-5 my-2">
                    <span className="d-inline-flex align-items-center">
                      <i className="icon-color-section2-2 fas fa-info-circle fa-sm me-3"></i>
                      Ajoutez des Détails Supplémentaires:
                    </span>
                  </p>
                  <p className="second-section-feature-text fs-6">
                    Indiquez toute information spéciale concernant la livraison
                    ou les fournitures dans la section commentaires.
                  </p>
                  <p className="second-section-feature-text lh-sm fs-5 my-2">
                    <span className="d-inline-flex align-items-center">
                      <i className="icon-color-section2-2 fas fa-info-circle fa-sm me-3"></i>
                      Téléchargez la Photo des Fournitures:
                    </span>
                  </p>
                  <p className="second-section-feature-text fs-6">
                    Dans la dernière étape, prenez une photo claire des
                    fournitures scolaires dont votre enfant a besoin et
                    téléchargez-la dans le formulaire.
                  </p>
                  <p className="second-section-feature-text lh-sm fs-5 my-2">
                    <span className="d-inline-flex align-items-center">
                      <i className="icon-color-section2-2 fas fa-info-circle fa-sm me-3"></i>
                      Soumettez Votre Commande:
                    </span>
                  </p>
                  <p className="second-section-feature-text fs-6">
                    Une fois toutes les informations complétées et la photo
                    téléchargée, cliquez sur "Envoyer". Nous nous occupons du
                    reste et livrerons les fournitures directement chez vous.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="div-section-2 pb-5 my-5">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-5 div-features-css">
                <p className="second-section-heading display-3 overflow-visible lh-1">
                  Avis de Nos Clients
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
                              Excellent service ! Les fournitures sont de très
                              bonne qualité, et la livraison est rapide. Je
                              recommande vivement !
                            </span>
                          </p>
                        </blockquote>
                        <figcaption className="second-section-feature-text-mini blockquote-footer mb-0">
                          Amina
                        </figcaption>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="mx-auto row justify-content-center">
                        <blockquote className="blockquote mb-4">
                          <p className="second-section-feature-text">
                            <i className="icon-color-section2-2 fas fa-quote-left fa-lg me-3"></i>
                            <span className="font-italic">
                              Super expérience ! Le support client est réactif,
                              et j'ai pu payer à la livraison. Je suis très
                              satisfait.
                            </span>
                          </p>
                        </blockquote>
                        <figcaption className="second-section-feature-text-mini blockquote-footer mb-0">
                          Jalal
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

      <div id="about-section">
        <div className="third-section section">
          <div className="container p-4">
            <div className="row align-items-center mb-3">
              <div className="col-12 col-lg-7 order-2 order-lg-1">
                <div className="div-section-2 pt-0 pt-lg-5 my-5">
                  <p className="col-12 third-section-heading display-3 lh-1">
                    À Propos de Nous
                  </p>
                  <div className="col-6 third-section-line pb-3"></div>
                  <p className="col-12 third-section-feature-text mt-5 fs-5">
                    Bienvenue sur notre site dédié à la fourniture de matériel
                    scolaire pour les enfants ! Nous sommes passionnés par
                    l'éducation et la préparation des jeunes esprits pour une
                    nouvelle année scolaire réussie.
                  </p>
                </div>
              </div>
              <div className="col-12 col-lg-5 order-1 order-lg-2 px-5 mt-5 d-flex justify-content-center">
                <img
                  src="images/7060732.png"
                  alt="About Us"
                  className="img-fluid image-2 pt-5 pt-lg-0"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="forth-section section">
          <div className="container p-4">
            <div className="div-section-2 pt-5 my-5">
              <div className="row justify-content-center">
                <div className="col-12 div-features-css">
                  <p className="col-12 forth-section-heading display-3 lh-1">
                    Notre Mission
                  </p>
                  <div className="col-6 forth-section-line pb-3"></div>
                  <p className="col-12 forth-section-feature-text mt-5 fs-5">
                    Nous avons pour mission de simplifier le processus d'achat
                    de fournitures scolaires en offrant un service de livraison
                    pratique directement à votre porte. Nous croyons que chaque
                    enfant mérite le meilleur départ possible pour l'année
                    scolaire, et nous nous engageons à fournir des produits de
                    qualité qui répondent à tous leurs besoins.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="a-section section">
          <div className="container p-4">
            <div className="div-section-2 pt-5 my-5">
              <div className="row justify-content-center">
                <div className="col-12 div-features-css">
                  <p className="col-12 a-section-heading display-3 lh-1">
                    Notre Histoire
                  </p>
                  <div className="col-6 a-section-line pb-3"></div>
                  <p className="col-12 a-section-feature-text mt-5 fs-5">
                    Fondé en 2024, notre entreprise a été créée par une équipe
                    de parents et d'éducateurs qui comprenaient les défis de la
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
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        href="#!"
                        className="link-opacity-75-hover text-decoration-none link-light fs-1 lh-sm"
                      >
                        Comment ça marche?
                      </a>
                    </li>
                    <li>
                      <a
                        href="#!"
                        className="link-opacity-75-hover text-decoration-none link-light fs-1 lh-sm"
                      >
                        About
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
