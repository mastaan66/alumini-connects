import '../src/app/globals.css';
import Navbar from '../Components/NavBar'; // Adjust the path as necessary
import About from '../Components/About';
import Footer from '../Components/Footer';

const about = () => {
  return (
    <>
      <Navbar />
      <About />
      <Footer />
    </>
  );
};

export default about;
