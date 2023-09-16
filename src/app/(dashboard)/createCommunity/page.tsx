import FormField from "@/components/FormField";
import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

const CreateCommunity = () => {
  return (
    <div className="m-[28px] overflow-y-scroll scrollbar-hide">
      <div className="border-2 border-[#fff] p-24px] w-full h-screen p-[40px]">
        <div className="flex items-center justify-between w-full">
          <span className="text-[34px] font-black leaidng-norma">
            Create A Community
          </span>
          <AiOutlineCloseCircle size={40} color="#fff" />
        </div>

        {/** form section */}
        <form action="" className="my-[30px]">
          <div className="space-y-[24px]">
            <FormField title="Title" isInput />
            <FormField title="Title" isInput />
            <FormField title="Title" isTextArea />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateCommunity;
