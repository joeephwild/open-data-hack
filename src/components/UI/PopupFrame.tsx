import React from "react";
import { BsXCircle } from "react-icons/bs";

interface props {
  frameText: string;
  cancelFrameAction?: () => void;
  children: React.ReactNode;
}

const PopupFrame = ({ frameText, cancelFrameAction, children }: props) => {
  return (
    <div className="border border-white px-6 py-8 flex flex-col w-[60%] mx-auto mt-12">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold w-full flex justify-center">
          {frameText}
        </h1>
        <div onClick={cancelFrameAction}>
          <BsXCircle size={30} />
        </div>
      </div>

      {children}
    </div>
  );
};

export default PopupFrame;
