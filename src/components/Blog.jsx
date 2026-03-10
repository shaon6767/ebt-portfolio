import test from "../assets/testimonial.svg";
import one from "../assets/blogone.png";
import two from "../assets/blgone.png";
import three from "../assets/bloftwo.png";
import { ChevronRight } from "lucide-react";

import { motion } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const Blog = () => {
  return (
    <div className="w-full bg-neutral-100 dark:bg-black py-16 px-6 md:px-16">

      {/* TESTIMONIAL */}
      <motion.div
        className="max-w-7xl mx-auto text-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >

        <p className="text-xs tracking-widest text-red-500 mb-3">
          OUR TESTIMONIAL
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Enhancing Collaboration <br className="hidden md:block" /> between Remote
        </h2>

        {/* MOBILE GRID */}
        <div className="grid md:hidden grid-cols-1 gap-8">

          <div className="bg-neutral-200 dark:bg-[#141414] p-8 rounded-2xl shadow-sm border-r-2 border-red-500 text-left space-y-12">
            <img src={test} alt="" />

            <p>
              A personal portfolio is a curated collection of an individual's
              professional work, showcasing their skills.
            </p>

            <div>
              <p className="font-semibold">Cameron Williamson</p>
              <p className="text-sm">UX/UI Designer</p>
            </div>
          </div>


          <div className="bg-neutral-200 dark:bg-[#141414] p-8 rounded-2xl shadow-sm border-r-2 border-red-500 text-left space-y-12">
            <img src={test} alt="" />

            <p>
              A personal portfolio is a curated collection of an individual's
              professional work, showcasing their skills.
            </p>

            <div>
              <p className="font-semibold">Leslie Alexander</p>
              <p className="text-sm">UX/UI Designer</p>
            </div>
          </div>

        </div>


        {/* DESKTOP SLIDER */}
        <div className="hidden md:block">

          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false
            }}
          >

            {/* Slide 1 */}
            <SwiperSlide>
              <div className="bg-neutral-200 dark:bg-[#141414] p-8 rounded-2xl shadow-sm border-r-2 border-red-500 text-left space-y-12">

                <img src={test} alt="" />

                <p className="leading-[30px] w-[420px]">
                  A personal portfolio is a curated collection of an individual's
                  professional work, showcasing their skilA personal portfolio is a
                  curated collection of an individual's professional work,
                  showcasing their skills,
                </p>

                <div>
                  <p className="font-semibold mb-2">Cameron Williamson</p>
                  <p className="text-sm">UX/UI Designer</p>
                </div>

              </div>
            </SwiperSlide>


            {/* Slide 2 */}
            <SwiperSlide>
              <div className="bg-neutral-200 dark:bg-[#141414] p-8 rounded-2xl shadow-sm border-r-2 border-red-500 text-left space-y-12">

                <img src={test} alt="" />

                <p className="leading-[30px] w-[420px]">
                  A personal portfolio is a curated collection of an individual's
                  professional work, showcasing their skilA personal portfolio is a
                  curated collection of an individual's professional work,
                  showcasing their skills,
                </p>

                <div>
                  <p className="font-semibold mb-2">Leslie Alexander</p>
                  <p className="text-sm">UX/UI Designer</p>
                </div>

              </div>
            </SwiperSlide>


            {/* DUPLICATES so slider can move */}
            <SwiperSlide>
              <div className="bg-neutral-200 dark:bg-[#141414] p-8 rounded-2xl shadow-sm border-r-2 border-red-500 text-left space-y-12">

                <img src={test} alt="" />

                <p className="leading-[30px] w-[420px]">
                  A personal portfolio is a curated collection of an individual's
                  professional work, showcasing their skilA personal portfolio is a
                  curated collection of an individual's professional work,
                  showcasing their skills,
                </p>

                <div>
                  <p className="font-semibold mb-2">Cameron Williamson</p>
                  <p className="text-sm">UX/UI Designer</p>
                </div>

              </div>
            </SwiperSlide>


            <SwiperSlide>
              <div className="bg-neutral-200 dark:bg-[#141414] p-8 rounded-2xl shadow-sm border-r-2 border-red-500 text-left space-y-12">

                <img src={test} alt="" />

                <p className="leading-[30px] w-[420px]">
                  A personal portfolio is a curated collection of an individual's
                  professional work, showcasing their skilA personal portfolio is a
                  curated collection of an individual's professional work,
                  showcasing their skills,
                </p>

                <div>
                  <p className="font-semibold mb-2">Leslie Alexander</p>
                  <p className="text-sm">UX/UI Designer</p>
                </div>

              </div>
            </SwiperSlide>

          </Swiper>

        </div>

      </motion.div>


      {/* BLOG SECTION */}
      <motion.div
        className="max-w-7xl mx-auto mt-20 text-center"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .6 }}
        viewport={{ once: true }}
      >

        <p className="text-xs tracking-widest text-red-500 mb-3">
          BLOG AND NEWS
        </p>

        <h2 className="text-3xl md:text-4xl dark:text-white font-bold mb-12">
          Elevating Personal Branding the <br className="hidden md:block" /> through Powerful Portfolios
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-[#141414] p-2 rounded-2xl shadow-sm overflow-hidden text-left"
          >

            <img src={one} alt="" />

            <div className="p-5">
              <p className="font-bold mb-3 w-[280px] leading-7">
                Let's bring your ideas to life! Contact me, and let's
              </p>

              <p className="text-xs flex items-center text-gray-500 gap-1 cursor-pointer">
                READ MORE <ChevronRight size={16} />
              </p>
            </div>

          </motion.div>


          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-[#141414] p-2 rounded-2xl shadow-sm overflow-hidden text-left"
          >

            <img src={three} alt="" />

            <div className="p-5">
              <p className="font-bold mb-3 w-[275px] leading-7">
                Inspiring the World, One Project at a Time for the
              </p>

              <p className="text-xs flex items-center text-gray-500 gap-1 cursor-pointer">
                READ MORE <ChevronRight size={16} />
              </p>
            </div>

          </motion.div>


          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-[#141414] p-2 rounded-2xl shadow-sm overflow-hidden text-left"
          >

            <img src={two} alt="" />

            <div className="p-5">
              <p className="font-bold mb-3 w-[275px] leading-7">
                Each one showcases my approach and dedication
              </p>

              <p className="text-xs flex items-center text-gray-500 gap-1 cursor-pointer">
                READ MORE <ChevronRight size={16} />
              </p>
            </div>

          </motion.div>

        </div>

      </motion.div>

    </div>
  );
};

export default Blog;