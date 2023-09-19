import { image, main, plant } from "@/assests/images";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className=" my-[100px] gap-[190px]  w-full">
      <div className="fixed left-[90px] top-[209px] flex flex-col items-start space-y-[35.47px]">
        <h2 className="w-[780px] text-8xl text-wra font-black">
          Learning and teaching, made decentralized.
        </h2>
        <span className="w-[780px] text-xl font-normal">
          Enter the decentralized world in style as a langauge enthusiast, Earn
          and learn with smooth transaction all made possible with Verbal.
        </span>
        <div className="flex items-center space-x-7">
          <button className="bg-[#f70] px-[56px] py-[16px] rounded-[8px] text-[16px] font-bold">
            Connect Wallet
          </button>
          <button className="border-2 border-[#f70] px-[56px] py-[16px] rounded-[8px] text-[16px] font-bold">
            Learn More
          </button>
        </div>
        <div className="flex items-center space-x-[80px]">
          <div className="flex flex-col items-start">
            <span className="text-5xl leading-[100%] flex items-center">
              700<span className="text-[#f70]">+</span>
            </span>
            <span>Hours of Content by 2024</span>
          </div>

          <div className="flex flex-col items-start">
            <span className="text-5xl leading-[100%] flex items-center">
              575k<span className="text-[#f70]">+</span>
            </span>
            <span>Active Users by 2024</span>
          </div>

          <div className="flex flex-col items-start">
            <span className="text-5xl leading-[100%] flex items-center">
              $750k<span className="text-[#f70]">+</span>
            </span>
            <span>Earned by 2024</span>
          </div>
        </div>
      </div>
      <>
        <Image
          src={image}
          alt="main"
          className="w-[312px] h-[234px] fixed top-[447px] right-[607px] object-contain"
        />
        <Image
          src={main}
          alt="main"
          className="w-[705.699px] h-[597px] fixed top-[197px] right-[97px] object-fill"
        />
        <Image
          src={plant}
          alt="main"
          className="w-[494px] h-[747px] object-fill fixed top-[197px] right-0"
        />
      </>
    </div>
  );
};

export default Hero;
