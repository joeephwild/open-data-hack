// import { camera } from "@/assets";
// import { useDropzone } from "react-dropzone";
import Image from "next/image";
import React, { useCallback } from "react";

interface Props {
  title: string;
  type?: string;
  isInput?: boolean | null;
  isCategory?: boolean | null;
  item?: { title: string; value: string }[];
  isHidden?: boolean;
  isTextArea?: boolean;
  isImage?: boolean;
  value?: string;
  handleChange?: (e: any) => void;
  label?: string;
}

const FormField = ({
  title,
  type,
  isInput,
  isCategory,
  item,
  isHidden,
  isTextArea,
  isImage,
  value,
  handleChange,
  label,
}: Props) => {
  return (
    <label className="space-y-2 flex-col flex items-start" htmlFor="">
      <span className="text-[#ffffff] w-full text-[16px] leading-[24px] font-normal">
        {title}
      </span>
      {/* <span className="text-[#CCCCCCAA] w-[413px] text-[20px] leading-normal font-semibold">
        {label}
      </span> */}
      {isInput && (
        <input
          value={value}
          type={type}
          onChange={handleChange}
          placeholder={label}
          className="w-full border bg-transparent h-[56px] placeholder:text-[#ccccccaa] px-[24px] py-[16px] items-center justify-center rounded-[8px]  border-[#aaa]"
        />
      )}

      {isTextArea && (
        <textarea
          rows={4}
          value={value}
          onChange={handleChange}
          className="min-w-full border border-[#6783A0] outline-none placeholder:text-[#fff] text-[#fff] bg-Gray/900 px-4 py-2.5 rounded-[8px]"
        />
      )}

      {isCategory && (
        <select
          onChange={handleChange}
          className="w-full border bg-transparent h-[56px] placeholder:text-[#ccccccaa] px-[24px] py-[16px] items-center justify-center rounded-[8px]  border-[#aaa]"
        >
          {item?.map((cate, i) => (
            <option
              className="bg-transparent space-y-5 text-[#000]"
              value={cate.value}
              key={i}
            >
              {cate.title}
            </option>
          ))}
        </select>
      )}
    </label>
  );
};

export default FormField;
