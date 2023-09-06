import React from "react";
import FormField from "../FormField";

const SelectLanguage = () => {
  const category = [
    {
      title: "Select",
      value: "Select",
    },
    {
      title: "Computing",
      value: "Computing",
    },
    {
      title: "Supermarket",
      value: "Supermarket",
    },
    {
      title: "Games",
      value: "Games",
    },
    {
      title: "Kids",
      value: "Kids",
    },
    {
      title: "Automobile",
      value: "Automobile",
    },
    {
      title: "Sport",
      value: "Sport",
    },
    {
      title: "Fashion",
      value: "Fashion",
    },
  ];
  return (
    <form className="pt-[125px] flex flex-col space-y-[34px] items-center justify-center">
      <label className="space-y-[24px]">
        <div>
          <span className="text-[#ffffff] w-full text-[32px] leading-[24px] font-normal">
            Choose Your Language
          </span>
          <p className="text-[#CCCCCCAA] w-[413px] text-[20px] leading-normal font-semibold">
            Select the language you're eager to master and uncover new
            opportunities
          </p>
        </div>

        <select className="w-full border bg-transparent h-[56px] placeholder:text-[#ccccccaa] px-[24px] py-[16px] items-center justify-center rounded-[8px]  border-[#aaa]">
          {category.map((item, i) => (
            <option value={item.value}>{item.title}</option>
          ))}
        </select>
      </label>

      <label className="space-y-[24px]">
        <div>
          <span className="text-[#ffffff] w-full text-[32px] leading-[24px] font-normal">
            Proficiency Level
          </span>
          <p className="text-[#CCCCCCAA] w-[413px] text-[20px] leading-normal font-semibold">
            Tell us your current skill level in [Selected Language]. We'll
            personalize your learning experience accordingly.
          </p>
        </div>

        <select className="w-full border bg-transparent h-[56px] placeholder:text-[#ccccccaa] px-[24px] py-[16px] items-center justify-center rounded-[8px]  border-[#aaa]">
          {category.map((item, i) => (
            <option value={item.value}>{item.title}</option>
          ))}
        </select>
      </label>
    </form>
  );
};

export default SelectLanguage;
