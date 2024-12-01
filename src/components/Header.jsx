import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const Links = [
    { name: "HOME", link: "home" },
    { name: "ABOUT", link: "about" },
    { name: "SERVICES", link: "services" },
    { name: "ACHIEVEMENTS", link: "achievements" },
    { name: "CONTACT", link: "contact" },
  ];

  const [open, setOpen] = useState(false); // State for mobile menu toggle

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="shadow-md w-full sticky top-0 left-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 md:px-10">
        {/* Logo */}
        <div className="font-bold text-2xl flex items-center">
          <span>IKO CFO</span>
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
            <li
              key={index}
              className="md:ml-8 md:my-0 my-4 font-semibold text-center"
            >
              <button
                onClick={() => {
                  scrollToSection(link.link);
                  setOpen(false); // Close menu on click (mobile)
                }}
                className="text-gray-800 hover:bg-theme-gradient hover:text-white transition-all duration-500 p-2 rounded w-full md:w-auto"
              >
                {link.name}
              </button>
            </li>
          ))}
          {/* Button */}
          <li className="md:ml-8 text-center">
            <button className="bg-theme-gradient text-white font-semibold px-4 py-2 rounded duration-500 hover:bg-blue-700 hover:shadow-lg">
              Get In Touch
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
