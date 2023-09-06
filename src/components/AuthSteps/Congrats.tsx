import { box } from "@/assests/images";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Congrats = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src={box}
        alt="wallet"
        className="w-[400px] h-[400px] object-cover"
      />
      <div className="flex flex-col items-center justify-center space-y-4">
        <h1 className="text-[40px] font-bold leading-normal">Congratulation</h1>
        <p className="text-[20px] w-[70%] font-semibold leading-normal text-[#CCCCCCAA]">
          Congratulations! Your profile setup is complete, and your wallet is
          securely connected. Get ready to embark on an exciting language
          learning journey enriched with Web 3 benefits and rewarding
          achievements. Let the learning adventure begin!
        </p>
        <Link
          href="/dashboard"
          className="bg-[#f70] w-[70%] py-[17px] rounded-[8px] flex items-center justify-center text-[16px] font-bold"
        >
          <button>Continue</button>
        </Link>
      </div>
    </div>
  );
};

export default Congrats;
