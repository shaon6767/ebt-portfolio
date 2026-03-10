import { motion } from "framer-motion";
import man from "../assets/Margin.png";

const Service = () => {
  return (
    <section className="w-full bg-white dark:bg-black py-14 sm:py-16 lg:py-20 px-4 sm:px-6 md:px-12 lg:px-16 overflow-hidden">
      
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >

        <div className="text-center max-w-3xl mx-auto">
          <p className="text-red-500 tracking-widest uppercase text-xs sm:text-sm font-semibold">
            Latest Service
          </p>

          <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
            Inspiring The World One Project
          </h2>

          <p className="text-gray-500 mt-4 max-w-[600px] mx-auto">
            Business consulting consultants provide expert advice and guide
            businesses to help them improve their performance, efficiency,
            and organizations.
          </p>
        </div>

        <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          <div className="space-y-6 sm:space-y-8">

            <div className="bg-gray-100 dark:bg-black rounded-2xl p-6 sm:p-8 border-b-2 border-r-2 border-red-500 hover:scale-[1.03] shadow-lg transition-all duration-200">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                01. A Portfolio of Creativity
              </h3>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 leading-relaxed dark:text-white">
                Business consulting consultants provide expert advice and guide
                businesses to help them improve their performance efficiency.
              </p>
            </div>

            <div className="bg-gray-100 dark:bg-black rounded-2xl p-6 sm:p-8 border-b-2 border-r-2 border-red-500 hover:scale-[1.03] shadow-lg transition-all duration-200">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                02. My Portfolio of Innovation
              </h3>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 leading-relaxed dark:text-white">
                My work is driven by the belief that thoughtful design and
                strategic planning can empower brands and transform businesses.
              </p>
            </div>

            <div className="bg-gray-100 dark:bg-black rounded-2xl p-6 sm:p-8 border-b-2 border-r-2 border-red-500 hover:scale-[1.03] shadow-lg transition-all duration-200">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                03. A Showcase of My Projects
              </h3>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 leading-relaxed dark:text-white">
                In this portfolio, you’ll find a curated selection of projects
                that highlight my skills in key areas such as responsive web design.
              </p>
            </div>

          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src={man}
              alt="service illustration"
              className="w-[80%] sm:w-[70%] md:w-[60%] lg:w-full max-w-md lg:max-w-none h-auto object-contain"
            />
          </div>

        </div>

      </motion.div>

    </section>
  );
};

export default Service;