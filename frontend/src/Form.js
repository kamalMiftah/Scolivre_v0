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
      fileName: "No file chosen",
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
      fileName: file ? file.name : "No file chosen",
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
      fileName: "No file chosen",
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
        errors["name"] = "Full Name is required"; // Set error message
      }
      console.log(this.state.phone.length);
      if (this.state.phone.length === 0) {
        errors["phone"] = "Phone Number is required"; // Set error message
      } else if (!phoneRegex.test(this.state.phone)) {
        errors["phone"] = "Phone number is incorrect"; // Set error message
      }
      if (Object.keys(errors).length > 0) {
        this.setState({ errors });
      } else {
        this.setState({ errors: {} });
        nextAnimation();
      }
    }
    if (this.state.currentStep === 2) {
      const errors = {}; // Create a new errors object

      if (this.state.city.length === 0) {
        errors["city"] = "City is required"; // Set error message
      }
      if (this.state.address.length === 0) {
        errors["address"] = "Home Address is required"; // Set error message
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
        currentStep: 4,
      });
    };

    if (this.state.currentStep === 3) {
      const errors = {}; // Create a new errors object

      if (this.state.file === null) {
        errors["file"] = "File is required"; // Set error message
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
              className={`form-control ${this.state.errors["name"] && "incorrect"}`}
              type="text"
              id="name"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              placeholder={
                this.state.errors["name"]
                  ? this.state.errors["name"]
                  : "Full Name"
              }
              required
            />
          </div>
          <div className="mb-3">
            <input
              className={`form-control ${this.state.errors["phone"] && "incorrect"}`}
              type="text"
              id="phone"
              name="phone"
              value={this.state.phone}
              onChange={this.handleChange}
              placeholder={
                this.state.errors["phone"]
                  ? this.state.errors["phone"]
                  : "Phone Number"
              }
              required
            />
          </div>
          <div className="d-flex justify-content-between">
            <button
              onClick={this.nextformpart}
              className="btn w-100 form-button btn-primary"
            >
              Next
            </button>
          </div>
        </div>
      );
    } else if (this.state.currentStep === 2) {
      return (
        <div className="form-content">
          <div className="mb-3">
            <input
              className={`form-control ${this.state.errors["city"] && "incorrect"}`}
              type="text"
              id="city"
              name="city"
              value={this.state.city}
              onChange={this.handleChange}
              placeholder="City"
              required
            />
          </div>
          <div className="mb-3">
            <input
              className={`form-control ${this.state.errors["address"] && "incorrect"}`}
              type="text"
              id="address"
              name="address"
              value={this.state.address}
              onChange={this.handleChange}
              placeholder="Home Address"
              required
            />
          </div>
          <div className="d-flex justify-content-between">
            <button
              onClick={this.prevformpart}
              className="btn w-100 form-button btn-secondary me-3"
            >
              Back
            </button>
            <button
              onClick={this.nextformpart}
              className="btn w-100 form-button btn-primary"
            >
              Next
            </button>
          </div>
        </div>
      );
    } else if (this.state.currentStep === 3) {
      return (
        <div className="form-content">
          <div className="mb-3">
            <input
              className="comment-form form-control"
              type="text"
              id="comment"
              name="comment"
              value={this.state.comment}
              onChange={this.handleChange}
              placeholder="Comment"
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
                Chose File
              </label>
              <label
                className={`form-control ${this.state.errors["file"] && "incorrect"}`}
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
              Back
            </button>
            <button
              onClick={this.handleSubmit}
              className="btn w-100 submit-button btn-primary"
            >
              Submit
            </button>
          </div>
        </div>
      );
    } else if (this.state.currentStep === 4) {
      return (
        <div className="form-content py-3">
          <p className="fs-7">Thank you, form submitted.</p>
          <button
            onClick={this.handleBack}
            className="btn w-100 submit-button btn-primary"
          >
            Back
          </button>
        </div>
      );
    }
  }
}

export default Form;
