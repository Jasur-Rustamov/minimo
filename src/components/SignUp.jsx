import React from "react";

function SignUp() {
  return (
    <div className="font-franc bg-[#F0F0F0] w-full h-80 text-center flex items-center justify-center mt-32">
      <div>
        <h2 className="text-3xl">Sign up for our newsletter</h2>
        <div className="w-[360px] border-b flex justify-between px-1 text-gray-500 mt-20">
          <input type="text" placeholder="Enter a valid email address" className="w-80 outline-0" />
          <i class="fa-solid fa-paper-plane"></i>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
