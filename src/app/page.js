"use client"
import './globals.css';
import Footer from "../../Components/Footer";
import Navbar from "../../Components/NavBar";
import TwoColumnSection from '../../Components/TwoColumnSection';
import MainImage from '../../Components/MainImage';
import Event from '../../Components/Event';

const events = [
  {
    title: 'University Open Day',
    description: 'Join us for a day of campus tours, presentations, and student panels.',
    date: 'July 15, 2024',
  },
  {
    title: 'Career Fair',
    description: 'Explore career opportunities with leading companies and network with alumni.',
    date: 'August 3, 2024',
  },

];

export default function Home() {
  return (
    <div>
      <main>
        <div className="pb-28" >
          <Navbar />
        </div>
        <MainImage />
        <TwoColumnSection />
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-4">Upcoming Events</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {events.map((event, index) => (
              <Event key={index} event={event} />
            ))}
          </div>
        </div>
        <div className="pb-20"></div>
      </main>
      <Footer />
    </div>
  );
}
