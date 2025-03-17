import React from "react";

function Footer() {
  return (
    <div className="container bg-[#F0F0F0] w-full mt-20 font-franc">
      <div className="px-20 py-10 flex justify-between items-center">
        <div className="flex gap-4">
          <p>Terms and conditions</p>
          <p>Privacy</p>
        </div>
        <div className="flex gap-6">
          <p>Follow</p>
          <a href="#">
            <i class="fa-brands fa-facebook-f"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
