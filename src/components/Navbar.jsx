import logo from "../assets/logo.svg"
import dark from "../assets/darklogo.svg"
import { Instagram, Linkedin, Twitter, Facebook, Sun ,Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
const Navbar = () => {
 const { isDarkMode, toggleTheme } = useTheme();
  return (
   <section className="py-4 bg-[#F4F4F4] dark:bg-black">
     <div className='container'>
       <div className="grid grid-cols-5 items-center">
        <div className="col-span-1">
         <img src={logo} alt="" className="block dark:hidden"/>
         <img src={dark} alt="" className="hidden dark:block"/>
        </div>
        <div className="col-span-3">
        <ul className="flex items-center gap-8 justify-center font-rajdhani">
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">About</a>
            </li>
            <li>
                <a href="#">Services</a>
            </li>
            <li>
                <a href="#">Blog</a>
            </li>
            <li>
                <a href="#">Project</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
        </ul>
        </div>
        <div className="col-span-1">
         <div className="flex items-center gap-5 justify-end">
           <Instagram size={34} className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full dark:text-white hover:bg-red-500 transition-all cursor-pointer ease-in-out"/>
           <Linkedin size={34} className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full dark:text-white hover:bg-red-500 transition-all cursor-pointer ease-in-out"/>
           <Twitter size={34} className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full dark:text-white hover:bg-red-500 transition-all cursor-pointer ease-in-out"/>
           <Facebook size={34} className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full dark:text-white hover:bg-red-500 transition-all cursor-pointer ease-in-out"/>
           <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            {isDarkMode ? <Sun/> : <Moon/>}
          </button>
         </div>
        </div>
       </div>
    </div>
   </section>
  )
}

export default Navbar