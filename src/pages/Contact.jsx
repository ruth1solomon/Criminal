import Navbar from "../components/header/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-4xl">

          {/* Left Side: Image and Text */}
          <div className="md:w-1/2 bg-blue-500 flex items-center justify-center p-8">
            <div className="text-center text-white">
              <h2 className="text-3xl font-extrabold mb-4">Get in Touch</h2>
              <p className="text-lg mb-6">
                We are here to assist you with any questions or concerns.
                Feel free to reach out to us at any time.
              </p>
              <img
                src="https://via.placeholder.com/300x200"
                alt="Contact Us"
                className="mx-auto rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="md:w-1/2 p-8">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Contact Us</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
