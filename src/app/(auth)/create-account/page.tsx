"use client";

import Congrats from "@/components/AuthSteps/Congrats";
import ConnectWallet from "@/components/AuthSteps/ConnectWallet";
import CreateAccount from "@/components/AuthSteps/CreateAccount";
import CreateProfile from "@/components/AuthSteps/CreateProfile";
import Intro from "@/components/AuthSteps/Intro";
import React, { useState, useEffect } from "react";

const Page = () => {
  // Define the current step in the state
  const [currentStep, setCurrentStep] = useState<number>(0);

  // Define the steps in the process
  const steps = ["intro", "select language", "Set Profile", "Connect Wallet"];

  // Function to handle moving to the next step
  const handleNext = () => {
    if (currentStep < steps.length + 1) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  // Function to handle moving to the previous step
  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  // Function to display the current screen based on the step
  const displayCurrentScreens = () => {
    switch (currentStep) {
      case 1:
        return <ConnectWallet />;
      case 2:
        return (
          <CreateAccount next={handleNext} steps={steps} currentStep={currentStep} />
        );
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
    <div className="m-4">
      {/* Progress bar */}
      <div className="flex items-center justify-center space-x-4 mb-4">
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
      {/* Current screen */}
      <div className="mb-4">{displayCurrentScreens()}</div>
  
      {/* Navigation buttons */}
      <div className="">
        {currentStep >= 1 && (
          <div className="flex items-center justify-between w-full ">
            <button onClick={handlePrev}>Go back</button>
            <button onClick={handleNext}>Contnue</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;