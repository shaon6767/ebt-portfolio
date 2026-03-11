import logo from "../assets/logo.svg"
import dark from "../assets/darklogo.svg"
import { Mail } from "lucide-react"
import { MdCall } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io";
import { GrFacebookOption } from "react-icons/gr";
import { LiaLinkedinIn } from "react-icons/lia";
import { VscTwitter } from "react-icons/vsc";
import ftr from "../assets/ftr.png"

const Footer = () => {
  return (
    <footer className="w-full bg-neutral-100 dark:bg-[#141414] px-6 md:px-12 lg:px-16 pt-20 pb-8">

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-8 col-span-2">
          <div className="relative">
            <img src={logo} alt="logo" className="w-32 block dark:hidden relative z-10" />
            <img src={dark} alt="logo" className="w-32 hidden dark:block relative z-10" />
            <div className="absolute left-[-40px] md:left-[-80px] lg:left-[-150px] top-[-60px] hidden dark:block ">
              <img src={ftr} alt="" className="w-90 h-90 pointer-events-none animate-[spin_20s_linear_infinite]" />
            </div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl leading-snug">
            <span className="font-bold">Get Ready</span> To <br /> Create Great
          </h2>

          <div className="flex items-center border-b border-gray-300 pb-2 max-w-sm w-full relative z-20">
            <input
              type="email"
              placeholder="Email Address"
              className="bg-transparent outline-none flex-1 text-sm
             text-neutral-900 dark:text-white
             placeholder:text-neutral-600 dark:placeholder:text-neutral-500"
            />
            <Mail size={18} className="cursor-pointer" />
          </div>
        </div>


        <div className="col-span-1">
          <h3 className="font-semibold text-lg mb-6">Quick Link</h3>
          <ul className="space-y-3 text-gray-600 dark:text-white text-sm sm:text-base">
            <li className="cursor-pointer hover:text-black dark:hover:text-gray-500">About Me</li>
            <li className="cursor-pointer hover:text-black dark:hover:text-gray-500">Service</li>
            <li className="cursor-pointer hover:text-black dark:hover:text-gray-500">Contact Us</li>
            <li className="cursor-pointer hover:text-black dark:hover:text-gray-500">Blog Post</li>
            <li className="cursor-pointer hover:text-black dark:hover:text-gray-500">Pricing</li>
          </ul>
        </div>


        <div className="col-span-1">
          <h3 className="font-semibold text-lg mb-6">Contact</h3>
          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-3">
              <IoMdMail size={34} className=" p-2 bg-none border-2 border-[#d5cfcf] rounded-full" />
              <p className="break-all">nafiiz125@gmail.com</p>
            </div>
            <div className="flex items-center gap-3">
              <MdLocationOn size={34} className=" p-2 bg-none border-2 border-[#d5cfcf] rounded-full" />
              <p>3891 Ranchview Dr. Richardson</p>
            </div>
            <div className="flex items-center gap-3">
              <MdCall size={34} className=" p-2 bg-none border-2 border-[#d5cfcf] rounded-full" />
              <p>01245789321</p>
            </div>
          </div>


          <div className="flex gap-4 mt-6">
            <IoLogoInstagram size={32} className="p-2 bg-gray-200 dark:bg-gray-600 rounded-full dark:text-white hover:text-white hover:bg-red-500 dark:hover:bg-gray-500 transition-all cursor-pointer" />
            <LiaLinkedinIn size={32} className="p-2 bg-gray-200 dark:bg-gray-600 rounded-full dark:text-white hover:text-white hover:bg-red-500 dark:hover:bg-gray-500 transition-all cursor-pointer" />
            <VscTwitter size={32} className="p-2 bg-gray-200 dark:bg-gray-600 rounded-full dark:text-white hover:text-white hover:bg-red-500 dark:hover:bg-gray-500 transition-all cursor-pointer" />
            <GrFacebookOption size={32} className="p-2 bg-gray-200 dark:bg-gray-600 rounded-full dark:text-white hover:text-white hover:bg-red-500 dark:hover:bg-gray-500 transition-all cursor-pointer" />
          </div>
        </div>
      </div>


      <div className="max-w-7xl mx-auto mt-20 pt-4 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
        <p className="text-center md:text-left mt-0 mt-4">
          © InversWeb 2026 | All Rights Reserved
        </p>
        <div className="flex flex-wrap justify-center md:justify-end gap-4 mt-0 md:mt-4">
          <p className="cursor-pointer hover:text-black">Terms & Condition</p>
          <p className="cursor-pointer hover:text-black">Privacy Policy</p>
          <p className="cursor-pointer hover:text-black">Contact Us</p>
        </div>
      </div>

    </footer>
  )
}

export default Footer