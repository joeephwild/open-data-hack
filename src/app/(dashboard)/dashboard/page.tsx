import { arrows } from "@/assests/images";
import Image from "next/image";
import { SlCalender } from "react-icons/sl";

const Dashboard = () => {
  return (
    <div className="">
      {/** top section */}
      <div className="flex items-center justify-between py-[40px] px-[24px]">
        <div className="w-[193px] relative">
          <h1 className="text-[34px] font-black leading-normal tracking-[-0.3px]">
            Hi <span className="text-[#f70]"> Peter</span>, Check you Activities
          </h1>
          <Image
            src={arrows}
            alt="arrow"
            className="w-[40px] h-[40px] object-contain absolute -bottom-0 -right-0"
          />
        </div>

        <div className="border-2 border-[#fff] p-[24px] flex items-center space-x-5">
          <SlCalender size={40} color="#f70" />
          <span className="text-[17px] font-bold leading-normal">
            Tuesday 15th August, 2023
          </span>
        </div>
      </div>
         {/** top section ends */}


         {/** lessons sections */}
         <div></div>
    </div>
  );
};

export default Dashboard;
