"use client";
import React from "react";
import {
  BsPip,
  BsFillVolumeUpFill,
  BsPlayCircleFill,
  BsPauseCircleFill,
} from "react-icons/bs";
import { BiSkipNext, BiSkipPrevious, BiShuffle } from "react-icons/bi";
import { RiPlayListFill, RiMoneyDollarCircleLine } from "react-icons/ri";
import { FiRepeat, FiHeart, FiMoreHorizontal } from "react-icons/fi";
import { AiOutlineCloseCircle, AiOutlineCloudDownload } from "react-icons/ai";
import { useVerbalContext } from "@/app/context/Index";

const PodcastPlayer = () => {
  const { playerOpen } = useVerbalContext();
  return playerOpen ? (
    <div className="w-full fixed bottom-0 h-[60px] bg-[#000]">PODCAST</div>
  ) : (
    <div></div>
  );
};

export default PodcastPlayer;
