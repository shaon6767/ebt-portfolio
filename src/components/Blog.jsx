import test from "../assets/testimonial.svg"
import one from "../assets/blogone.png"
import two from "../assets/blgone.png"
import three from "../assets/bloftwo.png"
import { ChevronRight } from 'lucide-react';

const Blog = () => {
  return (
    <div className="w-full bg-neutral-100 dark:bg-black py-16 px-6 md:px-16">

      <div className="max-w-7xl mx-auto text-center">
        <p className="text-xs tracking-widest text-red-500 mb-3">OUR TESTIMONIAL</p>

        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Enhancing Collaboration <br className="hidden md:block"/> between Remote
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Card 1 */}
          <div className="bg-neutral-200 dark:bg-[#141414] p-8 rounded-2xl shadow-sm border-r-2 border-red-500 dark:border-none  text-left space-y-12 hover:scale-105 duration-150 ease-in-out transition-all">
           <div className="">
            <img src={test} alt="" />
           </div>

           <div className="">
             <p className=" mb-6">
              A personal portfolio is a curated collection of an individual's
              professional work, showcasing their skills. A personal portfolio
              is a curated collection of an individual's professional work
              showcasing their skills.
            </p>
           </div>

            <div>
              <p className="font-semibold">Cameron Williamson</p>
              <p className="text-sm ">UX/UI Designer</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-neutral-200 dark:bg-[#141414] p-8 rounded-2xl shadow-sm border-r-2 border-red-500 dark:border-none text-left space-y-12 hover:scale-105 duration-150 ease-in-out transition-all">
            <div className="">
            <img src={test} alt="" />
           </div>

           <div className="">
             <p className=" mb-6">
              A personal portfolio is a curated collection of an individual's
              professional work, showcasing their skills. A personal portfolio
              is a curated collection of an individual's professional work
              showcasing their skills.
            </p>
           </div>

            <div>
              <p className="font-semibold">Leslie Alexander</p>
              <p className="text-sm ">UX/UI Designer</p>
            </div>
          </div>

        </div>
      </div>


      {/* BLOG SECTION */}
      <div className="max-w-7xl mx-auto mt-20 text-center">

        <p className="text-xs tracking-widest text-red-500 mb-3">BLOG AND NEWS</p>

        <h2 className="text-3xl md:text-4xl dark:text-white font-bold mb-12">
          Elevating Personal Branding the <br className="hidden md:block"/> through Powerful Portfolios
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Blog Card 1 */}
          <div className="bg-white dark:bg-[#141414]  p-2 rounded-2xl shadow-sm overflow-hidden text-left">

            <img
              src={one}
              alt=""
              className=""
            />

            <div className="p-5">
              <p className="font-semibold mb-3">
                Let's bring your ideas to life! Contact me, and let's
              </p>

              <p className="text-sm flex items-center text-gray-500 cursor-pointer">
                READ MORE <span><ChevronRight/></span>
              </p>
            </div>

          </div>


          {/* Blog Card 2 */}
          <div className="bg-white dark:bg-[#141414]  p-2 rounded-2xl shadow-sm overflow-hidden text-left">

            <img
              src={three}
              alt=""
              className=""
            />

            <div className="p-5">
              <p className="font-semibold mb-3">
                Inspiring the World, One Project at a Time for the
              </p>

              <p className="text-sm flex items-center text-gray-500 cursor-pointer">
                READ MORE <span><ChevronRight/></span>
              </p>
            </div>

          </div>


          <div className="bg-white dark:bg-[#141414] p-2 rounded-2xl shadow-sm overflow-hidden text-left">

            <img
              src={two}
              alt=""
              className=""
            />

            <div className="p-5">
              <p className="font-semibold mb-3">
                Each one showcases my approach and dedication
              </p>

              <p className="text-sm flex items-center text-gray-500 cursor-pointer">
                READ MORE <span><ChevronRight/></span>
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Blog
