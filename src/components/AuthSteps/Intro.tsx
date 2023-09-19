import React from "react";

const Intro = ({next}: any) => {
  return (
    <div className="space-y-[16px]">
      <h1 className="lg:text-[48px] w-[448p]  md:text-[30px]">
        Welcome to <br /> Verbal Language
      </h1>
      <p className="w-[419px] text-[#CCCCCCAA] font-semibold">
        Experience revolutionary learning with blockchain technology and
        AI-tailored lessons, connecting with a vibrant community.{" "}
      </p>
      <div className="pt-[40px] space-y-[40px] flex-col flex">
        <a href="#createaccount">
          <button onClick={next} className="bg-[#FF7700] w-[50%] py-[17px] rounded-[8px] text-[16px] font-bold leading-normal">
            Get Started
          </button>
        </a>

        <button className="border border-[#FF7700] w-[50%] py-[17px] rounded-[8px] text-[16px] font-bold leading-normal">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Intro;
