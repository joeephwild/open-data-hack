import React, { useState } from "react";
import toast from "react-hot-toast";
import { useSigner, useProvider } from "wagmi";
import chainId from "../constants/chainId";
import { schedule } from "../utils/DemoGuide";

const create = () => {

  const { data: signer } = useSigner(chainId);
  const provider = useProvider(chainId);
  
  const [mentorAddressValue, setMentorAddress] = useState(
    "0x"
  );
  const [meetingLinkValue, setMeetingLink] = useState(
    "Link"
  );
  const [time, setTime] = useState(0);
  const [mentorPriceValue, setMentorPrice] = useState(0);

  const handlementorAddressValueChange = (event) => {
    setMentorAddress(event.target.value);
  };
  const handlemeetingLinkValueChange = (event) => {
    setMeetingLink(event.target.value);
  };
  const handletimeChange = (event) => {
    setTime(event.target.value);
  };
  const handlementorPriceValueChange = (event) => {
    setMentorPrice(event.target.value);
  };

  return (
    <div>
      <div className="flex justify-center items-center mb-4">
        <h1 className="text-3xl  text-black mt-4">
          Schedule session
        </h1>
      </div>
      <div className="card lg:card-side bg-white border-[2px] border-[#f2dbd0] ml-12 mr-12 rounded-2xl">
        {/* give the whole card some spacing and padding */}
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Mentor Address</span>
            </label>
            <input
              id="projectName"
              type="text"
              className="input input-bordered"
              value={mentorAddressValue}
              onChange={handlementorAddressValueChange}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Meeting Link</span>
            </label>
            <input
              id="description"
              type="text"
              className="input input-bordered"
              value={meetingLinkValue}
              onChange={handlemeetingLinkValueChange}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">time</span>
            </label>
            <input
              id="liveURL"
              type="number" // you can change to datetime but handle the conversion to blocktime in utils function
              className="input input-bordered"
              value={time}
              onChange={handletimeChange}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Mentor Price</span>
            </label>
            <input
              id="repoURL"
              type="number"
              className="input input-bordered"
              value={mentorPriceValue}
              onChange={handlementorPriceValueChange}
            />
          </div>
          <div className="form-control mt-6">
            <button
              onClick={async () => {
                try {
                  toast("Scheduling session...");
                  await schedule(mentorAddressValue, meetingLinkValue, time, mentorPriceValue, signer);
                  toast("Session scheduled");
                } catch (e) {
                  console.log(e);
                  toast.error("Failed because of " + e.message);
                }              
              }}
              className="relative inline-block px-4 py-2 font-medium group mt-4 w-[200px] mx-auto  text-center"
            >
              <span className="absolute rounded-lg inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-[#bff22d] border-[2px] border-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute rounded-lg inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-[#bff22d]"></span>
              <span className="relative text-black text-center">
                Schedule session
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default create;

