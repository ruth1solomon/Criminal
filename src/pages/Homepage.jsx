import Navbar from "../components/header/Navbar";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-2xl font-bold">Home Page</h1>
      <p>Welcome to the Criminal Record system.</p>
      <button>
        <Link to="/register">lets get you started</Link>
      </button>



    </div>
  )
}

export default Homepage

