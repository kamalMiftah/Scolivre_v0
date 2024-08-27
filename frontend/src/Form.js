import React from "react";
import { gsap } from "gsap";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phone: "",
      address: "",
      city: "",
      comment: "",
      file: null,
      fileName: "Aucun fichier choisi",
      currentStep: 1,
      errors: {},
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleFileChange = (event) => {
    const file = event.target.files[0];
    this.setState({
      file: file,
      fileName: file ? file.name : "Aucun fichier choisi",
    });
  };

  handleBack = () => {
    this.setState({
      name: "",
      phone: "",
      address: "",
      city: "",
      comment: "",
      file: null,
      fileName: "Aucun fichier choisi",
      currentStep: 1,
      errors: {},
    });
  };

  nextformpart = (event) => {
    event.preventDefault();
    const phoneRegex = /^0[5-7][0-9]{8}$/;
    this.setState((prevState) => ({
      errors: {}, // Use a colon to assign the empty object
    }));

    let nextAnimation = () => {
      const tl = gsap.timeline({
        onComplete: () => {
          this.setState((oldState) => ({
            currentStep: oldState.currentStep + 1,
          }));
          gsap.fromTo(
            ".form-content *",
            {
              x: "20", // Start from the right side
              opacity: 0,
            },
            {
              x: "0",
              opacity: 1,
              duration: 0.1,
              stagger: 0.0,
              ease: "power1.out",
            },
          );
        },
      });

      tl.to(".form-content *", {
        x: -20,
        opacity: 0,
        duration: 0.1,
        stagger: 0.0,
        ease: "power1.inOut",
      });
    };

    if (this.state.currentStep === 1) {
      const errors = {}; // Create a new errors object

      if (this.state.name.length === 0) {
        errors["name"] = "Nom complet requis"; // Set error message
      }
      if (this.state.phone.length === 0) {
        errors["phone"] = "Numéro de téléphone requis"; // Set error message
      } else if (!phoneRegex.test(this.state.phone)) {
        errors["phone"] = "Numéro de téléphone incorrect"; // Set error message
      }
      if (Object.keys(errors).length > 0) {
        this.setState({ errors });
      } else {
        this.setState({ errors: {} });
        nextAnimation();
      }
    }
  };

  prevformpart = (event) => {
    event.preventDefault();

    const tl = gsap.timeline({
      onComplete: () => {
        this.setState((oldState) => ({
          currentStep: oldState.currentStep - 1,
        }));
        gsap.fromTo(
          ".form-content *",
          {
            x: "-20", // Start from the right side
            opacity: 0,
          },
          {
            x: "0",
            opacity: 1,
            duration: 0.1,
            stagger: 0.0,
            ease: "power1.out",
          },
        );
      },
    });

    tl.to(".form-content *", {
      x: 20,
      opacity: 0,
      duration: 0.1,
      stagger: 0.0,
      ease: "power1.inOut",
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    let sendDatafn = () => {
      const form = new FormData();
      form.append("image", this.state.file);
      form.append("name", this.state.name);
      form.append("home_address", this.state.address);
      form.append("city", this.state.city);
      form.append("phone_number", this.state.phone);
      form.append("comment", this.state.comment);

      const models_options = {
        method: "POST",
        body: form,
      };

      fetch("http://127.0.0.1:8000/api/commands/", models_options)
        .then((response) => response.json())
        .then((response) => console.log(response))
        .catch((err) => console.error(err));

      // Update state as needed
      this.setState({
        currentStep: 3,
      });
    };

    if (this.state.currentStep === 2) {
      const errors = {}; // Create a new errors object

      if (this.state.city.length === 0) {
        errors["city"] = "Ville requise"; // Set error message
      }
      if (this.state.address.length === 0) {
        errors["address"] = "Adresse requise"; // Set error message
      }
      if (this.state.file === null) {
        errors["file"] = "Fichier requis"; // Set error message
      }
      if (Object.keys(errors).length > 0) {
        this.setState({ errors });
      } else {
        this.setState({ errors: {} });
        sendDatafn();
      }
    }
  };

  handleKeyPress = (e) => {
    // Handle Enter key
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent default Enter behavior (like form submission)
      this.nextformpart();
    }

    // Handle Backspace key
    if (e.key === "Backspace") {
      e.preventDefault(); // Prevent default Backspace behavior (like deleting text)
      this.prevformpart();
    }
  };

  render() {
    if (this.state.currentStep === 1) {
      return (
        <div className="form-content">
          <div className="mb-3">
            <input
              className={`form-control form-control-22 ${this.state.errors["name"] && "incorrect"}`}
              type="text"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder={
                this.state.errors["name"]
                  ? this.state.errors["name"]
                  : "Nom complet"
              }
              required
            />
          </div>
          <div className="mb-3">
            <input
              className={`form-control form-control-22 ${this.state.errors["phone"] && "incorrect"}`}
              type="text"
              id="phone"
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}
              placeholder={
                this.state.errors["phone"]
                  ? this.state.errors["phone"]
                  : "Numéro de téléphone (e.g. 0612345678)"
              }
              required
            />
          </div>
          <div className="d-flex justify-content-between">
            <button
              onClick={this.nextformpart}
              className="btn w-100 form-button btn-primary"
            >
              Suivant
            </button>
          </div>
        </div>
      );
    } else if (this.state.currentStep === 2) {
      return (
        <div className="form-content">
          <div className="mb-3">
            <input
              className={`form-control form-control-22 ${this.state.errors["city"] && "incorrect"}`}
              type="text"
              id="city"
              name="city"
              value={this.state.city}
              onChange={this.handleChange}
              placeholder="Ville"
              required
            />
          </div>
          <div className="mb-3">
            <input
              className={`form-control form-control-22 ${this.state.errors["address"] && "incorrect"}`}
              type="text"
              id="address"
              name="address"
              value={this.state.address}
              onChange={this.handleChange}
              placeholder="Adresse"
              required
            />
          </div>
          <div className="mb-3">
            <input
              className="comment-form form-control form-control-22"
              type="text"
              id="comment"
              name="comment"
              value={this.state.comment}
              onChange={this.handleChange}
              placeholder="Commentaire"
              rows="3"
            />
          </div>
          <div className="mb-3">
            <div className="input-group custom-file-button">
              <label
                className={`input-group-text ${this.state.errors["file"] && "incorrect-d-none"}`}
                htmlFor="file"
                role="button"
              >
                Choisir un fichier
              </label>
              <label
                className={`form-control form-control-22 ${this.state.errors["file"] && "incorrect"}`}
                id="file-label"
                htmlFor="file"
                role="button"
              >
                {this.state.fileName}
              </label>
              <input
                type="file"
                className="d-none"
                id="file"
                name="file"
                onChange={this.handleFileChange}
                accept="image/*"
              />
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <button
              onClick={this.prevformpart}
              className="btn w-100 form-button btn-secondary me-3"
            >
              Retour
            </button>
            <button
              onClick={this.handleSubmit}
              className="btn w-100 submit-button btn-primary"
            >
              Commander
            </button>
          </div>
        </div>
      );
    } else if (this.state.currentStep === 3) {
      return (
        <div className="form-content py-3">
          <div class="alert alert-success" role="alert">
            <div class="d-flex gap-4">
              <span>
                <i class="fa-solid fa-circle-check icon-success"></i>
              </span>
              <div>
                Votre commande a été envoyée avec succès. Nous vous contacterons
                bientôt pour plus de détails.
              </div>
            </div>
          </div>
          <button
            onClick={this.handleBack}
            className="btn w-100 form-button btn-primary"
          >
            Terminer
          </button>
        </div>
      );
    }
  }
}

export default Form;
