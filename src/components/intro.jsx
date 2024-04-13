import React from "react";

function Intro() {
  return (
    <div className="h-[94vh] w-full py-10 font-sans text-gray-800 bg-[#032168]">
      <div className=" mx-auto grid md:grid-cols-2">
        <div className="flex flex-col px-6 md:px-20 justify-center items-center md:items-start">
          <p className="text-3xl py-8 md:leading-snug font-medium text-white md:text-5xl text-center md:text-left ">
            Capture the full potential of commerce
          </p>
          <p className="text-sm pb-6 md:leading-relaxed text-white font-normal md:text-2xl text-center md:text-left">
            Paypal helps businesses find active buyers, increase conversion
            across channels and scale into new markets.
          </p>
          <div className="flex md:pt-10 align-center">
            <button
              type="button"
              className=" bg-white ring-2 ring-[#032168] text-[#186aa3] px-8 py-3 rounded-full font-bold"
            >
              Contact Sales
            </button>
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1648091854674-59abf26bbf39?q=80&w=1900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-[300px] sm:w-[500px] md:w-[600px] md:h-[400px] mx-auto my-12 rounded-lg "
        />
      </div>
    </div>
  );
}

export default Intro;
