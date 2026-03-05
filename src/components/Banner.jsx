import { MoveRight, Instagram, Linkedin, Twitter, Facebook, MessageCircle } from 'lucide-react';
import ban from "../assets/banner.png"

const Banner = () => {
  return (
    <section className='dark:bg-gray-800 dark:text-white'>
      <div className='container'>
        <div className="grid grid-cols-5">
          <div className="col-span-1 space-y-4">
            <div className="mt-[200px]">
              <h1 className='text-2xl'>HELLOW I'M</h1>
              <h2 className='text-[70px] font-bold'>Brooklyn</h2>
              <h2 className='text-[70px] font-bold'>Simmons</h2>
            </div>
            <div className="">
              <button className='flex items-center gap-2 p-3 bg-yellow-500 rounded-[24px]'>View Portfolio <span><MoveRight /></span></button>
            </div>
          </div>
          <div className="col-span-3">
            <div className="flex justify-center">
              <img src={ban} alt="" className='' />
            </div>
          </div>
          <div className="col-span-1 mt-[200px] space-y-5">
            <div className="flex flex-col justify-end">
              <h3>About Me</h3>
              <p className='mt-4'>A personal <span className='text-red-600'>portfolio</span> is a collection of to
                your work, that is achievements, and a
                skills that <span className='text-red-600'>web design</span> highlights in your</p>
            </div>
            <div className="space-y-4">
              <p>Find me on</p>
              <div className="flex items-center gap-3">
                <Instagram size={34} className="p-2 bg-gray-200 rounded-full hover:text-white hover:bg-gray-400 transition-all cursor-pointer ease-in-out" />
                <Linkedin size={34} className="p-2 bg-gray-200 rounded-full hover:text-white hover:bg-gray-400 transition-all cursor-pointer ease-in-out" />
                <Twitter size={34} className="p-2 bg-gray-200 rounded-full hover:text-white hover:bg-gray-400 transition-all cursor-pointer ease-in-out" />
                <Facebook size={34} className="p-2 bg-gray-200 rounded-full hover:text-white hover:bg-gray-400 transition-all cursor-pointer ease-in-out" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed right-3 bottom-5">
        <MessageCircle size={36} className='text-red-600' />
      </div>
    </section>
  )
}

export default Banner