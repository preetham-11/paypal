import React from "react";

function Attributes() {
  return (
    <div className="bg-white md:flex justify-center text-gray-800 items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl my-10 mx-auto">
        <div>
          <h2 className="text-2xl md:text-4xl md:mb-24 font-semibold text-gray-900 text-center mb-8">
            Our connections, innovation, and intelligence make PayPal your
            strategic partner
          </h2>
        </div>
        <div className="grid grid-cols-1 md:pb-10 sm:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-lg shadow-md p-6 flex flex-col items-center">
            <div className="flex items-center pb-2 justify-center mb-4">
              <img
                className="h-24 w-24 rounded-md"
                src="https://images.unsplash.com/photo-1520564816385-4f9d711941aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2t5JTIwaW1hZ2VzfGVufDB8fDB8fHww"
              />
            </div>
            <h3 className="text-2xl md:text-4xl md:py-2 font-medium text-gray-900 mb-2">
              Connected
            </h3>
            <p className="text-gray-800 md:text-xl md:py-3 font-semibold text-center">
              PayPal is a single point of entry to payments expertise, tools,
              technology, and data that can help you compete and win.
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg shadow-md p-6 flex flex-col items-center">
            <div className="flex items-center pb-2 justify-center mb-4">
              <img
                className="h-24 w-24 rounded-md"
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlfGVufDB8fDB8fHww"
              />
            </div>
            <h3 className="text-2xl md:text-4xl md:py-2 font-medium text-gray-900 mb-2">
              Innovative
            </h3>
            <p className="text-gray-800 md:text-xl md:py-3 font-semibold text-center">
              Stay agile, ahead of trends, and help safeguard against economic
              uncertainty with modular solutions that are easy to
              operationalize.
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg shadow-md p-6 flex flex-col items-center">
            <div className="flex items-center pb-2 justify-center mb-4">
              <img
                className="h-24 w-24 rounded-md"
                src="https://plus.unsplash.com/premium_photo-1673697239936-c2599b0b0498?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2t5JTIwaW1hZ2VzfGVufDB8fDB8fHww"
              />
            </div>
            <h3 className="text-2xl md:text-4xl md:py-2 font-medium text-gray-900 mb-2">
              Intelligent
            </h3>
            <p className="text-gray-800 md:text-xl md:py-3 font-semibold text-center">
              With one of the world's largest data sets, we help you understand
              customer behaviors, detect fraud, and capture more revenue across
              channels, devices, and markets.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Attributes;
