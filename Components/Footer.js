function Footer() {
    return (
      <footer className="bottom-0 left-0 z-20 w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-black dark:border-black">
        <span className="text-sm md:text-base text-white sm:text-center dark:text-white">© 2024 <a href="#" className="hover:underline">MSK™</a>. All Rights Reserved.</span>
        <ul className="flex flex-wrap justify-center items-center mt-3 text-sm font-medium text-white dark:text-gray-200 sm:mt-0">
          <li>
            <a href="/about" className="hover:underline me-4 md:me-6">About</a>
          </li>
          <li>
            <a href="/" className="hover:underline me-4 md:me-6">Licensing</a>
          </li>
          <li>
            <a href="/contact" className="hover:underline">Contact</a>
          </li>
        </ul>
      </footer>
    );
  }
  
  export default Footer;