import '../src/app/globals.css';
import Head from 'next/head';
import Navbar from '../Components/NavBar'; // Adjust the path as necessary

const About = () => {
  return (
    <>
      <Head>
        <title>About Us - Alumini Connect</title>
        <meta name="description" content="Learn more about us and what we do." />
      </Head>

      <Navbar /> {/* Include the Navbar component at the top of the page */}

      <div className="min-h-screen flex items-center justify-center">
        <div className="max-w-4xl w-full px-6 py-12">
          <div className="bg-gray-700 shadow-lg rounded-lg px-8 py-12 text-left"> {/* Added text-left class */}
            <h1 className="text-3xl font-semibold mb-4">About Us</h1>
            <p className="leading-relaxed">
            This project has been undertaken by students of JNTUH CSE as part of a real-time research project.
            </p>
            <p className="leading-relaxed mt-4">
                  Sk Mastan
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
