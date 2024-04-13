import React from "react";

function Support() {
  return (
    <div className="bg-[#f5f4f4] md:h-screen flex justify-center items-center p-6 md:px-40 md:py-10">
      <div className="grid md:grid-cols-2 grid-cols-1 w-full gap-6">
        <div className="bg-white md:px-10 p-5 items-start justify-between flex flex-col">
          <div>
            <img
              src="https://images.unsplash.com/photo-1599454100789-b211e369bd04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8MTYlM0E5fGVufDB8fDB8fHww"
              className="md:w-full w-[460px] py-4"
            />
            <p className="md:text-3xl text-2xl text-gray-800 font-semibold py-4">
              Contact our sales team
            </p>
            <p className="md:text-lg text-lg text-8ray-600 md:pb-28 pb-20">
              Learn how payments can be leveraged as a catalyst for growth.
            </p>
          </div>
          <div>
            <div className="flex py-2 align-left">
              <button
                type="button"
                className=" bg-[#0071ba] text-white px-8 py-4 rounded-full font-bold"
              >
                Contact Sales
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white md:px-10 p-5 items-start justify-between flex flex-col">
          <div>
            <img
              src="https://images.unsplash.com/photo-1558637845-c8b7ead71a3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8MTYlM0E5fGVufDB8fDB8fHww"
              className="md:w-full w-[460px] py-4"
            />
            <p className="md:text-3xl text-2xl text-gray-800 font-semibold py-4">
              Explore developer documentation
            </p>
            <p className="md:text-lg text-lg text-gray-800 md:pb-28 pb-20">
              See how our flexible and interoperable technology helps to
              simplify integration.
            </p>
          </div>
          <div>
            <div className="flex py-2 align-left">
              <button
                type="button"
                className=" bg-[#0071ba] text-white px-8 py-4 rounded-full font-bold"
              >
                Visit Developer Docs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;
