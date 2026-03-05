import { ChevronRight } from "lucide-react";
import house from"../assets/house.svg"
import cal from"../assets/calender.svg"
import pen from"../assets/pen.svg"

const SkillsSection = () => {
  return (
    <section className="w-full bg-neutral-100 dark:bg-black py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm tracking-widest text-red-500 mb-4">MY SKILL</p>

        <h2 className="text-3xl md:text-5xl font-bold leading-tight flex flex-col mb-12">
          Elevated Designs Personalized <span>the best Experiences</span>
        </h2>

        <div className="flex flex-col gap-6">

          {/* Item 1 */}
          <div className="grid grid-cols-1 md:grid-cols-8 items-center gap-6 p-10 bg-neutral-200 hover:bg-red-500 shadow-lg hover:scale-105 transition-all ease-in-out duration-150 cursor-pointer">
              <div className="col-span-1">
                <img src={house} alt="" />
              </div>
            <div className="md:col-span-2 flex items-center gap-4">

              <div>
                <h3 className="font-bold text-[30px]">UI/Visual Design</h3>
                <p className="text-sm ">21 Done</p>
              </div>
            </div>

            <p className="md:col-span-3 flex text-sm md:text-base">
              My work is driven by the belief that thoughtful design and
              strategic planning can empower brands strategic planning can
              empower brands
            </p>

            <div className="md:col-span-2 flex md:justify-end">
              <button className="flex items-center gap-2 text-sm font-medium">
                READ MORE <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Item 2 */}
           <div className="grid grid-cols-1 md:grid-cols-8 items-center gap-6 p-10 bg-neutral-200 hover:bg-red-500 shadow-lg hover:scale-105 transition-all ease-in-out duration-150 cursor-pointer">
              <div className="col-span-1">
                <img src={cal} alt="" />
              </div>
            <div className="md:col-span-2 flex items-center gap-4">

              <div>
                <h3 className="font-bold text-[30px]">UI/Visual Design</h3>
                <p className="text-sm ">21 Done</p>
              </div>
            </div>

            <p className="md:col-span-3 flex text-sm md:text-base">
              My work is driven by the belief that thoughtful design and
              strategic planning can empower brands strategic planning can
              empower brands
            </p>

            <div className="md:col-span-2 flex md:justify-end">
              <button className="flex items-center gap-2 text-sm font-medium">
                READ MORE <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Item 3 */}
          <div className="grid grid-cols-1 md:grid-cols-8 items-center gap-6 p-10 bg-neutral-200 hover:bg-red-500 shadow-lg hover:scale-105 transition-all ease-in-out duration-150 cursor-pointer">
              <div className="col-span-1">
                <img src={pen} alt="" />
              </div>
            <div className="md:col-span-2 flex items-center gap-4">

              <div>
                <h3 className="font-bold text-[30px]">UI/Visual Design</h3>
                <p className="text-sm ">21 Done</p>
              </div>
            </div>

            <p className="md:col-span-3 flex text-sm md:text-base">
              My work is driven by the belief that thoughtful design and
              strategic planning can empower brands strategic planning can
              empower brands
            </p>

            <div className="md:col-span-2 flex md:justify-end">
              <button className="flex items-center gap-2 text-sm font-medium">
                READ MORE <ChevronRight size={16} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
