import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registerpage from "./pages/Registerpage";
import Userpage from "./pages/Userpage";
import About from "./pages/about";
import Homepage from "./pages/homepage";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

const App = () => {
  return (
    <>

      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Homepage />} />
          <Route path="/About" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Registerpage" element={<Registerpage />} />
          <Route path="/Userpage" element={<Userpage />} />
          <Route path="Login" element={<Login />}></Route>
        </Routes>

      </BrowserRouter>

    </>


  )
}

export default App