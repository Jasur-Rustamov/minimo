import React from "react";

function Card() {
  return (
    <div className="container px-32 font-franc mt-20">
      <div className="w-full grid grid-cols-2 gap-20">
        <div className="w-[600px] flex flex-col gap-5">
          <img
            className="w-full"
            src="/images/lifestyle_card_1.png"
            alt="error"
          />
          <p className="text-amber-900 opacity-40">LIFESTYLE</p>
          <h3 className="text-3xl opacity-80">More then a music fextival</h3>
          <p className="text-gray-500 opacity-80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            porro accusantium dolorum obcaecati aperiam deserunt praesentium
            repellat aliquid unde sunt consectetur totam consequatur facilis,
            reiciendis, fuga nemo magni?
          </p>
        </div>
        <div className="w-[600px] flex flex-col gap-5">
          <img
            className="w-full"
            src="/images/lifestyle_card_2.png"
            alt="error"
          />
          <p className="text-amber-900 opacity-40">LIFESTYLE</p>
          <h3 className="text-3xl opacity-80">
            Life tastes better with coffee
          </h3>
          <p className="text-gray-500 opacity-80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            porro accusantium dolorum obcaecati aperiam deserunt praesentium
            repellat aliquid unde sunt consectetur totam consequatur facilis,
            reiciendis, fuga nemo magni?
          </p>
        </div>
      </div>

      <div className="flex justify-center mt-20">
        <button className="border-1 border-gray-500 text-gray-500 px-8 py-4 cursor-pointer">
          LOAD MORE
        </button>
      </div>
    </div>
  );
}

export default Card;
