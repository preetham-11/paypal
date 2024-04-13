import React from "react";

function Quote() {
  return (
    <div className="h-screen w-full py-10 flex justify-center items-center font-sans bg-[#032168]">
      <div className=" mx-auto grid md:grid-cols-2">
        <div className="flex flex-col px-6 md:px-20 justify-center items-start">
          <div className="justify-start p-2 text-white ">
            <svg
              className="w-10 h-10 inline-block"
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z" />
            </svg>
          </div>
          <div>
            <p className="text-base md:text-2xl text-white font-normal pt-8">
              The truth must be told. We are here because of PayPal. I am
              inspired by what PayPal is doing and we want to continue to grow
              with PayPal.
            </p>
          </div>
          <div className="flex pt-5 align-center">
            <p className="text-base md:text-2xl font-normal text-white">
              Vipin Sahu <br />
              Co-Founder
            </p>
          </div>
          <div className="flex pt-5 align-center">
            <p className="text-base md:text-2xl font-medium text-white">
              Webkul
            </p>
          </div>
        </div>

        <img
          src="https://images.unsplash.com/photo-1593626242406-e279431fb5be?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wJTIwa2V5Ym9hcmR8ZW58MHx8MHx8fDA%3D"
          className="w-[300px] sm:w-[500px] md:w-[600px] md:h-[400px] mx-auto my-12 rounded-lg "
        />
      </div>
    </div>
  );
}

export default Quote;
