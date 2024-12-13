import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const Links = [
    { name: "HOME", link: "home" },
    { name: "ABOUT", link: "about" },
    { name: "SERVICES", link: "services" },
    { name: "ACHIEVEMENTS", link: "achievements" },
    { name: "CONTACT", link: "contact" },
  ];

  const [open, setOpen] = useState(false);
  const [headerOpacity, setHeaderOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setHeaderOpacity(currentScrollY > 50 ? 1 - Math.min(currentScrollY / 200, 1) : 1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      style={{ opacity: headerOpacity }}
      className={`fixed top-0 left-0 w-full overflow-hidden transition-opacity duration-300  bg-white z-50`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 md:px-10">
        {/* Logo */}
        <div className="flex items-center">
          <img src="iko-cfo-logo.svg" width={50} alt="IKO CFO Logo" className="bg-transparent" />
          <h1 className="font-bold text-2xl ml-2 text-gray-800">IKO CFO</h1>
        </div>

        {/* Menu Icon for Mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden w-7 h-7 text-gray-800"
          aria-label="Toggle menu"
        >
          {open ? <XMarkIcon /> : <Bars3Icon />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`md:flex items-center absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent transition-all duration-300 ease-in ${
            open ? "block shadow-md" : "hidden"
          }`}
        >
          {Links.map((link, index) => (
            <li key={index} className="md:mx-4 my-2 md:my-0">
              <button
                onClick={() => {
                  document.getElementById(link.link).scrollIntoView({ behavior: "smooth" });
                  setOpen(false);
                }}
                className="text-gray-800 hover:bg-theme-gradient hover:text-white transition-all duration-300 px-4 py-2 rounded"
              >
                {link.name}
              </button>
            </li>
          ))}
          {/* Button */}
          <li className="md:ml-8 text-center">
            <button className="bg-theme-gradient text-white font-semibold px-4 py-2 rounded duration-300 hover:bg-blue-700 hover:shadow-lg">
              Get In Touch
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;