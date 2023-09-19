"use client";
import { useVerbalContext } from "@/app/context/Index";
import { Tab, Tab2 } from "@/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Router } from "next/router";
import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const UploadModal = () => {
  const { isOpen, setIsOpen, setActive } = useVerbalContext();
  const route = useRouter();

  const handleORoute = (routeItem: string) => {
    setIsOpen(false);
    route.push(`${routeItem}`);
  };

  if (!isOpen) return null;
  return (
    <div className="flex items-center justify-center">
      <div className="fixed z-[666666] bg-black opacity-50 inset-0"></div>
      <div className="fixed z-[9999999] w-[480px] h-[385px] top-[40%] px-[40px] py-[40px] bg-white rounded-lg">
        <div className="flex items-center justify-between w-full">
          <span className="text-transparent text-[34px] font-black leading-normal bg-gradient-to-r from-[#008EFF] to-[#0065B5] bg-clip-text">
            Create
          </span>
          <AiOutlineCloseCircle
            onClick={() => setIsOpen(!isOpen)}
            size={40}
            color="#000"
            className="cursor-pointer"
          />
        </div>
        <div className="bg-gradient-to-r from-[#008EFF] to-[#0065B5] w-full h-1 my-4" />
        <div className="flex flex-col items-start gap-[24px]">
          {Tab2.map((item, i) => (
            <div
              onClick={() => handleORoute(item.route)}
              key={i}
              className="flex flex-col items-center space-y-[20px] cursor-pointer"
            >
              <div className="flex items-center space-x-[16px]">
                <item.icon
                  size={40}
                  color="#008EFF"
                  className="text-transparent bg-gradient-to-r from-[#008EFF] to-[#0065B5] bg-clip-text"
                />
                <span className="text-[20px] text-[#000] font-bold">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UploadModal;
