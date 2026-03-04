import logo from "../assets/logo.svg"
import { Instagram, Linkedin, Twitter, Facebook, Menu  } from 'lucide-react';
const Navbar = () => {
  return (
   <section className="py-4 bg-[#F4F4F4]">
     <div className='container'>
       <div className="grid grid-cols-5 items-center">
        <div className="col-span-1">
         <img src={logo} alt="" />
        </div>
        <div className="col-span-3">
        <ul className="flex items-center gap-8 justify-center">
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">About</a>
            </li>
            <li>
                <a href="#">Services</a>
            </li>
            <li>
                <a href="#">Blog</a>
            </li>
            <li>
                <a href="#">Project</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
        </ul>
        </div>
        <div className="col-span-1">
         <div className="flex items-center gap-5 justify-end">
           <Instagram size={34} className="p-2 bg-gray-200 rounded-full hover:text-white hover:bg-red-500 transition-all cursor-pointer ease-in-out"/>
           <Linkedin size={34} className="p-2 bg-gray-200 rounded-full hover:text-white hover:bg-red-500 transition-all cursor-pointer ease-in-out"/>
           <Twitter size={34} className="p-2 bg-gray-200 rounded-full hover:text-white hover:bg-red-500 transition-all cursor-pointer ease-in-out"/>
           <Facebook size={34} className="p-2 bg-gray-200 rounded-full hover:text-white hover:bg-red-500 transition-all cursor-pointer ease-in-out"/>
           <Menu size={34} className="p-2 bg-gray-200 rounded-full hover:text-white hover:bg-red-500 transition-all cursor-pointer ease-in-out"/>
         </div>
        </div>
       </div>
    </div>
   </section>
  )
}

export default Navbar