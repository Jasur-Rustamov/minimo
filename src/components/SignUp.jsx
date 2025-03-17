import React from "react";
import { Send } from "lucide-react";

function SignUp() {
  return (
    <div className="font-franc bg-[#F0F0F0] w-full py-16 text-center flex items-center justify-center mt-32 px-4">
      <div className="w-full max-w-md">
        <h2 className="text-2xl md:text-3xl">Sign up for our newsletter</h2>
        <div className="w-full border-b flex items-center justify-between px-2 text-gray-500 mt-10">
          <input
            type="email"
            placeholder="Enter a valid email address"
            className="w-full bg-transparent outline-none py-2"
          />
          <Send className="text-gray-500 cursor-pointer" size={20} />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
