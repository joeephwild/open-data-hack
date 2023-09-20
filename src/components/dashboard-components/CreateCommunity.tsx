import Image from "next/image";
import React from "react";
import { BsFillXCircleFill } from "react-icons/bs";
import { Input } from "../UI";

interface props {
  formSubmitAction: () => void;
  cancelFormAction: () => void;
}

const CreateCommunity = ({ formSubmitAction, cancelFormAction }: props) => {
  return (
    <div className="border border-white px-6 py-8 flex flex-col w-[60%] mx-auto mt-12">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Create a community </h1>
        <div onClick={cancelFormAction}>
          <BsFillXCircleFill size={40} />
        </div>
      </div>
      <form onSubmit={formSubmitAction}>
        <div className="flex justify-between gap-4 mt-4">
          <div className="w-full">
            <label htmlFor="community-name" className="font-semibold block m-2">
              Community name
            </label>
            <input className="bg-white text-[#000] border-none outline-none focus:outline-none w-full h-12 rounded-lg" />
          </div>
          <div className="w-full">
            <label htmlFor="language" className="font-semibold block m-2">
              Language
            </label>
            <input className="bg-white text-[#000] border-none outline-none focus:outline-none w-full h-12 rounded-lg" />
          </div>
        </div>

        <div className="flex justify-between gap-4 mt-4">
          <div className="w-full">
            <label htmlFor="bio" className="font-semibold block m-2">
              Bio
            </label>
            <textarea
              className="bg-white text-[#000] border-none outline-none focus:outline-none w-full rounded-lg"
              rows={4}
            />
          </div>
          <div className="w-full">
            <label htmlFor="resources" className="font-semibold block m-2">
              Resources
            </label>
            <Input />
          </div>
        </div>

        <div className="flex justify-center items-center mt-16">
          <button className="bg-[#f70] w-[60%] py-[17px] rounded-[8px] text-[16px] font-bold">
            Create Community
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCommunity;
