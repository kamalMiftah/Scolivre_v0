import React from "react";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import "./index.css";
import Home from "./Home";
import About from "./About";
import Themeroutes from "./routes/Router";

const AppRoutes = () => {
  // Define your routes here
  const routes = [
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    ...Themeroutes, // Assuming Themeroutes is an array of route objects
  ];

  return useRoutes(routes);
};

const App = () => {
  return (
    <Router>
      <div className="dark">
        <AppRoutes />
      </div>
    </Router>
  );
};

export default App;
