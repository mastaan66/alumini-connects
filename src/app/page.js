"use client"
import './globals.css';
import Footer from "../../Components/Footer";
import Navbar from "../../Components/NavBar";
import TwoColumnSection from '../../Components/TwoColumnSection';
import MainImage from '../../Components/MainImage';

export default function Home() {
  return (
    <div>
      <main>
        <div className="pb-28" >
          <Navbar />
        </div>
        <MainImage />
          <TwoColumnSection />
      </main>
        <Footer />
    </div>
  );
}
