import { useState } from "react";
import logo from "../assets/logo.svg";
import dark from "../assets/darklogo.svg";
import { IoLogoInstagram } from "react-icons/io";
import { GrFacebookOption } from "react-icons/gr";
import { LiaLinkedinIn } from "react-icons/lia";
import { VscTwitter } from "react-icons/vsc";

import { FiSun,FiMoon,FiMenu,FiX,FiChevronDown} from "react-icons/fi";
import { useTheme } from "../context/ThemeContext";

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { name: "Home" },
    { name: "About" },
    {
      name: "Services",
      dropdown: [
        { name: "Web Design" },
        { name: "UI/UX Design" },
        { name: "Web Development" }
      ]
    },
    {
      name: "Blog",
      dropdown: [
        { name: "Latest Blog" },
        { name: "Categories" },
        { name: "News" }
      ]
    },
    {
      name: "Project",
      dropdown: [
        { name: "Portfolio" },
        { name: "Case Study" },
        { name: "Clients" }
      ]
    },
    { name: "Contact" }
  ];

  return (
    <section className="py-4 bg-[#F4F4F4] dark:bg-black relative z-50">
      <div className="max-w-7xl px-4 mx-auto">

        <div className="hidden md:grid grid-cols-5 items-center">

          <div className="col-span-1">
            <img src={logo} alt="Logo" className="block dark:hidden w-auto h-10" />
            <img src={dark} alt="Logo" className="hidden dark:block w-auto h-10" />
          </div>

          <div className="col-span-3">
            <ul className="flex items-center gap-4 lg:gap-8 justify-center font-rajdhani">

              {navLinks.map((item) => (
                <li key={item.name} className="relative group">

                  <div className="flex items-center gap-1 font-bold dark:text-white hover:text-red-500 dark:hover:text-red-400 transition-colors text-sm lg:text-base cursor-pointer">

                    {item.name}

                    {item.dropdown && (
                      <FiChevronDown
                        size={18}
                        className="transition-transform duration-300"
                      />
                    )}

                  </div>

                  {item.dropdown && (
                    <ul
                      className="
                      absolute left-0 top-full pt-3 w-52 bg-white dark:bg-gray-900 shadow-xl rounded-lg border border-gray-200 dark:border-gray-700 hidden lg:block opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50" >
                      {item.dropdown.map((sub) => (
                        <li key={sub.name}>
                          <a
                            href="#"
                            className="
                            flex items-center gap-3 px-4 py-3 text-sm dark:text-gray-300 hover:bg-red-500 hover:text-white transition ">
                            {sub.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}

            </ul>
          </div>

          <div className="col-span-1">

            <div className="flex items-center gap-2 justify-end">

              <IoLogoInstagram 
                size={42}
                className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-800 dark:text-white hover:bg-red-500 hover:text-white transition-all cursor-pointer"
              />

              <LiaLinkedinIn
                size={42}
                className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-800 dark:text-white hover:bg-red-500 hover:text-white transition-all cursor-pointer"
              />

              <VscTwitter 
                size={42}
                className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-800 dark:text-white hover:bg-red-500 hover:text-white transition-all cursor-pointer"
              />

              <GrFacebookOption 
                size={42}
                className="p-3 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-800 dark:text-white hover:bg-red-500 hover:text-white transition-all cursor-pointer"
              />

              <button
                onClick={toggleTheme}
                className="p-3 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-500 dark:hover:bg-gray-800 transition-colors"
              >
                {isDarkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
              </button>

            </div>
          </div>

        </div>

        <div className="flex md:hidden items-center justify-between">

          <div>
            <img src={logo} alt="Logo" className="block dark:hidden w-auto h-8" />
            <img src={dark} alt="Logo" className="hidden dark:block w-auto h-8" />
          </div>

          <div className="flex items-center gap-3">

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              {isDarkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
            </button>

            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            >
              {isMobileMenuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>

          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-full mt-2 bg-[#F4F4F4] dark:bg-gray-900 shadow-lg rounded-b-lg z-50 py-4 px-4">

            <ul className="flex flex-col items-center gap-4 font-rajdhani mb-4">

              {navLinks.map((item) => (
                <li key={item.name} className="w-full text-center">
                  <a
                    href="#"
                    className="block py-2 text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-colors text-base font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}

            </ul>

            <div className="flex items-center justify-center gap-4 pt-4 border-t border-gray-300 dark:border-gray-700">

              <IoLogoInstagram  size={38} className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-800 dark:text-white hover:bg-red-500 hover:text-white transition-all cursor-pointer" />
              <LiaLinkedinIn  size={38} className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-800 dark:text-white hover:bg-red-500 hover:text-white transition-all cursor-pointer" />
              <VscTwitter  size={38} className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-800 dark:text-white hover:bg-red-500 hover:text-white transition-all cursor-pointer" />
              <GrFacebookOption  size={38} className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-800 dark:text-white hover:bg-red-500 hover:text-white transition-all cursor-pointer" />

            </div>

          </div>
        )}

      </div>
    </section>
  );
};

export default Navbar;