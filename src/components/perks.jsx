import React from "react";

function Perks() {
  return (
    <div className="h-screen w-full py-10 flex justify-center items-center font-sans bg-[#2b2b2a]">
      <div className=" mx-auto grid md:grid-cols-2">
        <img
          src="https://plus.unsplash.com/premium_photo-1681748777410-8439a0b41b22?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODl8fHBheW1lbnR8ZW58MHx8MHx8fDA%3D"
          className="w-[300px] sm:w-[500px] md:w-[600px] md:h-[400px] mx-auto my-12 rounded-lg "
        />
        <div className="flex flex-col px-6 md:px-20 justify-center items-center md:items-start">
          <p className="text-3xl py-8 md:leading-tight font-semibold text-white md:text-5xl text-center md:text-left ">
            Harness our powerful <br /> platform
          </p>
          <p className="text-sm pb-6 text-white font-normal md:text-2xl text-center md:text-left">
            Accelerate growth and easily scale with our flexible features and
            tools that can be customized for your exact use cases.
          </p>
          <div className="flex pt-7 align-center">
            <p className="text-md md:text-xl font-semibold text-[#1470b5]">
              Learn about our platform{" "}
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
      </div>
    </div>
  );
}

export default Perks;
