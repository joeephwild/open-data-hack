import Image from "next/image";
import React from "react";

type Props = {
  name: string;
  image: string;
  num_people: number;
};

const CommunityCard = ({ image, name, num_people }: Props) => {
  return (
    <div className="bg-[#fff] my-[24px] py-[24px] px-[40px] text-[#000] w-[40%] h-[255px]">
      <div className="flex items-start space-x-[16px]">
        <Image
          src={image}
          alt="profile"
          width={40}
          height={40}
          className="w-[80px] h-[80px] rounded-[48px] object-cover"
        />
        <div className="flex flex-col pb-[24px]  items-start">
          <h1 className="text-[28px] font-semibold leading-normal bg-gradient-to-r from-[#008EFF] to-[#0065B5] bg-clip-text text-transparent">
            {name}
          </h1>
          <p className="text-[17px] font-medium leading-normal bg-gradient-to-r from-[#008EFF] to-[#0065B5] bg-clip-text text-transparent">
            {num_people}
          </p>
        </div>
      </div>
      <span className="mt-[24px] text-[17px] font-medium leading-normal">
        We are focused on ensuring our members meet tutors who will volunteer to
        help hit their milestone and learn English...
      </span>
    </div>
  );
};

export default CommunityCard;
