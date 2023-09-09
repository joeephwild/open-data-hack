"use client";

import { books, profile, task } from "@/assests/images";
import { MyLesson } from "@/utils";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

interface Props {
  params: { session: string };
}

const SessionDeails = ({ params }: Props) => {
  useEffect(() => {
    const getSessionDetails = () => {
      const filterSession = MyLesson.filter(
        (item) => item.course === params.session
      );
      console.log(filterSession);
    };
    if (params.session) {
      getSessionDetails();
    }
  }, [params.session]);
  return (
    <div className="w-full mx-[26px]  my-[40px]">
      <div className="w-full py-[40px] px-[24px] background ">
        <div className="flex items-center justify-between px-9 w-full">
          <div className="flex items-center">
            <Image
              src={profile}
              alt="profile"
              className="w-[80px] h-[80px] rounded-full "
            />
            <div className="flex flex-col items-start">
              <h1 className="text-[34px] font-bold leading-normal">
                {params.session}
              </h1>
              <p>With Anita Baker</p>
            </div>
          </div>
          <button className="bg-[#f70] w-[50%] py-[17px] rounded-[8px]">
            Join video session
          </button>
        </div>

        {/** bottom section */}
        <div className="flex items-center w-full px-[25px] gap-[25px] mt-[54px]">
          <div className="bg-[#fff] w-[50%] p-[24px] h-[196px] rounded-[8px] cursor-pointer">
            <div className="flex items-center space-x-3">
              <Image src={books} alt="books" />
              <span className="text-[#00AF54] text-[24px] font-bold">
                Lesson Content
              </span>
            </div>
            <p className="text-[17px] font-normal text-[#000]">
              Teach the mentee the technicalities in pronoucing two syllable
              words in korean and it`s application
            </p>
          </div>
          <div className="bg-[#fff] w-[50%] p-[24px] h-[196px] rounded-[8px] cursor-pointer">
            <div className="flex items-center space-x-3">
              <Image src={task} alt="books" />
              <span className="text-[#E03616] text-[24px] font-bold">
                Missed Lesson Alert!
              </span>
            </div>
            <p className="text-[17px] font-normal text-[#000]">
              Missing scheduled lessons impacts your learning progress. Remember
              to notify your tutor in advance if you need to reschedule. Stay
              Committed to your learning journey.
            </p>
          </div>
        </div>
        <div className="flex items-center py-[25px] px-[24px] justify-between w-full">
          <span>Upcoming Session</span>
          <span>Scheduled for 15:00 EST</span>
        </div>
      </div>
    </div>
  );
};

export default SessionDeails;
