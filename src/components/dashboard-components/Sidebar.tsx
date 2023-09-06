"use client";
import { Tab } from "@/utils";
import Link from "next/link";
import React, { useState } from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";

const Sidebar = () => {
  const [active, setActive] = useState("home");
  return (
    <div className="w-[7%] h-screen border-r-2 p-5">
      <div className="flex flex-col items-center space-y-[80px]">
        {Tab.map((item, i) => (
          <Link href={item.route} key={i}>
            <item.icon
              onClick={() => setActive(item.active)}
              size={40}
              className={`${
                active === item.active ? "text-[#008EFF]" : "text-[#fff]"
              } cursor-pointer`}
            />
          </Link>
        ))}
        <BsFillPlusCircleFill
          size={60}
          color="#f70"
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Sidebar;
