import { intro } from "@/utils";
import React from "react";

type Props = {
  steps: string[];
  currentStep: number;
  next: () => void;
};

const Card = ({ item }: any) => {
  return (
    <div
      style={{ backgroundColor: item.color }}
      className="rounded-[8px] min-w-[70%] h-[205px] p-[24px] items-center justify-center"
    >
      <div className="">
        <h1 className="text-[28px] text-[#ffffff] font-bold leading-normal">
          {item.title}
        </h1>
        <p className="text-[16px] text-[#ffffff]  font-semibold leading-normal">
          {item.desc}
        </p>
      </div>
    </div>
  );
};

const CreateAccount = ({ steps, currentStep, next }: Props) => {
  return (
    <div id="#createAccount">
      <div className="mt-[80px] space-y-[24px]">
        {" "}
        {intro.map((item, i) => (
          <div className="mx-24" key={i}>
            <Card item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateAccount;
