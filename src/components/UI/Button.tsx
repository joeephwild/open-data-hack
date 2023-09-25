import React from "react";

interface props {
  buttonText: string;
}

const Button = ({ buttonText }: props) => {
  return (
    <button className="bg-[#f70] w-[60%] py-[17px] rounded-[8px] text-[16px] font-bold block">
      {buttonText}
    </button>
  );
};

export default Button;
