import Image from "next/image";
import React from "react";
import { BsChevronDown, BsFillXCircleFill } from "react-icons/bs";
import { Input } from "../UI";

interface props {
  formSubmitAction: () => void;
  cancelFormAction: () => void;
}

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

const UploadPodcast = ({ formSubmitAction, cancelFormAction }: props) => {
  return (
    <div className="border border-white px-6 py-8 flex flex-col w-[60%] mx-auto mt-12">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Upload Podcast </h1>
        <div onClick={cancelFormAction}>
          <BsFillXCircleFill size={40} />
        </div>
      </div>
      <form onSubmit={formSubmitAction}>
        <div className="flex justify-between gap-4 mt-4">
          <div className="w-full">
            <label htmlFor="podcast-title" className="font-semibold block m-2">
              Podcast Title
            </label>
            <input className="bg-white text-[#000] border-none outline-none focus:outline-none w-full h-12 rounded-lg" />
          </div>
          <div className="w-full">
            <label htmlFor="description" className="font-semibold block m-2">
              Description
            </label>
            <textarea
              className="bg-white text-[#000] border-none outline-none focus:outline-none w-full rounded-lg"
              rows={3}
            />
          </div>
        </div>

        <div className="flex justify-between gap-4 mt-4">
          <div className="w-full">
            <label htmlFor="add-podcast" className="font-semibold block m-2">
              Add Podcast
            </label>
            <Input />
            <span className="block mt-4 text-gray-400">
              Supported formats: MP3
            </span>
          </div>
          <div className="w-full">
            <label htmlFor="category" className="font-semibold block m-2">
              Category
            </label>
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
          </div>
        </div>

        <div className="flex justify-between gap-4 mt-4">
          <div className="w-[50%]">
            <label htmlFor="add-thumbnail" className="font-semibold block m-2">
              Add Thumbnail
            </label>
            <Input />
            <span className="block mt-4 text-gray-400">
              Supported formats: JPEG, PNG, PPT
            </span>
          </div>
        </div>

        <div className="flex justify-center items-center mt-16 flex-col w-full space-y-4">
          <div className="flex space-x-2 w-[80%] mx-auto">
            <input type="checkbox" className="block border-2" />
            <p className="text-gray-400">
              This Podcast does not contain Explicit contents. You agree to our{" "}
              <a href="#">
                <span className="text-white font-bold">Terms</span> and{" "}
                <span className="text-white font-bold">Conditions</span>
              </a>
            </p>
          </div>
          <button className="bg-[#f70] w-[60%] py-[17px] rounded-[8px] text-[16px] font-bold block">
            Create Community
          </button>
        </div>
      </form>
    </div>
  );
};

export default UploadPodcast;
