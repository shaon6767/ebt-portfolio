import { motion } from "framer-motion";
import CountUp from "react-countup";
import HoverBorder from "./HoverBorder";

const Projects = () => {
  return (
    <section className="w-full bg-white dark:bg-black py-16 px-4 sm:px-6 md:px-12 lg:px-16">

      <motion.div
        className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >

        <div className="bg-gray-100 dark:bg-[radial-gradient(circle_at_110%_120%,_#ff4d4d_0%,_#b91c1c_20%,_#1a0a0a_45%,_#000000_65%)] rounded-3xl px-6 sm:px-10 md:px-12 py-8">

          <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10">

            <div>
              <span className="text-[80px] sm:text-[120px] md:text-[160px] lg:text-[180px] font-bold text-red-500 leading-none">
                <CountUp end={25} duration={1.8} enableScrollSpy scrollSpyOnce />
              </span>
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight dark:text-white">
                Years Of <br /> Experience
              </h2>
            </div>

          </div>

          <p className="mt-6 max-w-[490px] text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
            Business consulting consultants provide expert advice and guida the
            a businesses to help theme their performance efficiency
          </p>

        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          <HoverBorder>
            <div className="bg-gray-100 dark:bg-[#141414] rounded-2xl p-6 md:p-9 transition-all ease-in-out duration-200">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                <CountUp end={20} duration={1.8} enableScrollSpy scrollSpyOnce />K+
              </h2>
              <p className="mt-2 text-gray-600 text-sm md:text-base dark:text-white">
                Our Project Complete
              </p>
            </div>
          </HoverBorder>

          <HoverBorder>
            <div className="bg-gray-100 dark:bg-[#141414] rounded-2xl p-6 md:p-9 transition-all ease-in-out duration-200">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                <CountUp end={10} duration={1.8} enableScrollSpy scrollSpyOnce />K+
              </h2>
              <p className="mt-2 text-gray-600 text-sm md:text-base dark:text-white">
                Our Natural Products
              </p>
            </div>
          </HoverBorder>

          <HoverBorder>
            <div className="bg-gray-100 dark:bg-[#141414] rounded-2xl p-6 md:p-9 transition-all ease-in-out duration-200">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                <CountUp end={200} duration={1.8} enableScrollSpy scrollSpyOnce />+
              </h2>
              <p className="mt-2 text-gray-600 text-sm md:text-base dark:text-white">
                Clients Reviews
              </p>
            </div>
          </HoverBorder>

          <HoverBorder>
            <div className="bg-gray-100 dark:bg-[#141414] rounded-2xl p-6 md:p-9 transition-all ease-in-out duration-200">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                <CountUp
                  end={1000}
                  duration={1.8}
                  separator=","
                  enableScrollSpy
                  scrollSpyOnce
                />
                +
              </h2>
              <p className="mt-2 text-gray-600 text-sm md:text-base dark:text-white">
                Our Satisfied Clients
              </p>
            </div>
          </HoverBorder>

        </div>

      </motion.div>

    </section>
  );
};

export default Projects;