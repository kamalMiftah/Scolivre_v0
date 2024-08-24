import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");
      // console.log("Token retrieved:", token); // Debugging log

      if (token) {
        try {
          const response = await fetch(
            "http://localhost:8000/api/token/verify/",
            {
              method: "POST", // The endpoint expects a POST request
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ token }), // Send the token in the request body
            },
          );

          if (response.ok) {
            // console.log("Token is valid"); // Debugging log
            setIsAuthenticated(true);
          } else {
            // console.log("Token is invalid or expired"); // Debugging log
            setIsAuthenticated(false);
            localStorage.removeItem("token");
          }
        } catch (error) {
          // console.error("Error verifying token", error);
          setIsAuthenticated(false);
          localStorage.removeItem("token");
        }
      } else {
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (username, password) => {
    try {
      const response = await fetch("http://localhost:8000/api/token/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: username, password }),
      });
      const data = await response.json();

      if (response.ok) {
        const token = data.access;
        localStorage.setItem("token", token);
        setIsAuthenticated(true);
        return true;
      } else {
        setIsAuthenticated(false);
        return false;
      }
    } catch (error) {
      // console.error("Error logging in", error);
      setIsAuthenticated(false);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
