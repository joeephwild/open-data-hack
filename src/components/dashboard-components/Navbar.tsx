'use client'
import { logo, avatar } from "@/assests/images";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { BsSearch } from "react-icons/bs";

const Navbar = () => {
  const router  = useRouter()
  return (
    <div className="flex items-center sticky border-b-2 w-full justify-between px-[40px] py-[20px]">
      <div className="flex items-center space-x-[40px]">
        <Image
          src={logo}
          alt="logo"
          className="w-[132.075px] h-[40px] object-cover"
        />

        <div className="flex items-center bg-[#fff] px-5 py-2.5 w-[400px] space-x-4 rounded-[8px]">
          <BsSearch size={20} color="#000" />
          <input
            placeholder="search..."
            className="bg-transparent text-[#000] border-none outline-none focus:outline-none w-full"
          />
        </div>
      </div>
      <div onClick={() => router.push("/profile")} className="ml-auto flex">
        <Image
          src={avatar}
          alt="avatar"
          width={65}
          height={65}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
