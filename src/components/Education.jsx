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
import HoverBorder from "./HoverBorder"

const Education = () => {
  return (
    <div className="pb-26 px-4 sm:px-6 md:px-12 lg:px-16">

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

          <HoverBorder>
            <div className="bg-[#F4F4F4] dark:bg-[#141414] p-10 rounded-2xl">
              <h4 className="text-md text-black dark:text-white">Trainer Marketing</h4>
              <p className="text-md font-bold mt-2">2005-2009</p>
              <p className="text-gray-500 text-[17px] mt-4">
                A personal portfolio is a curated collection of an individual's
                professional work, showcasing their skills, experience & personal projects.
              </p>
            </div>
          </HoverBorder>

          <HoverBorder>
            <div className="bg-[#F4F4F4] dark:bg-[#141414] p-10 rounded-2xl">
              <h4 className="text-md">Assistant Director</h4>
              <p className="text-md font-bold mt-2">2010-2014</p>
              <p className="text-gray-500 text-[17px] mt-4">
                Each project here showcases my commitment to excellence and
                adaptability, tailored to meet each client's unique needs.
              </p>
            </div>
          </HoverBorder>

          <HoverBorder>
            <div className="bg-[#F4F4F4] dark:bg-[#141414] p-10 rounded-2xl">
              <h4 className="text-md">Design Assistant</h4>
              <p className="text-md font-bold mt-2">2008-2012</p>
              <p className="text-gray-500 text-[17px] mt-4">
                I've had the privilege of working with various clients, from startups
                to established companies, helping bring their visions to life.
              </p>
            </div>
          </HoverBorder>

          <HoverBorder>
            <div className="bg-[#F4F4F4] dark:bg-[#141414] p-10 rounded-2xl">
              <h4 className="text-md">Design Assistant</h4>
              <p className="text-md font-bold mt-2">2008-2012</p>
              <p className="text-gray-500 text-[17px] mt-4">
                Each project here showcases my commitment to excellence and
                adaptability, tailored to meet each client's needs.
              </p>
            </div>
          </HoverBorder>

        </div>
        {/* experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-20">

          <div className="rounded-2xl overflow-hidden">
            <img src={con} alt="" className="w-full h-auto object-cover" />
          </div>

          <div>

            <div className="flex items-center gap-3 lg:gap-8 mb-4 lg:mb-10">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold">
                  Experiences
                </h2>
              </div>

              <div className="hidden dark:block">
                <img src={line} alt="" className="max-w-full" />
              </div>
            </div>

            <div className="mb-10 md:mb-12">
              <p className="text-red-500 font-semibold text-base sm:text-lg">experience</p>

              <h4 className="font-semibold text-lg sm:text-xl mt-1">
                Fatima Asrafy
              </h4>

              <p className="text-sm sm:text-md mt-3">UI/UX Designer</p>

              <p className="text-[15px] mt-4 max-w-[400px] leading-[28px] sm:leading-[30px] text-gray-500">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum desi dolore eu fugiat nulla pariatu Duis aute irure
              </p>
            </div>

            <div>
              <p className="text-red-500 font-semibold text-base sm:text-lg">experience</p>

              <h4 className="font-semibold text-lg sm:text-xl mt-1">
                Fatima Asrafy
              </h4>

              <p className="text-sm sm:text-md mt-3">UI/UX Designer</p>

              <p className="text-[15px] mt-4 max-w-[400px] leading-[28px] sm:leading-[30px] text-gray-500">
                Interested in working together? Let's bring your ideas to life.
                Hit Contact me, and let's start building something.
              </p>
            </div>

          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-28 gap-0 p-0 m-0">

          <div className="flex justify-center items-center">
            <img src={one} alt="Brand 1" className="cursor-pointer border-t-2 border-l-2 border-r-2 sm:border-r-0 md:border-r-0 lg:border-r-0 border-[#e4dddd] p-10 sm:p-12 lg:p-14 w-full h-full" />
          </div>

          <div className="flex justify-center items-center">
            <img src={two} alt="Brand 2" className="cursor-pointer border-t-2 border-l-2 border-r-2 sm:border-r-0 md:border-r-2 lg:border-r-0 border-[#e4dddd] p-10 sm:p-12 lg:p-14 w-full h-full" />
          </div>

          <div className="flex justify-center items-center">
            <img src={three} alt="Brand 3" className="cursor-pointer border-t-2 border-l-2 border-r-2 md:border-r-0 lg:border-r-0 border-[#e4dddd] p-10 sm:p-12 lg:p-14 w-full h-full" />
          </div>

          <div className="flex justify-center items-center">
            <img src={four} alt="Brand 4" className="cursor-pointer border-t-2 border-l-2 border-r-2 border-[#e4dddd] p-10 sm:p-12 lg:p-14 w-full h-full" />
          </div>

          <div className="flex justify-center items-center">
            <img src={five} alt="Brand 5" className="cursor-pointer border-t-2 border-l-2 border-r-2 md:border-r-0  lg:border-r-0 lg:border-b-2 border-[#e4dddd] p-10 sm:p-12 lg:p-14 w-full h-full" />
          </div>

          <div className="flex justify-center items-center">
            <img src={six} alt="Brand 6" className="cursor-pointer border-t-2 border-l-2 border-r-2 lg:border-r-0 lg:border-b-2 border-[#e4dddd] p-10 sm:p-12 lg:p-14 w-full h-full" />
          </div>

          <div className="flex justify-center items-center">
            <img src={seven} alt="Brand 7" className="cursor-pointer border-t-2 border-l-2 border-r-2 md:border-r-0  lg:border-r-0  md:border-b-2 border-[#e4dddd] p-10 sm:p-12 lg:p-14 w-full h-full" />
          </div>

          <div className="flex justify-center items-center">
            <img src={eight} alt="Brand 8" className="cursor-pointer border-2 border-[#e4dddd] p-10 sm:p-12 lg:p-14 w-full h-full" />
          </div>

        </div>

      </motion.div>

    </div>
  );
};

export default Education;