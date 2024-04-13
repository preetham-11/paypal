import React from "react";

function Reviews() {
  return (
    <div className="h-screen flex justify-center items-center w-full py-10 text-gray-800 font-sans bg-[#f5f6fb]">
      <div className=" mx-auto grid md:grid-cols-2 ">
        <div className="flex flex-col md:p-14 p-2 text-slate-800 ">
          <p className="text-2xl p-4 md:leading-snug font-semibold text-center md:text-left md:text-5xl md:p-10">
            PayPal is trusted by businesses and consumers around the world
          </p>
        </div>
        <div className="grid grid-cols-2 md:p-6">
          <div className="flex flex-col justify-center items-start p-6 border-b border-gray-300">
            <div className="text-3xl md:text-5xl font-semibold text-[#2e8363] pb-2">
              400+
            </div>
            <div className="text-xl text-slate-500 font-normal">
              million active customers¹
            </div>
          </div>
          <div className="flex flex-col justify-center items-start p-6 border-b border-gray-300">
            <div className="text-3xl md:text-5xl font-semibold text-[#2e8363] pb-2">
              200+
            </div>
            <div className="text-xl text-slate-500 font-normal">
              markets around the globe
            </div>
          </div>
          <div className="flex flex-col justify-center items-start p-6">
            <div className="text-3xl md:text-5xl font-semibold text-[#2e8363] pb-2">
              20+
            </div>
            <div className="text-xl text-slate-500 font-normal">
              years of experience
            </div>
          </div>
          <div className="flex flex-col justify-center items-start p-6">
            <div className="text-3xl md:text-5xl font-semibold text-[#2e8363] pb-2">
              30+
            </div>
            <div className="text-xl text-slate-500 font-normal">
              million merchants¹
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
