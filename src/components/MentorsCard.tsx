import Image from "next/image";
import React from "react";

type Props = {
  name: string;
  nickname: string;
  experience: string;
  languages: string[];
  availability: string[];
  additionalInfo: string;
  profileImage: string;
  coverImage: string;
};

const MentorsCard = ({ name, languages, profileImage }: Props) => {
  return (
    <div className="bg-gradient-to-r from-[#008EFF] to-[#0065B5] min-w-[46%] my-4 p-[24px] rounded-lg shadow-lg cursor-pointer">
      <div className="flex items-center space-x-4">
        <div className="relative w-16 h-16">
          <Image
            src={profileImage}
            alt={name}
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl font-semibold">{name}</h1>
          <p className="text-base">{languages[0]}</p>
        </div>
      </div>
    </div>
  );
};

export default MentorsCard;
