"use client";
import FormField from "@/components/FormField";
import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Calendar from "react-calendar";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const ScheduleASession = () => {
  const [value, onChange] = useState<Value>(new Date());
  console.log(value);
  return (
    <div className="m-[28px] overflow-y-scroll scrollbar-hide">
      <div className="border-2 border-[#fff] p-24px] w-full h-screen p-[40px]">
        <div className="flex items-center justify-between w-full">
          <span className="text-[34px] font-black leaidng-norma">
            Schedule A Session
          </span>
          <AiOutlineCloseCircle size={40} color="#fff" />
        </div>

        {/** form section */}
        <form action="" className="my-[30px]">
          <div className="space-y-[24px]">
            <div className="flex items-center gap-[20px]">
              <Calendar
                onChange={onChange}
                value={value}
                className="border-2 border-[#fff] items-center p-[24px] w-[50%] h-[384px] text-[16px]"
              />
              <div className="border-2 border-[#fff] w-[50%] h-[385px] p-[24px]"></div>
            </div>
            <FormField title="Mentor" isInput />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ScheduleASession;
