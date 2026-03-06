import { CircleCheck } from 'lucide-react';

const Plans = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16">
      <div className="max-w-7xl w-full">
        
        <div className="text-center mb-12">
          <p className="text-red-500 uppercase tracking-widest text-sm font-semibold">
            My Price Plan
          </p>
          <h2 className="text-3xl md:text-4xl font-bold  mt-3 leading-snug">
            Enhancing Collaboration <br className="hidden sm:block" />
            between Remote
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-neutral-100 dark:bg-black dark:border-1 dark:border-[gray] rounded-2xl shadow-md border-r-2 border-b-2 border-[white] hover:border-red-600 dark:hover:border-gray-200  p-8 flex flex-col justify-between hover:shadow-xl hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer">
            <div>
              <h3 className="text-lg font-semibold  mb-4">
                Starter
              </h3>
              <h1 className="text-4xl font-bold ">
                $ 5.00
              </h1>
              <p className=" mb-6">Per Month</p>

              <ul className="space-y-3 ">
                <li className='flex items-center gap-1'><span><CircleCheck size={18} className='text-red-600'/></span> 5 Social Media Account</li>
                <li className='flex items-center gap-1'><span><CircleCheck size={18} className='text-red-600'/></span> Free Platform Access</li>
                <li className='flex items-center gap-1'><span><CircleCheck size={18} className='text-red-600'/></span>  24/7 Customer Support</li>
              </ul>
            </div>

            <button className="mt-8 border border-gray-300 rounded-full py-2 px-6  hover:bg-red-500 hover:text-white transition duration-300">
              Get Started →
            </button>
          </div>

          <div className="bg-neutral-100 dark:bg-black dark:border-1 dark:border-[gray] rounded-2xl shadow-md border-r-2 border-b-2 border-[white] hover:border-red-600 dark:hover:border-gray-200  p-8 flex flex-col justify-between hover:shadow-xl hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer">
            <div>
              <h3 className="text-lg font-semibold  mb-4">
                Basic
              </h3>
              <h1 className="text-4xl font-bold ">
                $ 230.00
              </h1>
              <p className=" mb-6">Per Month</p>

              <ul className="space-y-3 ">
                <li className='flex items-center gap-1'><span><CircleCheck size={18} className='text-red-600'/></span>  5 Social Media Account</li>
                <li className='flex items-center gap-1'><span><CircleCheck size={18} className='text-red-600'/></span>  Free Platform Access</li>
                <li className='flex items-center gap-1'><span><CircleCheck size={18} className='text-red-600'/></span>  Marketing Platform</li>
                <li className='flex items-center gap-1'><span><CircleCheck size={18} className='text-red-600'/></span>  24/7 Customer Support</li>
                <li className='flex items-center gap-1'><span><CircleCheck size={18} className='text-red-600'/></span>  Lifetime Support</li>
              </ul>
            </div>

            <button className="mt-8 border border-gray-300 rounded-full py-2 px-6  hover:bg-red-500 hover:text-white transition duration-300">
              Get Started →
            </button>
          </div>

          <div className="bg-neutral-100 dark:bg-black dark:border-1 dark:border-[gray] rounded-2xl shadow-md border-r-2 border-b-2 border-[white] hover:border-red-600 dark:hover:border-gray-200  p-8 flex flex-col justify-between hover:shadow-xl hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer">
            <div>
              <h3 className="text-lg font-semibold  mb-4">
                Premium
              </h3>
              <h1 className="text-4xl font-bold ">
                $ 45.00
              </h1>
              <p className=" mb-6">Per Month</p>

              <ul className="space-y-3 ">
                <li className='flex items-center gap-1'><span><CircleCheck size={18} className='text-red-600'/></span>  5 Social Media Account</li>
                <li className='flex items-center gap-1'><span><CircleCheck size={18} className='text-red-600'/></span>  Free Platform Access</li>
                <li className='flex items-center gap-1'><span><CircleCheck size={18} className='text-red-600'/></span>  24/7 Customer Support</li>
              </ul>
            </div>

            <button className="mt-8 border border-gray-300 rounded-full py-2 px-6  hover:bg-red-500 hover:text-white transition duration-300">
              Get Started →
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Plans;