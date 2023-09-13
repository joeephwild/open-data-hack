import { Podcast, languageCommunity } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CommunitySection = () => {
  return (
    <div className="py-[40px] px-[24px] w-screen">
      <div className="w-full">
        <h2 className="text-[34px] font-black leading-normal">Communities</h2>
        <div>
          <div className="flex flex-wrap overflow-x-hidden gap-10 my-[16px]">
            {languageCommunity.map((item, i) => (
              <Link href={`/community/${item.name}`}  key={i} className="w-[409px] h-[400px] bg-white p-[12px]">
                <div className="flex items-center  justify-between w-full px-[24px]">
                  <Image
                    src={item.image}
                    alt="podcast"
                    width={230}
                    height={230}
                    className="w-[86px] h-[86px] rounded-[38px] object-cover"
                  />
                  <div className="text-[#06953F] font-bold text-[12px]">
                    11569 online
                  </div>
                </div>
                <div className="flex flex-col items-start">
                  <span className="text-[17px] text-[#000] text-center font-bold">
                    {item.name}
                  </span>
                  <span className="text-[12px] font-medium text-[#CCCCCC]">
                    {item.num_people}
                  </span>
                </div>
                <Image
                  src={item.coverImage}
                  alt="podcast"
                  width={230}
                  height={230}
                  className="w-full h-[236px] object-cover"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;
