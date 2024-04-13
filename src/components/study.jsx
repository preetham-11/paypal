import React from "react";

function Study() {
  return (
    <div className="container justify-center items-center text-gray-800 flex flex-col mx-auto px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="md:p-14 border-r border-gray-200  justify-center items-center">
          <div className="md:p-6">
            <h2 className="text-xl md:text-3xl pb-2 font-semibold mb-4">
              Case study: Payout options help reassure sellers as they join
              Walmart's Marketplace
            </h2>
            <p className="mb-4 text-lg font-medium text-gray-800">
              America's largest retailer partnered with PayPal to give its
              curated community of sellers the payout options they needed and
              grew their network by 130% in the process.
            </p>
            <a href="#" className="text-lg font-semibold text-[#1470b5]">
              Read the case study{" "}
              <svg
                className="w-6 h-6 inline-block "
                fill="#1470b5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  strokeWidth={2}
                  d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                />
              </svg>
            </a>
          </div>
          <hr className="my-8" />
          <div className="md:p-6">
            <h3 className="text-lg font-semibold mb-4">
              Ebook: Everything you need to know about payment processing
              solutions
            </h3>
            <p className="mb-4 text-lg font-normal text-gray-800">
              Your customers expect a seamless and secure digital purchasing
              experience. Learn how your business can provide it.
            </p>
            <a href="#" className="text-lg font-semibold text-[#1470b5]">
              Read the ebook{" "}
              <svg
                className="w-6 h-6 inline-block "
                fill="#1470b5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  strokeWidth={2}
                  d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-between md:w-4/5 items-start md:ml-10 md:px-20 md:p-8">
          <img
            src="https://images.unsplash.com/photo-1712020039487-a287c5af74df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fHBsYW5lJTIwb24lMjBydW53YXl8ZW58MHx8MHx8fDA%3D"
            alt="Placeholder"
            className="sm:w-[500px] w-full rounded-lg"
          />
          <h3 className="font-bold text-left text-xl py-4">
            News: United introduces QR codes to inflight payment options
          </h3>
          <p className="text-lg text-gray-800 font-medium mb-4">
            New partnership enables United customers to buy snacks, drinks, and
            other inflight purchases by using their PayPal app.
          </p>
          <a href="#" className="text-lg font-semibold text-[#1470b5]">
            Read the article{" "}
            <svg
              className="w-6 h-6 inline-block "
              fill="#1470b5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                strokeWidth={2}
                d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="text-center md:w-11/12 py-4 md:flex flex-col justify-center items-center bg-gray-200 mt-6">
        <p className="md:px-4 p-2 text-gray-700 text-lg">
          Looking for an out-of-the-box commerce solution?
        </p>
        <a href="#" className="text-lg font-semibold text-[#1470b5]">
          See how you can get started today{" "}
          <svg
            className="w-6 h-6 md:w-8 md:h-8 inline-block "
            fill="#1470b5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              strokeWidth={2}
              d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Study;
