// App.js
import React from "react";
import "./index.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Admin from "./Admin";
import Login from "./Login";

function App() {
  const isAuthenticated = !!localStorage.getItem("token");

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin"
          element={isAuthenticated ? <Admin /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
