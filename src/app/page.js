"use client"

import './globals.css';
import Footer from "../../Components/Footer";
import Navbar from "../../Components/NavBar";
import TwoColumnSection from '../../Components/TwoColumnSection';

export default function Home() {
  return (
    <div>
      <main>
        <div className="pb-28" >
          <Navbar />
        </div>
        <TwoColumnSection />
        <TwoColumnSection />
        <TwoColumnSection />
        <TwoColumnSection />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
