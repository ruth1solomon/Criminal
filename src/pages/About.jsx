
import Navbar from '../components/header/Navbar';


const About = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-2xl font-bold mb-4">About Us</h1>
      <p>
        Welcome to the Criminal Record system. Our mission is to provide accurate and up-to-date
        criminal record information to authorized personnel.
      </p>
      <p className="mt-4">
        Our platform is designed to securely manage and retrieve criminal records,
        ensuring that only authorized users have access to sensitive information.
        We prioritize security and data integrity, offering a user-friendly interface
        to make your work more efficient.
      </p>
      <p className="mt-4">
        For any inquiries, please feel free to contact us through the contact page.
      </p>

    </div>
  )
}

export default About


