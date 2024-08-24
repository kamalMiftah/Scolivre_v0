import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Check if a token exists in localStorage
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/admin"); // Redirect to admin page if a token exists
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/token/", {
        email: username, // Assuming username corresponds to email in API
        password,
      });
      const token = response.data.access;
      localStorage.setItem("token", token);
      navigate("/admin"); // Redirect to admin page after successful login
    } catch (error) {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <section>
      <div className="d-flex flex-column min-vh-100 justify-content-center">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-10 mx-auto bg-white rounded shadow">
              <div className="row">
                <div className="col-md-6">
                  <div className="m-5 text-center">
                    <h1>Welcome!</h1>
                  </div>

                  <form className="m-5" onSubmit={handleLogin}>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="username">
                        Username
                      </label>
                      <input
                        className="form-control"
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label" htmlFor="password">
                        Password
                      </label>
                      <input
                        className="form-control"
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    <div className="row mb-3">
                      <div className="col-6">
                        <div className="form-check text-start">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="remember-me"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="remember-me"
                          >
                            Remember Me
                          </label>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="text-end">
                          <a href="#">Forgot Password?</a>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <input
                        type="submit"
                        className="form-control btn btn-primary mt-3"
                        value="Sign In"
                      />
                    </div>
                  </form>
                </div>
                <div className="col-md-6">
                  <div>
                    <img
                      src="images/draw2.svg"
                      alt="login"
                      className="img-fluid py-5"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
