import Navbar from "../components/header/Navbar"



const UserPage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Navbar />

      <h1 className="text-3xl font-bold">Welcome to the User Page</h1>
    </div>
  );
};

export default UserPage;