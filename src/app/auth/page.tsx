"use client";

import Congrats from "@/components/AuthSteps/Congrats";
import ConnectWallet from "@/components/AuthSteps/ConnectWallet";
import CreateAccount from "@/components/AuthSteps/CreateAccount";
import CreateProfile from "@/components/AuthSteps/CreateProfile";
import Intro from "@/components/AuthSteps/Intro";
import SelectLanguage from "@/components/AuthSteps/SelectLanguage";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Page = () => {
  const [currentStep, setCurrentStep] = useState<number>(2);

  const steps = ["intro", "select language", "Set Profile", "Connect Wallet"];

  const handleNext = () => {
    if (currentStep < steps.length + 1) {
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
      case 1:
        return (
          <CreateAccount
            next={handleNext}
            steps={steps}
            currentStep={currentStep}
          />
        );
      case 2:
        return <SelectLanguage />;
      case 3:
        return <CreateProfile />;
      case 4:
        return <ConnectWallet />;
      case 5:
        return <Congrats />;
      default:
        return <Intro next={handleNext} />;
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="w-[50%] bg-map2 object-bottom bg-contain bg-left-bottom bg-no-repeat h-screen flex flex-col items-center justify-center mb-[40px] ">
        <Image
          src={require("../../assests/logo.png")}
          alt="logo"
          className="w-[263.048px] h-[240px] object-cover"
        />
        <p className="w-[365px] text-center text-[#CCCCCCAA] font-semibold">
          Your Gateway to Web 3 and AI-powered Language Learning!
        </p>
      </div>
      <div className="border  bg-[#fff] h-[880px] items-center flex" />
      <div className="w-[50%] bg-map2  bg-right-top bg-no-repeat bg-contain  space-y-[80px] flex-col items-center p-[70px]">
        <div className="flex items-center justify-center space-x-4">
          {currentStep !== steps.length &&
            currentStep > 1 &&
            steps.map((_, _i) => (
              <div
                key={_i}
                className={`w-[40px] items-center h-[4px] space-x-2 ${
                  currentStep >= _i + 1 ? "bg-[#008EFF]" : "bg-[#CCC]"
                }`}
              />
            ))}
        </div>
        <div className="">{displayCurrentScreens()}</div>

        <div className="">
          {currentStep >= 1 && (
            <div className="flex items-center justify-between w-full ">
              <button onClick={handlePrev}>Go back</button>
              <button onClick={handleNext}>Contnue</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
