import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import { BiBell, BiMessage } from "react-icons/bi";

function DashboardHeader() {
  return (
    <div className="w-full">
      <span>Total Revenue</span>
      <div className="flex items-center justify-between gap-5">
        <div
            className="flex flex-col md:flex-row md:items-end md:gap-2">
          <span className="text-sm md:text-2xl">$45,434.00 </span>
          <span className="text-[11px] md:text-sm">
            <span className="text-red-400">-1,2954</span>
            <span className="text-green-400">+2,2954</span>
          </span>
        </div>
        <div
          className="flex items-center h-10  rounded-lg 
            bg-neutral-800 max-md:flex-1 md:w-full lg:w-150"
        >
          <span className="px-2 h-full grid place-items-center">
            <IoSearchSharp />
          </span>
          <input
            type="text"
            placeholder="type something"
            className="outline-none text-gray-300 h-full"
          />
        </div>
        <span className="text-blue-500 ">
          <span className="text-2xl flex items-center gap-3">
            <span>
              <BiMessage />
            </span>
            <span>
              <BiBell />
            </span>
          </span>
        </span>
      </div>
    </div>
  );
}

export default DashboardHeader;
