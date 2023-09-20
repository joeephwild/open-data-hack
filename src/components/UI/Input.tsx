import React from "react";
import { BsPaperclip } from "react-icons/bs";

const Input = () => {
  return (
    <div className="flex items-center bg-[#fff] px-5 py-2.5 space-x-4 rounded-[8px]">
      {/* <BsSearch size={20} color="#000" /> */}
      <input className="bg-transparent text-[#000] border-none outline-none focus:outline-none w-[90%]" />
      <BsPaperclip size={20} color="#000" />
    </div>
  );
};

export default Input;
