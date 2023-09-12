"use client";
import { arrows } from "@/assests/images";
import { CommunityCard, MentorsCard } from "@/components";
import { Mentors, languageCommunity } from "@/utils";
import Image from "next/image";
import { SlCalender } from "react-icons/sl";

const Dashboard = () => {
  
  return (
    <div className="mb-9">
     
      {/** top section */}
      <div className="flex items-center justify-between py-[40px] px-[24px]">
        <div className="w-[193px] relative">
          <h1 className="text-[34px] font-black leading-normal tracking-[-0.3px]">
            Hi <span className="text-[#f70]"> Peter</span>, Check you Activities
          </h1>
          <Image
            src={arrows}
            alt="arrow"
            className="w-[40px] h-[40px] object-contain absolute -bottom-0 -right-0"
          />
        </div>

        <div className="border-2 border-[#fff] p-[24px] flex items-center space-x-5">
          <SlCalender size={40} color="#f70" />
          <span className="text-[17px] font-bold leading-normal">
            Tuesday 15th August, 2023
          </span>
        </div>
      </div>
      {/** top section ends */}

      {/** lessons sections */}
      <div className="flex px-[24px] flex-col itesm-center space-y-[40px]">
        <div className="">
          <div className="flex items-center justify-between ">
            <h1 className="text-[20px] font-bold leading-normal">
              Communities
            </h1>
            <p className="text-[16px] font-bold text-[#CCCCCCCC] cursor-pointer">
              See all
            </p>
          </div>
          <div className="flex items-center space-x-[24px]">
            {languageCommunity.slice(0, 2).map((item, i) => (
              <CommunityCard {...item} key={i} />
            ))}
          </div>
        </div>
      </div>
      {/** lessons sections ends */}

      {/** Mentors sections */}
      <div className="flex mx-[24px] flex-col itesm-center space-y-[40px]">
        <div className="flex items-center justify-between ">
          <h1 className="text-[20px] font-bold leading-normal">Communities</h1>
          <p className="text-[16px] font-bold text-[#CCCCCCCC] cursor-pointer">
            See all
          </p>
        </div>
        <div className="inline-flex flex-wrap items-start justify-start w-full space-x-[24px]">
          {Mentors.slice(0, 4).map((item, i) => (
            <MentorsCard {...item} key={i} />
          ))}
        </div>
   
      </div>
      {/** Mentors sections end */}

    
    </div>
  );
};

export default Dashboard;
