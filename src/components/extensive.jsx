import React from "react";

function Extensive() {
  return (
    <div className="h-screen w-full py-10 flex justify-center items-center font-sans bg-white">
      <div className=" mx-auto grid md:grid-cols-2">
        <div className="flex flex-col px-6 md:px-20 justify-center items-center md:items-start">
          <p className="text-3xl py-8 md:leading-tight font-medium text-gray-800 md:text-5xl text-center md:text-left ">
            Leverage our dedicated customer network
          </p>
          <p className="text-sm pb-6 px-4 md:px-0 text-gray-800 font-normal md:text-2xl text-center md:text-left">
            Our global network of 400+ million active accounts buys more and
            buys more often with PayPal.
          </p>
          <div className="flex pt-7 align-center">
            <p className="text-md md:text-xl font-semibold text-[#1470b5]">
              Learn about our extensive network{" "}
              <svg
                className="w-6 h-6 inline-block"
                fill="#1470b5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  strokeWidth={2}
                  d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                />
              </svg>
            </p>
          </div>
        </div>
        <img
          src="https://plus.unsplash.com/premium_photo-1681822603960-0f4a6219df9e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-[300px] sm:w-[500px] md:w-[600px] md:h-[400px] mx-auto my-12 rounded-lg "
        />
      </div>
    </div>
  );
}

export default Extensive;
