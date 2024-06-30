// components/Navbar.js

import { useState } from 'react';
import Link from 'next/link';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full z-20 top-0 bg-transparent">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        {/* Logo and title */}
        <Link rel="preload" href="#" legacyBehavior>
          <a className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="/jntu-Kittl.svg" className="h-20" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Alumni Connect</span>
          </a>
        </Link>
        {/* Desktop menu */}
        <div className="hidden md:flex md:items-center md:space-x-4">
          <Link rel="preload" href="/" legacyBehavior>
            <a className="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">Home</a>
          </Link>
          <Link rel="preload" href="/about" legacyBehavior>
            <a className="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">About</a>
          </Link>
          <Link rel="preload" href="/contact" legacyBehavior>
            <a className="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">Contact</a>
          </Link>
          <Link rel="preload" href="/connect" legacyBehavior>
            <a className="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300">Connect</a>
          </Link>
        </div>
        {/* Hamburger menu */}
        <div className="flex md:hidden">
          {!isOpen && (
            <button
              onClick={toggleMenu}
              type="button"
              className="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? 'true' : 'false'}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger menu icon */}
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          )}
        </div>
        {/* Mobile menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`} id="mobile-menu">
          <ul className="flex flex-col w-full mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 space-y-1 dark:bg-gray-800 dark:border-gray-700">
            <li>
              <Link rel="preload" href="/" legacyBehavior>
                <a className="block py-2 px-4 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Home</a>
              </Link>
            </li>
            <li>
              <Link rel="preload" href="/about" legacyBehavior>
                <a className="block py-2 px-4 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">About</a>
              </Link>
            </li>
            <li>
              <Link rel="preload" href="/contact" legacyBehavior>
                <a className="block py-2 px-4 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Contact</a>
              </Link>
            </li>
            <li>
              <Link rel="preload" href="/connect" legacyBehavior>
                <a className="block py-2 px-4 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Connect</a>
              </Link>
            </li>
          </ul>
          {/* Close button */}
          <div className="flex justify-end mt-2">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none"
            >
              <span className="sr-only">Close main menu</span>
              {/* Close button icon */}
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;