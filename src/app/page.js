"use client"

import './globals.css';
// import Footer from "../../pages/Footer";
import Navbar from "../../Components/NavBar";
import ThreeGlobe from '../../Components/ThreeGlobe';

export default function Home() {
  return (
    <div>
      <main>
        <Navbar />
        <div className="flex justify-center mt-8">
          <ThreeGlobe />
        </div>
      </main>
    </div>
  );
}
