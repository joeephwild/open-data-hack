"use client";
import { useVerbalContext } from "@/app/context/Index";
import { Tab } from "@/utils";
import Link from "next/link";
import React, { useState } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";

const Sidebar = () => {
  // const [active, setActive] = useState("home");
  const { setIsOpen, isOpen, active, setActive } = useVerbalContext();

  return (
    <div className="w-[7%] h-screen border-r-2 p-5">
      <div className="flex flex-col items-center space-y-[80px]">
        {Tab.map((item, i) => (
          <Link
            href={item.route}
            key={i}
            className="border-b border-gray-500 pb-6"
          >
            <item.icon
              onClick={() => setActive(item.active)}
              size={40}
              className={`${
                active === item.active ? "text-[#008EFF]" : "text-[#fff]"
              } cursor-pointer`}
            />
          </Link>
        ))}
        <button onClick={() => setIsOpen(true)}>
          <BsFillPlusCircleFill size={80} color="#f70" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
