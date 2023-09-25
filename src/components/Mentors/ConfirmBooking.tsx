import React from "react";
import { BsCalendar4, BsXCircle } from "react-icons/bs";
import { TbClock2 } from "react-icons/tb";
import { Button, Select } from "../UI";

interface prop {
  cancelFormAction?: () => void;
  date?: string;
  time?: string;
  submitFormAction?: () => void;
}

const ConfirmBooking = ({
  cancelFormAction,
  date,
  time,
  submitFormAction,
}: prop) => {
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
    <div className="border border-white px-6 py-8 flex flex-col w-[60%] mx-auto mt-12">
      <div className="flex justify-between">
        <h1 className="text-2xl font-bold w-full flex justify-center">
          Confirm your booking{" "}
        </h1>
        <div onClick={cancelFormAction}>
          <BsXCircle size={30} />
        </div>
      </div>
      <div className="flex justify-center w-full space-x-2 items-center">
        <BsCalendar4 />
        <p>{date}</p>
        <TbClock2 />
        <p>{time}</p>
      </div>
      <form action="" onSubmit={submitFormAction} className="mt-12">
        <div className="mt-4 w-[50%] mx-auto">
          <label htmlFor="main-select" className="block font-bold">
            Select main
          </label>
          <Select category={category} />
        </div>
        <div className="mt-4 w-[50%] mx-auto">
          <label htmlFor="add-question" className="block font-bold">
            Add your question to this booking
          </label>
          <textarea
            className="bg-white text-[#000] border-none outline-none focus:outline-none w-full rounded-lg"
            rows={5}
          />
        </div>
        <div className="mt-8 mx-auto w-[50%] flex justify-center">
          <Button buttonText="Confirm Booking" />
        </div>
      </form>
    </div>
  );
};

export default ConfirmBooking;
