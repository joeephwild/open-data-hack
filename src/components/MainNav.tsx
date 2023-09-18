"use client";
import { logo, avatar } from "@/assests/images";
import { Tab } from "@/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { BsSearch } from "react-icons/bs";

const MainNav = () => {
  const router = useRouter();
  return (
    <div className="flex items-center sticky border-b-2 w-full justify-between px-[40px] py-[20px]">
      <div className="flex items-center space-x-[40px]">
        <Image
          src={logo}
          alt="logo"
          className="w-[132.075px] cursor-pointer h-[40px] object-cover"
        />

        <div className="flex items-center space-x-6">
          {Tab.map((item, i) => (
            <span key={i} className="text-[16px] font-bold cursor-pointer">
              {item.title}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center space-x-7">
        <button className="bg-[#f70] px-[56px] py-[16px] rounded-[8px] text-[16px] font-bold">
          Connect Wallet
        </button>
      </div>
      {/* <div onClick={() => router.push("/profile")} className="ml-auto flex">
        <Image
          src={avatar}
          alt="avatar"
          width={65}
          height={65}
          className="rounded-full"
        />
      </div> */}
    </div>
  );
};

export default MainNav;
