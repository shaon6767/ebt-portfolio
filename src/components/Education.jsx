import { motion } from "framer-motion"
import con from "../assets/Container.png"
import one from "../assets/linear.svg"
import two from "../assets/framer.svg"
import three from "../assets/notion.svg"
import four from "../assets/slack.svg"
import five from "../assets/medium.svg"
import six from "../assets/upwork.svg"
import seven from "../assets/amazon.svg"
import eight from "../assets/asana.svg"
import line from "../assets/line.svg"

const Education = () => {
  return (
    <div className="py-20 px-4">
      
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >

        <div className="flex items-center gap-3 lg:gap-8 mb-4 lg:mb-10">
          <div>
            <h2 className="text-2xl font-bold">
              Education
            </h2>
          </div>
          <div className="hidden dark:block">
            <img src={line} alt="" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="bg-[#F4F4F4] dark:bg-[#141414] p-8 rounded-2xl shadow-md border-b-2 dark:border-none border-r-2 border-red-400">
            <h4 className="text-md text-black dark:text-white">Trainer Marketing</h4>
            <p className="text-md font-semibold mt-1">2005-2009</p>
            <p className="text-gray-500 text-[17px] mt-4">
              A personal portfolio is a curated collection of an individual's
              professional work, showcasing their skills, experience & personal projects.
            </p>
          </div>

          <div className="bg-[#F4F4F4] dark:bg-[#141414] p-8 rounded-2xl shadow-md border-b-2 dark:border-none border-r-2 border-red-400">
            <h4 className="text-md">Assistant Director</h4>
            <p className="text-md font-semibold mt-1">2010-2014</p>
            <p className="text-gray-500 text-[17px] mt-4">
              Each project here showcases my commitment to excellence and
              adaptability, tailored to meet each client's unique needs.
            </p>
          </div>

          <div className="bg-[#F4F4F4] dark:bg-[#141414] p-8 rounded-2xl shadow-md border-b-2 dark:border-none border-r-2 border-red-400">
            <h4 className="text-md text-gray-500">Design Assistant</h4>
            <p className="text-md font-semibold mt-1">2008-2012</p>
            <p className="text-gray-500 text-[17px] mt-4">
              I've had the privilege of working with various clients, from startups
              to established companies, helping bring their visions to life.
            </p>
          </div>

          <div className="bg-[#F4F4F4] dark:bg-[#141414] p-8 rounded-2xl shadow-md border-b-2 dark:border-none border-r-2 border-red-400">
            <h4 className="text-md">Design Assistant</h4>
            <p className="text-md font-semibold mt-1">2008-2012</p>
            <p className="text-gray-500 text-[17px] mt-4">
              Each project here showcases my commitment to excellence and
              adaptability, tailored to meet each client's needs.
            </p>
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">
          <div className="rounded-2xl overflow-hidden">
            <img src={con} alt="" />
          </div>

          <div>
            <div className="flex items-center gap-3 lg:gap-8 mb-4 lg:mb-10">
              <div>
                <h2 className="text-2xl font-bold">
                  Experiences
                </h2>
              </div>
              <div className="hidden dark:block">
                <img src={line} alt="" />
              </div>
            </div>

            <div className="mb-12">
              <p className="text-red-500 font-semibold text-lg">experience</p>
              <h4 className="font-semibold text-xl mt-1">
                Fatima Asrafy
              </h4>
              <p className="text-md mt-3">UI/UX Designer</p>
              <p className="text-[15px] mt-4 w-[400px] leading-[30px] text-gray-500">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum desi dolore eu fugiat nulla pariatu Duis aute irure
              </p>
            </div>

            <div>
              <p className="text-red-500 font-semibold text-lg">experience</p>
              <h4 className="font-semibold text-xl mt-1">
                Fatima Asrafy
              </h4>
              <p className="text-md mt-3">UI/UX Designer</p>
              <p className="text-[15px] mt-4 w-[400px] leading-[30px] text-gray-500">
                Interested in working together? Let's bring your ideas to life.
                Hit Contact me, and let's start building something.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-28 gap-0 p-0 m-0">

          <div className="flex justify-center items-center p-0 m-0">
            <img src={one} alt="Brand 1" className="cursor-pointer border-t-2 border-l-2 border-[#e4dddd] p-14 block w-full h-full" />
          </div>

          <div className="flex justify-center items-center p-0 m-0">
            <img src={two} alt="Brand 2" className="cursor-pointer border-t-2 border-l-2 border-[#e4dddd]  p-14 block w-full h-full" />
          </div>

          <div className="flex justify-center items-center p-0 m-0">
            <img src={three} alt="Brand 3" className="cursor-pointer border-t-2 border-l-2 border-[#e4dddd] p-14 block w-full h-full" />
          </div>

          <div className="flex justify-center items-center p-0 m-0">
            <img src={four} alt="Brand 4" className="cursor-pointer border-t-2 border-l-2 border-r-2 border-[#e4dddd] p-14 block w-full h-full" />
          </div>

          <div className="flex justify-center items-center p-0 m-0">
            <img src={five} alt="Brand 5" className="cursor-pointer border-t-2 border-l-2 border-b-2 border-[#e4dddd] p-14 block w-full h-full" />
          </div>

          <div className="flex justify-center items-center p-0 m-0">
            <img src={six} alt="Brand 6" className="cursor-pointer border-t-2 border-l-2 border-b-2 border-[#e4dddd] p-14 block w-full h-full" />
          </div>

          <div className="flex justify-center items-center p-0 m-0">
            <img src={seven} alt="Brand 7" className="cursor-pointer border-t-2 border-l-2 border-b-2 border-[#e4dddd] p-14 block w-full h-full" />
          </div>

          <div className="flex justify-center items-center p-0 m-0">
            <img src={eight} alt="Brand 8" className="cursor-pointer border-2 border-[#e4dddd] p-14 block w-full h-full" />
          </div>

        </div>

      </motion.div>

    </div>
  );
};

export default Education;