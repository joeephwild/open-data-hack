'use client'
import { useVerbalContext } from "@/app/context/Index";
import { Podcast } from "@/utils";
import Image from "next/image";
import React from "react";

const PodcastSection = () => {
  const category = [
    "Trending",
    "Latest",
    "Music",
    "Podcast",
    "Korean",
    "Hangul",
    "Trending",
    "Latest",
    "Music",
    "Podcast",
    "Korean",
    "Hangul",
    "Music",
  ];

  const { playerOpen, setPlayerOpen, setSelectedPlay } = useVerbalContext();

  const handlePlay = (play: Podcast) => {
    setSelectedPlay(play);
    setPlayerOpen(true);
  };
  return (
    <div className="py-[40px] px-[24px] w-screen">
      <div className="w-full">
        <h2 className="text-[34px] font-black leading-normal">Podcasts</h2>
        <div className="flex items-start gap-10 mt-[16px] scrollbar-hide overflow-x-scroll">
          {category.map((item, i) => (
            <button
              key={i}
              className="bg-[#2F3142] py-[13px] px-[20px] rounded-[36px] "
            >
              <span>{item}</span>
            </button>
          ))}
        </div>

        <div>
          <div className="flex flex-wrap overflow-x-hidden gap-10 my-[56px]">
            {Podcast.map((item, i) => (
              <div onClick={() => handlePlay(item)} key={i}>
                <Image
                  src={item.image}
                  alt="podcast"
                  width={230}
                  height={230}
                  className="w-[236px] h-[236px] object-cover"
                />
                <div className="flex flex-col items-start">
                  <span className="text-[17px] text-center font-bold">
                    {item.name}
                  </span>
                  <span className="text-[12px] font-medium text-[#CCCCCC]">
                    {item.author}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastSection;
