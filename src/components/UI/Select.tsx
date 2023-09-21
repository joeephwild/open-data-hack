import React from "react";
import { BsChevronDown } from "react-icons/bs";

interface props {
  category: { value: string; title: string }[];
}

const Select = ({ category }: props) => {
  return (
    <div className="flex items-center bg-[#fff] px-5 space-x-4 rounded-[8px]">
      <select className="w-full bg-white h-12 placeholder:text-[#ccccccaa] px-[24px] py-[16px] items-center justify-center rounded-[8px]  border-[#aaa]">
        {category.map((item, i) => (
          <option key={i} value={item.value}>
            {item.title}
          </option>
        ))}
      </select>
      <BsChevronDown size={20} color="#000" />
    </div>
  );
};

export default Select;
