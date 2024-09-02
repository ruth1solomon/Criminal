/* eslint-disable react/prop-types */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registerpage from "./pages/Registerpage";
import Userpage from "./pages/Userpage";
import About from "./pages/about";
import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import { useState, useEffect } from "react";

const App = () => {
  // Retrieve initial auth state from localStorage
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('isAuthenticated') === 'true';
  });

  // Sync auth state with localStorage
  useEffect(() => {
    localStorage.setItem('isAuthenticated', isAuthenticated);
  }, [isAuthenticated]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/register" element={<Registerpage setIsAuthenticated={setIsAuthenticated} />} />
        <Route
          path="/user"
          element={isAuthenticated ? <Userpage /> : <Registerpage setIsAuthenticated={setIsAuthenticated} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
