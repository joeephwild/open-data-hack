// import { SessionCard } from "@/components/Session";
import React from "react";
import { BsMic, BsSearch } from "react-icons/bs";

const Studio = () => {
  return (
    <div className="flex w-full h-full px-32 flex-col">
      {/* <SessionCard
        iconText="Leave Session"
        text="Others will continue after you leave. You can join the session again"
        buttonText="Leave"
      /> */}
      <div className="mt-12 space-y-3 px-4">
        <h1 className="text-3xl font-bold">Get Started</h1>
        <p className="text-gray-300">
          Setup your audio and video before joining
        </p>
      </div>
      <div className="mt-8">
        <h1>Huddle Frame</h1>
      </div>
      <div className="mt-8 flex">
        <div className="px-5 w-full space-x-4 flex items-center">
          <input className="bg-[#2D3440] text-[#fff] border-none outline-none focus:outline-none w-full rounded-[8px] h-16 px-4" />
        </div>
        <div className="flex items-center px-5 py-2.5 w-[400px] space-x-4 rounded-[8px]">
          <button className="bg-[#FF7700] w-full py-[17px] rounded-[8px] text-[16px] font-bold leading-normal flex items-center px-6">
            <BsMic /> <span className="ml-2">Join Studio</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Studio;
