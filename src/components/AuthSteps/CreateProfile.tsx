import React from "react";
import FormField from "../FormField";
import { BsUpload } from "react-icons/bs";

const CreateProfile = () => {
  return (
    <div className="flex-1 items-center justify-center mx-[24px]">
      <div>
        <h1 className="text-[34px] font-bold leading-normal">
          Set up Your Profile
        </h1>
        <p className="text-[16px] font-semibold leading-normal text-[#CCCCCCAA] w-[60%] tracking-widest">
          To tailor your experience and help you connect with fellow learners,
          set up your profile today. Let's get started on your learning journey!
        </p>
      </div>
      <form action="" className="mt-[40px] max-w-5xl">
        {/** upload components */}
        <div className="flex items-center ml-4 w-full space-x-[16px]">
          <div className="border-dashed cursor-pointer border-2 border-[#cccc] p-[24px]">
            <div className="flex flex-col items-center justify-center">
              <BsUpload size={26} />
              <span className="">Select a cover image</span>
            </div>
          </div>

          <div className="border-dashed cursor-pointer border-2 border-[#cccc] p-[24px]">
            <div className="flex flex-col items-center justify-center">
              <BsUpload size={26} />
              <span className="">Select a profile image</span>
            </div>
          </div>
        </div>
        {/** upload components  end*/}

        {/** input section */}
        <div className="space-y-[24px] mt-[24px]">
          <FormField isInput title="Age" label="" />
          <FormField isInput title="Age" label="" />
          <FormField isInput title="Age" label="" />
          <FormField isInput title="Age" label="" />
        </div>
        {/** input section ends */}
      </form>
    </div>
  );
};

export default CreateProfile;
