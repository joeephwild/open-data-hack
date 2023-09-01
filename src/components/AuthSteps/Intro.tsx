import React from "react";

const Intro = () => {
  return (
    <div className="space-y-[16px] place-items-center">
      <h1 className="text-[48px] font-bold leading-normal">
        Welcome to Verbal Learning
      </h1>
      <span className="text-center w-[410px] text-[20px] font-bold text-[#CCCCCCAA]">
        Experience revolutionary learning with blockchain technology and
        AI-tailored lessons, connecting with a vibrant community.
      </span>
      <div className="flex-col items-centert mt-[40px] space-y-[24px]">
        <button className="bg-[#f70] w-[80%] py-2.5 text-[16px] font-bold rounded-[8px]">
          Get Started
        </button>
        <button className="border-2 border-[#f70] w-[80%] py-2.5 text-[16px] font-bold rounded-[8px]">
          Login
        </button>
      </div>
    </div>
  );
};

export default Intro;
