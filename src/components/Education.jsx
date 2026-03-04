import con from "../assets/Container.png"
import one from "../assets/linear.png"
import two from "../assets/framer.png"
import three from "../assets/notion.png"
import four from "../assets/slack.png"
import five from "../assets/medium.png"
import six from "../assets/upwork.png"
import seven from "../assets/amazon.png"
import eight from "../assets/asana.png"

const Education = () => {
  return (
    <div className=" py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* ================= EDUCATION SECTION ================= */}
        <h2 className="text-2xl font-bold text-gray-800 mb-10">
          Education
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Card 1 */}
          <div className="bg-[#F4F4F4] p-10 rounded-2xl shadow-md border-b-2 border-r-2 border-red-400">
            <h4 className="text-sm text-gray-500">Trainer Marketing</h4>
            <p className="text-sm font-semibold mt-1">2005-2009</p>
            <p className="text-gray-500 text-sm mt-4">
              A personal portfolio is a curated collection of an individual's
              professional work, showcasing their skills, experience & personal projects.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#F4F4F4] p-10 rounded-2xl shadow-md border-b-2 border-r-2 border-red-400">
            <h4 className="text-sm text-gray-500">Assistant Director</h4>
            <p className="text-sm font-semibold mt-1">2010-2014</p>
            <p className="text-gray-500 text-sm mt-4">
              Each project here showcases my commitment to excellence and
              adaptability, tailored to meet each client's unique needs.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#F4F4F4] p-10 rounded-2xl shadow-md border-b-2 border-r-2 border-red-400">
            <h4 className="text-sm text-gray-500">Design Assistant</h4>
            <p className="text-sm font-semibold mt-1">2008-2012</p>
            <p className="text-gray-500 text-sm mt-4">
              I've had the privilege of working with various clients, from startups
              to established companies, helping bring their visions to life.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-[#F4F4F4] p-10 rounded-2xl shadow-md border-b-2 border-r-2 border-red-400">
            <h4 className="text-sm text-gray-500">Design Assistant</h4>
            <p className="text-sm font-semibold mt-1">2008-2012</p>
            <p className="text-gray-500 text-sm mt-4">
              Each project here showcases my commitment to excellence and
              adaptability, tailored to meet each client's needs.
            </p>
          </div>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10  mt-20">
          <div className="rounded-2xl overflow-hidden">
            <img
              src={con}
              alt=""
              className=""
            />
          </div>

          <div className="">
            <h2 className="text-2xl font-bold text-gray-800 mb-16">
              Experiences
            </h2>

            <div className="mb-20">
              <p className="text-red-500 text-xs uppercase">Experience</p>
              <h4 className="font-semibold text-lg mt-1">
                Fatima Asrafy
              </h4>
              <p className="text-sm text-gray-500">UI/UX Designer</p>
              <p className="text-gray-500 text-sm mt-3">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>

            <div>
              <p className="text-red-500 text-xs uppercase">Experience</p>
              <h4 className="font-semibold text-lg mt-1">
                Fatima Asrafy
              </h4>
              <p className="text-sm text-gray-500">UI/UX Designer</p>
              <p className="text-gray-500 text-sm mt-3">
                Interested in working together? Let's bring your ideas to life.
                Hit Contact me, and let's start building something.
              </p>
            </div>
          </div>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">

          <div className="flex justify-center items-center">
            <img src={one} alt="Brand 1" className="cursor-pointer" />
          </div>

          <div className="flex justify-center items-center">
            <img src={two} alt="Brand 2" className="cursor-pointer" />
          </div>

          <div className="flex justify-center items-center">
            <img src={three} alt="Brand 3" className="cursor-pointer" />
          </div>

          <div className="flex justify-center items-center">
            <img src={four} alt="Brand 4" className="cursor-pointer" />
          </div>

          <div className="flex justify-center items-center">
            <img src={five} alt="Brand 5" className="cursor-pointer" />
          </div>

          <div className="flex justify-center items-center">
            <img src={six} alt="Brand 6" className="cursor-pointer" />
          </div>

          <div className="flex justify-center items-center">
            <img src={seven} alt="Brand 7" className="cursor-pointer" />
          </div>

          <div className="flex justify-center items-center">
            <img src={eight} alt="Brand 8" className="cursor-pointer" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Education;