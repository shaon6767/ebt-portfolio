import logo from "../assets/logo.svg"
import { Mail, MapPin, Phone, Instagram, Linkedin, Twitter, Facebook } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="w-full bg-neutral-100 px-6 md:px-16 py-16">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-12">

        {/* Left Section */}
        <div className="space-y-10">
          <div className="">
            <img src={logo} alt="" />
          </div>

          <div className="">
            <h2 className="text-3xl md:text-4xl leading-snug mb-6">
            <span className="font-bold">Get Ready</span> To <br /> Create Great
          </h2>
          </div>

          <div className="flex items-center border-b border-gray-300 pb-2 max-w-sm">
            <input
              type="email"
              placeholder="Email Address"
              className="bg-transparent outline-none flex-1 text-sm"
            />
            <Mail size={18} />
          </div>
        </div>


        {/* Quick Links */}
        <div className="">
         <div className="">
             <h3 className="font-semibold text-lg mb-6">Quick Link</h3>
         </div>

         <div className="">
             <ul className="space-y-3 text-gray-600">
            <li className="cursor-pointer hover:text-black">About Me</li>
            <li className="cursor-pointer hover:text-black">Service</li>
            <li className="cursor-pointer hover:text-black">Contact Us</li>
            <li className="cursor-pointer hover:text-black">Blog Post</li>
            <li className="cursor-pointer hover:text-black">Pricing</li>
          </ul>
         </div>
        </div>


        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-6">Contact</h3>

          <div className="space-y-4 text-gray-600">

            <div className="flex items-center gap-3">
              <Mail size={18} />
              <p className="text-sm">nafiiz125@gmail.com</p>
            </div>

            <div className="flex items-center gap-3">
              <MapPin size={18} />
              <p className="text-sm">3891 Ranchview Dr. Richardson</p>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={18} />
              <p className="text-sm">01245789321</p>
            </div>

          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <div className="p-2 bg-neutral-200 rounded-full shadow cursor-pointer text-black">
              <Instagram size={16} />
            </div>

            <div className="p-2 bg-neutral-200 rounded-full shadow cursor-pointer">
              <Linkedin size={16} />
            </div>

            <div className="p-2 bg-neutral-200 rounded-full shadow cursor-pointer">
              <Twitter size={16} />
            </div>

            <div className="p-2 bg-neutral-200 rounded-full shadow cursor-pointer">
              <Facebook size={16} />
            </div>
          </div>
        </div>

      </div>


      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto mt-16 pt-6 border-t border-gray-300 flex flex-col md:flex-row justify-between text-sm text-gray-500 gap-4">
        <p>© InversWeb 2026 | All Rights Reserved</p>

        <div className="flex gap-4">
          <p className="cursor-pointer">Terms & Condition</p>
          <p className="cursor-pointer">Privacy Policy</p>
          <p className="cursor-pointer">Contact Us</p>
        </div>
      </div>

    </footer>
  )
}

export default Footer
