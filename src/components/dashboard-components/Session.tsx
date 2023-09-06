import { MyLesson } from "@/utils";
import Image from "next/image";
import React from "react";

const Session = () => {
  return (
    <div className="w-[23%] h-screen py-[40px] pr-[40px]">
      <div className="session-background w-full h-[90%] flex flex-col space-y-[16px] items-center px-[24px] py-[40px]">
        {MyLesson.map((item, i) => (
          <div key={i} className="bg-gradient-to-r w-[99%] from-[#008cff]  to-[#008cff] p-[24px] ">
            <div className="flex items-start space-x-[16px]">
              <Image
                src={item.image}
                alt="profile"
                width={70}
                height={70}
                className="rounded-[48px] object-cover w-[48px] h-[48px]"
              />
              <div className="flex flex-col items-start w-full">
                <h2 className="text-[22px] font-bold leading-normal">
                  {item.course}
                </h2>
                <p className="text-[17px] font-normal leading-normal">
                  With {item.tutor}
                </p>
              </div>
            </div>
            <div className="flex items-center pt-[24px] pb-[4px] justify-between w-full">
              <span className="text-[12px] font-semibold leading-normal">
                Upcoming
              </span>
              <span className="text-[12px] font-semibold leading-normal">
                {item.period}
              </span>
            </div>
          </div>
        ))}
        <span className="text-[12px] font-semibold leading-normal text-end items-end justify-end">see all</span>
      </div>
    </div>
  );
};

export default Session;
