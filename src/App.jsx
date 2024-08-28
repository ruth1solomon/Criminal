/* eslint-disable react/prop-types */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registerpage from "./pages/Registerpage";
import Userpage from "./pages/Userpage";
import About from "./pages/about";
import Homepage from "./pages/homepage";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import { useState, } from "react";


const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);


  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/register" element={<Registerpage />} />
        <Route
          path="/user"
          element={isAuthenticated ? <Userpage /> : null}
        />

      </Routes>
    </BrowserRouter>
  );
};

// ProtectedRoute Component to handle the authentication check
/* const ProtectedRoute = ({ isAuthenticated }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/user");
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? <Userpage /> : null;
}; */

export default App;
