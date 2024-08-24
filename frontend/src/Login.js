import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { isAuthenticated, login } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/admin"); // Redirect to admin page if authenticated
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    const success = await login(username, password);
    if (success) {
      navigate("/admin"); // Redirect to admin page after successful login
    } else {
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
                    {error && (
                      <div className="alert alert-danger" role="alert">
                        {error}
                      </div>
                    )}
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
