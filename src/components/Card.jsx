import React from "react";

function Card() {
  return (
    <div className="container px-4 md:px-10 lg:px-32 font-franc">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
        {[
          {
            img: "/images/lifestyle_card_1.png",
            title: "More than a music festival",
          },
          {
            img: "/images/lifestyle_card_2.png",
            title: "Life tastes better with coffee",
          },
          {
            img: "/images/lifestyle_card_3.png",
            title: "American dream",
          },
          {
            img: "/images/lifestyle_card_4.png",
            title: "A day exploring the Alps",
          },
        ].map((card, index) => (
          <div key={index} className="w-full flex flex-col gap-5">
            <img className="w-full rounded-lg" src={card.img} alt="error" />
            <p className="text-amber-900 opacity-40">LIFESTYLE</p>
            <h3 className="text-2xl md:text-3xl opacity-80">{card.title}</h3>
            <p className="text-gray-500 opacity-80">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto porro accusantium dolorum obcaecati aperiam deserunt
              praesentium repellat aliquid unde sunt consectetur totam
              consequatur facilis, reiciendis, fuga nemo magni?
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
