import React from "react";

function Footer() {
  return (
    <div className="container mx-auto px-4 py-8 text-gray-800 md:pt-16">
      <div className=" md:px-14 md:pb-10">
        <p className="py-10 md:py-5 font-light text-zinc-500">
          Nielsen Study, Commissioned by PayPal, July 2020 to September 2020 of
          15,144 US consumers to understand and measure the impact that PayPal
          has for US-based large enterprise merchants across different
          verticals.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:pb-5 md:px-14">
        <div className="col-span-1">
          <h2 className="text-[#072a74] text-xl font-bold border-b border-gray-300 mb-4">
            Small-to-Medium Business
          </h2>
          <ul className="space-y-2 text-gray-800 text-base font-semibold">
            <li>Introduction</li>
            <li>Getting Started</li>
            <li>All Solutions</li>
            <ul className="font-normal space-y-2">
              <li>Accept Payments</li>
              <li>Make Payments</li>
              <li>Manage Risk</li>
              <li>Accelerate Growth</li>
              <li>Streamline Operations</li>
            </ul>
          </ul>
        </div>
        <div className="col-span-1">
          <h2 className="text-[#072a74] text-xl font-bold border-b border-gray-300 mb-4">
            Enterprise
          </h2>
          <ul className="space-y-2 text-base font-semibold">
            <li>Introduction</li>
            <li>Marketplaces & Partners</li>
            <li>Platform & Solutions</li>
            <ul className="font-normal space-y-2">
              <li>Accept Payments</li>
              <li>Make Payments</li>
              <li>Manage Risk</li>
              <li>Accelerate Growth</li>
              <li>Streamline Operations</li>
            </ul>
          </ul>
        </div>
        <div className="col-span-1">
          <h2 className="text-[#072a74] text-xl font-bold border-b border-gray-300 mb-4">
            More
          </h2>
          <ul className="space-y-2 text-base font-semibold">
            <li>Nonprofits</li>
            <li>Pricing</li>
            <li>Resource Center</li>
          </ul>
        </div>
      </div>
      <div className="py-10 md:py-0 md:pt-12">
        <div>
          <img
            src="https://imgs.search.brave.com/9n9uf9B3cUEeXi2U937plrGrqqd0NrCz1vxcteEtHss/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODBiNTdmY2Q5OTk2/ZTI0YmM0M2M1MzAu/cG5n"
            className="max-w-28 md:max-w-36"
          />
        </div>
        <div className="flex md:flex-col gap-8 md:gap-0">
          <div className="flex-col gap-5 md:flex-row md:flex justify-between pt-4 md:pt-8 pb-6 md:border-b border-gray-300">
            <ul className="md:flex font-bold ">
              <li className="py-1 md:pr-3 text-[#031858]">Help</li>
              <li className="py-1 md:px-3 text-[#031858]">Contact</li>
              <li className="py-1 md:px-3 text-[#031858]">Fees</li>
              <li className="py-1 md:px-3 text-[#031858]">Security</li>
              <li className="py-1 md:px-3 text-[#031858]">Apps</li>
              <li className="py-1 md:px-3 text-[#031858]">Shop</li>
              <li className="py-1 md:px-3 text-[#031858]">Enterprise</li>
              <li className="py-1 md:px-3 text-[#031858]">Partners</li>
              <li className="py-1 md:px-3 text-[#031858]">Feedback</li>
            </ul>
            <div className="pt-2">
              <img
                src="https://imgs.search.brave.com/ldkgcgztYoPjCDJXkCCwTM3gJq92iNfC3tUJFRQCn4A/rs:fit:500:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9h/L2E0L0ZsYWdfb2Zf/dGhlX1VuaXRlZF9T/dGF0ZXMuc3Zn.svg"
                className="max-w-8 md:max-w-10"
              />
            </div>
          </div>
          <div className="flex-col px-4 md:px-0 md:flex-row md:flex justify-between pt-4 md:pt-8 pb-6">
            <ul className="md:flex font-bold">
              <li className="py-1 md:pr-3 text-[#031858]">About</li>
              <li className="py-1 md:px-3 text-[#031858]">Jobs</li>
              <li className="py-1 md:px-3 text-[#031858]">Public</li>
              <li className="py-1 md:px-3 text-[#031858]">Policy</li>
              <li className="py-1 md:px-3 text-[#031858]">Sitemap</li>
            </ul>
            <div>
              <ul className="font-bold md:flex-row md:flex flex-col-reverse">
                <li className="hidden md:block py-1 md:px-3 font-semibold text-zinc-500">
                  © 1999-2022
                </li>
                <li className="py-1 md:px-3 text-[#031858]">Accessibility</li>
                <li className="py-1 md:px-3 text-[#031858]">Privacy</li>
                <li className="py-1 md:px-3 text-[#031858]">Cookies</li>
                <li className="py-1 md:px-3 text-[#031858]">Legal</li>
                <li className="md:hidden py-1 md:px-3 font-semibold text-zinc-500">
                  © 1999-2022
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
