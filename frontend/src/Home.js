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
              <div className="col-12 col-lg-4 order-1 order-lg-2 div-features-css">
                <p className="second-section-heading2 display-3 overflow-visible lh-1">
                  Comment
                  <br /> ça marche?
                </p>
                <div className="second-section-line second-section-line2 pb-3 ms-auto"></div>
              </div>

              <div className="col-12 col-lg-8 order-2 order-lg-1 second-section-features shadow px-5 py-5">
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
                  <div className="col-8 third-section-line pb-3"></div>
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
            <div className="row">
              <div className="col-12 col-lg-6 div-section-2 pt-5 my-5 pe-lg-5">
                <div className="row justify-content-center">
                  <div className="col-12 div-features-css">
                    <p className="col-12 third-section-heading display-3 lh-1">
                      Notre Mission
                    </p>
                    <div className="col-8 third-section-line pb-3"></div>
                    <p className="col-12 third-section-feature-text mt-5 fs-5">
                      Nous avons pour mission de simplifier le processus d'achat
                      de fournitures scolaires en offrant un service de
                      livraison pratique directement à votre porte. Nous croyons
                      que chaque enfant mérite le meilleur départ possible pour
                      l'année scolaire, et nous nous engageons à fournir des
                      produits de qualité qui répondent à tous leurs besoins.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 div-section-2 pt-5 my-5 ps-lg-5">
                <div className="row justify-content-center">
                  <div className="col-12 div-features-css">
                    <p className="col-12 third-section-heading display-3 lh-1">
                      Notre Histoire
                    </p>
                    <div className="col-8 third-section-line pb-3"></div>
                    <p className="col-12 third-section-feature-text mt-5 fs-5">
                      Fondé en 2024, notre entreprise a été créée par une équipe
                      de parents et d'éducateurs qui comprenaient les défis de
                      la préparation scolaire. Nous avons décidé de mettre notre
                      expertise et notre passion au service des familles en
                      créant une solution simple et efficace pour obtenir tout
                      le nécessaire pour la rentrée.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="text-center text-lg-start bg-body-tertiary text-muted">
        <section className="d-flex justify-content-center p-4 border-bottom">
          <div>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-google"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="" className="me-4 text-reset">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </section>
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>Company name
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Angular
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    React
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Vue
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Laravel
                  </a>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <i className="fas fa-home me-3"></i> New York, NY 10012, US
                </p>
                <p>
                  <i className="fas fa-envelope me-3"></i>
                  info@example.com
                </p>
                <p>
                  <i className="fas fa-phone me-3"></i> + 01 234 567 88
                </p>
                <p>
                  <i className="fas fa-print me-3"></i> + 01 234 567 89
                </p>
              </div>
            </div>
          </div>
        </section>
        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2021 Copyright:
          <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
