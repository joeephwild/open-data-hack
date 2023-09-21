"use client";

import Image from "next/image";
import React, { useState } from "react";
import {
  BsChevronLeft,
  BsPlayCircle,
  BsHeart,
  BsHeartFill,
  BsPauseCircle,
} from "react-icons/bs";
import { BiSkipNext, BiSkipPrevious, BiShuffle } from "react-icons/bi";
import { FiRepeat } from "react-icons/fi";

interface props {
  backClickAction: () => void;
  podcast: Podcast;
}
const PodcastPlayer = ({ backClickAction, podcast }: props) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="px-4 py4">
      <div className="my-4">
        <h1 className="text-3xl font-bold ml-2">Podcasts </h1>
        <p className="font-bold flex mt-4" onClick={backClickAction}>
          <BsChevronLeft size={35} color="#fff" />
          <span className="text-2xl">Now Playing</span>
        </p>
      </div>

      <div className="my-4 w-full h-96">
        <Image
          src={podcast.image}
          alt="podcast-image"
          className="w-full h-full object-cover"
          width={100}
          height={100}
        />
      </div>

      <div className="flex flex-col">
        <div className="flex justify-between w-full">
          <div>
            <p className="text-xl font-bold block">{podcast.name}</p>
            <p className="font-bold text-gray-400 block">{podcast.author}</p>
          </div>
          {isLiked && (
            <BsHeartFill onClick={() => setIsLiked(!isLiked)} size={30} />
          )}
          {!isLiked && (
            <BsHeart onClick={() => setIsLiked(!isLiked)} size={30} />
          )}
        </div>

        <div className="mt-3">
          <div className="h-1 bg-neutral-200 dark:bg-neutral-600 w-full">
            <div className="h-1 bg-white w-[30%]"></div>
          </div>
        </div>

        <div className="flex justify-between w-full mt-2">
          <div>00:00</div>
          <div>{podcast.podcast_length}</div>
        </div>

        <div className="flex justify-center items-center w-full">
          <div className="flex w-[25%] mx-auto justify-between">
            <BiShuffle size={50} />
            <BiSkipPrevious size={50} />
            {!isPlaying && (
              <BsPlayCircle
                size={50}
                onClick={() => setIsPlaying(!isPlaying)}
              />
            )}
            {isPlaying && (
              <BsPauseCircle
                size={50}
                onClick={() => setIsPlaying(!isPlaying)}
              />
            )}
            <BiSkipNext size={50} />
            <FiRepeat size={45} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PodcastPlayer;
