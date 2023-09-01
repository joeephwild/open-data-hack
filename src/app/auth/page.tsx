"use client";

import Intro from "@/components/AuthSteps/Intro";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Page = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);

  const steps = ["intro", "select language", "Set Profile", "Connect Wallet"];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  const displayCurrentScreens = () => {
    switch (currentStep) {
      case 0:
        return <Intro />;

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen w-screen flex items-center justify-center">
      <div className="flex flex-col md:flex-row justify-center items-center gap-20">
        <div className="md:flex hidden flex-col items-center mx-4">
          <Image
            src={require("../../assests/logo.png")}
            alt="logo"
            width={263}
            height={248}
            className="w-[263px] h-[248px] object-cover"
          />
          <span className="text-center w-[365px] text-[20px] font-bold text-[#CCCCCCAA]">
            Your Gateway to Web 3 and AI-powered Language Learning!
          </span>
        </div>
        <div className="flex flex-col items-center mx-12">{displayCurrentScreens()}</div>
      </div>
    </div>
  );
};

export default Page;
