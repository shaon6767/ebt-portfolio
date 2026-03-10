import { useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, Instagram, Linkedin, Twitter, Facebook, MessageCircleCheck, X, Phone, Mail, LocateFixed } from 'lucide-react';
import ban from "../assets/banner.png";
import sideimg from "../assets/sideimg.png";
import sidebar from "../assets/sidebar.svg";
import logo from "../assets/logo.svg";
import dark from "../assets/darklogo.svg";

const Banner = () => {

  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <section className='dark:bg-black dark:text-white relative overflow-hidden py-10 md:py-0 font-rajdhani'>

      <motion.div
        className='max-w-7xl px-4 mx-auto'
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >

        <div className="hidden md:grid grid-cols-5 gap-4">
          <div className="col-span-1 space-y-4">
            <div className="mt-[200px] lg:space-y-4">
              <h1 className='text-xl lg:text-2xl font-bold'>HELLOW I'M</h1>
              <h2 className='text-4xl lg:text-[70px] font-bold leading-tight'>Brooklyn</h2>
              <h2 className='text-4xl lg:text-[70px] font-bold leading-tight'>Simmons</h2>
            </div>

            <div>
              <button className='flex items-center gap-2 px-4 lg:px-6 py-2 lg:py-3 bg-[#f93939] mt-0 lg:mt-8 rounded-[24px] text-white hover:bg-[#f71a1a] transition-colors text-sm lg:text-base whitespace-nowrap'>
                View Portfolio <MoveRight size={18} />
              </button>
            </div>
          </div>

          <div className="col-span-3">
            <div className="flex justify-center items-center h-full">
              <img src={ban} alt="" className='max-w-full h-auto object-contain z-30' />
              <div className="absolute bottom-[-20px] transform -translate-x-[-25px] hidden lg:block">
                <div>
                  <h1 className="outline-title text-white dark:text-white pb-2 text-[160px] font-bold text-center -z-10">
                    WEB DESIGN
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-1 mt-[200px] space-y-5">
            <div className="flex flex-col">
              <h3 className='text-lg font-semibold'>About Me</h3>
              <p className='mt-4 text-sm lg:text-base w-[250px] leading-[30px]'>
                A personal <span className='text-red-600 font-medium'>portfolio</span> is a collection of
                your work, achievements, and skills that <span className='text-red-600 font-medium'>web design</span> highlights.
              </p>
            </div>

            <div className="space-y-3 lg:space-y-5 mt-0 lg:mt-8">
              <p className='text-sm lg:text-base'>Find me on</p>

              <div className="flex items-center gap-2 lg:gap-3">
                <Instagram size={32} className="p-2 bg-gray-200 dark:bg-gray-600 rounded-full dark:text-white hover:text-white hover:bg-gray-400 dark:hover:bg-gray-500 transition-all cursor-pointer" />
                <Linkedin size={32} className="p-2 bg-gray-200 dark:bg-gray-600 rounded-full dark:text-white hover:text-white hover:bg-gray-400 dark:hover:bg-gray-500 transition-all cursor-pointer" />
                <Twitter size={32} className="p-2 bg-gray-200 dark:bg-gray-600 rounded-full dark:text-white hover:text-white hover:bg-gray-400 dark:hover:bg-gray-500 transition-all cursor-pointer" />
                <Facebook size={32} className="p-2 bg-gray-200 dark:bg-gray-600 rounded-full dark:text-white hover:text-white hover:bg-gray-400 dark:hover:bg-gray-500 transition-all cursor-pointer" />
              </div>
            </div>
          </div>
        </div>


        <div className="md:hidden space-y-6 font-rajdhani">
          <div className="flex justify-center">
            <img src={ban} alt="" className='w-3/4 max-w-sm h-auto' />
          </div>

          <div className="space-y-4 text-left">

            <h1 className='text-xl'>HELLOW I'M</h1>

            <div>
              <h2 className='text-5xl font-bold'>Brooklyn</h2>
              <h2 className='text-5xl font-bold'>Simmons</h2>
            </div>

            <div className="py-2">
              <h3 className='text-lg font-semibold'>About Me</h3>
              <p className='mt-2 text-sm'>
                A personal <span className='text-red-600 font-medium'>portfolio</span> is a collection of
                your work, achievements, and skills that <span className='text-red-600 font-medium'>web design</span> highlights.
              </p>
            </div>

            <div>
              <button className='flex items-center gap-2 px-6 py-3 bg-[#f93939] rounded-[24px] text-white hover:bg-[#f71a1a] transition-colors'>
                View Portfolio <MoveRight size={18} />
              </button>
            </div>

            <div className="space-y-3 pt-2">
              <p className='text-sm'>Find me on</p>

              <div className="flex items-center gap-3">
                <Instagram size={40} className="p-2 bg-gray-200 dark:bg-gray-600 rounded-full dark:text-white hover:text-white hover:bg-gray-400 dark:hover:bg-gray-500 transition-all cursor-pointer" />
                <Linkedin size={40} className="p-2 bg-gray-200 dark:bg-gray-600 rounded-full dark:text-white hover:text-white hover:bg-gray-400 dark:hover:bg-gray-500 transition-all cursor-pointer" />
                <Twitter size={40} className="p-2 bg-gray-200 dark:bg-gray-600 rounded-full dark:text-white hover:text-white hover:bg-gray-400 dark:hover:bg-gray-500 transition-all cursor-pointer" />
                <Facebook size={40} className="p-2 bg-gray-200 dark:bg-gray-600 rounded-full dark:text-white hover:text-white hover:bg-gray-400 dark:hover:bg-gray-500 transition-all cursor-pointer" />
              </div>
            </div>

          </div>
        </div>

      </motion.div>


      <div className="fixed right-3 bottom-5 z-50">
        <button onClick={() => setOpenSidebar(true)} className='p-3 bg-red-600 rounded-full hover:bg-red-700 transition-colors shadow-lg'>
          <MessageCircleCheck size={24} className='text-white' />
        </button>
      </div>


      {openSidebar && (
        <div onClick={() => setOpenSidebar(false)} className="fixed inset-0 bg-black/40 z-40" />
      )}


      <div className={`fixed top-0 right-0 h-full w-[320px] overflow-scroll font-rajdhani bg-neutral-100 dark:bg-black shadow-2xl z-50 transition-transform duration-300 ${openSidebar ? "translate-x-0" : "translate-x-full"}`}>

        <div className="flex justify-between items-center p-5 bg-neutral-200 dark:bg-black">
          <div>
            <img src={logo} alt="Logo" className="block dark:hidden w-auto h-8" />
            <img src={dark} alt="Logo" className="hidden dark:block w-auto h-8" />
          </div>
          <button onClick={() => setOpenSidebar(false)}>
            <X size={20} className="cursor-pointer" />
          </button>
        </div>

        <div className="p-5 space-y-4">

          <img src={sideimg} alt="" />

          <h3 className="font-semibold text-lg">
            Freelancer delivering exceptional Webflow, and Next.js solutions.
          </h3>

          <p className="text-sm text-gray-500 dark:text-gray-300">
            I am a skilled freelancer specializing in Webflow development,
            Figma design, and Next.js projects. I deliver creative, dynamic,
            and user-centric web solutions.
          </p>

          <div className="space-y-3">

            <div className="flex gap-3 items-center">
              <Phone size={30} className="text-black dark:text-white p-1 border border-[#c9c1c1] rounded-lg" />
              <div>
                <p className="text-xs ">CALL NOW</p>
                <p className="text-sm font-medium">+92 (8800) - 98670</p>
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <Mail size={30} className="text-black dark:text-white p-1 border border-[#c9c1c1] rounded-lg" />
              <div>
                <p className="text-xs ">MAIL US</p>
                <p className="text-sm font-medium">example@info.com</p>
              </div>
            </div>

            <div className="flex items-center gap-3 ">
              <LocateFixed size={30} className="text-black dark:text-white p-1 border border-[#c9c1c1] rounded-lg" />
              <div>
                <p className="text-xs ">MY ADDRESS</p>
                <p className="text-sm font-medium">66 Brooklyn, New York 3269</p>
              </div>
            </div>

          </div>

        </div>

      </div>


      <div className="absolute right-4 top-[15%] md:top-[25%]">
        <img src={sidebar} alt="" />
      </div>

    </section>
  );
};

export default Banner;