import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="font-franc container mx-auto mt-6 px-4 md:px-10">
      <div className="flex justify-between items-center">
        <div className="logo">
          <a href="#" className="text-4xl">
            <img src="/images/logo.svg" alt="logo" />
          </a>
        </div>

        <ul className="hidden md:flex text-primary gap-10 lg:gap-28">
          <li>
            <a href="#">LIFESTYLE</a>
          </li>
          <li>
            <a href="#">PHOTODIARY</a>
          </li>
          <li>
            <a href="#">MUSIC</a>
          </li>
          <li>
            <a href="#">TRAVEL</a>
          </li>
        </ul>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <ul className="md:hidden flex flex-col items-center text-primary gap-6 mt-4 bg-white shadow-lg p-6 rounded-lg">
          <li>
            <a href="#">LIFESTYLE</a>
          </li>
          <li>
            <a href="#">PHOTODIARY</a>
          </li>
          <li>
            <a href="#">MUSIC</a>
          </li>
          <li>
            <a href="#">TRAVEL</a>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
