import { useState } from "react";
import logo from "../assets/logo.svg";
import dark from "../assets/darklogo.svg";
import { Instagram, Linkedin, Twitter, Facebook, Sun, Moon, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = ["Home", "About", "Services", "Blog", "Project", "Contact"];

  return (
    <section className="py-4 bg-[#F4F4F4] dark:bg-black relative">
      <div className='container px-4 md:px-0'>
        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-5 items-center">
          {/* Logo */}
          <div className="col-span-1">
            <img src={logo} alt="Logo" className="block dark:hidden w-auto h-10"/>
            <img src={dark} alt="Logo" className="hidden dark:block w-auto h-10"/>
          </div>

          {/* Navigation Links */}
          <div className="col-span-3">
            <ul className="flex items-center gap-4 lg:gap-8 justify-center font-rajdhani">
              {navLinks.map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className="text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-colors text-sm lg:text-base"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Icons & Theme Toggle */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 lg:gap-5 justify-end">
              <Instagram size={34} className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full dark:text-white hover:bg-red-500 hover:text-white transition-all cursor-pointer ease-in-out"/>
              <Linkedin size={34} className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full dark:text-white hover:bg-red-500 hover:text-white transition-all cursor-pointer ease-in-out"/>
              <Twitter size={34} className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full dark:text-white hover:bg-red-500 hover:text-white transition-all cursor-pointer ease-in-out"/>
              <Facebook size={34} className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full dark:text-white hover:bg-red-500 hover:text-white transition-all cursor-pointer ease-in-out"/>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-500 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle theme"
              >
                {isDarkMode ? <Sun size={20}/> : <Moon size={20}/>}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden items-center justify-between">
          {/* Logo */}
          <div>
            <img src={logo} alt="Logo" className="block dark:hidden w-auto h-8"/>
            <img src={dark} alt="Logo" className="hidden dark:block w-auto h-8"/>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={20}/> : <Moon size={20}/>}
            </button>
            
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 top-full mt-2 bg-[#F4F4F4] dark:bg-gray-900 shadow-lg rounded-b-lg z-50 py-4 px-4">
            {/* Mobile Navigation Links */}
            <ul className="flex flex-col items-center gap-4 font-rajdhani mb-4">
              {navLinks.map((item) => (
                <li key={item} className="w-full text-center">
                  <a 
                    href="#" 
                    className="block py-2 text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-colors text-base font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>

            {/* Mobile Social Icons */}
            <div className="flex items-center justify-center gap-4 pt-4 border-t border-gray-300 dark:border-gray-700">
              <Instagram size={36} className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full dark:text-white hover:bg-red-500 hover:text-white transition-all cursor-pointer ease-in-out"/>
              <Linkedin size={36} className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full dark:text-white hover:bg-red-500 hover:text-white transition-all cursor-pointer ease-in-out"/>
              <Twitter size={36} className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full dark:text-white hover:bg-red-500 hover:text-white transition-all cursor-pointer ease-in-out"/>
              <Facebook size={36} className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full dark:text-white hover:bg-red-500 hover:text-white transition-all cursor-pointer ease-in-out"/>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Navbar;