"use client";
import FormField from "@/components/FormField";
import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Calendar from "react-calendar";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const ScheduleASession = () => {
  const [value, onChange] = useState<Value>(new Date());
  const [mentor, setMentor] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [dateAndTime, setDateAndTime] = useState<string>("");
  const [isTokenGated, setIsTokenGated] = useState<boolean>(false);
  const [tokenType, setTokenType] = useState<string>("");
  const [tokenAddress, setTokenAddress] = useState<string>("");



  const handleCreateSpace = () => {
    // Here, you can implement the logic to create a space with all the collected data
    const spaceData = {
      title,
      description,
      dateAndTime,
      isTokenGated,
      tokenType,
      tokenAddress,
    };
    // You can send spaceData to your backend or handle it based on your requirements.
    console.log(spaceData);
  };
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
        <form
          action=""
          className="my-[30px] flex flex-col items-center justify-center w-full"
        >
          <div className="space-y-[24px] w-full">
            <div className="p-[24px]">
              <FormField
                title="Set A Display Name"
                isInput
                value={mentor}
                handleChange={(e) => setMentor(e.target.value)}
              />
              <FormField
                title="Title"
                isInput
                value={title}
                handleChange={(e) => setTitle(e.target.value)}
              />
              <FormField
                title="Description"
                isInput
                value={description}
                handleChange={(e) => setDescription(e.target.value)}
              />
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={isTokenGated}
                  onChange={() => setIsTokenGated(!isTokenGated)}
                />
                <span className="ml-2">Token Gated</span>
              </div>
              {isTokenGated && (
                <div>
                  <FormField
                    title="Token Type (ERC721/ERC1155/ERC20)"
                    isInput
                    value={tokenType}
                    handleChange={(e) => setTokenType(e.target.value)}
                  />
                  <FormField
                    title="Token Address"
                    isInput
                    value={tokenAddress}
                    handleChange={(e) => setTokenAddress(e.target.value)}
                  />
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ScheduleASession;
