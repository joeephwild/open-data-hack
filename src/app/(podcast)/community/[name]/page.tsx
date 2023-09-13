"use client";

import { languageCommunity } from "@/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { GrFormPrevious } from "react-icons/gr";

interface Props {
  params: { name: string };
}

const CommunityDetails = ({ params }: Props) => {
  const [community, setCommunity] = useState<Community[]>([]);

  useEffect(() => {
    const getSessionDetails = () => {
      const decodedSession = decodeURIComponent(params.name);
      const filterSession = languageCommunity.filter(
        (item) => item.name === decodedSession
      );
      console.log(filterSession);
      setCommunity(filterSession);
    };

    getSessionDetails();
  }, [params.name]);
  return (
    <div className="my-[40px] px-[24px]">
      {community.map((item, i) => (
        <div key={i} className="w-full">
          <Image
            src={item.coverImage}
            alt="cover"
            width={23}
            height={23}
            className="w-full h-[320px] object-cover"
          />
          <div className="flex items-center justify-between w-full px-9">
            <div className="flex flex-col items-start">
              <span className="text-[34px] font-bold">{item.name}</span>
              <span>{item.num_people}</span>
            </div>
            <div className="flex items-center space-x-3">
              <button className="bg-[#f70] px-[47px] py-[13px] rounded-[4px]">
                Join Group
              </button>
              <button className="border-2 border-[#f70] px-[47px] py-[13px] rounded-[4px]">
                Invite Friends
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommunityDetails;
