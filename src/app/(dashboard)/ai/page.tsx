import React from "react";
import { HiPaperAirplane } from 'react-icons/hi2'

const AiChat = () => {
  return (
    <div className="min-h-screen  flex my-[40px] mx-[111px]">
      <div className="relative border-2 w-full h-[80vh] pl-[39px] pt-[80px] pb-[40px] pr-[40px]">
        <div className="flex flex-col h-full items-center justify-center">
          <span>Verbal AI</span>
          <span>
            I'm here to help you with whatever Language you want to learn, send
            a message let’s start learning.
          </span>
        </div>
        <div className="absolute top-[90%] w-[90%]  h-[48px] flex items-center bg-[#fff] px-[16px] py-[14px]">
          <input
            placeholder="Enter message"
            className="w-full text-[#000] bg-transparent border-none outline-nonr focus:outline-none"
          />
          <HiPaperAirplane color="#A6A39D" size={32} />
        </div>
      </div>
    </div>
  );
};

export default AiChat;
