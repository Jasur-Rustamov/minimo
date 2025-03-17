import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";

function Footer() {
  return (
    <div className="bg-[#F0F0F0] w-full mt-20 font-franc">
      <div className="container px-4 md:px-10 lg:px-20 py-10 flex flex-col md:flex-row justify-between items-center">
        <div className="flex gap-4 text-gray-700 text-sm md:text-base">
          <p className="cursor-pointer hover:underline">Terms and conditions</p>
          <p className="cursor-pointer hover:underline">Privacy</p>
        </div>
        <div className="flex gap-4 items-center mt-4 md:mt-0 text-gray-700">
          <p>Follow</p>
          <a href="#" className="hover:text-blue-600">
            <Facebook size={20} />
          </a>
          <a href="#" className="hover:text-blue-400">
            <Twitter size={20} />
          </a>
          <a href="#" className="hover:text-pink-600">
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
