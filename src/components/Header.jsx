import { useEffect, useState } from 'react';
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid';

const Header = () => {
    const Links = [
        { name: "HOME", link: "/" },
        { name: "SERVICES", link: "/services" },
        { name: "ACHIEVEMENTS", link: "/services" },
        { name: "ABOUT", link: "/about" },
        { name: "CONTACT", link: "/contact" },
    ];
    const [open, setOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY) {
            setIsVisible(true);
        }
        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll)
        };

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lastScrollY]);

    return (
        <header className={`shadow-md w-full p-2  top-0 left-0 z-50 transform transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}>
            <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
                {/* Logo Section */}
                <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
                    <BookOpenIcon className="w-7 h-7 text-blue-600" />
                    <span>IKO CFO</span>
                </div>

                {/* Menu Icon */}
                <button
                    onClick={() => setOpen(!open)}
                    className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
                    aria-label="Toggle menu"
                >
                    {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
                </button>

                {/* Navigation Links */}
                <ul
                    className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
                        open ? "top-16" : "top-[-490px]"
                    }`}
                >
                    {Links.map((link, index) => (
                        <li key={index} className="md:ml-8 md:my-0 my-7 font-semibold">
                            <a
                                href={link.link}
                                className="text-gray-800 hover:bg-theme-gradient hover:text-white transition-all duration-500 hover:border-2 p-2 rounded"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                    {/* Button */}
                    <li className="md:ml-8 md:my-0 my-7">
                        <button className="bg-theme-gradient text-white font-semibold px-4 py-2 rounded duration-500 hover:bg-blue-700 hover:shadow-2xl">
                            Get In Touch
                        </button>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
