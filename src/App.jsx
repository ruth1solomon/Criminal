import { BrowserRouter,Route,Routes } from "react-router-dom";
import Navbar from "./components/header/Navbar";
import Registerpage from "./pages/Registerpage";
import Userpage from "./pages/Userpage";
import About from "./pages/about";
import Homepage from "./pages/homepage";
import Contact from "./pages/Contact";

const App = () => {
  return (
<>

<BrowserRouter>
<Routes>
<Navbar />
  <Route path="/" element={<Homepage />} />
  <Route path="/about" element={<About/>} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/register" element={<Registerpage />} />
  <Route path="/user" element={<Userpage />} />
</Routes>

</BrowserRouter>

</>
    
  
  )
}

export default App